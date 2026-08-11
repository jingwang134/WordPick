# 批量转换 images/**/*.png → jpg（quality 85），删除原 PNG
import os
from PIL import Image

ROOT = os.path.dirname(os.path.abspath(__file__))
IMG_DIR = os.path.join(ROOT, 'images')
converted, skipped = [], []

for dirpath, _, files in os.walk(IMG_DIR):
    for f in files:
        if not f.lower().endswith('.png'):
            continue
        src = os.path.join(dirpath, f)
        dst = os.path.join(dirpath, f[:-4] + '.jpg')
        try:
            im = Image.open(src)
            im = im.convert('RGB')
            im.save(dst, 'JPEG', quality=85, optimize=True)
            converted.append(dst)
            os.remove(src)
        except Exception as e:
            skipped.append((src, str(e)))

print('转换成功:', len(converted))
for c in converted:
    print('  ', os.path.relpath(c, ROOT), f'{os.path.getsize(c)//1024}KB')
if skipped:
    print('跳过:', skipped)

# 统计总大小
total = sum(os.path.getsize(os.path.join(dp, f)) for dp, _, fs in os.walk(IMG_DIR) for f in fs)
print(f'images/ 总大小: {total//1024//1024}MB')
