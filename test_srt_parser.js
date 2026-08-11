// 单元测试：前端 SRT 解析逻辑（与 index.html 内逻辑保持一致）
const fs = require('fs');

// ---- 以下代码与 index.html 中完全一致 ----
function parseSrtPairs(text) {
  const blocks = text.replace(/\r/g, '').split(/\n\s*\n/);
  const pairs = [];
  for (const b of blocks) {
    const lines = b.split('\n').map(l => l.trim()).filter(l => l);
    if (lines.length < 2) continue;
    let i = 0;
    if (/^\d+$/.test(lines[0])) i = 1;
    if (i >= lines.length || !lines[i].includes('-->')) continue;
    const content = lines.slice(i + 1);
    const enLines = [], cnLines = [];
    for (const l of content) {
      const hasCn = /[\u4e00-\u9fff]/.test(l);
      const enCount = (l.match(/[a-zA-Z]/g) || []).length;
      if (hasCn && enCount < 3) cnLines.push(l);
      else if (enCount > 0) enLines.push(l);
      else cnLines.push(l);
    }
    const en = enLines.join(' ').replace(/\s+/g, ' ').trim();
    const cn = cnLines.join(' ').trim();
    if (en) pairs.push({ en, cn });
  }
  return pairs;
}

const STOP_WORDS = new Set(('the a an and or but of to in on at for with is are was were be been being i you he she it we they my your his her our their me him us them this that these those do does did have has had will would can could should shall may might as so if then than by from up down out off over under again there here what which who whom whose when where why how all any both each few more most other some such no nor not only own same too very just about into after before because while during like one two get got go went going come came know think want need see say said make made take took let look right ok okay yeah yes no please thanks thank well gonna wanna really actually uh um oh hey hi hello okay let us dont isnt wasnt doesnt didnt wont wouldnt couldnt cant shouldnt im youll youve youre thats theres its were theyve ive whats alright').split(/\s+/));

function countFreq(pairs) {
  const freq = {};
  for (const p of pairs) {
    const words = p.en.toLowerCase().replace(/[^a-z\s'-]/g, ' ').split(/\s+/);
    for (const w of words) {
      const key = w.replace(/'/g, '');
      if (!key || key.length < 3 || /^\d+$/.test(key) || STOP_WORDS.has(key)) continue;
      freq[key] = freq[key] || { count: 0, samples: [] };
      freq[key].count++;
      if (freq[key].samples.length < 4) freq[key].samples.push({ en: p.en, cn: p.cn });
    }
  }
  return Object.entries(freq).sort((a, b) => b[1].count - a[1].count).slice(0, 20)
    .map(([w, v]) => ({ word: w, count: v.count, samples: v.samples }));
}
// ---- 测试代码结束 ----

const dir = 'C:/Users/15869/Desktop/文件/WJ/en/生活场景';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.srt'));
console.log('测试文件:', files.length);
for (const f of files) {
  const srt = fs.readFileSync(dir + '/' + f, 'utf8');
  const pairs = parseSrtPairs(srt);
  const freq = countFreq(pairs);
  console.log('\n=== ' + f + ' ===');
  console.log('句对:', pairs.length, '| 高频词 TOP8:', freq.slice(0, 8).map(x => x.word + '(' + x.count + ')').join(' '));
  if (pairs.length === 0) console.log('  ⚠️ 解析 0 句，格式不兼容！');
}
