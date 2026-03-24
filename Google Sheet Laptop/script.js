// ================================================================
// STUDENT DATA — SIRF YAHAN EDIT KARO
// Format: "Poora Naam": { email: "email@domain.com", category: "SOP" ya "SOB" }
// ================================================================
const STUDENT_DATA = {
  "Mohan Kunjam": { email: "mohankunjam25@navgurukul.org", category: "SOP" },
  "Pooja Rani": { email: "poojarani25@navgurukul.org", category: "SOP" },
  "Vaishali Acharya": { email: "vaishaliacharya25@navgurukul.org", category: "SOP" },
  "Divya Nag": { email: "divyanag25@navgurukul.org", category: "SOP" },
  "Akansha Dewangan": { email: "akanshadewangan25@navgurukul.org", category: "SOP" },
  "Vidya Kunjam": { email: "vidyakunjam25@navgurukul.org", category: "SOB" },
  "Nikita Verma": { email: "nikitaverma25@navgurukul.org", category: "SOP" },
  "Aashish Kumar Markam": { email: "aashishkumarmarkam25@navgurukul.org", category: "SOB" },
  "Yash Ojha": { email: "yashojha25@navgurukul.org", category: "SOP" },
  "Laxman Madkam": { email: "laxmanmadkam25@navgurukul.org", category: "SOP" },
  "Roochi Patel": { email: "roochipatel25@navgurukul.org", category: "SOB" },
  "Harshit Gurla": { email: "harshitgurla25@navgurukul.org", category: "SOP" },
  "Anju Karam": { email: "anjukaram25@navgurukul.org", category: "SOB" },
  "Urmila Parte": { email: "urmilaparte25@navgurukul.org", category: "SOP" },
  "Mariyam Kashyap": { email: "mariyamkashyap25@navgurukul.org", category: "SOP" },
  "Asha Jagat": { email: "ashajagat25@navgurukul.org", category: "SOP" },
  "Lachan Rana": { email: "lachanrana25@navgurukul.org", category: "SOB" },
  "Kartik Kaka": { email: "kartikkaka25@navgurukul.org", category: "SOP" },
  "Harsh Borla": { email: "harshborla25@navgurukul.org", category: "SOP" },
  "Damini Kunjam": { email: "daminikunjam25@navgurukul.org", category: "SOP" },
  "Anju Sori": { email: "anjusori25@navgurukul.org", category: "SOP" },
  "Ashok Kumar Kunjam": { email: "ashokkunjam25@navgurukul.org", category: "SOB" },
  "Harsh Kumar Gurla": { email: "harshkumargurla25@navgurukul.org", category: "SOP" },
  "Rahul Karma": { email: "rahulkarma25@navgurukul.org", category: "SOB" },
  "Gungun Goswami": { email: "gungungoswami25@navgurukul.org", category: "SOP" },
  "Sanjana Kawasi": { email: "sanjanakawasi25@navgurukul.org", category: "SOB" },
  "Bheensen Sodi": { email: "bheensensodi25@navgurukul.org", category: "SOP" },
  "Radha Sharma": { email: "radhasharma25@navgurukul.org", category: "SOB" },
  "Vinod Shrivastav": { email: "vinodshrivastav25@navgurukul.org", category: "SOB" },
  "Neetu Kuldeep": { email: "neetukuldeep25@navgurukul.org", category: "SOP" },
  "Jyoti Karmkar": { email: "jyotikarmkar25@navgurukul.org", category: "SOP" },
  "Rita Mudami": { email: "ritamudami25@navgurukul.org", category: "SOB" },
  "Lekesh Badole": { email: "lekeshbadole25@navgurukul.org", category: "SOP" },
  "Prathiba Mark Dayalu ": { email: "prathibamarkdayalu25@navgurukul.org", category: "SOB" },
  "Keleshwari Watti": { email: "keleshwariwatti25@navgurukul.org", category: "SOP" },
  "Ramlal Bhogami": { email: "ramlalbhogami25@navgurukul.org", category: "SOP" },
  "Aashish Kashyap": { email: "aashishkashyap25@navgurukul.org", category: "SOP" },
  "Sagar Kumar Kakem": { email: "sagarkumarkakem25@navgurukul.org", category: "SOP" },
  "Priyanka Baghel": { email: "priyankabaghel25@navgurukul.org", category: "SOP" },
  "Swati Kapgate": { email: "swati_vinod@navgurukul.org", category: "SOP" },
  "Komal Bhagel": { email: "komalbhagel25@navgurukul.org", category: "SOP" },
  "Satyam Oyami": { email: "satyamoyami25@navgurukul.org", category: "SOB" },
  "Rajshree Karmakar": { email: "rajshreekarmakar25@navgurukul.org", category: "SOB" },
  "Badal Mandavi": { email: "badalmandavi25@navgurukul.org", category: "SOP" },
  "Savesh Pradhan": { email: "saveshpradhan25@navgurukul.org", category: "SOB" },
  "Neeraj Markam": { email: "neerajmarkam25@navgurukul.org", category: "SOP" },
  "Geetesh Pradhan": { email: "geeteshpradhan25@navgurukul.org", category: "SOB" },
  "Deepankar Karmakar": { email: "deepankarkarmakar25@navgurukul.org", category: "SOB" },
  "Sumita Yadav": { email: "sumitayadav25@navgurukul.org", category: "SOB" },
  "Suman Poyam": { email: "sumanpoyam25@navgurukul.org", category: "SOB" },
  "Mahadev Lambadi": { email: "mahadevlambadi25@navgurukul.org", category: "SOP" },
  "Devashish Markam": { email: "devashishmarkam25@navgurukul.org", category: "SOP" },
  "Narendra Sethiya": { email: "narendrasethiya25@navgurukul.org", category: "SOB" },
  "Bharti Vishwakarma": { email: "bhartivishwakarma25@navgurukul.org", category: "SOB" },
  "Kamini Sethiya": { email: "kaminisethiya25@navgurukul.org", category: "SOP" },
  "Himanshu Lakra": { email: "himanshulakra25@navgurukul.org", category: "SOP" },
  "Pratik Masih": { email: "pratikmasih25@navgurukul.org", category: "SOP" },
  "Vicky Kumar Podiyam": { email: "vikkypodiyam25@navgurukul.org", category: "SOP" },
  "Susmita Totapalli": { email: "susmitatotapalli25@navgurukul.org", category: "SOB" },
  "Sangeeta Manjhi": { email: "sangeetamanjhi25@navgurukul.org", category: "SOP" },
  "Kasak Raut": { email: "kasakraut25@navgurukul.org", category: "SOP" },
  "Deepa Sodi": { email: "deepasodi25@navgurukul.org", category: "SOP" },
  "Sanku Sodhi": { email: "sankusodhi25@navgurukul.org", category: "SOP" },
  "Reeta Poyam": { email: "reetapoyam25@navgurukul.org", category: "SOP" },
  "Kumkum Chandrakar": { email: "kumkumchandrakar25@navgurukul.org", category: "SOP" },
  "Faniza": { email: "faniza25@navgurukul.org", category: "SOP" },
  "Neetu Mandavi": { email: "neetumandavi25@navgurukul.org", category: "SOP" },
  "Geetashri Yadav": { email: "geetashriyadav25@navgurukul.org", category: "SOP" },
  "Prerna Atami": { email: "prernaatami25@navgurukul.org", category: "SOB" },
  "Madhukar Ganguram": { email: "madhukarganguram25@navgurukul.org", category: "SOP" },
  "Sushil Mandavi": { email: "sushilmandavi25@navgurukul.org", category: "SOP" },
  "Deepika Bhanjdev": { email: "deepikabhanjdev25@navgurukul.org", category: "SOB" },
  "Indu Nayak": { email: "indunayak25@navgurukul.org", category: "SOB" },
  "Vivek Sengar": { email: "viveksengar25@navgurukul.org", category: "SOP" },
  "Nirmala Thakur": { email: "nirmalathakur25@navgurukul.org", category: "SOB" },
  "Balkrishna Thakur": { email: "balkrishnathakur25@navgurukul.org", category: "SOP" },
  "Shraddha Sahu": { email: "shraddhasahu25@navgurukul.org", category: "SOP" },
  "Reetika Manem": { email: "reetikamanem25@navgurukul.org", category: "SOP" },
  "Divya Sunarkar": { email: "divyasunarkar25@navgurukul.org", category: "SOP" },
  "Raina Badaik": { email: "rainabadaik25@navgurukul.org", category: "SOB" },
  "Anjali Morla": { email: "anjalimorla25@navgurukul.org", category: "SOP" },
  "Avantika Lambadi": { email: "avantikalambadi25@navgurukul.org", category: "SOP" },
  "Sanjna Neelam": { email: "sanjnaneelam25@navgurukul.org", category: "SOP" },
  "Subela Toppo": { email: "subelatoppo25@navgurukul.org", category: "SOP" },
  "Juhi Kumari Singh": { email: "juhikumarisingh25@navgurukul.org", category: "SOP" },
  "Sukhlal Nag": { email: "sukhlalnag25@navgurukul.org", category: "SOP" },
  "Sagar Bhaskar": { email: "sagarbhaskar25@navgurukul.org", category: "SOP" },
  "Aanchal Sahu": { email: "aanchalsahu25@navgurukul.org", category: "SOP" },
  "Pooja Yadav": { email: "poojayadav25@navgurukul.org", category: "SOP" },
  "Rahul Gangwar": { email: "rahulgangwar25@navgurukul.org", category: "SOP" },
  "Sudeshwar Netam": { email: "sudeshwarnetam25@navgurukul.org", category: "SOP" },
  "Renuka Jawwa Sariyam": { email: "renukajaww25@navgurukul.org", category: "SOP" },
  "Sariyam Reena": { email: "sariyamreena25@navgurukul.org", category: "SOP" },
  "Akshara Sori": { email: "aksharasori25@navgurukul.org", category: "SOP" },
  "Dilip Kumar Sori": { email: "dilipkumarsori25@navgurukul.org", category: "SOP" },
  "Sakshi Nagesh": { email: "sakshinagesh25@navgurukul.org", category: "SOP" },
  "Sejal Burka": { email: "sejalburka25@navgurukul.org", category: "SOP" },
  "Rudra Nair": { email: "rudranair25@navgurukul.org", category: "SOP" },
  "Bindiya Korram": { email: "bindiyakorram25@navgurukul.org", category: "SOP" },
  "Shivani Kashyap": { email: "shivanikashyap25@navgurukul.org", category: "SOB" },
  "Chandni Nag": { email: "chandninag25@navgurukul.org", category: "SOP" },
  "Aarti Chand": { email: "aartichand25@navgurukul.org", category: "SOP" },
  "Smriti Rani Gouda": { email: "smritiranigouda25@navgurukul.org", category: "SOB" },
  "Anjali Yadav": { email: "anjaliyadav25@navgurukul.org", category: "SOP" },
  "Basanti Yadav": { email: "basantiyadav25@navgurukul.org", category: "SOP" },
  "Ankita Nag": { email: "ankitanag25@navgurukul.org", category: "SOB" },
  "Kumli Kashyap": { email: "kumlikashyap25@navgurukul.org", category: "SOB" },
  "Manoj Mandavi": { email: "manojmandavi25@navgurukul.org", category: "SOP" },
  "Govardhan Sunarkar": { email: "govardhansunarkar25@navgurukul.org", category: "SOP" },
  "Sabindar Kashyap": { email: "sabindarkashyap25@navgurukul.org", category: "SOP" },
  "Rachna": { email: "rachna25@navgurukul.org", category: "SOP" },
  "Dirdho Manita": { email: "dirdhomanita25@navgurukul.org", category: "SOB" },
  "Pratibha Thapa": { email: "pratibhathapa25@navgurukul.org", category: "SOP" },
  "Garima Suna": { email: "garimasuna25@navgurukul.org", category: "SOB" },
  "Monika Patel": { email: "monikapatel25@navgurukul.org", category: "SOB" },
  "Sanath Ram Netam": { email: "sanathramnetam25@navgurukul.org", category: "SOB" },
  "Saroj Kalmu": { email: "sarojkalmu25@navgurukul.org", category: "SOB" },
  "Bhaskar Satyam": { email: "bhaskarsatyam25@navgurukul.org", category: "SOP" },
  "Subati Mandavi": { email: "subatimandavi25@navgurukul.org", category: "SOB" },
  "Utra Bharti": { email: "utrabharti25@navgurukul.org", category: "SOP" },
  "Radhika Yadav": { email: "radhikayadav25@navgurukul.org", category: "SOB" },
  "RoopSingh Madvi": { email: "roopsinghmadvi25@navgurukul.org", category: "SOB" },
  "Salita Lekami": { email: "salitalekami25@navgurukul.org", category: "SOB" },
  "Nikita Telam": { email: "nikitatelam25@navgurukul.org", category: "SOB" },
  "Jyoti Bhavani": { email: "jyotibhavani25@navgurukul.org", category: "SOB" },
  "Warden Ma'am": { email: "wardenmaam25@navgurukul.org", category: "SOP" },
  "Soniya Patel": { email: "soniyapatel25@navgurukul.org", category: "SOP" },
  "Kunti Kunjam": { email: "kuntikunjam25@navgurukul.org", category: "SOB" },
  "Shivani Yadav": { email: "shivaniyadav25@navgurukul.org", category: "SOB" },
  "Kaushlya Lekami": { email: "kaushlyalekami25@navgurukul.org", category: "SOB" },
  "Roshni Netam": { email: "roshninetam25@navgurukul.org", category: "SOB" },
  "Ekta Sona": { email: "ektasona25@navgurukul.org", category: "SOB" },
  "Kunti Panday": { email: "kuntipanday25@navgurukul.org", category: "SOB" },
  "Deepak Thakur": { email: "deepakthakur25@navgurukul.org", category: "SOB" },
};

// ================================================================
// GOOGLE APPS SCRIPT WEB APP URL — deploy karne ke baad daalo
// ================================================================
const SHEET_URL = "https://script.google.com/macros/s/AKfycbyNuVW79O6eFtNvFBPvrVT3XXWMFfxXqfxknq4ECtrno8uJ6Y8T8IhaeSmeQPbbJurmiA/exec";
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

  if (val.length < 4) {
    box.classList.remove('show');
    document.getElementById('nameInput').classList.remove('no-match');
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

  // Email auto fill — readonly mode
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
    // Lock karo — validate basic email
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
      showToast('? ' + matchedName + ' Add request to data sheet has been done!' + snText + syncNote, 'success');
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


