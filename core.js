/* Meeting Activities core: shared pictures and the selected meeting. Games read everything through window.MA. */
(function () {
  const S = 'stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"';
  const F = 'fill="currentColor"';
  const HEARTP = 'M32 54C14 41 7 31 7 21c0-7 6-12 12-12 6 0 10 4 13 9 3-5 7-9 13-9 6 0 12 5 12 12 0 10-7 20-25 33z';
  const ICONS = {
    JEHOVAH: `<path d="M16 28a9 9 0 0 1 2-18 12 12 0 0 1 23-2 9 9 0 0 1 9 12 7 7 0 0 1-3 8z" ${S}/><path d="M24 36l-4 16M32 36v20M40 36l4 16M15 34l-9 12M49 34l9 12" ${S}/>`,
    JESUS: `<circle cx="32" cy="26" r="12" ${S}/><path d="M19 30q-2-22 13-22t13 22l2 12M19 30l-2 12M22 34q10 16 20 0" ${S}/><circle cx="27" cy="25" r="2" ${F}/><circle cx="37" cy="25" r="2" ${F}/><path d="M12 60q2-12 20-12t20 12" ${S}/>`,
    BIBLE: `<path d="M32 16c-7-5-18-5-26-1v38c8-4 19-4 26 1 7-5 18-5 26-1V15c-8-4-19-4-26 1zM32 16v38" ${S}/>`,
    SCRIPTURE: `<rect x="10" y="7" width="44" height="9" rx="4.5" ${S}/><rect x="10" y="48" width="44" height="9" rx="4.5" ${S}/><path d="M16 16v32M48 16v32M23 25h18M23 32h18M23 39h12" ${S}/>`,
    TRUST: `<path d="M32 6l22 8v16c0 14-10 22-22 28C20 52 10 44 10 30V14z" ${S}/><path d="M22 32l7 7 13-14" ${S}/>`,
    LOVE: `<path d="M24 54C12 45 6 38 6 30c0-5 4-9 9-9 4 0 7 3 9 6 2-3 5-6 9-6 5 0 9 4 9 9 0 8-6 15-18 24z" ${S}/><path d="M47 33c-7-5-10-9-10-14 0-3 2-6 5-6 2 0 4 1 5 3 1-2 3-3 5-3 3 0 6 3 6 6 0 5-4 9-11 14z" ${S}/>`,
    PRAY: `<circle cx="32" cy="32" r="24" ${S}/><path d="M20 28q4 4 8 0M36 28q4 4 8 0M26 42q6 3 12 0" ${S}/>`,
    HEART: `<path d="${HEARTP}" ${S}/>`,
    HAPPY: `<circle cx="32" cy="32" r="24" ${S}/><circle cx="24" cy="27" r="3" ${F}/><circle cx="40" cy="27" r="3" ${F}/><path d="M20 37q12 12 24 0" ${S}/>`,
    SONG: `<ellipse cx="20" cy="48" rx="9" ry="7" ${F}/><ellipse cx="46" cy="42" rx="9" ry="7" ${F}/><path d="M29 48V14l26-6v34M29 22l26-6" ${S}/>`,
    LION: `<path d="M32 6l6 7 9-3 1 9 9 2-4 8 6 7-8 4 2 9-9-1-3 9-9-5-9 5-3-9-9 1 2-9-8-4 6-7-4-8 9-2 1-9 9 3z" ${S}/><circle cx="32" cy="34" r="13" ${S}/><circle cx="27" cy="31" r="2" ${F}/><circle cx="37" cy="31" r="2" ${F}/><path d="M29 37h6l-3 3z" ${F}/>`,
    WATER: `<path d="M22 8S9 25 9 34a13 13 0 0 0 26 0C35 25 22 8 22 8zM46 26s-9 12-9 18a9 9 0 0 0 18 0c0-6-9-18-9-18z" ${S}/>`,
    KING: `<path d="M8 48V18l12 13 12-20 12 20 12-13v30zM8 56h48" ${S}/>`,
    FAMILY: `<circle cx="16" cy="14" r="6" ${S}/><path d="M7 56V32q0-8 9-8t9 8v24" ${S}/><circle cx="48" cy="14" r="6" ${S}/><path d="M39 56V32q0-8 9-8t9 8v24" ${S}/><circle cx="32" cy="32" r="5" ${S}/><path d="M25 56V46q0-6 7-6t7 6v10" ${S}/>`,
    FIRE: `<path d="M18 56C10 50 8 40 12 32c2 6 6 8 8 6-2-10 4-20 12-26-1 8 8 14 8 22 3-2 4-6 4-9 6 7 9 16 6 24-2 4-5 7-8 7z" ${S}/><path d="M26 56c-4-4-2-11 4-14 0 4 4 4 5 0 4 4 5 10 1 14" ${S}/>`,
    HOUSE: `<path d="M6 30h52M10 30v26h44V30M22 30V14h20v16M19 14h26M28 56V44q4-5 8 0v12M16 38h6v6h-6zM42 38h6v6h-6z" ${S}/>`,
    STORM: `<path d="M16 36a10 10 0 0 1 0-20 13 13 0 0 1 24-4 10 10 0 0 1 10 12 6 6 0 0 1-2 12z" ${S}/><path d="M34 38l-6 10h8l-5 10M16 44l-3 8M48 44l-3 8" ${S}/>`,
    SUN: `<circle cx="32" cy="32" r="11" ${S}/><path d="M32 6v8M32 50v8M6 32h8M50 32h8M14 14l6 6M44 44l6 6M14 50l6-6M44 20l6-6" ${S}/>`,
    CHILD: `<circle cx="32" cy="16" r="8" ${S}/><path d="M20 58V40q0-12 12-12t12 12v18M20 38l-8 6M44 38l8 6" ${S}/>`,
    STAR: `<path d="M32 6l7 16 17 2-13 12 4 18-15-9-15 9 4-18L8 24l17-2z" ${S}/>`,
    FRIENDS: `<circle cx="20" cy="16" r="7" ${S}/><circle cx="44" cy="16" r="7" ${S}/><path d="M8 58V36q0-9 12-9t12 9v22M32 58V36q0-9 12-9t12 9v22M26 40h12" ${S}/>`,
    MOUNTAIN: `<path d="M4 54l18-30 10 14 8-12 20 28zM18 31l4 5 4-5" ${S}/>`,
    WISDOM: `<path d="M22 38a15 15 0 1 1 20 0c-3 3-4 6-4 9H26c0-3-1-6-4-9zM26 53h12M28 59h8M32 2v4M8 22h4M52 22h4M14 8l3 3M50 8l-3 3" ${S}/>`,
    FATHER: `<circle cx="22" cy="12" r="7" ${S}/><path d="M12 60V34q0-10 10-10t10 10v26" ${S}/><circle cx="46" cy="32" r="5" ${S}/><path d="M38 60V46q0-7 8-7t8 7v14M32 40h7" ${S}/>`,
    HELP: `<path d="M32 38c-8-6-12-10-12-15 0-4 3-6 6-6 3 0 5 2 6 4 1-2 3-4 6-4 3 0 6 2 6 6 0 5-4 9-12 15z" ${S}/><path d="M4 40c6 14 18 18 28 12 10 6 22 2 28-12M4 40l9 3M60 40l-9 3" ${S}/>`,
    PATH: `<path d="M12 60C12 44 40 44 38 30 36 18 24 18 26 4M30 60c0-10 26-12 24-30C52 18 40 16 42 4" ${S}/><path d="M24 54l2-4M36 34l-1-4M33 14l1-4" ${S}/>`,
    SWORD: `<path d="M32 4l5 8v30H27V12zM18 42h28M32 42v12" ${S}/><circle cx="32" cy="57" r="3" ${S}/>`,
    CHARIOT: `<circle cx="24" cy="44" r="14" ${S}/><path d="M24 30v28M10 44h28M14 34l20 20M34 34L14 54M30 30h26l-4 14H38" ${S}/>`,
    WOMAN: `<circle cx="32" cy="16" r="8" ${S}/><path d="M21 18q0-14 11-14t11 14v6M32 26L16 58h32zM22 38l-8 8M42 38l8 8" ${S}/>`,
    PROPHET: `<circle cx="26" cy="14" r="8" ${S}/><path d="M20 20q6 10 12 0M18 26h16l6 32H12zM48 6v54M36 34h12" ${S}/>`,
    BED: `<path d="M6 54V18M58 54V32M6 40h52M6 48h52M10 32h12v8H10zM24 32h30q4 0 4 4v4H24z" ${S}/>`,
    BABY: `<circle cx="32" cy="20" r="11" ${S}/><path d="M27 20h2M35 20h2M29 25q3 2 6 0M18 34q14-6 28 0l-4 24H22z" ${S}/>`,
    FOOD: `<path d="M18 48L42 22c6 2 7 9 3 13L21 53c-4 2-6 0-3-5zM42 22l4-12M44 24l12-4M43 21l9-9M28 40l4 4M34 34l4 4" ${S}/>`,
    STATUE: `<circle cx="32" cy="11" r="6" ${S}/><path d="M26 18h12v34H26zM20 52h24v8H20zM26 28l-6 6M38 28l6 6" ${S}/>`,
    ANGEL: `<circle cx="32" cy="14" r="7" ${S}/><path d="M26 22h12l4 34H22zM26 26C10 18 4 34 12 46M38 26c16-8 22 8 14 20" ${S}/>`,
    DOOR: `<path d="M18 58V6h28v52M8 58h48" ${S}/><circle cx="39" cy="34" r="2.5" ${F}/>`,
    WORLD: `<circle cx="32" cy="32" r="24" ${S}/><ellipse cx="32" cy="32" rx="10" ry="24" ${S}/><path d="M8 32h48M12 20h40M12 44h40" ${S}/>`,
    WATCHTOWER: `<path d="M24 58l4-36h8l4 36zM20 22h24v-8H20zM24 14V8h16v6M30 34h4M29 44h6" ${S}/>`,
    TALK: `<path d="M8 10h48v32H30L16 54V42H8z" ${S}/><path d="M18 22h28M18 31h18" ${S}/>`,
    BAPTISM: `<circle cx="32" cy="16" r="8" ${S}/><path d="M18 40q0-14 14-14t14 14M4 42q7-6 14 0t14 0 14 0 14 0M4 52q7-6 14 0t14 0 14 0 14 0" ${S}/>`,
    EYE: `<path d="M4 32q28-26 56 0-28 26-56 0z" ${S}/><circle cx="32" cy="32" r="9" ${S}/><circle cx="32" cy="32" r="4" ${F}/>`,
    GIFT: `<path d="M10 28h44v28H10zM6 18h52v10H6zM32 18v38M32 18c-6-10-17-8-12 0M32 18c6-10 17-8 12 0" ${S}/>`,
    PARADISE: `<circle cx="46" cy="16" r="7" ${S}/><path d="M2 54q30-22 60 0M20 50V36" ${S}/><circle cx="20" cy="30" r="6" ${S}/><path d="M38 46V30M38 34l-6-4M38 38l6-4" ${S}/>`,
    MONEY: `<circle cx="32" cy="32" r="24" ${S}/><path d="M39 23c-4-4-15-4-15 3 0 8 16 4 16 12 0 7-11 7-16 3M32 14v36" ${S}/>`,
    PLAY: `<circle cx="32" cy="32" r="23" ${S}/><path d="M9 32h46M32 9c-10 10-10 36 0 46M32 9c10 10 10 36 0 46" ${S}/>`,
    WORK: `<rect x="8" y="22" width="48" height="32" rx="4" ${S}/><path d="M24 22v-6h16v6M8 36h48" ${S}/>`,
    GOAL: `<circle cx="32" cy="32" r="24" ${S}/><circle cx="32" cy="32" r="15" ${S}/><circle cx="32" cy="32" r="5" ${F}/>`,
    'SAY NO': `<circle cx="32" cy="32" r="24" ${S}/><path d="M15 15l34 34" ${S}/>`,
    STRONG: `<path d="M16 32h32" ${S}/><rect x="6" y="20" width="10" height="24" rx="2" ${S}/><rect x="48" y="20" width="10" height="24" rx="2" ${S}/>`
  };
  Object.assign(ICONS, {
    HOPE: `<circle cx="32" cy="12" r="5" ${S}/><path d="M32 17v40M20 28h24M10 40q2 16 22 17 20-1 22-17M10 40l-4 4M54 40l4 4" ${S}/>`,
    SNAKE: `<path d="M10 52q8-10 20-4t20-4q8-6 4-14-4-6-12-2t-14-2q-6-6 0-12 4-4 12-2" ${S}/><circle cx="44" cy="12" r="2.5" ${F}/><path d="M50 12l6 2-6 2" ${S}/>`,
    COW: `<path d="M14 24h36v18q0 10-10 10H24q-10 0-10-10z" ${S}/><path d="M14 24l-8-6M50 24l8-6M22 18l-2-8M42 18l2-8" ${S}/><circle cx="25" cy="34" r="2.5" ${F}/><circle cx="39" cy="34" r="2.5" ${F}/><ellipse cx="32" cy="46" rx="9" ry="5" ${S}/>`,
    EGYPT: `<path d="M4 56l18-32 10 16 10-24 18 40z" ${S}/><circle cx="50" cy="12" r="5" ${S}/>`,
    LETTER: `<rect x="8" y="16" width="48" height="34" rx="4" ${S}/><path d="M8 18l24 18 24-18" ${S}/>`,
    CHAIN: `<rect x="6" y="24" width="22" height="14" rx="7" ${S}/><rect x="21" y="26" width="22" height="14" rx="7" ${S}/><rect x="36" y="24" width="22" height="14" rx="7" ${S}/>`,
    FORGIVE: `<path d="M4 34l12-12 10 4 8-6 12 4 14 10M14 38l10 10 6-4 6 6 6-4 10 2" ${S}/><path d="M30 44l-6-6M36 50l-6-6" ${S}/>`,
    SAD: `<circle cx="32" cy="32" r="24" ${S}/><circle cx="24" cy="27" r="3" ${F}/><circle cx="40" cy="27" r="3" ${F}/><path d="M22 44q10-8 20 0" ${S}/>`,
    LISTEN: `<path d="M22 46c-6-4-10-11-10-19a20 20 0 0 1 40 0c0 9-6 12-9 16-3 3-3 6-3 9a8 8 0 0 1-14 4" ${S}/><path d="M24 27a8 8 0 0 1 16 0c0 5-5 6-5 10" ${S}/>`,
    QUESTION: `<path d="M22 22a10 10 0 1 1 14 9c-3 2-4 4-4 8v4" ${S}/><circle cx="32" cy="52" r="3" ${F}/>`,
    PERSON: `<circle cx="32" cy="16" r="9" ${S}/><path d="M16 58V42q0-14 16-14t16 14v16" ${S}/>`,
    BOAT: `<path d="M6 40h52l-8 14H14zM32 40V8M32 10l18 24H32" ${S}/>`,
    DOVE: `<path d="M8 36q14-2 22 6 10-18 28-20-8 6-10 14-6 14-22 14-12 0-18-14z" ${S}/><circle cx="44" cy="28" r="2" ${F}/>`,
    ARK: `<path d="M6 38h52l-8 16H14zM14 38V26h36v12M22 26v-8h20v8" ${S}/><path d="M4 60q7-5 14 0t14 0 14 0 14 0" ${S}/>`,
    RAINBOW: `<path d="M6 50a26 26 0 0 1 52 0M14 50a18 18 0 0 1 36 0M22 50a10 10 0 0 1 20 0" ${S}/>`,
    FISH: `<path d="M6 32q16-18 36 0-20 18-36 0zM42 32l14-10v20z" ${S}/><circle cx="16" cy="30" r="2" ${F}/>`,
    BREAD: `<path d="M10 30q0-14 22-14t22 14v22H10z" ${S}/><path d="M22 26l-4 6M32 24l-4 6M42 26l-4 6" ${S}/>`,
    MOON: `<path d="M40 8a24 24 0 1 0 16 36A20 20 0 0 1 40 8z" ${S}/>`,
    TREE: `<circle cx="32" cy="24" r="17" ${S}/><path d="M32 41v17M24 58h16" ${S}/>`,
    SHEEP: `<path d="M18 40a8 8 0 0 1-2-15 9 9 0 0 1 14-8 9 9 0 0 1 15 2 8 8 0 0 1 3 15 8 8 0 0 1-12 6 9 9 0 0 1-18 0z" ${S}/><path d="M22 46v12M42 46v12" ${S}/>`,
    FLOWER: `<circle cx="32" cy="12" r="6" ${S}/><circle cx="42" cy="22" r="6" ${S}/><circle cx="32" cy="32" r="6" ${S}/><circle cx="22" cy="22" r="6" ${S}/><circle cx="32" cy="22" r="4" ${F}/><path d="M32 38v20M32 50q-8-2-10-10M32 46q8-2 10-10" ${S}/>`,
    CITY: `<path d="M4 58V30h12v28M16 58V18h14v40M30 58V26h14v32M44 58V36h16v22M2 58h60" ${S}/><path d="M21 26h4M21 34h4M35 34h4M8 38h4" ${S}/>`,
    GEM: `<path d="M18 10h28l12 16-26 32L6 26z" ${S}/><path d="M6 26h52M24 10l-6 16 14 32 14-32-6-16" ${S}/>`,
    HAND: `<path d="M20 58V30q0-4 4-4t4 4v-18q0-4 4-4t4 4v18-14q0-4 4-4t4 4v18-8q0-4 4-4t4 4v18q0 14-14 14H30q-6 0-10-8z" ${S}/>`,
    PICTURE: `<rect x="6" y="12" width="52" height="40" rx="4" ${S}/><circle cx="22" cy="26" r="5" ${S}/><path d="M6 46l16-12 12 8 10-8 14 12" ${S}/>`,
    VIDEO: `<rect x="6" y="12" width="52" height="36" rx="5" ${S}/><path d="M27 22v16l13-8z" ${F}/><path d="M20 56h24" ${S}/>`,
    CROWN: ICONS.KING
  });
  const ALIAS = {
    GOD: 'JEHOVAH', HEAVEN: 'JEHOVAH', CHRIST: 'JESUS', SON: 'CHILD', KINGDOM: 'KING', PRAYER: 'PRAY', SCROLL: 'SCRIPTURE', BOOK: 'BIBLE', READ: 'BIBLE',
    BROTHER: 'FRIENDS', BROTHERS: 'FRIENDS', SISTERS: 'FRIENDS', FRIEND: 'FRIENDS', HOME: 'HOUSE', WELCOME: 'DOOR', PEACE: 'DOVE', SHARE: 'GIFT', GIVE: 'GIFT',
    KIND: 'HELP', THANK: 'HEART', SMILE: 'HAPPY', ANSWER: 'TALK', TEACH: 'TALK', SOUND: 'LISTEN', GEMS: 'GEM', JEWEL: 'GEM', FOREST: 'TREE', RIVER: 'WATER',
    LIFE: 'FLOWER', PROMISE: 'RAINBOW', FUTURE: 'PATH', LEARN: 'WISDOM', FAITH: 'TRUST', SHIP: 'BOAT', LAMB: 'SHEEP', PYRAMID: 'EGYPT', SORRY: 'SAD',
    BARUCH: 'PERSON', JEREMIAH: 'PERSON', PAUL: 'PERSON', PHILEMON: 'PERSON', ONESIMUS: 'PERSON', DANIEL: 'PERSON', BARAK: 'PERSON', DAVID: 'PERSON',
    MOSES: 'PERSON', NOAH: 'ARK', JONAH: 'FISH', ESTHER: 'CROWN', RUTH: 'PERSON', ADAM: 'PERSON', EVE: 'PERSON', PETER: 'BOAT', MARY: 'PERSON', ABRAHAM: 'PERSON',
    JOSEPH: 'PERSON', SAMUEL: 'PERSON', MIRIAM: 'PERSON', WOMAN: 'WOMAN', MEETING: 'TALK', ELDER: 'PERSON'
  };
  const key = w => String(w || '').toUpperCase().trim();
  function hasIcon(w) { const k = key(w); return !!(ICONS[k] || (ALIAS[k] && ICONS[ALIAS[k]])); }
  function icon(w) {
    const k = key(w);
    const svg = ICONS[k] || ICONS[ALIAS[k]];
    if (svg) return svg;
    // no drawing for this word yet: show its first letter in a circle
    const ch = (k.match(/[A-Z]/) || ['?'])[0];
    return `<circle cx="32" cy="32" r="24" ${S}/><text x="32" y="42" text-anchor="middle" font-family="Fredoka, sans-serif" font-weight="700" font-size="28" fill="currentColor">${ch}</text>`;
  }

  // ---------- Bible scene drawings (shared by Coloring, Puzzles and Spot the Difference) ----------
  // ---------- shape helpers (800 x 600 page units) ----------
  const C = (x, y, r) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`;
  const E = (x, y, rx, ry) => `M${x - rx} ${y}a${rx} ${ry} 0 1 0 ${2 * rx} 0a${rx} ${ry} 0 1 0 ${-2 * rx} 0Z`;
  const R = (x, y, w, h) => `M${x} ${y}h${w}v${h}h${-w}Z`;
  const P = (...a) => { let s = `M${a[0]} ${a[1]}`; for (let i = 2; i < a.length; i += 2) s += `L${a[i]} ${a[i + 1]}`; return s + 'Z'; };
  const L = (...a) => { let s = `M${a[0]} ${a[1]}`; for (let i = 2; i < a.length; i += 2) s += `L${a[i]} ${a[i + 1]}`; return s; };
  function bumpy(cx, cy, rx, ry, n, b) {
    const pts = [];
    for (let i = 0; i < n; i++) { const a = Math.PI * 2 * i / n; pts.push([(cx + rx * Math.cos(a)).toFixed(1), (cy + ry * Math.sin(a)).toFixed(1)]); }
    let s = `M${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i <= n; i++) { const p = pts[i % n]; s += `A${b} ${b} 0 0 1 ${p[0]} ${p[1]}`; }
    return s + 'Z';
  }
  const leg = (x, y, w, h) => `M${x} ${y}v${h}a${w / 2} ${w / 3} 0 0 0 ${w} 0v${-h}`;
  function wave(y, amp, n) {
    const seg = 792 / n; let s = `M4 ${y}q${seg / 2} ${-amp} ${seg} 0`;
    for (let i = 1; i < n; i++) s += `t${seg} 0`;
    return s;
  }
  function starPath(x, y, R1) {
    const a = [];
    for (let i = 0; i < 10; i++) { const t = -Math.PI / 2 + Math.PI * i / 5; const r = i % 2 ? R1 * .45 : R1; a.push((x + r * Math.cos(t)).toFixed(1), (y + r * Math.sin(t)).toFixed(1)); }
    return P(...a);
  }
  const SHAPES = {
    sun: () => { const o = [C(0, 0, 44)]; for (let i = 0; i < 12; i++) { const t = Math.PI * 2 * i / 12; o.push(L(Math.cos(t) * 56, Math.sin(t) * 56, Math.cos(t) * 80, Math.sin(t) * 80)); } return o; },
    cloud: () => ['M-60 20h120a25 25 0 0 0 -8 -40a32 32 0 0 0 -52 -16a30 30 0 0 0 -50 18a22 22 0 0 0 -10 38Z'],
    bird: () => ['M-20 0q10 -12 20 0q10 -12 20 0'],
    flower: () => { const o = []; for (let i = 0; i < 5; i++) { const t = -Math.PI / 2 + Math.PI * 2 * i / 5; o.push(C(Math.cos(t) * 15, -62 + Math.sin(t) * 15, 12)); } o.push(C(0, -62, 9), L(0, -48, 0, 0), 'M0 -20q18 -16 28 -6q-12 14 -28 6Z'); return o; },
    tree: () => [P(-18, 0, -14, -95, 14, -95, 18, 0), bumpy(0, -165, 92, 76, 10, 30), C(-40, -170, 9), C(30, -140, 9), C(20, -200, 9), C(-15, -125, 9)],
    palm: () => ['M-10 0q-4 -80 6 -150h10q-6 70 12 150Z', 'M4 -150q-60 -30 -110 10q50 -10 110 -10Z', 'M4 -150q-40 -60 -100 -60q60 20 100 60Z', 'M6 -150q40 -60 100 -50q-60 10 -100 50Z', 'M6 -150q60 -20 100 20q-50 -10 -100 -20Z', C(-4, -142, 9), C(14, -140, 9)],
    sheep: () => [bumpy(0, -52, 56, 34, 10, 16), E(54, -64, 21, 15), E(44, -77, 10, 5), C(60, -67, 3), leg(-38, -30, 11, 26), leg(-14, -24, 11, 20), leg(12, -24, 11, 20), leg(32, -30, 11, 26)],
    lion: () => [E(78, -55, 88, 44), leg(18, -34, 22, 28), leg(52, -26, 22, 20), leg(100, -26, 22, 20), leg(134, -34, 22, 28), 'M162 -66q30 -10 30 -42', E(194, -116, 11, 14), bumpy(0, -92, 62, 62, 12, 20), C(0, -90, 40), C(-30, -124, 11), C(30, -124, 11), C(-14, -98, 5), C(14, -98, 5), P(-9, -82, 9, -82, 0, -72), 'M0 -72v8M0 -64q-10 8 -18 2M0 -64q10 8 18 2'],
    person: () => [C(0, -150, 24), 'M-27 -150q0 -34 27 -34q27 0 27 34q-8 -16 -27 -16q-19 0 -27 16Z', C(-8, -150, 2.5), C(8, -150, 2.5), 'M-8 -138q8 6 16 0', P(-26, -124, 26, -124, 44, 0, -44, 0), L(-38, -78, 38, -78), 'M-26 -118q-30 30 -10 50q8 4 14 -4q-10 -16 6 -34Z', 'M26 -118q30 30 10 50q-8 4 -14 -4q10 -16 -6 -34Z', E(-18, 4, 15, 7), E(18, 4, 15, 7)],
    fish: () => [E(0, 0, 60, 30), P(55, 0, 95, -28, 95, 28), C(-32, -6, 6), 'M-16 -24q12 24 0 48', 'M-5 -28q15 -24 32 -2Z'],
    ark: () => [P(-220, 0, 220, 0, 170, 80, -170, 80), L(-210, 27, 210, 27), L(-190, 54, 190, 54), R(-140, -100, 280, 100), P(-165, -100, 0, -170, 165, -100), R(-30, -82, 60, 40), L(0, -82, 0, -42), R(-115, -72, 50, 72)],
    boat: () => [P(-95, 0, 95, 0, 68, 42, -68, 42), L(0, 0, 0, -135), P(6, -130, 86, -18, 6, -18), P(-6, -110, -6, -18, -66, -18)],
    basket: () => ['M-75 -8q75 46 150 0l16 -38h-182Z', 'M-82 -26q82 34 164 0', 'M-40 -46l4 50M0 -46v58M40 -46l-4 50'],
    rock: () => [bumpy(0, 0, 56, 30, 7, 16)],
    note: () => [E(0, 0, 10, 8), L(9, 0, 9, -40, 26, -34)],
    tablet: () => ['M-38 0V-92a38 38 0 0 1 76 0V0Z', 'M-24 -80h48M-24 -62h48M-24 -44h48M-24 -26h36']
  };
  let GID = 0; // each put() call is one object in the picture (a bird, a tree) so games can find it again
  function put(name, x, y, s = 1, flip = false) { const id = ++GID; return SHAPES[name]().map(d => ({ d, m: [flip ? -s : s, 0, 0, s, x, y], g: id, k: name })); }
  const g = (...ds) => ds.map(d => ({ d, m: [1, 0, 0, 1, 0, 0] }));
  const FRAME = R(4, 4, 792, 592);

  const SCENES = [
    { id: 'ark', ground: '#a9dbf7', name: "Noah's ark", parts: () => [
      ...g(FRAME, wave(470, 14, 8), wave(530, 12, 8),
        'M40 300A130 130 0 0 1 300 300', 'M60 300A110 110 0 0 1 280 300', 'M80 300A90 90 0 0 1 260 300', 'M100 300A70 70 0 0 1 240 300', L(40, 300, 300, 300),
        'M540 170q20 -10 40 0q10 -26 32 -30q-5 20 -16 32q16 5 26 0q-10 16 -42 16q-30 0 -40 -18Z'),
      ...put('cloud', 64, 312, .9), ...put('cloud', 280, 312, .9), ...put('ark', 430, 400), ...put('sun', 690, 95), ...put('cloud', 560, 80), ...put('bird', 400, 120), ...put('bird', 460, 150, .8)] },
    { id: 'daniel', name: 'Daniel and the lions', parts: () => [
      ...g(FRAME, L(4, 520, 796, 520), 'M40 520L40 300Q40 70 400 70Q760 70 760 300L760 520', C(400, 130, 28),
        'M385 160L330 300M415 160L470 300'),
      ...put('lion', 150, 512, 1.05), ...put('lion', 720, 515, .8, true), ...put('person', 460, 512, 1.2), ...put('rock', 70, 565), ...put('rock', 730, 565, .9), ...put('rock', 400, 570, .7)] },
    { id: 'jonah', ground: '#a9dbf7', name: 'Jonah and the big fish', parts: () => [
      ...g(FRAME, wave(250, 14, 8),
        'M210 430q20 -90 160 -90q110 0 150 60l70 -50l-10 70l20 70l-80 -40q-40 50 -150 50q-140 0 -160 -70Z',
        C(270, 405, 10), 'M210 430q40 20 90 10', 'M400 460q30 30 60 10', 'M330 330q-6 -30 0 -50M350 332q8 -28 26 -40M312 336q-14 -24 -30 -30',
        C(560, 360, 10), C(585, 330, 7), C(600, 305, 5), 'M60 596q-20 -40 0 -80q20 -40 0 -80', 'M110 596q20 -40 0 -70q-20 -30 0 -60', 'M740 596q-20 -40 0 -80q20 -40 0 -80'),
      ...put('boat', 600, 232), ...put('sun', 110, 95), ...put('cloud', 330, 90), ...put('fish', 640, 520, .6), ...put('fish', 140, 300, .45, true)] },
    { id: 'paradise', name: 'Paradise', parts: () => [
      ...g(FRAME, 'M4 300L120 200L220 290L330 170L470 300L600 210L796 320', 'M4 420Q200 340 420 420T796 400'),
      ...put('sun', 690, 85, .9), ...put('tree', 120, 470), ...put('lion', 300, 545, .85), ...put('sheep', 600, 548, 1.15, true),
      ...put('flower', 730, 590, .85), ...put('flower', 480, 594, .7), ...put('flower', 40, 594, .7), ...put('bird', 440, 110), ...put('bird', 500, 140, .8)] },
    { id: 'moses', ground: '#a9dbf7', name: 'Baby Moses', parts: () => [
      ...g(FRAME, 'M4 330Q400 300 796 340', wave(420, 10, 8), wave(510, 10, 8),
        E(40, 280, 10, 40), L(40, 320, 40, 360), E(72, 270, 10, 44), L(72, 314, 72, 362), E(104, 284, 10, 38), L(104, 322, 104, 360), E(136, 274, 10, 42), L(136, 316, 136, 362), E(168, 288, 10, 36), L(168, 324, 168, 360),
        C(470, 345, 24), 'M410 355q60 -30 120 0'),
      ...put('basket', 470, 400, 1.2), ...put('palm', 690, 340), ...put('sun', 120, 85, .9), ...put('cloud', 360, 90), ...put('bird', 520, 150)] },
    { id: 'david', name: 'David the shepherd', parts: () => [
      ...g(FRAME, 'M4 380Q300 300 520 360T796 330', 'M352 470V300q0 -30 22 -30q22 0 22 22'),
      ...put('person', 300, 470, 1.2), ...put('tree', 690, 370, .85), ...put('sheep', 480, 505), ...put('sheep', 610, 545, 1.15), ...put('sheep', 150, 565, .9, true),
      ...put('note', 410, 220), ...put('note', 450, 180, .8), ...put('sun', 110, 90, .85), ...put('cloud', 520, 100)] },
    { id: 'creation', name: 'Jehovah made it all', parts: () => [
      ...g(FRAME, C(400, 320, 150), bumpy(350, 270, 60, 40, 8, 18), bumpy(450, 380, 50, 60, 8, 18), bumpy(330, 400, 30, 22, 6, 10),
        'M140 80a60 60 0 1 0 0 120a45 45 0 1 1 0 -120Z',
        starPath(260, 90, 18), starPath(620, 300, 16), starPath(110, 300, 14), starPath(700, 500, 20), starPath(150, 500, 16), starPath(560, 70, 12), starPath(330, 540, 12)),
      ...put('sun', 670, 120), ...put('fish', 560, 540, .5), ...put('bird', 240, 210), ...put('bird', 600, 210, .8)] },
    { id: 'loaves', name: 'Loaves and fishes', parts: () => [
      ...g(FRAME, 'M4 300Q400 220 796 300', L(4, 440, 796, 440),
        E(300, 330, 46, 26), E(390, 318, 46, 26), E(480, 330, 46, 26), E(345, 300, 40, 22), E(435, 300, 40, 22)),
      ...put('basket', 395, 450, 2.3), ...put('fish', 210, 530, .9), ...put('fish', 600, 535, .9, true), ...put('sun', 680, 90, .8), ...put('cloud', 140, 100)] },
    { id: 'hall', name: 'Kingdom Hall', parts: () => [
      ...g(FRAME, L(4, 470, 796, 470), R(180, 250, 440, 220), P(150, 250, 400, 150, 650, 250), R(300, 200, 200, 34),
        R(360, 360, 80, 110), L(400, 360, 400, 470), R(220, 300, 90, 70), L(265, 300, 265, 370), L(220, 335, 310, 335), R(490, 300, 90, 70), L(535, 300, 535, 370), L(490, 335, 580, 335),
        'M360 470L300 596M440 470L500 596'),
      ...put('tree', 90, 470, .8), ...put('tree', 720, 470, .8), ...put('person', 600, 570, .7), ...put('person', 660, 575, .5), ...put('person', 200, 575, .65), ...put('sun', 690, 80, .7), ...put('cloud', 120, 90)] },
    { id: 'sinai', name: 'The Ten Commandments', parts: () => [
      ...g(FRAME, L(4, 470, 796, 470), 'M4 470L250 160L330 240L420 120L796 470', 'M600 60l-30 50h24l-20 44 48 -62h-26l20 -32Z'),
      ...put('cloud', 420, 120, 1.1), ...put('cloud', 230, 150, .9), ...put('tablet', 355, 575, 1.15), ...put('tablet', 445, 575, 1.15), ...put('sun', 110, 85, .8)] }
  ];

  function sceneParts(scene, opts) {
    GID = 0;
    let parts = scene.parts();
    if (opts && opts.skip) parts = parts.filter(p => !opts.skip.has(p.g));
    if (opts && opts.extra) for (const x of opts.extra) parts = parts.concat(put(x.name, x.x, x.y, x.s || 1, !!x.flip).map(p => Object.assign(p, { g: -1 })));
    return parts;
  }
  function drawScene(ctx, scene, w, h, opts) {
    ctx.save(); ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = (opts && opts.ink) || '#111111'; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    const sx = w / 800, sy = h / 600;
    for (const p of sceneParts(scene, opts)) {
      const [a, , , d, e, f] = p.m;
      ctx.setTransform(sx * a, 0, 0, sy * d, sx * e, sy * f);
      ctx.lineWidth = ((opts && opts.width) || 5) / Math.abs(d);
      ctx.stroke(new Path2D(p.d));
    }
    ctx.restore();
  }
  const FILLS = ['#ffd166', '#f4a261', '#ef8a7a', '#8ecae6', '#90be6d', '#f9c74f', '#c9a7ff', '#ff99c8', '#a0c4ff', '#b5e48c', '#ffcf99', '#bdb2ff', '#e9c46a', '#7fd1b9'];
  // Paint a scene in cheerful colors: sky stays sky blue, wide ground stays green, every other area gets a color picked from where it sits.
  function paintScene(scene, w, h, opts) {
    opts = opts || {};
    const lc = document.createElement('canvas'); lc.width = w; lc.height = h;
    const lx = lc.getContext('2d', { willReadFrequently: true });
    drawScene(lx, scene, w, h, opts);
    const la = lx.getImageData(0, 0, w, h).data;
    const N = w * h, wall = new Uint8Array(N);
    for (let i = 0; i < N; i++) wall[i] = la[i * 4 + 3] > 70 ? 1 : 0;
    const lab = new Int32Array(N); const regions = [null];
    const stack = [];
    for (let s = 0; s < N; s++) {
      if (wall[s] || lab[s]) continue;
      const id = regions.length;
      const R = { id, seed: s, size: 0, x0: w, x1: 0, y0: h, y1: 0 };
      regions.push(R);
      stack.push(s);
      while (stack.length) {
        let i = stack.pop();
        const y = (i / w) | 0; let x = i - y * w;
        while (x > 0 && !wall[i - 1] && !lab[i - 1]) { i--; x--; }
        let up = false, dn = false;
        while (x < w && !wall[i] && !lab[i]) {
          lab[i] = id; R.size++;
          if (x < R.x0) R.x0 = x; if (x > R.x1) R.x1 = x; if (y < R.y0) R.y0 = y; if (y > R.y1) R.y1 = y;
          if (y > 0) { const u = i - w; if (!wall[u] && !lab[u]) { if (!up) { stack.push(u); up = true; } } else up = false; }
          if (y < h - 1) { const d = i + w; if (!wall[d] && !lab[d]) { if (!dn) { stack.push(d); dn = true; } } else dn = false; }
          i++; x++;
        }
      }
    }
    const hex = c => [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)];
    const colors = regions.map(R => {
      if (!R) return null;
      const sx = (R.seed % w) * 800 / w, sy = ((R.seed / w) | 0) * 600 / h;
      if (R.size < N * 0.00008) return [255, 255, 255];
      if (R.y0 <= h * 0.03 && R.size > N * 0.06) return hex(scene.sky || '#cfe8ff');
      if ((sy > 430 && R.x1 - R.x0 > w * 0.5) || (sy > 240 && R.x0 <= w * 0.02 && R.x1 >= w * 0.98)) return hex(scene.ground || '#cdeab8');
      const k = (Math.round(sx / 12) * 31 + Math.round(sy / 12) * 17 + (scene.hue || 0)) % FILLS.length;
      return hex(FILLS[k]);
    });
    if (opts.recolor) for (const r of opts.recolor) {
      const px = Math.min(w - 1, Math.max(0, Math.round(r.x * w / 800))), py = Math.min(h - 1, Math.max(0, Math.round(r.y * h / 600)));
      let id = lab[py * w + px];
      for (let rr = 1; !id && rr < 6; rr++) id = lab[Math.min(h - 1, py + rr) * w + px] || lab[Math.max(0, py - rr) * w + px] || lab[py * w + Math.min(w - 1, px + rr)] || lab[py * w + Math.max(0, px - rr)];
      if (id) colors[id] = hex(r.color);
    }
    const out = document.createElement('canvas'); out.width = w; out.height = h;
    const ox = out.getContext('2d');
    const img = ox.createImageData(w, h), d = img.data;
    for (let i = 0; i < N; i++) { const c = colors[lab[i]] || [255, 255, 255]; d[i * 4] = c[0]; d[i * 4 + 1] = c[1]; d[i * 4 + 2] = c[2]; d[i * 4 + 3] = 255; }
    // let color run under the lines so no white edges show
    for (let pass = 0; pass < 2; pass++) {
      const copy = lab.slice();
      for (let i = w; i < N - w; i++) if (!copy[i]) { const n = copy[i - 1] || copy[i + 1] || copy[i - w] || copy[i + w]; if (n) { lab[i] = n; const c = colors[n]; d[i * 4] = c[0]; d[i * 4 + 1] = c[1]; d[i * 4 + 2] = c[2]; } }
    }
    ox.putImageData(img, 0, 0);
    ox.drawImage(lc, 0, 0);
    out.regions = regions; out.labels = lab;
    return out;
  }

  const DATA = window.MEETING_CONTENT || { core: [], common: [], general: [], meetings: [] };
  if (!DATA.meetings.length) DATA.meetings.push({ id: 'general', kind: 'general', label: 'Any meeting', dates: '', title: '', words: DATA.general || [], count: [], parts: [{ title: 'Any talk', kid: '', words: DATA.general || [] }] });
  const KEY = 'meeting-activities:meeting';
  const subs = [];
  function auto() {
    const day = new Date().getDay();
    const want = day === 0 || day === 6 ? 'weekend' : 'midweek';
    return (DATA.meetings.find(m => m.kind === want) || DATA.meetings[0]).id;
  }
  let curId = null;
  try { curId = localStorage.getItem(KEY); } catch (e) {}
  if (!DATA.meetings.some(m => m.id === curId)) curId = auto();

  const uniq = a => a.filter((w, i) => a.indexOf(w) === i);
  const MA = window.MA = {
    data: DATA,
    icon, hasIcon,
    meetings: () => DATA.meetings,
    current: () => DATA.meetings.find(m => m.id === curId) || DATA.meetings[0],
    set(id) {
      if (id === curId || !DATA.meetings.some(m => m.id === id)) return;
      curId = id;
      try { localStorage.setItem(KEY, id); } catch (e) {}
      subs.forEach(fn => { try { fn(MA.current()); } catch (e) { console.error(e); } });
    },
    on(fn) { subs.push(fn); },
    core: () => DATA.core.slice(),
    general: () => DATA.general.slice(),
    // all the words for the selected meeting, longest lists first
    words() { const m = MA.current(); return uniq([].concat(m.words || [], ...(m.parts || []).map(p => p.words || []))); },
    countWords() { const m = MA.current(); return uniq([].concat(m.count || [], DATA.common)); },
    // [{ w, goal, mine }] for Count the Word: everyday words with their usual goals, this meeting's words, and a few part words at 1
    countPool() {
      const m = MA.current(), G = DATA.commonGoals || {}, mg = m.goals || {};
      const out = DATA.common.map(w => ({ w, goal: G[w] || 2, mine: false }));
      (m.count || []).forEach(w => { if (!out.some(x => x.w === w)) out.push({ w, goal: mg[w] || 2, mine: true }); });
      const partWords = uniq([].concat(...(m.parts || []).map(p => p.words || []))).filter(w => /^[A-Z]{3,10}$/.test(w) && !out.some(x => x.w === w));
      partWords.forEach(w => out.push({ w, goal: mg[w] || 1, mine: true, part: true }));
      return out;
    },
    scenes: SCENES, shapes: SHAPES, drawScene, paintScene, sceneParts,
    labelOf: m => m.dates ? `${m.label} · ${m.dates}` : m.label
  };
})();
