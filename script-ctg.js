// ===== GLOBAL VARIABLES =====
let currentStep = 1;
let completedSteps = []; // Track completed steps
let selectedDeviceTypes = [];
let selectedCountries = [];
let selectedCities = [];
let selectedDevices = {};
let selectedPlan = 'yearly';
let selectedAddons = [];
let activeFilters = [];
let totalAmount = 0;

// ===== DEVICE DATA =====
const deviceData = [
  { id: 1, name: "Galaxy S9 Plus", country: "Australia", city: "Sydney", type: "android", network: "WiFi", audio: false },
  { id: 2, name: "iPhone 11", country: "Australia", city: "Sydney", type: "ios", network: "WiFi", audio: false },
  { id: 3, name: "Safari", country: "Australia", city: "Sydney", type: "safari", network: "WiFi", audio: false },
  { id: 4, name: "iPhone 13", country: "Australia", city: "Sydney", type: "ios", network: "SIM", audio: false },
  { id: 5, name: "Chrome", country: "Australia", city: "Sydney", type: "chrome", network: "WiFi", audio: false },
  { id: 6, name: "Microsoftedge", country: "Australia", city: "Sydney", type: "microsoftedge", network: "WiFi", audio: false },
  { id: 7, name: "Opera", country: "Australia", city: "Sydney", type: "opera", network: "WiFi", audio: false },
  { id: 8, name: "Galaxy Tab S7", country: "Australia", city: "Sydney", type: "android", network: "WiFi", audio: false },
  { id: 9, name: "Galaxy Tab S8+", country: "Australia", city: "Sydney", type: "android", network: "WiFi", audio: false },
  { id: 10, name: "Firefox", country: "Australia", city: "Sydney", type: "firefox", network: "WiFi", audio: false },
  { id: 11, name: "Chrome", country: "Benin", city: "Cotonou", type: "chrome", network: "WiFi", audio: false },
  { id: 12, name: "Galaxy S21 5G", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
  { id: 13, name: "iPhone XS", country: "Brazil", city: "São Paulo", type: "ios", network: "WiFi", audio: false },
  { id: 14, name: "Galaxy A12", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
  { id: 15, name: "Galaxy Tab A10.1", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
  { id: 16, name: "iPhone 8", country: "Brazil", city: "São Paulo", type: "ios", network: "WiFi", audio: false },
  { id: 17, name: "Galaxy A30s", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
  { id: 18, name: "Galaxy S20 FE", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
  { id: 19, name: "Samsung galaxy s10", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
  { id: 20, name: "moto g8 play", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
  { id: 21, name: "Firefox", country: "Brazil", city: "São Paulo", type: "firefox", network: "WiFi", audio: false },
  { id: 22, name: "Galaxy S21 5G", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
  { id: 23, name: "Galaxy A30s", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
  { id: 24, name: "Galaxy S21 5G", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
  { id: 25, name: "Galaxy Tab S5e", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
  { id: 26, name: "Galaxy A11", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
  { id: 27, name: "Galaxy A50", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
  { id: 28, name: "Samsung galaxy s10", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
  { id: 29, name: "iPhone XR", country: "Brazil", city: "São Paulo", type: "ios", network: "WiFi", audio: false },
  { id: 30, name: "iPad Air (3rd Gen)", country: "Brazil", city: "São Paulo", type: "ios", network: "WiFi", audio: true },
  { id: 31, name: "Galaxy S21 5G", country: "Canada", city: "Toronto", type: "android", network: "SIM", audio: false },
  { id: 32, name: "Galaxy S21 5G", country: "Canada", city: "Toronto", type: "android", network: "WiFi", audio: false },
  { id: 33, name: "Safari", country: "Canada", city: "Toronto", type: "safari", network: "WiFi", audio: false },
  { id: 34, name: "Galaxy A8", country: "Canada", city: "Toronto", type: "android", network: "WiFi", audio: false },
  { id: 35, name: "Moto G7", country: "Canada", city: "Toronto", type: "android", network: "WiFi", audio: false },
  { id: 36, name: "Galaxy S20 FE 5G", country: "Canada", city: "Toronto", type: "android", network: "WiFi", audio: false },
  { id: 37, name: "Galaxy S21 5G", country: "Canada", city: "Toronto", type: "android", network: "WiFi", audio: false },
  { id: 38, name: "OnePlus 6T", country: "Canada", city: "Toronto", type: "android", network: "WiFi", audio: false },
  { id: 39, name: "Pixel 3", country: "Canada", city: "Toronto", type: "android", network: "WiFi", audio: false },
  { id: 40, name: "Galaxy S20 5G", country: "Canada", city: "Toronto", type: "android", network: "WiFi", audio: false },
  { id: 41, name: "iPhone 12", country: "Canada", city: "Toronto", type: "ios", network: "WiFi", audio: false },
  { id: 42, name: "iPhone 11", country: "Canada", city: "Toronto", type: "ios", network: "WiFi", audio: true },
  { id: 43, name: "Safari", country: "Czech Republic", city: "Prague", type: "safari", network: "WiFi", audio: false },
  { id: 44, name: "Safari", country: "Czech Republic", city: "Prague", type: "safari", network: "WiFi", audio: false },
  { id: 45, name: "iPhone 11", country: "France", city: "Paris", type: "ios", network: "WiFi", audio: true },
  { id: 46, name: "Galaxy A54", country: "France", city: "Paris", type: "android", network: "WiFi", audio: true },
  { id: 47, name: "Pixel 4", country: "Germany", city: "Leverkusen", type: "android", network: "WiFi", audio: false },
  { id: 48, name: "Galaxy A12", country: "Germany", city: "Leverkusen", type: "android", network: "WiFi", audio: false },
  { id: 49, name: "Samsung J5 (2016)", country: "Germany", city: "Leverkusen", type: "android", network: "WiFi", audio: false },
  { id: 50, name: "Chrome", country: "Germany", city: "Leverkusen", type: "chrome", network: "WiFi", audio: false },
  { id: 51, name: "iPhone XS Max", country: "Germany", city: "Leverkusen", type: "ios", network: "SIM", audio: false },
  { id: 52, name: "Safari", country: "Germany", city: "Leverkusen", type: "safari", network: "WiFi", audio: false },
  { id: 53, name: "Microsoftedge", country: "Germany", city: "Leverkusen", type: "microsoftedge", network: "WiFi", audio: false },
  { id: 54, name: "iPhone 12", country: "Great Britain", city: "London", type: "ios", network: "WiFi", audio: false },
  { id: 55, name: "Galaxy S20 FE", country: "Great Britain", city: "London", type: "android", network: "SIM", audio: false },
  { id: 56, name: "Galaxy S20 FE", country: "Great Britain", city: "London", type: "android", network: "SIM", audio: false },
  { id: 57, name: "iPhone 12", country: "Great Britain", city: "London", type: "ios", network: "SIM", audio: false },
  { id: 58, name: "Pixel 6", country: "Great Britain", city: "London", type: "android", network: "SIM", audio: false },
  { id: 59, name: "OnePlus 9 Pro", country: "Great Britain", city: "London", type: "android", network: "WiFi", audio: false },
  { id: 60, name: "iPhone SE 2", country: "Great Britain", city: "London", type: "ios", network: "WiFi", audio: false },
  { id: 61, name: "Galaxy J5", country: "Great Britain", city: "London", type: "android", network: "WiFi", audio: false },
  { id: 62, name: "Galaxy S9 Plus", country: "Great Britain", city: "London", type: "android", network: "WiFi", audio: false },
  { id: 63, name: "iPhone 8 Plus", country: "Great Britain", city: "London", type: "ios", network: "WiFi", audio: false },
  { id: 64, name: "Chrome", country: "Great Britain", city: "London", type: "chrome", network: "WiFi", audio: false },
  { id: 65, name: "iPad Pro (10.5-inch)", country: "Great Britain", city: "London", type: "ios", network: "WiFi", audio: false },
  { id: 66, name: "iPad (9th Gen)", country: "Great Britain", city: "London", type: "ios", network: "WiFi", audio: false },
  { id: 67, name: "iPhone XS", country: "Great Britain", city: "London", type: "ios", network: "WiFi", audio: false },
  { id: 68, name: "Chrome", country: "Hong Kong", city: "Hong Kong", type: "chrome", network: "WiFi", audio: false },
  { id: 69, name: "Galaxy A50", country: "Hong Kong", city: "Hong Kong", type: "android", network: "WiFi", audio: false },
  { id: 70, name: "iPhone 11", country: "Hong Kong", city: "Hong Kong", type: "ios", network: "WiFi", audio: false },
  { id: 71, name: "Galaxy A35", country: "Hong Kong", city: "Hong Kong", type: "android", network: "WiFi", audio: false },
  { id: 72, name: "Pixel 4a", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 73, name: "Galaxy A32", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 74, name: "Galaxy S21 FE 5G", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 75, name: "Galaxy A13", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 76, name: "Galaxy M31s", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 77, name: "Galaxy M52 5G", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 78, name: "Samsung J6 Plus", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 79, name: "Chrome", country: "India", city: "Bangalore", type: "chrome", network: "WiFi", audio: false },
  { id: 80, name: "iPhone 7 Plus", country: "India", city: "Bangalore", type: "ios", network: "WiFi", audio: false },
  { id: 81, name: "vivo Y21", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 82, name: "Vivo Y55s", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 83, name: "Galaxy A33 5G", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 84, name: "Galaxy S22", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 85, name: "iPhone 12", country: "India", city: "Bangalore", type: "ios", network: "WiFi", audio: false },
  { id: 86, name: "V11 Pro", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 87, name: "Samsung M51", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 88, name: "Galaxy S22", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 89, name: "Mi A1", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 90, name: "Galaxy A33 5G", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 91, name: "Y15s", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 92, name: "Firefox", country: "India", city: "Bangalore", type: "firefox", network: "WiFi", audio: false },
  { id: 93, name: "Galaxy A53 5G", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 94, name: "iPhone 12 Pro", country: "India", city: "Bangalore", type: "ios", network: "WiFi", audio: false },
  { id: 95, name: "Moto G22", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 96, name: "Firefox", country: "India", city: "Bangalore", type: "firefox", network: "WiFi", audio: false },
  { id: 97, name: "Redmi Note 5 Pro", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 98, name: "Redmi Note 11 Pro", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 99, name: "Galaxy J7 Nxt", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 100, name: "Redmi Note 5 Pro", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 101, name: "Galaxy A13", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
  { id: 102, name: "iPhone 6", country: "Indonesia", city: "Jakarta", type: "ios", network: "WiFi", audio: false },
  { id: 103, name: "Safari", country: "Indonesia", city: "Jakarta", type: "safari", network: "WiFi", audio: false },
  { id: 104, name: "iPhone 11", country: "Indonesia", city: "Jakarta", type: "ios", network: "WiFi", audio: false },
  { id: 105, name: "Redmi 6A", country: "Indonesia", city: "Jakarta", type: "android", network: "WiFi", audio: false },
  { id: 106, name: "Galaxy A23", country: "Indonesia", city: "Jakarta", type: "android", network: "WiFi", audio: false },
  { id: 107, name: "iPhone 6", country: "Indonesia", city: "Jakarta", type: "ios", network: "WiFi", audio: false },
  { id: 108, name: "Galaxy A33 5G", country: "Indonesia", city: "Jakarta", type: "android", network: "WiFi", audio: false },
  { id: 109, name: "Microsoftedge", country: "Indonesia", city: "Jakarta", type: "microsoftedge", network: "WiFi", audio: false },
  { id: 110, name: "iPhone 11", country: "Indonesia", city: "Jakarta", type: "ios", network: "WiFi", audio: false },
  { id: 111, name: "Realme C15", country: "Indonesia", city: "Jakarta", type: "android", network: "WiFi", audio: false },
  { id: 112, name: "Galaxy S22", country: "Indonesia", city: "Jakarta", type: "android", network: "WiFi", audio: false },
  { id: 113, name: "Y30", country: "Indonesia", city: "Jakarta", type: "android", network: "WiFi", audio: false },
  { id: 114, name: "Opera", country: "Indonesia", city: "Jakarta", type: "opera", network: "WiFi", audio: false },
  { id: 115, name: "Galaxy A23", country: "Indonesia", city: "Jakarta", type: "android", network: "WiFi", audio: false },
  { id: 116, name: "Galaxy A23", country: "Indonesia", city: "Jakarta", type: "android", network: "WiFi", audio: false },
  { id: 117, name: "Galaxy S20 FE 5G", country: "Ireland", city: "Dublin", type: "android", network: "WiFi", audio: false },
  { id: 118, name: "Galaxy A54", country: "Ireland", city: "Dublin", type: "android", network: "WiFi", audio: false },
  { id: 119, name: "Chrome", country: "Japan", city: "Tokyo", type: "chrome", network: "WiFi", audio: false },
  { id: 120, name: "ipad (6th Gen)", country: "Japan", city: "Tokyo", type: "ios", network: "WiFi", audio: true },
  { id: 121, name: "Sharp Aquos Sense", country: "Japan", city: "Tokyo", type: "android", network: "WiFi", audio: false },
  { id: 122, name: "Sharp Aquos Sense", country: "Japan", city: "Tokyo", type: "android", network: "WiFi", audio: true },
  { id: 123, name: "Aquos Sense 3", country: "Japan", city: "Tokyo", type: "android", network: "WiFi", audio: false },
  { id: 124, name: "Aquos Sense 3", country: "Japan", city: "Tokyo", type: "android", network: "WiFi", audio: false },
  { id: 125, name: "Pixel 3a", country: "Japan", city: "Tokyo", type: "android", network: "WiFi", audio: true },
  { id: 126, name: "Asus Zenfone Max Pro (M2)", country: "Japan", city: "Tokyo", type: "android", network: "WiFi", audio: false },
  { id: 127, name: "Xperia Ace", country: "Japan", city: "Tokyo", type: "android", network: "WiFi", audio: true },
  { id: 128, name: "Sony Xperia XZ1", country: "Japan", city: "Tokyo", type: "android", network: "WiFi", audio: false },
  { id: 129, name: "Galaxy S21 Ultra 5G", country: "Japan", city: "Tokyo", type: "android", network: "WiFi", audio: false },
  { id: 130, name: "Galaxy A51", country: "Japan", city: "Tokyo", type: "android", network: "WiFi", audio: true },
  { id: 131, name: "iPhone XR", country: "Japan", city: "Tokyo", type: "ios", network: "WiFi", audio: true },
  { id: 132, name: "Galaxy S10 5G", country: "Japan", city: "Tokyo", type: "android", network: "WiFi", audio: true },
  { id: 133, name: "Galaxy A25 5G", country: "Malaysia", city: "Kuala Lumpur", type: "android", network: "WiFi", audio: false },
  { id: 134, name: "Galaxy A16 5G", country: "Malaysia", city: "Kuala Lumpur", type: "android", network: "WiFi", audio: false },
  { id: 135, name: "Galaxy A23", country: "Malaysia", city: "Kuala Lumpur", type: "android", network: "WiFi", audio: false },
  { id: 136, name: "Galaxy A23", country: "Malaysia", city: "Kuala Lumpur", type: "android", network: "WiFi", audio: false },
  { id: 137, name: "Firefox", country: "Netherlands", city: "The Hague", type: "firefox", network: "WiFi", audio: false },
  { id: 138, name: "Galaxy Note 3", country: "Nigeria", city: "Lagos", type: "android", network: "WiFi", audio: false },
  { id: 139, name: "Pixel 2", country: "Philippines", city: "Manila", type: "android", network: "WiFi", audio: false },
  { id: 140, name: "Galaxy S10+", country: "Philippines", city: "Manila", type: "android", network: "WiFi", audio: false },
  { id: 141, name: "Galaxy A73 5G", country: "Philippines", city: "Manila", type: "android", network: "WiFi", audio: false },
  { id: 142, name: "Galaxy A72", country: "Philippines", city: "Manila", type: "android", network: "WiFi", audio: false },
  { id: 143, name: "iPhone XR", country: "Singapore", city: "Singapore", type: "ios", network: "WiFi", audio: false },
  { id: 144, name: "iPhone 12", country: "South Africa", city: "Johannesburg", type: "ios", network: "WiFi", audio: false },
  { id: 145, name: "iPhone XS", country: "South Africa", city: "Johannesburg", type: "ios", network: "WiFi", audio: false },
  { id: 146, name: "Galaxy S21 5G", country: "South Korea", city: "Seoul", type: "android", network: "WiFi", audio: false },
  { id: 147, name: "Galaxy S8", country: "South Korea", city: "Seoul", type: "android", network: "WiFi", audio: false },
  { id: 148, name: "Galaxy S22", country: "South Korea", city: "Seoul", type: "android", network: "WiFi", audio: false },
  { id: 149, name: "Galaxy S21 5G", country: "South Korea", city: "Seoul", type: "android", network: "WiFi", audio: false },
  { id: 150, name: "Galaxy S22 Ultra 5G", country: "South Korea", city: "Seoul", type: "android", network: "WiFi", audio: false },
  { id: 151, name: "Galaxy S21 5G", country: "South Korea", city: "Seoul", type: "android", network: "WiFi", audio: false },
  { id: 152, name: "Galaxy S22", country: "South Korea", city: "Seoul", type: "android", network: "WiFi", audio: false },
  { id: 153, name: "Galaxy S20 5G", country: "South Korea", city: "Seoul", type: "android", network: "WiFi", audio: false },
  { id: 154, name: "Galaxy Note10 Plus 5G", country: "South Korea", city: "Seoul", type: "android", network: "WiFi", audio: false },
  { id: 155, name: "Chrome", country: "South Korea", city: "Seoul", type: "chrome", network: "WiFi", audio: false },
  { id: 156, name: "iPhone 11 Pro", country: "South Korea", city: "Seoul", type: "ios", network: "WiFi", audio: false },
  { id: 157, name: "Galaxy A50", country: "South Korea", city: "Seoul", type: "android", network: "WiFi", audio: false },
  { id: 158, name: "iPhone 11", country: "South Korea", city: "Seoul", type: "ios", network: "WiFi", audio: false },
  { id: 159, name: "Samsung galaxy s10", country: "South Korea", city: "Seoul", type: "android", network: "WiFi", audio: false },
  { id: 160, name: "Reno2 Z", country: "Taiwan", city: "Taipei", type: "android", network: "WiFi", audio: false },
  { id: 161, name: "Galaxy A23", country: "Thailand", city: "Bangkok", type: "android", network: "WiFi", audio: false },
  { id: 162, name: "iPhone XS", country: "Thailand", city: "Bangkok", type: "ios", network: "WiFi", audio: false },
  { id: 163, name: "Pixel 4 XL", country: "Thailand", city: "Bangkok", type: "android", network: "WiFi", audio: false },
  { id: 164, name: "Galaxy J6 Plus", country: "Thailand", city: "Bangkok", type: "android", network: "WiFi", audio: false },
  { id: 165, name: "Galaxy A23", country: "Thailand", city: "Bangkok", type: "android", network: "WiFi", audio: false },
  { id: 166, name: "Vivo Y93", country: "Thailand", city: "Bangkok", type: "android", network: "WiFi", audio: false },
  { id: 167, name: "iPhone 11", country: "Turkey", city: "Istanbul", type: "ios", network: "WiFi", audio: false },
  { id: 168, name: "Chrome", country: "United Arab Emirates", city: "Dubai", type: "chrome", network: "WiFi", audio: false },
  { id: 169, name: "Galaxy S9", country: "United Arab Emirates", city: "Dubai", type: "android", network: "WiFi", audio: false },
  { id: 170, name: "Chrome", country: "United Arab Emirates", city: "Dubai", type: "chrome", network: "WiFi", audio: false },
  { id: 171, name: "Pixel 5", country: "US", city: "Chicago", type: "android", network: "WiFi", audio: false },
  { id: 172, name: "Google Pixel 3a XL", country: "US", city: "Riverside", type: "android", network: "SIM", audio: false },
  { id: 173, name: "Pixel 4a", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 174, name: "iPad", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 175, name: "Pixel 8", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 176, name: "Galaxy Z Fold 5", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 177, name: "Galaxy S10 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 178, name: "Galaxy S20 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 179, name: "Firefox", country: "US", city: "Sunnyvale", type: "firefox", network: "WiFi", audio: false },
  { id: 180, name: "Chrome", country: "US", city: "Riverside", type: "chrome", network: "WiFi", audio: false },
  { id: 181, name: "Fire TV Stick 4K", country: "US", city: "Sunnyvale", type: "android", network: "WiFi", audio: false },
  { id: 182, name: "Galaxy S21 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 183, name: "Pixel 7a", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 184, name: "Google Pixel 3a XL", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 185, name: "iPhone 12", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 186, name: "Galaxy S22 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 187, name: "Pixel 4", country: "US", city: "Sunnyvale", type: "android", network: "WiFi", audio: false },
  { id: 188, name: "Pixel 4 XL", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 189, name: "iPhone XS Max", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
  { id: 190, name: "Safari", country: "US", city: "Sunnyvale", type: "safari", network: "WiFi", audio: false },
  { id: 191, name: "iPhone XR", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 192, name: "Galaxy S22 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 193, name: "iPad Pro 11in (3rd Gen)", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 194, name: "Galaxy S21 5G", country: "US", city: "Riverside", type: "android", network: "SIM", audio: false },
  { id: 195, name: "iPhone SE 2", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 196, name: "Chrome", country: "US", city: "Sunnyvale", type: "chrome", network: "WiFi", audio: false },
  { id: 197, name: "Galaxy S24", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: true },
  { id: 198, name: "iPhone 11 Pro Max", country: "US", city: "Chicago", type: "ios", network: "SIM", audio: false },
  { id: 199, name: "Pixel 4", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 200, name: "iPhone SE 2", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 201, name: "iPhone 8", country: "US", city: "Newark", type: "ios", network: "WiFi", audio: false },
  { id: 202, name: "iPhone 12", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 203, name: "Tab A 10.1", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 204, name: "Opera", country: "US", city: "Chicago", type: "opera", network: "WiFi", audio: false },
  { id: 205, name: "iPhone13 ProMax", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
  { id: 206, name: "Firefox", country: "US", city: "Sunnyvale", type: "firefox", network: "WiFi", audio: false },
  { id: 207, name: "Fire TV Stick 4K", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 208, name: "Fire TV Stick 4K", country: "US", city: "Sunnyvale", type: "android", network: "WiFi", audio: false },
  { id: 209, name: "Pixel 3", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 210, name: "Fire TV Stick 4K", country: "US", city: "Sunnyvale", type: "android", network: "WiFi", audio: false },
  { id: 211, name: "Galaxy Note10 Plus 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 212, name: "Galaxy S7", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 213, name: "iPhone 12", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 214, name: "Galaxy S20 FE 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 215, name: "Pixel 5", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 216, name: "Opera", country: "US", city: "Riverside", type: "opera", network: "WiFi", audio: false },
  { id: 217, name: "Galaxy S23 Ultra", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 218, name: "Safari", country: "US", city: "Riverside", type: "safari", network: "WiFi", audio: false },
  { id: 219, name: "iPhone XR", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 220, name: "iPhone 11 Pro", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 221, name: "iPhone 11 Pro", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
  { id: 222, name: "iPad Pro 11in (3rd Gen)", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 223, name: "Pixel 4", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 224, name: "Galaxy A52", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 225, name: "Galaxy S9", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 226, name: "Galaxy S20 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 227, name: "iPhone 12", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 228, name: "e5 cruise", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 229, name: "Firefox", country: "US", city: "Palo Alto", type: "firefox", network: "WiFi", audio: false },
  { id: 230, name: "Pixel 4", country: "US", city: "Riverside", type: "android", network: "SIM", audio: false },
  { id: 231, name: "iPhone 14", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
  { id: 232, name: "Galaxy A40", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 233, name: "iPhone SE 2", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 234, name: "Tab A 10.1", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 235, name: "LG V30", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 236, name: "iPhone 14", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 237, name: "Galaxy S20 FE", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 238, name: "Google Pixel 3a XL", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 239, name: "iPhone SE 2", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 240, name: "Pixel 2", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 241, name: "Galaxy S23 Ultra", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 242, name: "iPhone XS Max", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
  { id: 243, name: "Galaxy S9", country: "US", city: "Riverside", type: "android", network: "SIM", audio: false },
  { id: 244, name: "Galaxy A20", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 245, name: "iPad Pro(12.9in 6th Gen)", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
  { id: 246, name: "Firefox", country: "US", city: "Sunnyvale", type: "firefox", network: "WiFi", audio: false },
  { id: 247, name: "PH-1", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 248, name: "Pixel 4", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 249, name: "Safari", country: "US", city: "Riverside", type: "safari", network: "WiFi", audio: false },
  { id: 250, name: "iPhone 8 Plus", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
  { id: 251, name: "Safari", country: "US", city: "Riverside", type: "safari", network: "WiFi", audio: false },
  { id: 252, name: "iPhone 13", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
  { id: 253, name: "Pixel 4 XL", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 254, name: "Chrome", country: "US", city: "Sunnyvale", type: "chrome", network: "WiFi", audio: false },
  { id: 255, name: "Galaxy S20+ 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 256, name: "Galaxy S10", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 257, name: "iPhone13 ProMax", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 258, name: "Firefox", country: "US", city: "Palo Alto", type: "firefox", network: "WiFi", audio: false },
  { id: 259, name: "Safari", country: "US", city: "Newark", type: "safari", network: "WiFi", audio: false },
  { id: 260, name: "Firefox", country: "US", city: "Chicago", type: "firefox", network: "WiFi", audio: false },
  { id: 261, name: "iPhone 11 Pro Max", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 262, name: "Galaxy S24 Ultra", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 263, name: "iPhone 14 Pro", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 264, name: "Pixel 2", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 265, name: "iPhone 11 Pro", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
  { id: 266, name: "Safari", country: "US", city: "Riverside", type: "safari", network: "WiFi", audio: false },
  { id: 267, name: "iPhone 12", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 268, name: "Galaxy A53 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 269, name: "Galaxy S7 Edge", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 270, name: "iPhone X", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 271, name: "Chrome", country: "US", city: "Chicago", type: "chrome", network: "WiFi", audio: false },
  { id: 272, name: "iPhone 6S", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 273, name: "Galaxy S20+ 5G", country: "US", city: "Riverside", type: "android", network: "SIM", audio: false },
  { id: 274, name: "Galaxy S23", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 275, name: "iPhone XR", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 276, name: "Galaxy S10", country: "US", city: "Riverside", type: "android", network: "SIM", audio: false },
  { id: 277, name: "LG K51", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 278, name: "Firefox", country: "US", city: "Newark", type: "firefox", network: "WiFi", audio: false },
  { id: 279, name: "Galaxy Note 3", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 280, name: "iPhone 11 Pro Max", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 281, name: "Galaxy S20+ 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 282, name: "Microsoftedge", country: "US", city: "Riverside", type: "microsoftedge", network: "WiFi", audio: false },
  { id: 283, name: "Galaxy A10e", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 284, name: "Galaxy S9", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 285, name: "Google Pixel 3a XL", country: "US", city: "Sunnyvale", type: "android", network: "WiFi", audio: true },
  { id: 286, name: "Galaxy S10", country: "US", city: "Sunnyvale", type: "android", network: "WiFi", audio: true },
  { id: 287, name: "Microsoftedge", country: "US", city: "Palo Alto", type: "microsoftedge", network: "WiFi", audio: false },
  { id: 288, name: "Fire TV Stick (Gen 3)", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 289, name: "moto g pure", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 290, name: "Galaxy A20", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 291, name: "iPhone 8 Plus", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 292, name: "Safari", country: "US", city: "Sunnyvale", type: "safari", network: "WiFi", audio: false },
  { id: 293, name: "Galaxy S23", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 294, name: "Apple TV 4K (2nd gen)", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 295, name: "Apple TV 4K (2nd gen)", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 296, name: "Galaxy S21 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 297, name: "Microsoftedge", country: "US", city: "Chicago", type: "microsoftedge", network: "WiFi", audio: false },
  { id: 298, name: "Apple TV 4K (2nd gen)", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 299, name: "Microsoftedge", country: "US", city: "Riverside", type: "microsoftedge", network: "WiFi", audio: false },
  { id: 300, name: "iPhone 6 Plus", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 301, name: "Galaxy S10", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 302, name: "iPhone 12 Mini", country: "US", city: "Chicago", type: "ios", network: "SIM", audio: true },
  { id: 303, name: "Tab A 8.0", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 304, name: "Pixel 4", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 305, name: "Safari", country: "US", city: "Sunnyvale", type: "safari", network: "WiFi", audio: false },
  { id: 306, name: "iPhone XS", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 307, name: "iPhone 12", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 308, name: "Galaxy S23+", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 309, name: "Samsung Galaxy S10+", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 310, name: "iPhone 13", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 311, name: "Opera", country: "US", city: "Riverside", type: "opera", network: "WiFi", audio: false },
  { id: 312, name: "Fire 8 HD", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 313, name: "Galaxy S8", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 314, name: "Galaxy S10e", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 315, name: "iPhone 11", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 316, name: "Pixel 5", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 317, name: "Chrome", country: "US", city: "Riverside", type: "chrome", network: "WiFi", audio: false },
  { id: 318, name: "Fire HD Tab", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 319, name: "Microsoftedge", country: "US", city: "Sunnyvale", type: "microsoftedge", network: "WiFi", audio: false },
  { id: 320, name: "iPhone 8", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 321, name: "Stylo 6", country: "US", city: "Riverside", type: "android", network: "SIM", audio: false },
  { id: 322, name: "iPhone XR", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 323, name: "Chrome", country: "US", city: "Riverside", type: "chrome", network: "WiFi", audio: false },
  { id: 324, name: "Microsoftedge", country: "US", city: "Palo Alto", type: "microsoftedge", network: "WiFi", audio: false },
  { id: 325, name: "iPhone 15", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 326, name: "iPhone 11", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
  { id: 327, name: "Microsoftedge", country: "US", city: "Sunnyvale", type: "microsoftedge", network: "WiFi", audio: false },
  { id: 328, name: "iPhone 8 Plus", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 329, name: "iPhone XR", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 330, name: "Chrome", country: "US", city: "Riverside", type: "chrome", network: "WiFi", audio: false },
  { id: 331, name: "iPhone XR", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 332, name: "Galaxy A52", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 333, name: "Pixel 5", country: "US", city: "Sunnyvale", type: "android", network: "WiFi", audio: true },
  { id: 334, name: "iPhone SE 2", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 335, name: "Galaxy S10", country: "US", city: "Riverside", type: "android", network: "SIM", audio: false },
  { id: 336, name: "Galaxy S10", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 337, name: "iPhone X", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 338, name: "iPhone SE 2", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 339, name: "Samsung Galaxy S10+", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 340, name: "Galaxy A53 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 341, name: "Galaxy S23", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 342, name: "iPhone SE 2", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 343, name: "Samsung Galaxy S10+", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
  { id: 344, name: "iPad Mini 4", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
  { id: 345, name: "Google Pixel 3a XL", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false }
];


// ===== COUNTRY DATA =====
const countryData = {
    'Australia': ['Sydney'],
    'Benin': ['Cotonou'],
    'Brazil': ['São Paulo'],
    'Canada': ['Toronto'],
    'Czech Republic': ['Prague'],
    'France': ['Paris'],
    'Germany': ['Leverkusen'],
    'Great Britain': ['London'],
    'Hong Kong': ['Hong Kong'],
    'India': ['Bangalore'],
    'Indonesia': ['Jakarta'],
    'Ireland': ['Dublin'],
    'Japan': ['Tokyo'],
    'Malaysia': ['Kuala Lumpur'],
    'Netherlands': ['The Hague'],
    'Nigeria': ['Lagos'],
    'Philippines': ['Manila'],
    'Singapore': ['Singapore'],
    'South Africa': ['Johannesburg'],
    'South Korea': ['Seoul'],
    'Taiwan': ['Taipei'],
    'Thailand': ['Bangkok'],
    'Turkey': ['Istanbul'],
    'United Arab Emirates': ['Dubai'],
    'US': ['Atlanta', 'Chicago', 'Newark', 'Palo Alto', 'Riverside', 'Sunnyvale']
};



// ===== UTILITY FUNCTIONS =====
function showLoading() {
    document.getElementById('loadingOverlay').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loadingOverlay').style.display = 'none';
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);
    
    if (field) {
        field.classList.add('error');
    }
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);
    
    if (field) {
        field.classList.remove('error');
    }
    
    if (errorElement) {
        errorElement.classList.remove('show');
    }
}

function clearAllErrors() {
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.error-message.show').forEach(el => el.classList.remove('show'));
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    // Remove all spaces, dashes, parentheses, and plus signs for validation
    const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, '');
    // Check if it's empty (optional field) or contains only digits and is reasonable length
    return phone === '' || (/^\d{7,15}$/.test(cleanPhone));
}

// ===== NAVIGATION FUNCTIONS =====
function updateProgressBar() {
    const progress = (currentStep / 7) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    
    // Update step indicators
    document.querySelectorAll('.step').forEach((step, index) => {
        const stepNumber = index + 1;
        
        // Remove all classes first
        step.classList.remove('active', 'completed');
        
        if (stepNumber === currentStep) {
            step.classList.add('active');
        } else if (completedSteps.includes(stepNumber)) {
            step.classList.add('completed');
        }
        
        // Ensure completed steps are clickable
        if (completedSteps.includes(stepNumber) && stepNumber !== currentStep) {
            step.style.cursor = 'pointer';
        } else {
            step.style.cursor = 'default';
        }
    });
}

function markStepAsCompleted(stepNumber) {
    if (!completedSteps.includes(stepNumber)) {
        completedSteps.push(stepNumber);
    }
}

function setupStepNavigation() {
    document.querySelectorAll('.step').forEach((step, index) => {
        const stepNumber = index + 1;
        
        step.addEventListener('click', function() {
            // Only allow navigation to completed steps or previous steps
            if (completedSteps.includes(stepNumber) && stepNumber < currentStep) {
                goToStep(stepNumber);
            }
        });
    });
}

function nextStep(step) {
    if (validateCurrentStep()) {
        // Mark current step as completed before moving to next
        markStepAsCompleted(currentStep);
        
        showLoading();
        
        setTimeout(() => {
            hideLoading();
            
            // Hide current step
            document.getElementById(`step${currentStep}`).classList.remove('active');
            
            // Show next step
            document.getElementById(`step${step}`).classList.add('active');
            
            currentStep = step;
            updateProgressBar();
            
            // Trigger step-specific actions
            switch(step) {
                case 3:
                    loadAvailableCountries();
                    break;
                case 4:
                    loadCitySelections();
                    break;
                case 5:
                    loadDevices();
                    break;
                case 6:
                    updatePricingSummary();
                    updateAddonPricing();
                    break;
                case 7:
                    loadFinalSummary();
                    break;
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 500);
    }
}

function goToStep(targetStep) {
    // Only allow going to completed steps or previous steps
    if (!completedSteps.includes(targetStep) && targetStep >= currentStep) {
        return;
    }
    
    clearAllErrors();
    
    // Hide current step
    document.getElementById(`step${currentStep}`).classList.remove('active');
    
    // Show target step
    document.getElementById(`step${targetStep}`).classList.add('active');
    
    currentStep = targetStep;
    updateProgressBar();
    
    // Trigger step-specific actions for the target step
    switch(targetStep) {
        case 3:
            loadAvailableCountries();
            break;
        case 4:
            loadCitySelections();
            break;
        case 5:
            loadDevices();
            break;
        case 6:
            updatePricingSummary();
            updateAddonPricing();
            break;
        case 7:
            loadFinalSummary();
            break;
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevStep(step) {
    clearAllErrors();
    
    // Hide current step
    document.getElementById(`step${currentStep}`).classList.remove('active');
    
    // Show previous step
    document.getElementById(`step${step}`).classList.add('active');
    
    currentStep = step;
    updateProgressBar();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function validateCurrentStep() {
    clearAllErrors();
    let isValid = true;
    
    switch(currentStep) {
        case 1:
            isValid = validateStep1();
            break;
        case 2:
            isValid = validateStep2();
            break;
        case 3:
            isValid = validateStep3();
            break;
        case 4:
            isValid = validateStep4();
            break;
        case 5:
            isValid = validateStep5();
            break;
        default:
            isValid = true;
    }
    
    return isValid;
}

// ===== STEP VALIDATION FUNCTIONS =====
function validateStep1() {
    let isValid = true;
    
    const fullName = document.getElementById('fullName').value.trim();
    const businessEmail = document.getElementById('businessEmail').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const organizationName = document.getElementById('organizationName').value.trim();
    
    if (!fullName) {
        showError('fullName', 'Full name is required');
        isValid = false;
    }
    
    if (!businessEmail) {
        showError('businessEmail', 'Business email is required');
        isValid = false;
    } else if (!validateEmail(businessEmail)) {
        showError('businessEmail', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!phoneNumber) {
        showError('phoneNumber', 'Phone number is required');
        isValid = false;
    } else if (!validatePhone(phoneNumber)) {
        showError('phoneNumber', 'Please enter a valid phone number (numbers only, 7-15 digits)');
        isValid = false;
    }
    
    if (!organizationName) {
        showError('organizationName', 'Organization name is required');
        isValid = false;
    }
    
    return isValid;
}

function validateStep2() {
    if (selectedDeviceTypes.length === 0) {
        showError('deviceType', 'Please select at least one device type');
        return false;
    }
    return true;
}

function validateStep3() {
    if (selectedCountries.length === 0) {
        showError('country', 'Please select at least one country');
        return false;
    }
    return true;
}

function validateStep4() {
    if (selectedCities.length === 0) {
        showError('city', 'Please select at least one city');
        return false;
    }
    return true;
}

function validateStep5() {
    if (Object.keys(selectedDevices).length === 0) {
        showError('device', 'Please select at least one device');
        return false;
    }
    return true;
}

// ===== DEVICE TYPE SELECTION =====
function setupDeviceTypeSelection() {
    document.querySelectorAll('.selection-card[data-type]').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.type === 'checkbox') return; // Let checkbox handle its own event
            
            const checkbox = this.querySelector('input[type="checkbox"]');
            const deviceType = this.dataset.type;
            
            checkbox.checked = !checkbox.checked;
            toggleDeviceType(deviceType, checkbox.checked);
        });
        
        const checkbox = card.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', function() {
            const deviceType = card.dataset.type;
            toggleDeviceType(deviceType, this.checked);
        });
    });
}

function toggleDeviceType(type, isChecked) {
    const card = document.querySelector(`[data-type="${type}"]`);
    
    if (isChecked) {
        if (!selectedDeviceTypes.includes(type)) {
            selectedDeviceTypes.push(type);
        }
        card.classList.add('selected');
    } else {
        selectedDeviceTypes = selectedDeviceTypes.filter(t => t !== type);
        card.classList.remove('selected');
    }
    
    updateDeviceTypeButton();
    clearError('deviceType');
}

function updateDeviceTypeButton() {
    const button = document.getElementById('deviceTypeNext');
    button.disabled = selectedDeviceTypes.length === 0;
}

// ===== SELECT ALL COUNTRIES FUNCTIONALITY =====
function setupSelectAllCountries() {
    const selectAllCheckbox = document.getElementById('selectAllCountries');
    const selectAllOption = document.querySelector('.select-all-option');
    
    if (selectAllCheckbox && selectAllOption) {
        // Make the entire select-all-option clickable
        selectAllOption.addEventListener('click', function(e) {
            if (e.target.type !== 'checkbox') {
                selectAllCheckbox.checked = !selectAllCheckbox.checked;
                selectAllCheckbox.dispatchEvent(new Event('change'));
            }
        });
        
        selectAllCheckbox.addEventListener('change', function() {
            const isChecked = this.checked;
            
            // Get all available countries from the grid
            const countryCards = document.querySelectorAll('#countryGrid .selection-card');
            
            countryCards.forEach(card => {
                const checkbox = card.querySelector('input[type="checkbox"]');
                const country = card.dataset.country;
                
                if (checkbox && country) {
                    checkbox.checked = isChecked;
                    toggleCountry(country, isChecked);
                }
            });
        });
    }
}

// ===== COUNTRY SELECTION =====
function loadAvailableCountries() {
    // Get countries that have devices of the selected types
    const availableCountries = [...new Set(
        deviceData
            .filter(device => selectedDeviceTypes.includes(device.type))
            .map(device => device.country)
    )].sort();
    
    const countryGrid = document.getElementById('countryGrid');
    countryGrid.innerHTML = '';
    
    // Create country cards
    availableCountries.forEach(country => {
        const deviceCount = deviceData.filter(device => 
            device.country === country && selectedDeviceTypes.includes(device.type)
        ).length;
        
        const cityCount = countryData[country] ? countryData[country].length : 1;
        
        const card = document.createElement('div');
        card.className = 'selection-card';
        card.dataset.country = country;
        card.innerHTML = `
            <div class="card-icon">
                <i class="fas fa-globe"></i>
            </div>
            <div class="card-content">
                <h3>${country}</h3>
                <p>${cityCount} ${cityCount === 1 ? 'city' : 'cities'}</p>
                <span class="device-count">${deviceCount} devices</span>
            </div>
            <div class="card-checkbox">
                <input type="checkbox" id="country-${country.replace(/\s+/g, '')}" value="${country}">
            </div>
        `;
        
        // Add click event
        card.addEventListener('click', function(e) {
            if (e.target.type === 'checkbox') return;
            
            const checkbox = this.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            toggleCountry(country, checkbox.checked);
        });
        
        // Add checkbox event
        card.querySelector('input[type="checkbox"]').addEventListener('change', function() {
            toggleCountry(country, this.checked);
        });
        
        countryGrid.appendChild(card);
    });
    
    // Setup search functionality
    setupCountrySearch();
    
    // Setup select all functionality
    setupSelectAllCountries();
    
    // Reset selections
    selectedCountries = [];
    updateCountryButton();
    
    // Reset select all checkbox
    const selectAllCheckbox = document.getElementById('selectAllCountries');
    if (selectAllCheckbox) {
        selectAllCheckbox.checked = false;
    }
}

function toggleCountry(country, isChecked) {
    const card = document.querySelector(`[data-country="${country}"]`);
    
    if (isChecked) {
        if (!selectedCountries.includes(country)) {
            selectedCountries.push(country);
        }
        card.classList.add('selected');
    } else {
        selectedCountries = selectedCountries.filter(c => c !== country);
        card.classList.remove('selected');
    }
    
    updateCountryButton();
    clearError('country');
    
    // Update select all checkbox state
    const selectAllCheckbox = document.getElementById('selectAllCountries');
    if (selectAllCheckbox) {
        const allCountryCards = document.querySelectorAll('#countryGrid .selection-card');
        const selectedCountryCards = document.querySelectorAll('#countryGrid .selection-card.selected');
        
        if (selectedCountryCards.length === allCountryCards.length && allCountryCards.length > 0) {
            selectAllCheckbox.checked = true;
        } else {
            selectAllCheckbox.checked = false;
        }
    }
}

function updateCountryButton() {
    const button = document.getElementById('countryNext');
    button.disabled = selectedCountries.length === 0;
}

function setupCountrySearch() {
    const searchInput = document.getElementById('countrySearch');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll('#countryGrid .selection-card');
        
        cards.forEach(card => {
            const countryName = card.querySelector('h3').textContent.toLowerCase();
            if (countryName.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// ===== CITY SELECTION =====
function loadCitySelections() {
    const citySelections = document.getElementById('citySelections');
    citySelections.innerHTML = '';
    
    // Clear previous city selections
    selectedCities = [];
    
    // Get countries that actually have devices with selected device types
    const validCountries = selectedCountries.filter(country => 
        deviceData.some(device => 
            device.country === country && 
            selectedDeviceTypes.includes(device.type)
        )
    );
    
    validCountries.forEach(country => {
        // Get cities for this country that have devices of selected types
        const availableCities = [...new Set(
            deviceData
                .filter(device => 
                    device.country === country && 
                    selectedDeviceTypes.includes(device.type)
                )
                .map(device => device.city)
        )].sort();
        
        if (availableCities.length > 0) {
            const citySection = document.createElement('div');
            citySection.className = 'city-section';
            citySection.innerHTML = `
                <h4>${country} Cities</h4>
                <div class="selection-grid">
                    ${availableCities.map(city => {
                        const deviceCount = deviceData.filter(device => 
                            device.country === country && 
                            device.city === city && 
                            selectedDeviceTypes.includes(device.type)
                        ).length;
                        
                        return `
                            <div class="selection-card" data-city="${city}" data-country="${country}">
                                <div class="card-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="card-content">
                                    <h3>${city}</h3>
                                    <p>${country}</p>
                                    <span class="device-count">${deviceCount} devices</span>
                                </div>
                                <div class="card-checkbox">
                                    <input type="checkbox" id="city-${city}-${country.replace(/\s+/g, '')}" value="${city}">
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
            
            // Add event listeners to city cards
            citySection.querySelectorAll('.selection-card').forEach(card => {
                card.addEventListener('click', function(e) {
                    if (e.target.type === 'checkbox') return;
                    
                    const checkbox = this.querySelector('input[type="checkbox"]');
                    const city = this.dataset.city;
                    
                    checkbox.checked = !checkbox.checked;
                    toggleCity(city, checkbox.checked);
                });
                
                card.querySelector('input[type="checkbox"]').addEventListener('change', function() {
                    const city = card.dataset.city;
                    toggleCity(city, this.checked);
                });
            });
            
            citySelections.appendChild(citySection);
        }
    });
    
    updateCityButton();
}

function toggleCity(city, isChecked) {
    const card = document.querySelector(`[data-city="${city}"]`);
    
    if (isChecked) {
        if (!selectedCities.includes(city)) {
            selectedCities.push(city);
        }
        card.classList.add('selected');
    } else {
        selectedCities = selectedCities.filter(c => c !== city);
        card.classList.remove('selected');
    }
    
    updateCityButton();
    clearError('city');
}

function updateCityButton() {
    const button = document.getElementById('cityNext');
    button.disabled = selectedCities.length === 0;
}

// ===== DEVICE FILTERING =====
function setupDeviceFilters() {
    document.querySelectorAll('.filter-item').forEach(item => {
        item.addEventListener('click', function() {
            const checkbox = this.querySelector('input[type="checkbox"]');
            const filterType = this.dataset.filter;
            
            checkbox.checked = !checkbox.checked;
            
            if (filterType === 'select-all') {
                toggleAllFilters(checkbox.checked);
            } else {
                toggleFilter(filterType, checkbox.checked);
            }
        });
        
        item.querySelector('input[type="checkbox"]').addEventListener('change', function() {
            const filterType = item.dataset.filter;
            
            if (filterType === 'select-all') {
                toggleAllFilters(this.checked);
            } else {
                toggleFilter(filterType, this.checked);
            }
        });
    });
}

function toggleAllFilters(selectAll) {
    const filterItems = document.querySelectorAll('.filter-item:not(.select-all-filters)');
    
    filterItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const filterType = item.dataset.filter;
        
        checkbox.checked = selectAll;
        
        if (selectAll) {
            if (!activeFilters.includes(filterType)) {
                activeFilters.push(filterType);
            }
            item.classList.add('active');
        } else {
            activeFilters = activeFilters.filter(f => f !== filterType);
            item.classList.remove('active');
        }
    });
    
    loadDevices();
}

function toggleFilter(filterType, isActive) {
    const filterItem = document.querySelector(`[data-filter="${filterType}"]`);
    
    if (isActive) {
        if (!activeFilters.includes(filterType)) {
            activeFilters.push(filterType);
        }
        filterItem.classList.add('active');
    } else {
        activeFilters = activeFilters.filter(f => f !== filterType);
        filterItem.classList.remove('active');
    }
    
    // Update select all checkbox state
    updateSelectAllFiltersState();
    
    loadDevices();
}

function updateSelectAllFiltersState() {
    const selectAllCheckbox = document.getElementById('selectAllFilters');
    const individualFilters = ['audio', 'wifi', 'sim'];
    const allSelected = individualFilters.every(filter => activeFilters.includes(filter));
    
    if (selectAllCheckbox) {
        selectAllCheckbox.checked = allSelected;
    }
}

// ===== DEVICE SELECTION =====
function loadDevices() {
    let filteredDevices = deviceData.filter(device => 
        selectedDeviceTypes.includes(device.type) && 
        selectedCountries.includes(device.country) &&
        selectedCities.includes(device.city)
    );
    
    // Apply filters
    if (activeFilters.includes('audio')) {
        filteredDevices = filteredDevices.filter(device => device.audio);
    }
    if (activeFilters.includes('wifi')) {
        filteredDevices = filteredDevices.filter(device => device.network === 'WiFi');
    }
    if (activeFilters.includes('sim')) {
        filteredDevices = filteredDevices.filter(device => device.network === 'SIM');
    }
    
    const deviceList = document.getElementById('deviceList');
    deviceList.innerHTML = '';
    
    if (filteredDevices.length === 0) {
        deviceList.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-secondary);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>No devices match your current selection and filters.</p>
                <p>Try adjusting your filters or selection criteria.</p>
            </div>
        `;
        return;
    }
    
    filteredDevices.forEach(device => {
        const isSelected = selectedDevices[device.id] === 1;
        const deviceItem = document.createElement('div');
        deviceItem.className = `device-item ${isSelected ? 'selected' : ''}`;
        deviceItem.innerHTML = `
            <input type="checkbox" class="device-checkbox" id="device-${device.id}" ${isSelected ? 'checked' : ''}>
            <div class="device-info">
                <h4>${device.name}</h4>
                <p>${device.city}, ${device.country}</p>
                <div class="device-tags">
                    <span class="tag ${device.network.toLowerCase()}">${device.network}</span>
                    <span class="tag ${device.audio ? 'audio' : ''}">${device.audio ? 'Audio' : 'No Audio'}</span>
                </div>
            </div>
        `;
        
        // Add click event
        deviceItem.addEventListener('click', function(e) {
            if (e.target.type === 'checkbox') return;
            
            const checkbox = this.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            toggleDevice(device.id, checkbox.checked);
        });
        
        // Add checkbox event
        deviceItem.querySelector('input[type="checkbox"]').addEventListener('change', function() {
            toggleDevice(device.id, this.checked);
        });
        
        deviceList.appendChild(deviceItem);
    });
    
    updateDeviceButton();
}

function toggleDevice(deviceId, isSelected) {
    const deviceItem = document.querySelector(`#device-${deviceId}`).closest('.device-item');
    
    if (isSelected) {
        selectedDevices[deviceId] = 1;
        deviceItem.classList.add('selected');
    } else {
        delete selectedDevices[deviceId];
        deviceItem.classList.remove('selected');
    }
    
    updateDeviceButton();
    clearError('device');
}

function updateDeviceButton() {
    const button = document.getElementById('deviceNext');
    button.disabled = Object.keys(selectedDevices).length === 0;
}

// ===== PRICING & PLAN SELECTION =====
function setupPlanSelection() {
    document.querySelectorAll('.plan-card').forEach(card => {
        card.addEventListener('click', function() {
            const plan = this.dataset.plan;
            selectPlan(plan);
        });
    });
}

function selectPlan(plan) {
    selectedPlan = plan;
    
    // Update UI
    document.querySelectorAll('.plan-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.querySelector(`[data-plan="${plan}"]`).classList.add('selected');
    
    updateAddonPricing();
    updatePricingSummary();
}

function setupAddonSelection() {
    document.querySelectorAll('.addon-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.type === 'checkbox') return;
            
            const checkbox = this.querySelector('input[type="checkbox"]');
            const addon = this.dataset.addon;
            
            checkbox.checked = !checkbox.checked;
            toggleAddon(addon, checkbox.checked);
        });
        
        card.querySelector('input[type="checkbox"]').addEventListener('change', function() {
            const addon = card.dataset.addon;
            toggleAddon(addon, this.checked);
        });
    });
}

function toggleAddon(addon, isSelected) {
    const card = document.querySelector(`[data-addon="${addon}"]`);
    
    if (isSelected) {
        if (!selectedAddons.includes(addon)) {
            selectedAddons.push(addon);
        }
        card.classList.add('selected');
    } else {
        selectedAddons = selectedAddons.filter(a => a !== addon);
        card.classList.remove('selected');
    }
    
    updatePricingSummary();
}

function updateAddonPricing() {
    const automationPrice = document.getElementById('automation-price');
    const experiencePrice = document.getElementById('experience-price');
    const performancePrice = document.getElementById('performance-price');
    
    if (selectedPlan === 'yearly') {
        if (automationPrice) automationPrice.textContent = '$200/device/year';
        if (experiencePrice) experiencePrice.textContent = '$200/device/year';
        if (performancePrice) performancePrice.textContent = '$200/device/year';
    } else {
        if (automationPrice) automationPrice.textContent = '$100/device/month';
        if (experiencePrice) experiencePrice.textContent = '$100/device/month';
        if (performancePrice) performancePrice.textContent = '$100/device/month';
    }
}

function updateDiscountDisplay() {
    const discountDisplay = document.getElementById('discountDisplay');
    const addonCount = selectedAddons.length;
    
    if (!discountDisplay) return;
    
    if (addonCount === 0) {
        discountDisplay.classList.remove('show');
        discountDisplay.innerHTML = '';
    } else if (addonCount === 2) {
        const originalPricePerDevice = selectedPlan === 'yearly' ? 400 : 200; // 2 × $200 or 2 × $100
        const discountPricePerDevice = selectedPlan === 'yearly' ? 300 : 150;
        const savingsPerDevice = originalPricePerDevice - discountPricePerDevice;
        const cycle = selectedPlan === 'yearly' ? '/year' : '/month';
        
        discountDisplay.classList.add('show');
        discountDisplay.innerHTML = `
            <div class="discount-header">
                <i class="fas fa-tag"></i> 25% DISCOUNT APPLIED!
            </div>
            <div class="discount-subtitle">Two add-ons selected</div>
            <div class="price-comparison">
                <span class="original-price">${originalPricePerDevice}/device${cycle}</span>
                <span class="arrow">→</span>
                <span class="discounted-price">${discountPricePerDevice}/device${cycle}</span>
            </div>
            <div class="savings-badge">Save ${savingsPerDevice}/device!</div>
        `;
    } else if (addonCount === 3) {
        const originalPricePerDevice = selectedPlan === 'yearly' ? 600 : 300; // 3 × $200 or 3 × $100
        const bundlePricePerDevice = selectedPlan === 'yearly' ? 500 : 250;
        const savingsPerDevice = originalPricePerDevice - bundlePricePerDevice;
        const cycle = selectedPlan === 'yearly' ? '/year' : '/month';
        
        discountDisplay.classList.add('show');
        discountDisplay.innerHTML = `
            <div class="discount-header">
                <i class="fas fa-gift"></i> SPECIAL BUNDLE PRICING!
            </div>
            <div class="discount-subtitle">All three add-ons selected</div>
            <div class="price-comparison">
                <span class="original-price">${originalPricePerDevice}/device${cycle}</span>
                <span class="arrow">→</span>
                <span class="discounted-price">${bundlePricePerDevice}/device${cycle}</span>
            </div>
            <div class="savings-badge">Save ${savingsPerDevice}/device!</div>
        `;
    } else {
        discountDisplay.classList.remove('show');
        discountDisplay.innerHTML = '';
    }
}

function calculateAddonTotal(deviceCount) {
    if (selectedAddons.length === 0) {
        return 0;
    }
    
    const addonCount = selectedAddons.length;
    let addonPricePerDevice = 0;
    
    if (selectedPlan === 'yearly') {
        if (addonCount === 1) {
            addonPricePerDevice = 200;
        } else if (addonCount === 2) {
            addonPricePerDevice = 300; // Discounted price for 2 addons
        } else if (addonCount === 3) {
            addonPricePerDevice = 500; // Special bundle price for 3 addons
        }
    } else { // monthly
        if (addonCount === 1) {
            addonPricePerDevice = 100;
        } else if (addonCount === 2) {
            addonPricePerDevice = 150; // Discounted price for 2 addons
        } else if (addonCount === 3) {
            addonPricePerDevice = 250; // Special bundle price for 3 addons
        }
    }
    
    return deviceCount * addonPricePerDevice;
}

function updatePricingSummary() {
    const deviceCount = Object.keys(selectedDevices).length;
    const devicePrice = selectedPlan === 'monthly' ? 300 : 1500;
    
    let deviceTotal = deviceCount * devicePrice;
    let addonTotal = calculateAddonTotal(deviceCount);
    
    totalAmount = deviceTotal + addonTotal;
    
    // Get actual device types and countries from selected devices
    const selectedDeviceIds = Object.keys(selectedDevices);
    const actualDeviceTypes = [...new Set(
        selectedDeviceIds.map(deviceId => {
            const device = deviceData.find(d => d.id == deviceId);
            return device ? device.type : null;
        }).filter(type => type !== null)
    )];
    
    const actualCountries = [...new Set(
        selectedDeviceIds.map(deviceId => {
            const device = deviceData.find(d => d.id == deviceId);
            return device ? device.country : null;
        }).filter(country => country !== null)
    )];
    
    // Create addon description for summary
    let addonDescription = '';
    if (selectedAddons.length > 0) {
        const addonNames = {
            'automation': 'Automation+',
            'experience': 'Experience+', 
            'performance': 'Performance+'
        };
        const selectedAddonNames = selectedAddons.map(addon => addonNames[addon]);
        
        let discountNote = '';
        if (selectedAddons.length === 2) {
            discountNote = ' (25% discount applied)';
        } else if (selectedAddons.length === 3) {
            discountNote = ' (special bundle pricing)';
        }
        
        addonDescription = `<p><strong>${selectedAddonNames.join(', ')}</strong> add-ons × <strong>${deviceCount}</strong> devices = <strong>$ ${addonTotal.toLocaleString()}</strong>${discountNote}</p>`;
    }
    
    const orderDetails = document.getElementById('orderDetails');
    if (orderDetails) {
        orderDetails.innerHTML = `
            <p><strong>Cloud<i>Test</i> Go</strong> - <strong>${deviceCount}</strong> devices × <strong>${devicePrice}</strong> = <strong>$ ${deviceTotal.toLocaleString()}</strong></p>
            ${addonDescription}
        `;
    }
    
    const totalAmountElement = document.getElementById('totalAmount');
    if (totalAmountElement) {
        totalAmountElement.textContent = `${totalAmount.toLocaleString()}`;
    }
}

// ===== HELPER FUNCTION TO GET DEVICE DETAILS =====
function getSelectedDeviceDetails() {
    const selectedDeviceIds = Object.keys(selectedDevices);
    return selectedDeviceIds.map(deviceId => {
        const device = deviceData.find(d => d.id == deviceId);
        return device ? `${device.name} | ${device.country} | ${device.city}` : '';
    }).filter(detail => detail !== '');
}

// ===== SESSION MANAGEMENT =====
function generateSessionId() {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 10000);
    return `${timestamp}${randomNum}`;
}

function addEmptyCartParameter() {
    // Generate unique session ID for cart clearing
    const sessionId = generateSessionId();
    
    // Create a hidden input to empty the cart before adding new items
    const emptyCartField = document.createElement('input');
    emptyCartField.type = 'hidden';
    emptyCartField.name = 'empty';
    emptyCartField.value = 'true';
    
    // Remove any existing empty cart field
    const existingEmptyField = document.querySelector('input[name="empty"]');
    if (existingEmptyField) {
        existingEmptyField.remove();
    }
    
    // Add a unique form identifier for session management
    const sessionField = document.createElement('input');
    sessionField.type = 'hidden';
    sessionField.name = 'session_id';
    sessionField.value = sessionId;
    
    // Remove existing session field
    const existingSessionField = document.querySelector('input[name="session_id"]');
    if (existingSessionField) {
        existingSessionField.remove();
    }
    
    // Add both fields to the form
    const hiddenFieldsContainer = document.getElementById('foxycart-hidden-fields');
    hiddenFieldsContainer.appendChild(emptyCartField);
    hiddenFieldsContainer.appendChild(sessionField);
}

// ===== FOXYCART INTEGRATION =====
function populateFoxyCartFields() {
    const deviceCount = Object.keys(selectedDevices).length;
    const devicePrice = selectedPlan === 'monthly' ? 300 : 1500;
    const billingCycle = selectedPlan === 'monthly' ? 'monthly' : 'yearly';
    
    // Calculate addon total per device
    let addonPricePerDevice = 0;
    if (selectedAddons.length === 1) {
        addonPricePerDevice = selectedPlan === 'yearly' ? 200 : 100;
    } else if (selectedAddons.length === 2) {
        addonPricePerDevice = selectedPlan === 'yearly' ? 300 : 150;
    } else if (selectedAddons.length === 3) {
        addonPricePerDevice = selectedPlan === 'yearly' ? 500 : 250;
    }
    
    // Main product details - per device pricing with simplified code
    const mainProductName = `Cloud Test Go - ${billingCycle.charAt(0).toUpperCase() + billingCycle.slice(1)} Plan (per device)`;
    const productCode = `cloudtestgo-${billingCycle}-${deviceCount}dev`;
    
    // Populate main product fields
    document.getElementById('fc-name').value = mainProductName;
    document.getElementById('fc-price').value = devicePrice.toFixed(2); // Price per device
    document.getElementById('fc-code').value = productCode;
    document.getElementById('fc-quantity').value = deviceCount.toString(); // Quantity = number of devices
    
    // Update quantity constraints to allow multiple devices
    document.querySelector('input[name="quantity_min"]').value = deviceCount.toString();
    document.querySelector('input[name="quantity_max"]').value = deviceCount.toString();
    
    // Set subscription frequency for recurring billing
    if (selectedPlan === 'monthly') {
        document.getElementById('fc-sub-frequency').value = '1m'; // Monthly subscription
    } else {
        document.getElementById('fc-sub-frequency').value = '1y'; // Yearly subscription
    }
    
    // Customer information - Using proper FoxyCart pre-population field names
    const fullName = document.getElementById('fullName').value;
    const businessEmail = document.getElementById('businessEmail').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const organizationName = document.getElementById('organizationName').value;
    
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    
    // Pre-populate checkout fields using FoxyCart's customer_ prefixed fields
    document.getElementById('fc-customer-first-name').value = firstName;
    document.getElementById('fc-customer-last-name').value = lastName;
    document.getElementById('fc-customer-email').value = businessEmail;
    document.getElementById('fc-customer-phone').value = phoneNumber;
    document.getElementById('fc-customer-company').value = organizationName;
    
    // Also populate billing address fields
    document.getElementById('fc-billing-first-name').value = firstName;
    document.getElementById('fc-billing-last-name').value = lastName;
    document.getElementById('fc-billing-company').value = organizationName;
    document.getElementById('fc-billing-phone').value = phoneNumber;
    
    // Get actual countries and cities from selected devices (not just selected countries/cities)
    const selectedDeviceIds = Object.keys(selectedDevices);
    const actualCountries = [...new Set(
        selectedDeviceIds.map(deviceId => {
            const device = deviceData.find(d => d.id == deviceId);
            return device ? device.country : null;
        }).filter(country => country !== null)
    )];
    
    const actualCities = [...new Set(
        selectedDeviceIds.map(deviceId => {
            const device = deviceData.find(d => d.id == deviceId);
            return device ? device.city : null;
        }).filter(city => city !== null)
    )];
    
    // Order metadata with cleaner field names - use actual data from selected devices
    // document.getElementById('fc-organization').value = organizationName; // REMOVED - duplicate of customer company
    document.getElementById('fc-device-types').value = selectedDeviceTypes.join(', ');
    document.getElementById('fc-selected-countries').value = actualCountries.join(', ');
    document.getElementById('fc-selected-cities').value = actualCities.join(', ');
    document.getElementById('fc-device-count').value = deviceCount.toString();
    document.getElementById('fc-billing-cycle').value = billingCycle;
    
    // Updated addon names with + suffix for FoxyCart
    const addonNames = {
        'automation': 'Automation+',
        'experience': 'Experience+', 
        'performance': 'Performance+'
    };
    const selectedAddonNames = selectedAddons.map(addon => addonNames[addon]);
    document.getElementById('fc-selected-addons').value = selectedAddonNames.join(', ');
    
    document.getElementById('fc-active-filters').value = activeFilters.join(', ');
    
    // Store device details in a cleaner format (not JSON)
    const deviceDetails = getSelectedDeviceDetails();
    document.getElementById('fc-selected-devices-json').value = deviceDetails.join('; ');
    
    // Remove the duplicate customer info field since it's already in the main customer fields
    // document.getElementById('fc-customer-display').value = customerInfo; // REMOVED
    
    // Add-ons as second product (if any selected)
    if (selectedAddons.length > 0) {
        const selectedAddonNamesForProduct = selectedAddons.map(addon => {
            const names = {
                'automation': 'Automation+',
                'experience': 'Experience+', 
                'performance': 'Performance+'
            };
            return names[addon];
        });
        const addonProductName = `Add-ons: ${selectedAddonNamesForProduct.join(', ')} - ${billingCycle.charAt(0).toUpperCase() + billingCycle.slice(1)} (per device)`;
        const addonCode = `addons-${selectedAddons.join('-')}-${billingCycle}`;
        
        document.getElementById('fc-addon-name').value = addonProductName;
        document.getElementById('fc-addon-price').value = addonPricePerDevice.toFixed(2); // Price per device
        document.getElementById('fc-addon-code').value = addonCode;
        document.getElementById('fc-addon-quantity').value = deviceCount.toString(); // Quantity = number of devices
        
        // Update addon quantity constraints
        document.querySelector('input[name="2:quantity_min"]').value = deviceCount.toString();
        document.querySelector('input[name="2:quantity_max"]').value = deviceCount.toString();
    } else {
        // Clear addon fields if no addons selected
        document.getElementById('fc-addon-name').value = '';
        document.getElementById('fc-addon-price').value = '';
        document.getElementById('fc-addon-code').value = '';
        document.getElementById('fc-addon-quantity').value = '';
    }
}

// ===== PAYMENT & COMPLETION =====
function proceedToPayment() {
    nextStep(7);
}

function generateReceiptNumber() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `CTG-${year}${month}${day}-${randomNum}`;
}

function loadFinalSummary() {
    const deviceCount = Object.keys(selectedDevices).length;
    const devicePrice = selectedPlan === 'monthly' ? 300 : 1500;
    const deviceTotal = deviceCount * devicePrice;
    const addonTotal = calculateAddonTotal(deviceCount);
    
    // Get actual device types and countries from selected devices
    const selectedDeviceIds = Object.keys(selectedDevices);
    const actualDeviceTypes = [...new Set(
        selectedDeviceIds.map(deviceId => {
            const device = deviceData.find(d => d.id == deviceId);
            return device ? device.type : null;
        }).filter(type => type !== null)
    )];
    
    const actualCountries = [...new Set(
        selectedDeviceIds.map(deviceId => {
            const device = deviceData.find(d => d.id == deviceId);
            return device ? device.country : null;
        }).filter(country => country !== null)
    )];
    
    // Update receipt number
    const receiptNumberElement = document.getElementById('receiptNumber');
    if (receiptNumberElement) {
        receiptNumberElement.textContent = generateReceiptNumber();
    }
    
    // Customer Information
    const customerInfo = document.getElementById('receiptCustomerInfo');
    if (customerInfo) {
        customerInfo.innerHTML = `
            <div class="customer-info-grid">
                <div class="info-item">
                    <div class="info-label">Full Name</div>
                    <div class="info-value">${document.getElementById('fullName').value}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Email</div>
                    <div class="info-value">${document.getElementById('businessEmail').value}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Phone</div>
                    <div class="info-value">${document.getElementById('phoneNumber').value}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Organization</div>
                    <div class="info-value">${document.getElementById('organizationName').value}</div>
                </div>
            </div>
        `;
    }
    
    // Order Items
    const orderItems = document.getElementById('receiptOrderItems');
    if (orderItems) {
        let itemsHTML = '';
        
        // Main service item
        itemsHTML += `
            <div class="item-row">
                <div class="item-info">
                    <div class="item-name">Cloud Test Go - ${selectedPlan === 'yearly' ? 'Yearly' : 'Monthly'} Plan</div>
                    <div class="item-description">${deviceCount} ${deviceCount === 1 ? 'device' : 'devices'} for testing (${deviceCount} × ${devicePrice.toLocaleString()})</div>
                    <div class="item-details">
                        <div class="item-detail">${actualDeviceTypes.join(', ')}</div>
                        <div class="item-detail">${actualCountries.length} ${actualCountries.length === 1 ? 'country' : 'countries'}</div>
                    </div>
                </div>
                <div class="item-price">$ ${deviceTotal.toLocaleString()}</div>
            </div>
        `;
        
        // Add-ons item (if any)
        if (selectedAddons.length > 0) {
            const addonNames = {
                'automation': 'Automation+',
                'experience': 'Experience+', 
                'performance': 'Performance+'
            };
            const selectedAddonNames = selectedAddons.map(addon => addonNames[addon]);
            
            // Calculate individual addon pricing for breakdown
            let priceBreakdown = '';
            let individualPrice = 0;
            let actualPrice = 0;
            
            if (selectedPlan === 'yearly') {
                if (selectedAddons.length === 1) {
                    individualPrice = 200;
                    actualPrice = 200;
                    priceBreakdown = `(${deviceCount} × ${actualPrice})`;
                } else if (selectedAddons.length === 2) {
                    individualPrice = 200;
                    actualPrice = 300;
                    priceBreakdown = `(${deviceCount} × ${actualPrice})`;
                } else if (selectedAddons.length === 3) {
                    individualPrice = 200;
                    actualPrice = 500;
                    priceBreakdown = `(${deviceCount} × ${actualPrice})`;
                }
            } else {
                if (selectedAddons.length === 1) {
                    individualPrice = 100;
                    actualPrice = 100;
                    priceBreakdown = `(${deviceCount} × ${actualPrice})`;
                } else if (selectedAddons.length === 2) {
                    individualPrice = 100;
                    actualPrice = 150;
                    priceBreakdown = `(${deviceCount} × ${actualPrice})`;
                } else if (selectedAddons.length === 3) {
                    individualPrice = 100;
                    actualPrice = 250;
                    priceBreakdown = `(${deviceCount} × ${actualPrice})`;
                }
            }
            
            itemsHTML += `
                <div class="item-row">
                    <div class="item-info">
                        <div class="item-name">Add-ons: ${selectedAddonNames.join(', ')}</div>
                        <div class="item-description">${deviceCount} ${deviceCount === 1 ? 'device' : 'devices'} - ${selectedPlan === 'yearly' ? 'Yearly' : 'Monthly'} ${priceBreakdown}</div>
                        <div class="item-details">
                            ${selectedAddonNames.map(name => `<div class="item-detail">${name}</div>`).join('')}
                        </div>
                    </div>
                    <div class="item-price">$ ${addonTotal.toLocaleString()}</div>
                </div>
            `;
        }
        
        orderItems.innerHTML = itemsHTML;
    }
    
    // Device Details
    const deviceDetails = getSelectedDeviceDetails();
    const deviceDetailsContainer = document.getElementById('receiptDeviceDetails');
    if (deviceDetailsContainer) {
        deviceDetailsContainer.innerHTML = deviceDetails.map((detail, index) => `
            <div class="device-detail-item">
                <div class="device-number">${index + 1}</div>
                <div class="device-detail-info">${detail}</div>
            </div>
        `).join('');
    }
    
    // Totals - Make sure dollar signs are explicitly included
    const formattedSubtotal = `${totalAmount.toLocaleString()}`;
    const formattedTotal = `${totalAmount.toLocaleString()}`;
    
    const subtotalElement = document.getElementById('receiptSubtotal');
    const totalElement = document.getElementById('receiptTotal');
    
    if (subtotalElement) {
        subtotalElement.textContent = formattedSubtotal;
    }
    if (totalElement) {
        totalElement.textContent = formattedTotal;
    }
    
    // Populate FoxyCart fields
    populateFoxyCartFields();
}

// ===== ENTER KEY NAVIGATION FIX =====
function setupEnterKeyNavigation() {
    // Prevent Enter from submitting form unless on final step
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && currentStep < 7) {
            e.preventDefault();
            
            // Get the currently focused element
            const focusedElement = document.activeElement;
            
            // If it's an input field in step 1-6, trigger next step
            if (focusedElement && focusedElement.tagName === 'INPUT') {
                if (currentStep === 6) {
                    proceedToPayment();
                } else if (validateCurrentStep()) {
                    nextStep(currentStep + 1);
                }
            }
        }
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize progress bar
    updateProgressBar();
    
    // Setup event listeners
    setupDeviceTypeSelection();
    setupDeviceFilters();
    setupPlanSelection();
    setupAddonSelection();
    
    // Set default plan
    selectPlan('yearly');
    
    // Setup Enter key navigation
    setupEnterKeyNavigation();
    
    // Add form submission handler
    const form = document.getElementById('foxycart-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Only allow submission on step 7
            if (currentStep < 7) {
                e.preventDefault();
                return false;
            }
            
            // Clear cart and populate FoxyCart fields before submission
            addEmptyCartParameter();
            populateFoxyCartFields();
            
            return true;
        });
    }
    
    console.log('Purchase Cloud Test Go with FoxyCart initialized successfully!');
});

// ===== WINDOW FUNCTIONS (for HTML onclick events) =====
window.nextStep = nextStep;
window.prevStep = prevStep;
window.proceedToPayment = proceedToPayment;