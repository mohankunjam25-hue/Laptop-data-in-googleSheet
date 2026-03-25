const { useEffect, useMemo, useRef, useState } = React;

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

const SHEET_URL = "https://script.google.com/macros/s/AKfycbyJ65yFM-cT-EjS2I2yLWaknjhnNIPLwoMpGXf2lR6qFUkfeAd4l1AOhH3b-CmC02P94w/exec";
const THEME_STORAGE_KEY = 'lpt-form-theme';

function formatDate() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}

function parseSheetResponse(text) {
  if (!text || !text.trim()) {
    return { status: 'success' };
  }

  try {
    return JSON.parse(text);
  } catch {
    return { status: 'success', message: text.trim() };
  }
}

function App() {
  const [theme, setTheme] = useState('dark');
  const [nameInput, setNameInput] = useState('');
  const [matchedName, setMatchedName] = useState('');
  const [email, setEmail] = useState('');
  const [emailReadOnly, setEmailReadOnly] = useState(true);
  const [emailEdited, setEmailEdited] = useState(false);
  const [submitType, setSubmitType] = useState('');
  const [lptSubmission, setLptSubmission] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '' });
  const [submitting, setSubmitting] = useState(false);

  const hideSuggestionTimeoutRef = useRef(null);
  const toastTimeoutRef = useRef(null);

  const todayDate = useMemo(() => formatDate(), []);
  const category = matchedName ? STUDENT_DATA[matchedName]?.category || '' : '';

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const initialTheme = savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : systemPrefersLight
        ? 'light'
        : 'dark';

    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const body = document.body;
    if (!body || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const root = document.documentElement;
    const maxShift = 42;
    let rafId = null;
    let pointerActive = false;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const applyTransforms = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      const xRatio = (currentX / window.innerWidth - 0.5) * 2;
      const yRatio = (currentY / window.innerHeight - 0.5) * 2;
      const moveX = xRatio * maxShift;
      const moveY = yRatio * maxShift;

      root.style.setProperty('--bg-move-x', `${moveX.toFixed(2)}px`);
      root.style.setProperty('--bg-move-y', `${moveY.toFixed(2)}px`);
      root.style.setProperty('--bg-move-x-a', `${(moveX * 0.35).toFixed(2)}px`);
      root.style.setProperty('--bg-move-y-a', `${(moveY * 0.35).toFixed(2)}px`);
      root.style.setProperty('--bg-move-x-b', `${(moveX * -0.28).toFixed(2)}px`);
      root.style.setProperty('--bg-move-y-b', `${(moveY * -0.28).toFixed(2)}px`);
      root.style.setProperty('--cursor-x', `${currentX.toFixed(2)}px`);
      root.style.setProperty('--cursor-y', `${currentY.toFixed(2)}px`);

      const moving = Math.abs(targetX - currentX) > 0.2 || Math.abs(targetY - currentY) > 0.2;
      if (moving || pointerActive) {
        rafId = requestAnimationFrame(applyTransforms);
      } else {
        rafId = null;
      }
    };

    const scheduleFrame = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(applyTransforms);
      }
    };

    const onPointerMove = (event) => {
      if (event.pointerType && event.pointerType !== 'mouse') {
        return;
      }

      pointerActive = true;
      targetX = event.clientX;
      targetY = event.clientY;
      body.classList.add('bg-active');
      scheduleFrame();
    };

    const resetMotion = () => {
      pointerActive = false;
      body.classList.remove('bg-active');
      targetX = window.innerWidth / 2;
      targetY = window.innerHeight / 2;
      scheduleFrame();
    };

    body.addEventListener('pointermove', onPointerMove);
    body.addEventListener('pointerenter', onPointerMove);
    body.addEventListener('pointerleave', resetMotion);
    window.addEventListener('blur', resetMotion);

    return () => {
      body.removeEventListener('pointermove', onPointerMove);
      body.removeEventListener('pointerenter', onPointerMove);
      body.removeEventListener('pointerleave', resetMotion);
      window.removeEventListener('blur', resetMotion);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      body.classList.remove('bg-active');
    };
  }, []);

  useEffect(() => {
    if (!toast.message) {
      return undefined;
    }

    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    const timeoutMs = toast.type === 'success' ? 4000 : 2600;
    toastTimeoutRef.current = setTimeout(() => {
      setToast({ message: '', type: '' });
      toastTimeoutRef.current = null;
    }, timeoutMs);

    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, [toast]);

  useEffect(() => {
    return () => {
      if (hideSuggestionTimeoutRef.current) {
        clearTimeout(hideSuggestionTimeoutRef.current);
      }
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const toFriendlyErrorMessage = (rawMessage) => {
    const message = String(rawMessage || '').trim();
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('next action should be taken')) {
      return 'You have allready submitted';
    }

    if (lowerMessage.includes('next action should be submitted')) {
      return 'You have taken';
    }

    return message || 'Submission failed';
  };

  const resetEmailAndCategory = () => {
    setEmail('');
    setEmailReadOnly(true);
    setEmailEdited(false);
  };

  const onNameInput = (value) => {
    setNameInput(value);
    setMatchedName('');
    resetEmailAndCategory();

    const trimmed = value.trim();
    if (trimmed.length < 4) {
      setShowSuggestions(false);
      setSuggestions([]);
      return;
    }

    const matches = Object.keys(STUDENT_DATA).filter((name) =>
      name.toLowerCase().includes(trimmed.toLowerCase())
    );

    setSuggestions(matches);
    setShowSuggestions(true);
  };

  const selectName = (name) => {
    const student = STUDENT_DATA[name];
    if (!student) {
      return;
    }

    setNameInput(name);
    setMatchedName(name);
    setEmail(student.email);
    setEmailReadOnly(true);
    setEmailEdited(false);
    setShowSuggestions(false);
  };

  const hideSuggestions = () => {
    hideSuggestionTimeoutRef.current = setTimeout(() => {
      setShowSuggestions(false);

      if (!STUDENT_DATA[nameInput.trim()] && !matchedName) {
        resetEmailAndCategory();
      }
    }, 150);
  };

  const toggleEmailEdit = () => {
    if (emailReadOnly) {
      setEmailReadOnly(false);
      setEmailEdited(true);
      return;
    }

    const val = email.trim();
    if (!val.includes('@') || !val.includes('.')) {
      showToast('Enter a valid email format (e.g. name@domain.com)', 'error');
      return;
    }

    setEmailReadOnly(true);
  };

  const submitForm = async () => {
    const trimmedEmail = email.trim();

    if (!matchedName) {
      showToast('Please select a name from the list!', 'error');
      return;
    }

    if (!trimmedEmail) {
      showToast('Email ID is required!', 'error');
      return;
    }

    if (!submitType) {
      showToast('Please select Submit Type!', 'error');
      return;
    }

    if (!lptSubmission) {
      showToast('Please select LPT Submission!', 'error');
      return;
    }

    if (!emailReadOnly) {
      showToast('After editing email, click "Lock" first!', 'error');
      return;
    }

    const payload = {
      name: matchedName,
      email: trimmedEmail,
      category: STUDENT_DATA[matchedName]?.category || '',
      submitType,
      lptSubmission,
      date: todayDate,
    };

    const query = new URLSearchParams(payload).toString();
    const requestUrl = SHEET_URL.includes('?') ? `${SHEET_URL}&${query}` : `${SHEET_URL}?${query}`;

    setSubmitting(true);

    try {
      let result;
      let usedNoCorsFallback = false;

      try {
        const response = await fetch(requestUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload),
        });

        const text = await response.text();
        result = parseSheetResponse(text);

        if (!response.ok || result.status === 'error') {
          throw new Error(result.message || 'Server error');
        }
      } catch {
        usedNoCorsFallback = true;
        await fetch(requestUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload),
        });
        result = { status: 'success' };
      }

      if (result.status === 'success') {
        const snText = result.sn ? ` (S.N. ${result.sn})` : '';
        const syncNote = usedNoCorsFallback ? ' Refresh the sheet after 2-3 seconds.' : '';
        showToast(`${matchedName} request added to sheet successfully!${snText}${syncNote}`, 'success');

        setNameInput('');
        setMatchedName('');
        setSuggestions([]);
        setShowSuggestions(false);
        setSubmitType('');
        setLptSubmission('');
        resetEmailAndCategory();
      } else {
        showToast(`Error: ${toFriendlyErrorMessage(result.message || 'Unknown error')}`, 'error');
      }
    } catch (err) {
      console.error('Submit error:', err);
      showToast(`Error: ${toFriendlyErrorMessage(err?.message || 'Submission failed')}`, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const nameInputClassName = [
    matchedName ? 'matched' : '',
    !matchedName && nameInput.trim().length >= 4 && showSuggestions && suggestions.length === 0 ? 'no-match' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />

      <div className="card">
        <div className="header">
          <div className="header-top">
            <div className="header-tag">Laptop Submission</div>
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              <span>{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
            </button>
          </div>

          <h1>Submit Laptop Form</h1>
          <p className="subtitle">Start typing your name and the rest will be auto-filled.</p>
        </div>

        <div className="form-group">
          <label htmlFor="nameInput">
            Student Name <span className="required-star">*</span>
          </label>
          <input
            id="nameInput"
            type="text"
            placeholder="Enter your name"
            autoComplete="off"
            value={nameInput}
            onChange={(e) => onNameInput(e.target.value)}
            onBlur={hideSuggestions}
            onFocus={() => {
              if (suggestions.length > 0 || nameInput.trim().length >= 4) {
                setShowSuggestions(true);
              }
            }}
            className={nameInputClassName}
          />

          <div className={`suggestions ${showSuggestions ? 'show' : ''}`}>
            {suggestions.length === 0 ? (
              <div className="no-result">No student found...</div>
            ) : (
              suggestions.map((name) => {
                const cat = STUDENT_DATA[name].category;
                const isSop = cat === 'SOP';
                return (
                  <div
                    key={name}
                    className="suggestion-item"
                    onMouseDown={(event) => {
                      event.preventDefault();
                      selectName(name);
                    }}
                  >
                    <span className="s-name">{name}</span>
                    <span className={`s-badge ${isSop ? 'badge-sop' : 'badge-sob'}`}>{cat}</span>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="cat-pill-wrap">
          <span className={`cat-pill ${category ? `show ${category === 'SOP' ? 'cat-sop' : 'cat-sob'}` : ''}`}>
            {category ? `${category} Student` : ''}
          </span>
        </div>

        <div className="form-group" style={{ display: category ? 'block' : 'none' }}>
          <label htmlFor="emailInput">
            Email ID <span className="required-star">*</span>
          </label>
          <div className="email-wrapper">
            <input
              id="emailInput"
              type="email"
              placeholder="Email will auto-fill..."
              value={email}
              readOnly={emailReadOnly}
              onChange={(e) => setEmail(e.target.value)}
              className={`${matchedName && emailReadOnly ? 'matched' : ''} ${!emailReadOnly ? 'no-match' : ''}`.trim()}
            />
            <button type="button" className="email-edit-btn show" onClick={toggleEmailEdit}>
              {emailReadOnly ? 'Edit' : 'Lock'}
            </button>
          </div>
          <div className={`email-note ${emailEdited ? 'show' : ''}`}>
            Email was edited manually. Please verify before submitting.
          </div>
        </div>

        <hr className="divider" />

        <div className="form-group">
          <label htmlFor="submitType">
            Why LPT Submitting<span className="required-star">*</span>
          </label>
          <select id="submitType" value={submitType} onChange={(e) => setSubmitType(e.target.value)}>
            <option value="">Select</option>
            <option value="Home Leave">Home Leave</option>
            <option value="Campus Leave">Campus Leave</option>
            <option value="Official Work">Official Work</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="lptSubmission">
            Submit type<span className="required-star">*</span>
          </label>
          <select id="lptSubmission" value={lptSubmission} onChange={(e) => setLptSubmission(e.target.value)}>
            <option value="">Select</option>
            <option value="Submitted">Submiting</option>
            <option value="Taken">Taking</option>
          </select>
        </div>

        <div className="date-row">
          <span className="date-text">Today's date (auto)</span>
          <span className="date-value">{todayDate}</span>
        </div>

        <button className="btn" onClick={submitForm} disabled={!matchedName || submitting}>
          <span className="btn-inner">
            <span className="spinner" style={{ display: submitting ? 'inline-block' : 'none' }} />
            <span>
              {submitting
                ? 'Submitting...'
                : matchedName
                  ? 'Submit to sheet'
                  : 'Enter name first'}
            </span>
          </span>
        </button>

        <div className={`toast ${toast.message ? toast.type : ''}`} style={{ display: toast.message ? 'block' : 'none' }}>
          {toast.message}
        </div>

        <p className="required-note">
          <span>*</span> All fields must be filled in
        </p>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
