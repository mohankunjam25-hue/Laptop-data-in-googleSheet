// ================================================================
// STUDENT DATA â€” SIRF YAHAN EDIT KARO
// Format: "Poora Naam": { email: "email@domain.com", category: "SOP" ya "SOB" }
// ================================================================
const STUDENT_DATA = {
  "Mohan Kunjam": { email: "mohankunjam25@navgurukul.org", category: "SOP" },
  "Ekta Sona":  { email: "ektasona25@navgurukul.org",  category: "SOP" },
  "Rahul Karma":   { email: "rahulkarma25@navgurukul.org",  category: "SOB" },
  "Ashok Kumar":   { email: "ashokkumar25@navgurukul.org",  category: "SOB" },
  "Divya Nag":   { email: "divyanag25@navgurukul.org",  category: "SOB" },
  "Mahadev Lambadi":   { email: "mahadevlambadi25@navgurukul.org",  category: "SOB" },
  "Pooja Rani":   { email: "poojarani25@navgurukul.org",  category: "SOB" },
  "Vaishali Acharya":   { email: "vaishaliacharya25@navgurukul.org",  category: "SOB" },
  "vivek kumar":   { email: "vivekkumar25@navgurukul.org",  category: "SOB" },
  "vicky kumar":   { email: "vickykumar25@navgurukul.org",  category: "SOB" },
  "Yash ojha":   { email: "yashojha25@navgurukul.org",  category: "SOB" },
  "RoopSingh madvi":   { email: "roopsinghmadvi25@navgurukul.org",  category: "SOB" },
  "Vinod Shrivastav ":   { email: "vinodshrivastav25@navgurukul.org",  category: "SOB" },



  // --- YAHAN APNE STUDENTS ADD KARO ---
  // "Ram Singh":   { email: "ram@example.com",    category: "SOP" },
  // "Sita Devi":   { email: "sita@example.com",   category: "SOB" },
};

// ================================================================
// GOOGLE APPS SCRIPT WEB APP URL â€” deploy karne ke baad daalo
// ================================================================
const SHEET_URL = "https://script.google.com/macros/s/AKfycbxdfbHm-8iyBGyb7DzT4EWP08TDV5H8pvqU1qta5f7CJyrfXXWzeNxEoKVetUtkUSdTrQ/exec";
// ================================================================

let matchedName    = "";
let emailEdited    = false;

// Aaj ki date set karo
document.getElementById('todayDate').textContent = (() => {
  const d = new Date();
  return String(d.getDate()).padStart(2,'0') + '/' +
         String(d.getMonth() + 1).padStart(2,'0') + '/' +
         d.getFullYear();
})();

// ---- NAME INPUT ----
function onNameInput() {
  const val = document.getElementById('nameInput').value.trim();
  const box  = document.getElementById('suggestions');

  // Reset jab bhi type karo
  matchedName = "";
  resetEmailAndCategory();

  if (val.length < 1) {
    box.classList.remove('show');
    return;
  }

  const matches = Object.keys(STUDENT_DATA).filter(n =>
    n.toLowerCase().includes(val.toLowerCase())
  );

  if (matches.length === 0) {
    box.innerHTML = '<div class="no-result">Koi student nahi mila...</div>';
    document.getElementById('nameInput').classList.add('no-match');
    document.getElementById('nameInput').classList.remove('matched');
    box.classList.add('show');
    return;
  }

  box.innerHTML = matches.map(name => {
    const cat = STUDENT_DATA[name].category;
    return `<div class="suggestion-item" onmousedown="selectName('${name.replace(/'/g,"\\'")}')">
      <span class="s-name">${name}</span>
      <span class="s-badge ${cat === 'SOP' ? 'badge-sop' : 'badge-sob'}">${cat}</span>
    </div>`;
  }).join('');
  document.getElementById('nameInput').classList.remove('no-match');
  box.classList.add('show');
}

// Student select hone par
function selectName(name) {
  document.getElementById('nameInput').value = name;
  document.getElementById('suggestions').classList.remove('show');
  matchedName = name;

  const s = STUDENT_DATA[name];

  // Email auto fill â€” readonly mode
  const emailInput = document.getElementById('emailInput');
  emailInput.value    = s.email;
  emailInput.readOnly = true;
  emailInput.classList.remove('no-match');
  emailInput.classList.add('matched');
  emailEdited = false;

  // Edit button reset
  document.getElementById('editEmailBtn').textContent = 'Edit';
  document.getElementById('emailNote').classList.remove('show');

  // Email group show karo
  document.getElementById('emailGroup').style.display = 'block';

  // Category pill show karo
  const pill = document.getElementById('catPill');
  pill.textContent  = s.category === 'SOP' ? 'SOP Student' : 'SOB Student';
  pill.className    = 'cat-pill show ' + (s.category === 'SOP' ? 'cat-sop' : 'cat-sob');

  // Name field green
  document.getElementById('nameInput').classList.add('matched');
  document.getElementById('nameInput').classList.remove('no-match');

  // Submit enable
  document.getElementById('submitBtn').disabled = false;
  document.getElementById('btnText').textContent = 'Sheet mein Submit Karo';
}

// Suggestions hide karo
function hideSuggestions() {
  setTimeout(() => {
    document.getElementById('suggestions').classList.remove('show');
    const val = document.getElementById('nameInput').value.trim();
    if (!STUDENT_DATA[val] && matchedName === "") {
      document.getElementById('nameInput').classList.remove('matched');
      resetEmailAndCategory();
    }
  }, 150);
}

// ---- EMAIL EDIT ----
function toggleEmailEdit() {
  const emailInput = document.getElementById('emailInput');
  const editBtn    = document.getElementById('editEmailBtn');
  const note       = document.getElementById('emailNote');

  if (emailInput.readOnly) {
    // Edit mode on
    emailInput.readOnly = false;
    emailInput.focus();
    emailInput.classList.remove('matched');
    emailInput.classList.add('no-match'); // orange hint
    editBtn.textContent = 'Lock';
    note.classList.add('show');
    emailEdited = true;
  } else {
    // Lock karo â€” validate basic email
    const val = emailInput.value.trim();
    if (!val.includes('@') || !val.includes('.')) {
      emailInput.classList.add('no-match');
      showToast('Sahi email format daalo (eg: name@domain.com)', 'error');
      return;
    }
    emailInput.readOnly = true;
    emailInput.classList.remove('no-match');
    emailInput.classList.add('matched');
    editBtn.textContent = 'Edit';
  }
}

// ---- RESET ----
function resetEmailAndCategory() {
  document.getElementById('emailGroup').style.display  = 'none';
  document.getElementById('emailInput').value          = '';
  document.getElementById('emailInput').readOnly       = true;
  document.getElementById('emailInput').classList.remove('matched', 'no-match');
  document.getElementById('editEmailBtn').textContent  = 'Edit';
  document.getElementById('emailNote').classList.remove('show');
  document.getElementById('catPill').className         = 'cat-pill';
  document.getElementById('submitBtn').disabled        = true;
  document.getElementById('btnText').textContent       = 'Pehle naam likho';
  emailEdited = false;
}

// ---- TOAST ----
function showToast(msg, type) {
  const t = document.getElementById('toast');
  t.textContent     = msg;
  t.className       = 'toast ' + type;
  t.style.display   = 'block';
  if (type === 'success') {
    setTimeout(() => { t.style.display = 'none'; }, 4000);
  }
}

function parseSheetResponse(text) {
  if (!text || !text.trim()) {
    return { status: 'success' };
  }
  try {
    return JSON.parse(text);
  } catch (err) {
    return { status: 'success', message: text.trim() };
  }
}
// ---- SUBMIT ----
async function submitForm() {
  const submitType    = document.getElementById('submitType').value;
  const lptSubmission = document.getElementById('lptSubmission').value;
  const email         = document.getElementById('emailInput').value.trim();

  if (!matchedName)   return showToast('List mein se naam select karo!', 'error');
  if (!email)         return showToast('Email ID nahi hai!', 'error');
  if (!submitType)    return showToast('Submit Type select karo!', 'error');
  if (!lptSubmission) return showToast('LPT Submission select karo!', 'error');

  // Agar email edit mode mein khuli hai toh pehle lock karo
  if (!document.getElementById('emailInput').readOnly) {
    showToast('Email edit ke baad "Lock" dabao pehle!', 'error');
    return;
  }

  const category = STUDENT_DATA[matchedName]?.category || '';

  const btn     = document.getElementById('submitBtn');
  const spinner = document.getElementById('spinner');
  const btnText = document.getElementById('btnText');

  btn.disabled          = true;
  spinner.style.display = 'inline-block';
  btnText.textContent   = 'Submit ho raha hai...';

  try {
    const payload = {
      name:          matchedName,
      email:         email,
      category:      category,
      submitType:    submitType,
      lptSubmission: lptSubmission,
      date:          document.getElementById('todayDate').textContent
    };

    // Query params + JSON body dono bhejte hain taki doPost handlers (e.parameter/e.postData) dono support ho.
    const query = new URLSearchParams(payload).toString();
    const requestUrl = SHEET_URL.includes('?') ? `${SHEET_URL}&${query}` : `${SHEET_URL}?${query}`;

    let result;
    let usedNoCorsFallback = false;

    try {
      const response = await fetch(requestUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });
      const text = await response.text();
      result = parseSheetResponse(text);
      if (!response.ok || result.status === 'error') {
        throw new Error(result.message || 'Server error');
      }
    } catch (primaryErr) {
      // Kuch browsers/file:// origins me CORS response read fail hota hai.
      // no-cors fallback request ko fire karta hai; response read nahi hota.
      usedNoCorsFallback = true;
      await fetch(requestUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });
      result = { status: 'success' };
    }

    if (result.status === 'success') {
      const snText = result.sn ? ` (S.N. ${result.sn})` : '';
      const syncNote = usedNoCorsFallback ? ' Refresh the sheet after 2-3 seconds.' : '';
      showToast('✓ ' + matchedName + ' Add request to data sheet has been done!' + snText + syncNote, 'success');
      // Form reset
      document.getElementById('nameInput').value   = '';
      document.getElementById('submitType').value  = '';
      document.getElementById('lptSubmission').value = '';
      document.getElementById('nameInput').classList.remove('matched');
      matchedName = "";
      resetEmailAndCategory();
    } else {
      showToast('Error: ' + (result.message || 'Unknown error'), 'error');
    }
  } catch (err) {
    console.error('Submit error:', err);
    showToast('Submit fail', 'error');
  } finally {
    spinner.style.display = 'none';
    if (matchedName) {
      btnText.textContent = 'Submiting to sheet';
      btn.disabled = false;
    } else {
      btnText.textContent = 'Write name first';
      btn.disabled = true;
    }
  }
}
