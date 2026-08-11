#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""解析 YouTube 双语 SRT 字幕，提取中英句子对"""
import os, re, sys, json

SRC_DIR = r"C:/Users/15869/Desktop/文件/WJ/en/生活场景"
OUT_DIR = r"C:/Users/15869/WorkBuddy/2026-08-11-11-24-07/mindmap-vocab/corpus"
os.makedirs(OUT_DIR, exist_ok=True)

def parse_srt(text):
    """返回 [(index, start, end, lines)] 其中 lines 是字幕文本行"""
    blocks = re.split(r'\n\s*\n', text.strip())
    entries = []
    for b in blocks:
        lines = b.strip().split('\n')
        if not lines: continue
        # 跳过纯时间码行、空行
        if len(lines) >= 2 and re.match(r'^\d+$', lines[0].strip()):
            idx = lines[0].strip()
            # 时间码
            if '-->' in lines[1]:
                time_line = lines[1]
                text_lines = [l for l in lines[2:] if l.strip()]
                if text_lines:
                    entries.append({'idx': idx, 'time': time_line, 'text': text_lines})
    return entries

def main():
    files = sorted([f for f in os.listdir(SRC_DIR) if f.endswith('.srt')])
    summary = {}
    all_pairs = {}
    for f in files:
        path = os.path.join(SRC_DIR, f)
        with open(path, 'r', encoding='utf-8', errors='replace') as fh:
            raw = fh.read()
        entries = parse_srt(raw)
        # 分组：英文句(奇数索引0,2,4...) vs 中文句
        pairs = []  # (en, cn)
        i = 0
        while i < len(entries):
            e = entries[i]
            # 尝试找相邻中文
            en = ' '.join(e['text'])
            cn = ''
            if i + 1 < len(entries) and not re.search(r'[a-zA-Z]{3,}', ' '.join(entries[i+1]['text'])):
                cn = ' '.join(entries[i+1]['text'])
                i += 2
            else:
                i += 1
            if en:
                pairs.append((en, cn))
        all_pairs[f] = pairs
        summary[f] = {'blocks': len(entries), 'pairs': len(pairs), 'chars': len(raw)}
        
    # 输出汇总
    with open(os.path.join(OUT_DIR, 'summary.json'), 'w', encoding='utf-8') as fh:
        json.dump(summary, fh, ensure_ascii=False, indent=2)
    
    # 输出每个文件的句子对（供 LLM 提炼）
    for f, pairs in all_pairs.items():
        base = os.path.splitext(f)[0].replace(' ', '_')
        out = os.path.join(OUT_DIR, f'{base}.txt')
        with open(out, 'w', encoding='utf-8') as fh:
            for en, cn in pairs:
                fh.write(f'{en}\t{cn}\n')
    
    print('=== 汇总 ===')
    for f, s in summary.items():
        print(f"{f}: {s['blocks']} blocks, {s['pairs']} pairs, {s['chars']} chars")
    print(f'\n共 {len(files)} 个文件，输出到 {OUT_DIR}')

if __name__ == '__main__':
    main()
