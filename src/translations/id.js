export const id = {
  // Homepage
  homepage: {
    title: '🎮 Game Seru untuk Pasangan 💕',
    intro: 'Selamat datang di Game Seru untuk Pasangan! Kumpulan game interaktif yang dirancang untuk pasangan agar dapat bersenang-senang bersama. Pilih game di bawah ini dan mulai bermain!',
    availableGames: 'Game yang Tersedia:',
    playNow: 'Main Sekarang 🎮',
    shopeeFortuneWheel: {
      name: 'Roda Keberuntungan Shopee',
      description: 'Putar roda, tebak huruf, dan menangkan budget belanja Anda! Game seru yang terinspirasi dari Wheel of Fortune.'
    }
  },

  // Host Setup
  hostSetup: {
    title: '🎡 Roda Keberuntungan Shopee 💕',
    subtitle: 'Putar, Tebak, dan Menang!',
    secretPhraseLabel: 'Masukkan Frasa Rahasia:',
    secretPhrasePlaceholder: 'contoh: AKU SAYANG KAMU BANGET',
    currencyLabel: 'Kode Mata Uang:',
    currencyPlaceholder: 'contoh: IDR, USD, EUR',
    currencyHint: '💡 Atur kode mata uang untuk menampilkan nilai (contoh: IDR, USD, EUR)',
    wheelConfigTitle: 'Konfigurasi Roda:',
    useDefaultWheel: 'Gunakan Roda Default (Rekomendasi)',
    customizeWheel: 'Sesuaikan Nilai dan Bobot Roda',
    configHint: '💡 Tips: Bobot lebih rendah = nilai lebih langka. Bobot relatif satu sama lain.',
    valueLabel: 'Nilai',
    weightLabel: 'Bobot (Kelangkaan)',
    actionLabel: 'Aksi',
    addValue: '➕ Tambah Nilai',
    resetToDefault: '🔄 Reset ke Default',
    gameSettingsTitle: 'Pengaturan Permainan:',
    vowelPriceLabel: 'Harga Vokal Awal',
    vowelPriceHint: '💡 Vokal ke-1 dengan harga ini, ke-2 dengan 2x harga, ke-3 dengan 3x harga, dst.',
    bonusPerLetterLabel: 'Poin Bonus per Huruf yang Belum Ditebak',
    bonusPerLetterHint: '💡 Bonus diberikan untuk setiap huruf yang belum ditebak saat menyelesaikan frasa dengan benar.',
    startButton: 'Mulai Permainan 🎮',
    rulesTitle: '📖 Cara Bermain:',
    rules: {
      spinWheel: '🎡 <strong>Putar Roda:</strong> Klik "Putar" untuk mendapatkan nilai acak yang menentukan poin potensial Anda',
      guessConsonants: '🔤 <strong>Tebak Konsonan:</strong> Setelah memutar, pilih huruf konsonan',
      guessCorrect: '✅ Jika benar: TAMBAHKAN nilai yang diputar ke skor Anda',
      guessWrong: '❌ Jika salah: KEHILANGAN SETENGAH dari nilai yang diputar',
      buyVowels: '💰 <strong>Beli Vokal:</strong> Beli vokal (A, E, I, O, U) menggunakan poin Anda',
      vowel1st: 'Vokal ke-1',
      vowel2nd: 'Vokal ke-2',
      vowel3rd: 'Vokal ke-3',
      andSoOn: 'dan seterusnya...',
      solvePhrase: '🎯 <strong>Selesaikan Frasa:</strong> Ketika Anda tahu jawabannya, klik "Tebak Frasa Lengkap"',
      solveCorrect: '✅ Jika benar: Dapatkan',
      solveCorrectBonus: 'bonus untuk setiap konsonan yang belum ditebak!',
      solveWrong: '❌ Jika salah: KEHILANGAN SETENGAH dari skor Anda saat ini',
      finalScore: '🛍️ <strong>Skor Akhir Anda = Budget Belanja Shopee Anda!</strong>',
      proTip: '💡 <strong>Tips Pro:</strong> Seimbangkan antara mengungkap huruf dan menyelesaikan lebih awal untuk memaksimalkan poin bonus Anda. Semoga beruntung! 🍀'
    }
  },

  // Game Board
  gameBoard: {
    initialMessage: 'Putar roda untuk memulai!',
    spinResult: 'Anda memutar',
    nowGuessConsonant: 'Sekarang tebak konsonan.',
    errorSpinning: 'Kesalahan saat memutar roda. Silakan coba lagi.',
    spinFirst: 'Silakan putar roda terlebih dahulu!',
    alreadyGuessed: 'Anda sudah menebak huruf itu!',
    guessConsonant: 'Silakan tebak konsonan!',
    correct: 'Benar!',
    inPhrase: 'ada dalam frasa.',
    wrong: 'Salah!',
    notInPhrase: 'tidak ada dalam frasa.',
    cannotAfford: 'Poin tidak cukup! Anda membutuhkan',
    vowelPurchased: 'Vokal dibeli!',
    vowelInPhrase: 'ada dalam frasa.',
    vowelNotInPhrase: 'tidak ada dalam frasa (tetapi tetap terungkap).',
    congratulations: '🎉 Selamat! Anda berhasil menyelesaikannya!',
    bonusAwarded: 'Bonus diberikan untuk',
    unguessedLetters: 'huruf yang belum ditebak!',
    incorrectPhrase: '❌ Salah! Kehilangan setengah skor Anda. Coba lagi!',
    spinButton: 'Putar',
    score: 'Skor',
    buyVowel: 'Beli Vokal',
    cost: 'Biaya',
    consonants: 'Konsonan',
    vowels: 'Vokal',
    guessPhraseButton: 'Tebak Frasa Lengkap',
    cancelButton: 'Batal',
    submitButton: 'Kirim',
    yourGuess: 'Tebakan Anda:',
    helpButton: '❓ Bantuan',
    endGameButton: '🏁 Akhiri Permainan'
  },

  // Help Modal
  helpModal: {
    title: '🎮 Cara Bermain Roda Keberuntungan Shopee',
    objective: '🎯 Tujuan Permainan',
    objectiveText: 'Tebak frasa rahasia dengan memutar roda dan menebak huruf. Skor akhir Anda menjadi budget belanja Shopee Anda!',
    howToPlayTitle: '🎡 Cara Bermain',
    steps: {
      step1: '<strong>Putar Roda:</strong> Klik tombol "Putar" untuk mendapatkan nilai acak',
      step2: '<strong>Tebak Konsonan:</strong> Klik huruf konsonan untuk menebaknya',
      step2a: '✅ Tebakan benar: <strong>TAMBAHKAN</strong> nilai yang diputar ke skor Anda',
      step2b: '❌ Tebakan salah: <strong>KEHILANGAN SETENGAH</strong> dari nilai yang diputar',
      step3: '<strong>Beli Vokal:</strong> Beli vokal (A, E, I, O, U) menggunakan skor Anda',
      step3a: 'Vokal pertama dengan harga awal (contoh: {currency} 5.000)',
      step3b: 'Vokal kedua dengan harga 2× dari harga awal',
      step3c: 'Vokal ketiga dengan harga 3× dari harga awal, dan seterusnya',
      step4: '<strong>Selesaikan Frasa:</strong> Ketika Anda pikir Anda tahu jawabannya, klik "Tebak Frasa Lengkap"',
      step4a: '✅ Jawaban benar: Dapatkan poin bonus untuk setiap huruf yang belum ditebak',
      step4b: '❌ Jawaban salah: <strong>KEHILANGAN SETENGAH</strong> dari skor Anda saat ini'
    },
    scoringTipsTitle: '💰 Tips Penilaian',
    scoringTips: {
      tip1: 'Nilai roda yang lebih tinggi memberikan lebih banyak poin untuk tebakan yang benar',
      tip2: 'Vokal terungkap saat dibeli, apakah ada dalam frasa atau tidak',
      tip3: 'Selesaikan frasa lebih awal untuk memaksimalkan poin bonus dari huruf yang belum ditebak',
      tip4: 'Hati-hati! Tebakan salah dan upaya frasa salah dapat menghabiskan poin Anda'
    },
    strategyTitle: '🎊 Strategi Menang',
    strategyText: 'Seimbangkan antara menebak huruf umum lebih awal dan menyelesaikan frasa sebelum Anda mengungkap terlalu banyak huruf. Semoga beruntung! 🍀',
    closeButton: 'Mengerti! Ayo Main 🎮'
  },

  // Final Summary
  finalSummary: {
    title: '🎊 Permainan Selesai! 🎊',
    shopeeBudget: 'Budget Shopee Anda',
    bonusDetails: '🎁 Detail Bonus',
    scoreBeforeBonus: 'Skor sebelum bonus:',
    unguessedCount: 'Jumlah huruf yang belum ditebak:',
    unguessedLetters: 'Huruf yang belum ditebak:',
    bonusPerLetter: 'Bonus per huruf:',
    totalBonus: 'Total bonus:',
    celebrations: {
      amazing: 'Luar biasa! Anda siap untuk berbelanja! 🛍️',
      great: 'Bagus sekali! Itu budget yang bagus! 💰',
      notBad: 'Lumayan! Setiap rupiah berarti! 💕',
      ohNo: 'Oh tidak! Lebih beruntung lain kali! 🎯'
    },
    playAgain: '🔄 Main Lagi',
    shopeeMessage: 'Waktunya belanja di Shopee! 🛒',
    backToHome: '🏠 Kembali ke Beranda'
  },

  // Language Switcher
  language: {
    english: 'English',
    indonesian: 'Bahasa Indonesia'
  },

  // Wheel Component
  wheel: {
    youSpun: 'Anda memutar!',
    spinMe: 'Putar Saya!',
    spinning: '🎡 Memutar...',
    spun: '✅ Sudah Diputar!',
    spinWheel: '🎯 Putar Roda!',
    sound: '🔊 Wheeeee!'
  }
};
