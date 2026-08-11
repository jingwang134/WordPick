#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""解析 YouTube 双语 SRT 字幕，提取中英句子对
支持按分类子文件夹存放（如 "04-餐厅用餐/ORDER COFFEE.srt"），自动识别分类"""
import os, re, sys, json

SRC_DIR = r"C:/Users/15869/Desktop/文件/WJ/en/生活场景"
OUT_DIR = r"C:/Users/15869/WorkBuddy/2026-08-11-11-24-07/mindmap-vocab/corpus"
os.makedirs(OUT_DIR, exist_ok=True)

# 分类文件夹名（去掉序号前缀）→ LIFE_CATEGORIES 的 key
CATEGORY_MAP = {
    "通用动作": "general", "厨房烹饪": "cooking", "烹饪进阶": "cooking2",
    "早餐时光": "breakfast", "餐厅用餐": "dining", "居家日常": "home",
    "洗漱清洁": "hygiene", "穿衣打扮": "dressing", "洗衣家务": "laundry",
    "出行交通": "transport", "旅行度假": "travel", "购物消费": "shopping",
    "校园学习": "school", "办公工作": "office", "医院就医": "hospital",
    "健康养生": "health", "运动健身": "fitness", "花园园艺": "garden",
    "宠物日常": "pets", "天气季节": "weather", "节日庆祝": "festival",
    "影音娱乐": "entertainment", "数码设备": "digital", "收纳整理": "organizing",
    "美容美发": "beauty", "汽车养护": "car", "快递物流": "courier",
    "社交聚会": "social", "修理DIY": "repair",
}

def parse_srt(text):
    """返回 [(index, start, end, lines)] 其中 lines 是字幕文本行"""
    blocks = re.split(r'\n\s*\n', text.strip())
    entries = []
    for b in blocks:
        lines = b.strip().split('\n')
        if not lines: continue
        if len(lines) >= 2 and re.match(r'^\d+$', lines[0].strip()):
            idx = lines[0].strip()
            if '-->' in lines[1]:
                time_line = lines[1]
                text_lines = [l for l in lines[2:] if l.strip()]
                if text_lines:
                    entries.append({'idx': idx, 'time': time_line, 'text': text_lines})
    return entries

def find_srt_files(root):
    """递归扫描所有 .srt，返回 [(rel_path, category_key, display_name)]"""
    found = []
    for dirpath, _, files in os.walk(root):
        for f in files:
            if not f.lower().endswith('.srt'):
                continue
            rel = os.path.relpath(os.path.join(dirpath, f), root)
            parts = rel.split(os.sep)
            cat_key = None
            if len(parts) > 1:
                folder = parts[0]
                # 去掉 "04-" 序号前缀
                name = re.sub(r'^\d+-', '', folder)
                cat_key = CATEGORY_MAP.get(name)
            found.append({'rel': rel, 'cat': cat_key, 'folder': parts[0] if len(parts) > 1 else ''})
    return found

def main():
    files = find_srt_files(SRC_DIR)
    if not files:
        print(f'⚠️ 未找到 .srt 文件（{SRC_DIR}）')
        sys.exit(1)

    summary = {}
    all_pairs = {}
    for meta in files:
        path = os.path.join(SRC_DIR, meta['rel'])
        with open(path, 'r', encoding='utf-8', errors='replace') as fh:
            raw = fh.read()
        entries = parse_srt(raw)
        pairs = []
        i = 0
        while i < len(entries):
            e = entries[i]
            en = ' '.join(e['text'])
            cn = ''
            if i + 1 < len(entries) and not re.search(r'[a-zA-Z]{3,}', ' '.join(entries[i+1]['text'])):
                cn = ' '.join(entries[i+1]['text'])
                i += 2
            else:
                i += 1
            if en:
                pairs.append((en, cn))
        all_pairs[meta['rel']] = pairs
        summary[meta['rel']] = {
            'category': meta['cat'], 'folder': meta['folder'],
            'blocks': len(entries), 'pairs': len(pairs), 'chars': len(raw),
        }

    with open(os.path.join(OUT_DIR, 'summary.json'), 'w', encoding='utf-8') as fh:
        json.dump(summary, fh, ensure_ascii=False, indent=2)

    for rel, pairs in all_pairs.items():
        base = os.path.splitext(os.path.basename(rel))[0].replace(' ', '_')
        out = os.path.join(OUT_DIR, f'{base}.txt')
        with open(out, 'w', encoding='utf-8') as fh:
            for en, cn in pairs:
                fh.write(f'{en}\t{cn}\n')

    print('=== 汇总（含分类） ===')
    for rel, s in summary.items():
        cat = s['category'] or '⚠️ 未识别分类'
        print(f"[{cat}] {rel}: {s['pairs']} pairs")
    total = sum(s['pairs'] for s in summary.values())
    print(f'\n共 {len(files)} 个文件 / {total} 句对，输出到 {OUT_DIR}')
    uncat = [rel for rel, s in summary.items() if not s['category']]
    if uncat:
        print(f'⚠️ 未识别分类（请在对应分类文件夹中放）：{uncat}')

if __name__ == '__main__':
    main()
