// 字元資料
const characters = {
    common: [],
    emoji: [
        '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '😊',
        '😇', '🥰', '😍', '🤩', '😘', '😗', '😚', '😋', '😛', '😜',
        '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐',
        '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪',
        '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶',
        '🥴', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐', '😕', '😟',
        '🌚', '🌝', '👀', '👁️ ', '👁️‍🗨️', '🙈', '🙉', '🙊',
        '😢', '😭', '😿', '🥹', '🥺',
        '😠', '😡', '🤬', '😤', '👿',
        '😮', '😯', '😲', '😳', '😱', '😨', '😰', '😥',
        '😣', '😖', '😫', '😩', '🙁', '☹️', '😞', '😓',
        '🙃', '😶‍🌫️', '🫠', '🫡', '🫢', '🫣', '🫤', '🥱',
        '🤡', '👻', '💀', '☠️', '👽', '🤖', '😈', '💩',
        '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '🩷',
        '🩵', '🩶', '💗', '💓', '💕', '💖', '💘', '💝', '💞', '💟',
        '❣️', '💔', '❤️‍🔥', '❤️‍🩹', '♡', '♥', '❥', '❦', '❧'
    ],
    gesture: [
        '👍', '👎', '👌', '🤌', '🤏', '✌️', '🤞', '🤟', '🤘', '🤙',
        '👈', '👉', '👆', '👇', '☝️', '👋', '🤚', '🖐️', '✋', '🖖',
        '👏', '🙌', '👐', '🤲', '🤝', '🙏', '✍️', '💪', '🦾', '🖕',
        '🫵', '🫱', '🫲', '🫳', '🫴', '🫰', '🫶', '👊', '✊', '🤛',
        '🤜', '🫷', '🫸', '👋', '🤚', '🖐️', '✋', '🖖', '👌', '🤌'
    ],
    script: [
        '⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹',
        '⁺', '⁻', '⁼', '⁽', '⁾', 'ⁿ', 'ⁱ',
        '₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉',
        '₊', '₋', '₌', '₍', '₎', 'ₐ', 'ₑ', 'ₒ', 'ₓ', 'ₔ',
        'ₕ', 'ₖ', 'ₗ', 'ₘ', 'ₙ', 'ₚ', 'ₛ', 'ₜ'
    ],
    math: [
        '±', '×', '÷', '≠', '≈', '≡', '≤', '≥', '∞', '∝',
        '√', '∛', '∜', '∑', '∏', '∫', '∬', '∭', '∮', '∯',
        '∂', '∇', '∆', '∈', '∉', '∋', '∌', '⊂', '⊃', '⊆',
        '⊇', '∪', '∩', '∅', '∀', '∃', '∄', '¬', '∧', '∨',
        '⊕', '⊗', '⊥', '∥', '∠', '∟', '°', '′', '″', '‴',
        'π', 'α', 'β', 'γ', 'δ', 'ε', 'θ', 'λ', 'μ', 'σ',
        'φ', 'ω', 'Σ', 'Π', 'Ω', 'Δ', 'Φ', 'Ψ', 'Γ', 'Λ',
        '½', '⅓', '⅔', '¼', '¾', '⅕', '⅖', '⅗', '⅘', '⅙',
        '⅚', '⅛', '⅜', '⅝', '⅞', '⅐', '⅑', '⅒',
        '→', '←', '↔', '⇌', '⇋', '∴', '∵', '≡', '≈', '∝',
        'ℏ', 'ℓ', '℧', 'Å', '℃', '℉'
    ],
    english: [
        '𝐀', '𝐁', '𝐂', '𝐃', '𝐄', '𝐅', '𝐆', '𝐇', '𝐈', '𝐉', '𝐊', '𝐋', '𝐌',
        '𝐍', '𝐎', '𝐏', '𝐐', '𝐑', '𝐒', '𝐓', '𝐔', '𝐕', '𝐖', '𝐗', '𝐘', '𝐙',
        '𝐚', '𝐛', '𝐜', '𝐝', '𝐞', '𝐟', '𝐠', '𝐡', '𝐢', '𝐣', '𝐤', '𝐥', '𝐦',
        '𝐧', '𝐨', '𝐩', '𝐪', '𝐫', '𝐬', '𝐭', '𝐮', '𝐯', '𝐰', '𝐱', '𝐲', '𝐳',
        '𝑨', '𝑩', '𝑪', '𝑫', '𝑬', '𝑭', '𝑮', '𝑯', '𝑰', '𝑱', '𝑲', '𝑳', '𝑴',
        '𝑵', '𝑶', '𝑷', '𝑸', '𝑹', '𝑺', '𝑻', '𝑼', '𝑽', '𝑾', '𝑿', '𝒀', '𝒁',
        '𝒂', '𝒃', '𝒄', '𝒅', '𝒆', '𝒇', '𝒈', '𝒉', '𝒊', '𝒋', '𝒌', '𝒍', '𝒎',
        '𝒏', '𝒐', '𝒑', '𝒒', '𝒓', '𝒔', '𝒕', '𝒖', '𝒗', '𝒘', '𝒙', '𝒚', '𝒛',
        '𝒜', '𝒞', '𝒟', '𝒢', '𝒥', '𝒦', '𝒩', '𝒪', '𝒫', '𝒬', '𝒮', '𝒯', '𝒰', '𝒱', '𝒲', '𝒳', '𝒴', '𝒵',
        '𝒶', '𝒷', '𝒸', '𝒹', '𝒻', '𝒽', '𝒾', '𝒿', '𝓀', '𝓁', '𝓂', '𝓃', '𝓅', '𝓆', '𝓇', '𝓈', '𝓉', '𝓊', '𝓋', '𝓌', '𝓍', '𝓎', '𝓏',
        '𝔸', '𝔹', '𝔻', '𝔼', '𝔽', '𝔾', '𝕀', '𝕁', '𝕂', '𝕃', '𝕄', '𝕆',
        '𝕊', '𝕋', '𝕌', '𝕍', '𝕎', '𝕏', '𝕐', 'ℂ', 'ℍ', 'ℕ', 'ℙ', 'ℚ', 'ℝ', 'ℤ',
        '𝕒', '𝕓', '𝕔', '𝕕', '𝕖', '𝕗', '𝕘', '𝕙', '𝕚', '𝕛', '𝕜', '𝕝', '𝕞',
        '𝕟', '𝕠', '𝕡', '𝕢', '𝕣', '𝕤', '𝕥', '𝕦', '𝕧', '𝕨', '𝕩', '𝕪', '𝕫',
        '𝔄', '𝔅', '𝔇', '𝔈', '𝔉', '𝔊', '𝔍', '𝔎', '𝔏', '𝔐', '𝔑', '𝔒', '𝔓', '𝔔', '𝔖', '𝔗', '𝔘', '𝔙', '𝔚', '𝔛', '𝔜', 'ℨ', 'ℭ', 'ℌ', 'ℑ', 'ℜ',
        '𝔞', '𝔟', '𝔠', '𝔡', '𝔢', '𝔣', '𝔤', '𝔥', '𝔦', '𝔧', '𝔨', '𝔩', '𝔪',
        '𝔫', '𝔬', '𝔭', '𝔮', '𝔯', '𝔰', '𝔱', '𝔲', '𝔳', '𝔴', '𝔵', '𝔶', '𝔷'
    ],
    nature: [
        '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌙',
        '🌚', '🌛', '🌜', '🌝', '🌞', '☀️', '⭐', '🌟', '✨',
        '🌈', '☁️', '⛅', '🌤️', '🌥️', '🌦️', '🌧️', '🌨️', '🌩️', '🌪️',
        '❄️', '💧', '💦', '🌊', '🔥', '⚡', '☔', '🌬️',
        '⚗️', '🧪', '🧫', '🧬', '⚛️', '🔬', '🔭', '💊', '💉', '🩸',
        '🩹', '🩺', '⚕️', '🔋', '🔌', '💡', '🧲', '☢️', '☣️', '⚠️'
    ],
    animal: [
        '🐛', '🦋', '🐌', '🐝', '🐞', '🦗', '🪲', '🪳', '🦟', '🪰',
        '🐜', '🦂', '🕷️', '🕸️', '🪱', '🦠',
        '🐶', '🐕', '🐩', '🐺', '🦊', '🦝', '🐱', '🐈', '🦁', '🐯',
        '🐅', '🐆', '🐴', '🐎', '🦄', '🦓', '🐮', '🐂', '🐃', '🐄',
        '🐷', '🐖', '🐗', '🐽', '🐏', '🐑', '🐐', '🐪', '🐫', '🦙',
        '🦒', '🐘', '🦣', '🦏', '🦛', '🐭', '🐁', '🐀', '🐹', '🐰',
        '🐇', '🐿️', '🦫', '🦔', '🦇', '🐻', '🐨', '🐼', '🦥', '🦦',
        '🦨', '🦘', '🦡',
        '🐔', '🐓', '🐣', '🐤', '🐥', '🐦', '🐧', '🕊️', '🦅', '🦆',
        '🦢', '🦉', '🦤', '🪶', '🦩', '🦚', '🦜', '🐦‍⬛',
        '🐳', '🐋', '🐬', '🦭', '🐟', '🐠', '🐡', '🦈', '🐙', '🐚',
        '🪸', '🦀', '🦞', '🦐', '🦑', '🪼',
        '🐊', '🐢', '🦎', '🐍', '🐲', '🐉', '🦕', '🦖'
    ],
    plant: [
        '🌸', '🌺', '🌻', '🌼', '🌷', '🌹', '🥀', '💐', '💮', '🏵️',
        '🌱', '🌲', '🌳', '🌴', '🌵', '🎋', '🎍', '🪴', '🎄', '🌾',
        '🪻', '🪷', '🌿', '☘️', '🍀', '🍃', '🍂', '🍁', '🎑',
        '🍎', '🍏', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐',
        '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🫒',
        '🥑', '🍆', '🥔', '🥕', '🌽', '🌶️', '🫑', '🥒', '🥬', '🥦',
        '🧄', '🧅', '🥜', '🫘', '🌰'
    ],
    arrow: [
        '←', '↑', '→', '↓', '↔', '↕', '↖', '↗', '↘', '↙',
        '⇐', '⇑', '⇒', '⇓', '⇔', '⇕', '⇖', '⇗', '⇘', '⇙',
        '↚', '↛', '↮', '⇍', '⇏', '⇎',
        '↞', '↟', '↠', '↡', '↢', '↣', '↤', '↥', '↦', '↧',
        '↩', '↪', '↫', '↬', '↰', '↱', '↲', '↳', '↴', '↵',
        '↶', '↷', '⟲', '⟳', '↺', '↻',
        '⇠', '⇡', '⇢', '⇣', '⇤', '⇥', '⇦', '⇧', '⇨', '⇩', '⇪',
        '⇌', '⇋', '⟵', '⟶', '⟷', '⟸', '⟹', '⟺',
        '➔', '➘', '➙', '➚', '➛', '➜', '➝', '➞', '➟', '➠',
        '➡', '➢', '➣', '➤', '➥', '➦', '➧', '➨', '➩', '➪',
        '➫', '➬', '➭', '➮', '➯', '➰', '➱', '⤴', '⤵',
        '▲', '▶', '▼', '◀', '△', '▷', '▽', '◁'
    ],
    combine: [
        '\u0308', '\u0302', '\u0303', '\u0304', '\u0305', '\u0306', '\u0307',
        '\u030A', '\u030B', '\u030C', '\u030D', '\u030E', '\u030F',
        '\u0336', '\u0332', '\u0333', '\u0334', '\u0335',
        '\u0337', '\u0338', '\u035C', '\u0361', '\u0362',
        '\u0300', '\u0301', '\u0309', '\u0323', '\u0324', '\u0325',
        '\uFE0E', '\uFE0F'
    ]
};

function updatePane(category) {
    const grid = document.querySelector(`#${category} .char-grid`);
    grid.innerHTML = '';
    characters[category].forEach(char => {
        const btn = document.createElement('button');
        btn.className = 'char-btn';
        if( category==='combine' )
            btn.textContent = 'a' + char;
        else
            btn.textContent = char;
        btn.addEventListener('click', () => addChar(char));
        grid.appendChild(btn);
    });
}

// 初始化字元按鈕
function initCharButtons() {
    // 檢查 session storage 的 frequently 變數
    const frequently = localStorage.getItem('frequently');
    try {
        const parsed = JSON.parse(frequently);
        if (Array.isArray(parsed)) {
            characters.common = parsed;
        } else {
            throw new Error('not array');
        }
    } catch (e) {
        // 串接 gesture, script, math 的內容
        characters.common = [
            ...characters.emoji,
            ...characters.gesture,
            ...characters.script,
            ...characters.math
        ];
    }

    for( let category in characters )
        updatePane(category);
}

// 加入字元到輸入框
function addChar(char) {
    const input = document.getElementById('textInput');
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const text = input.value;
    input.value = text.slice(0, start) + char + text.slice(end);
    //input.focus();
    input.setSelectionRange(start + char.length, start + char.length);
    navigator.clipboard.writeText(char).then(() => {
        showToast('已複製單個字到剪貼簿！');
    });

    // 更新 frequently
    const index = characters.common.indexOf(char);
    if (index !== -1) {
        // 已存在，移到最前面
        characters.common.splice(index, 1);
    }
    characters.common.unshift(char);
    updatePane('common');

    // 存入 session storage
    localStorage.setItem('frequently', JSON.stringify(characters.common));
}

// 複製文字
function copyText() {
    const input = document.getElementById('textInput');
    if (input.value) {
        navigator.clipboard.writeText(input.value).then(() => {
            showToast('已複製整串到剪貼簿！');
        });
    } else {
        showToast('輸入框是空的！');
    }
}

// 清空文字
function clearText() {
    document.getElementById('textInput').value = '';
    document.getElementById('textInput').focus();
}

// 顯示提示訊息
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // Tab 切換
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有 active
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            // 加入 active
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });

    // 按鈕事件
    document.getElementById('btnCopy').addEventListener('click', copyText);
    document.getElementById('btnClear').addEventListener('click', clearText);

    // 初始化字元按鈕
    initCharButtons();
});
