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
  window.MA = {
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
    labelOf: m => m.dates ? `${m.label} · ${m.dates}` : m.label
  };
})();
