#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""词频 + 搭配分析：从句子对中提取候选词汇"""
import os, re, json
from collections import Counter

CORPUS_DIR = r"C:/Users/15869/WorkBuddy/2026-08-11-11-24-07/mindmap-vocab/corpus"

STOP = set("""the a an and or but if then so to of in on at for with from by as is are was were be been being
i you he she it we they my your his her its our their me him us them this that these those there here
do does did done doing have has had having can could will would shall should may might must
what which who whom whose when where why how not no don't doesn't didn't won't wouldn't can't
just very really so like know yeah okay ok well now let's lets gonna wanna got get gets getting
go goes going went come comes coming came say says said tell tells told look looks looking looked
see sees saw seen make makes making made take takes taking took use uses using used want wants wanted
need needs needed put puts putting right thing things one two three also about out up down back over
more most much many some any all every than as into onto again because before after during between
""".split())

def clean(text):
    text = text.lower()
    text = re.sub(r'[^a-z\s\'-]', ' ', text)
    return text

def main():
    summary = {}
    for f in sorted(os.listdir(CORPUS_DIR)):
        if not f.endswith('.txt'): continue
        base = os.path.splitext(f)[0]
        with open(os.path.join(CORPUS_DIR, f), 'r', encoding='utf-8') as fh:
            lines = fh.readlines()
        words = Counter()
        bigrams = Counter()
        all_tokens = []
        for line in lines:
            en = line.split('\t')[0]
            tokens = [t for t in clean(en).split() if t and t not in STOP and len(t) > 1]
            # 去重复（字幕重复说话）
            all_tokens.extend(tokens)
            for i in range(len(tokens)-1):
                bigrams[f'{tokens[i]} {tokens[i+1]}'] += 1
        # 过滤词频
        top_words = [w for w, c in words.most_common(200)]
        # 重新用 all_tokens 统计
        words = Counter(all_tokens)
        top_words = [w for w, c in words.most_common(80) if c >= 2]
        top_bigrams = [b for b, c in bigrams.most_common(80) if c >= 2]
        summary[base] = {
            'top_words': top_words,
            'top_bigrams': top_bigrams
        }
        print(f'=== {base} ===')
        print('  高频词:', ', '.join(top_words[:50]))
        print('  高频搭配:', ', '.join(top_bigrams[:30]))
        print()
    with open(os.path.join(CORPUS_DIR, 'keywords.json'), 'w', encoding='utf-8') as fh:
        json.dump(summary, fh, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    main()
