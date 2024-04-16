# Javascript: Array Challenge by Daffa Zulqisthi

Challenge kali ini bertujuan membuat sebuah script fungsi yang akan digunakan untuk filtering input.

- [`scripts/filterCarByAvailability.js`](./scripts/filterCarByAvailability.js)
- [`scripts/sortCarByYearAscendingly.js`](./scripts/sortCarByYearAscendingly.js)
- [`scripts/sortCarByYearDecendingly.js`](./scripts/sortCarByYearDecendingly.js)

Dimana masing-masing file tersebut terdapat sebuah fungsi. Penjelasan terkait fungsi-fungsi tersebut dapat dilihat pada bagian selanjutnya.

## `filterCarByAvailability`

Filter ini digunakan untuk menyaring array car dari ketersediaannya, karena tipe data availability adalah bolean, maka untuk mendeteksinya hanya perlu melakukan cek apakah nilainya true atau false. Lalu fungsi melakukan push kepada result array jika tipe availability adalah true.

### Input

Input dari fungsi ini kita panggil `cars`, dimana tipe datanya adalah array of object. Untuk type signature dari input tersebut dapat dilihat pada definisi tipe di bawah ini:

```typescript
type Car = {
  id: string;
  plate: string;
  transmission: string;
  manufacture: string;
  model: string;
  available: boolean;
  type: string;
  year: number;
  options: string[];
  specs: string[];
};

type Cars = Array<Car>;
```

Contoh input:

```json
[
  {
    "id": "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    "plate": "DBH-3491",
    "transmission": "Automatic",
    "manufacture": "Ford",
    "model": "F150",
    "available": true,
    "type": "Sedan",
    "year": 2022,
    "options": [
      "Cruise Control",
      "Tinted Glass",
      "Tinted Glass",
      "Tinted Glass",
      "AM/FM Stereo"
    ],
    "specs": [
      "Brake assist",
      "Leather-wrapped shift knob",
      "Glove box lamp",
      "Air conditioning w/in-cabin microfilter",
      "Body color folding remote-controlled pwr mirrors",
      "Dual-stage front airbags w/occupant classification system"
    ]
  },
  {
    "id": "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
    "plate": "WXB-3984",
    "transmission": "Automatic",
    "manufacture": "BMW",
    "model": "X5",
    "available": false,
    "type": "Convertible",
    "year": 2019,
    "options": [
      "Keyless Entry",
      "Power Windows",
      "MP3 (Single Disc)",
      "CD (Multi Disc)",
      "Navigation"
    ],
    "specs": [
      "Rear passenger map pockets",
      "Electrochromic rearview mirror",
      "Dual chrome exhaust tips",
      "Locking glove box",
      "Pwr front vented disc/rear drum brakes"
    ]
  }
]
```

### Output

Ketika data `cars` dimasukkan ke dalam fungsi `filterCarByAvailability`,
maka hasil dari fungsi tersebut berupa `Array<Car>`
juga yang mana tiap item-nya memiliki atribut `available` yang bernilai `true`.

Contoh output:

```json
[
  {
    "id": "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    "plate": "DBH-3491",
    "transmission": "Automatic",
    "manufacture": "Ford",
    "model": "F150",
    "available": true,
    "type": "Sedan",
    "year": 2022,
    "options": [
      "Cruise Control",
      "Tinted Glass",
      "Tinted Glass",
      "Tinted Glass",
      "AM/FM Stereo"
    ],
    "specs": [
      "Brake assist",
      "Leather-wrapped shift knob",
      "Glove box lamp",
      "Air conditioning w/in-cabin microfilter",
      "Body color folding remote-controlled pwr mirrors",
      "Dual-stage front airbags w/occupant classification system"
    ]
  },
  {
    "id": "bf6b5c43-1377-4ae0-8908-310c64266f81",
    "plate": "OSL-4224",
    "transmission": "Automanual",
    "manufacture": "Lincoln",
    "model": "MKZ",
    "available": true,
    "type": "Sedan",
    "year": 2021,
    "options": [
      "Bucket Seats",
      "Airbag: Passenger",
      "Airbag: Driver",
      "Power Seats",
      "Airbag: Side",
      "Antilock Brakes",
      "CD (Multi Disc)"
    ],
    "specs": [
      "Driver & front passenger map pockets",
      "Direct-type tire pressure monitor system",
      "Cargo area lamp",
      "Glove box lamp",
      "Silver finish interior door handles",
      "Driver & front passenger advanced multistage airbags w/occupant sensors",
      "Silver accent IP trim finisher -inc: silver shifter finisher",
      "Fasten seat belt warning light/chime"
    ]
  }
]
```

## `sortCarByYearAscendingly`

Melakukan sorting car dari tahun yang paling kecil ke tahun yang paling besar, maka dari itu saya menggunakan fungsi algoritma quick sort, dikarenakan quick sort merupakan salah satu algoritma yang paling efisien dan populer.

#### Apa Itu Algoritma Quick Sort?

Algoritma quick sort membagi sebuah array menjadi subarrays, quick sort juga mengandalkan nilai pivot yang sudah ditentukan sebagai nilai tengan untuk menentukan apakah nilai yang dibandingkan dimasukkan pada array kiri atau array kanan, lalu pada akhir fungsi akan dilakukan pemanggilan fungsi secara rekursif sampai tidak ada nilai yang tersisa. Maka dari itu fungsi akan mengembalikan nilai yang terurut sesuai dengan perbandingan pivot.

Pada contohnya ketika array kiri nilainya lebih kecil dari pivot, maka sudah tentu hasil akhir akan mencari sebuah sorting menaik yaitu dari kecil ke besar.

### Input

Input dari fungsi ini kita panggil `cars`, dimana tipe datanya adalah array of object.
Untuk type signature dari input tersebut dapat dilihat pada definisi tipe di bawah ini:

```typescript
type Car = {
  id: string;
  plate: string;
  transmission: string;
  manufacture: string;
  model: string;
  available: boolean;
  type: string;
  year: number;
  options: string[];
  specs: string[];
};

type Cars = Array<Car>;
```

Contoh input:

```json
[
  {
    "id": "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    "plate": "DBH-3491",
    "transmission": "Automatic",
    "manufacture": "Ford",
    "model": "F150",
    "available": true,
    "type": "Sedan",
    "year": 2022,
    "options": [
      "Cruise Control",
      "Tinted Glass",
      "Tinted Glass",
      "Tinted Glass",
      "AM/FM Stereo"
    ],
    "specs": [
      "Brake assist",
      "Leather-wrapped shift knob",
      "Glove box lamp",
      "Air conditioning w/in-cabin microfilter",
      "Body color folding remote-controlled pwr mirrors",
      "Dual-stage front airbags w/occupant classification system"
    ]
  },
  {
    "id": "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
    "plate": "WXB-3984",
    "transmission": "Automatic",
    "manufacture": "BMW",
    "model": "X5",
    "available": false,
    "type": "Convertible",
    "year": 2019,
    "options": [
      "Keyless Entry",
      "Power Windows",
      "MP3 (Single Disc)",
      "CD (Multi Disc)",
      "Navigation"
    ],
    "specs": [
      "Rear passenger map pockets",
      "Electrochromic rearview mirror",
      "Dual chrome exhaust tips",
      "Locking glove box",
      "Pwr front vented disc/rear drum brakes"
    ]
  }
]
```

### Output

Ketika data `cars` dimasukkan ke dalam fungsi `sortCarByYearAscendingly`,
maka hasil dari fungsi tersebut berupa `Array<Car>` juga,
yang mana tiap item harus memiliki atribut year paling tua dibanding item-item berikutnya di dalam daftar tersebut.

Contoh output:

```json
[
  {
    "id": "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
    "plate": "WXB-3984",
    "transmission": "Automatic",
    "manufacture": "BMW",
    "model": "X5",
    "available": false,
    "type": "Convertible",
    "year": 2019,
    "options": [
      "Keyless Entry",
      "Power Windows",
      "MP3 (Single Disc)",
      "CD (Multi Disc)",
      "Navigation"
    ],
    "specs": [
      "Rear passenger map pockets",
      "Electrochromic rearview mirror",
      "Dual chrome exhaust tips",
      "Locking glove box",
      "Pwr front vented disc/rear drum brakes"
    ]
  },
  {
    "id": "bf6b5c43-1377-4ae0-8908-310c64266f81",
    "plate": "OSL-4224",
    "transmission": "Automanual",
    "manufacture": "Lincoln",
    "model": "MKZ",
    "available": true,
    "type": "Sedan",
    "year": 2021,
    "options": [
      "Bucket Seats",
      "Airbag: Passenger",
      "Airbag: Driver",
      "Power Seats",
      "Airbag: Side",
      "Antilock Brakes",
      "CD (Multi Disc)"
    ],
    "specs": [
      "Driver & front passenger map pockets",
      "Direct-type tire pressure monitor system",
      "Cargo area lamp",
      "Glove box lamp",
      "Silver finish interior door handles",
      "Driver & front passenger advanced multistage airbags w/occupant sensors",
      "Silver accent IP trim finisher -inc: silver shifter finisher",
      "Fasten seat belt warning light/chime"
    ]
  }
]
```

## `sortCarByYearDescendingly`

Melakukan sorting car dari tahun yang paling besar ke tahun yang paling kecil, algoritma yang digunakan adalah algoritma quick sort seperti fungsi sebelumnya. Dengan mengubah perbandingan array kiri menjadi array yang paling besar atau array kiri > pivot, maka dari itu akan berjalan sorting secara menurun. 

### Input

Input dari fungsi ini kita panggil `cars`, dimana tipe datanya adalah array of object.
Untuk type signature dari input tersebut dapat dilihat pada definisi tipe di bawah ini:

```typescript
type Car = {
  id: string;
  plate: string;
  transmission: string;
  manufacture: string;
  model: string;
  available: boolean;
  type: string;
  year: number;
  options: string[];
  specs: string[];
};

type Cars = Array<Car>;
```

Contoh input:

```json
[
  {
    "id": "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    "plate": "DBH-3491",
    "transmission": "Automatic",
    "manufacture": "Ford",
    "model": "F150",
    "available": true,
    "type": "Sedan",
    "year": 2022,
    "options": [
      "Cruise Control",
      "Tinted Glass",
      "Tinted Glass",
      "Tinted Glass",
      "AM/FM Stereo"
    ],
    "specs": [
      "Brake assist",
      "Leather-wrapped shift knob",
      "Glove box lamp",
      "Air conditioning w/in-cabin microfilter",
      "Body color folding remote-controlled pwr mirrors",
      "Dual-stage front airbags w/occupant classification system"
    ]
  },
  {
    "id": "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
    "plate": "WXB-3984",
    "transmission": "Automatic",
    "manufacture": "BMW",
    "model": "X5",
    "available": false,
    "type": "Convertible",
    "year": 2019,
    "options": [
      "Keyless Entry",
      "Power Windows",
      "MP3 (Single Disc)",
      "CD (Multi Disc)",
      "Navigation"
    ],
    "specs": [
      "Rear passenger map pockets",
      "Electrochromic rearview mirror",
      "Dual chrome exhaust tips",
      "Locking glove box",
      "Pwr front vented disc/rear drum brakes"
    ]
  }
]
```

### Output

Ketika data `cars` dimasukkan ke dalam fungsi `sortCarByYearDescendingly`,
maka hasil dari fungsi tersebut berupa `Array<Car>` juga,
yang mana tiap item harus memiliki atribut `year` paling muda dibanding item-item berikutnya di dalam daftar tersebut.

Contoh output:

```json
[
  {
    "id": "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    "plate": "DBH-3491",
    "transmission": "Automatic",
    "manufacture": "Ford",
    "model": "F150",
    "available": true,
    "type": "Sedan",
    "year": 2022,
    "options": [
      "Cruise Control",
      "Tinted Glass",
      "Tinted Glass",
      "Tinted Glass",
      "AM/FM Stereo"
    ],
    "specs": [
      "Brake assist",
      "Leather-wrapped shift knob",
      "Glove box lamp",
      "Air conditioning w/in-cabin microfilter",
      "Body color folding remote-controlled pwr mirrors",
      "Dual-stage front airbags w/occupant classification system"
    ]
  },
  {
    "id": "bf6b5c43-1377-4ae0-8908-310c64266f81",
    "plate": "OSL-4224",
    "transmission": "Automanual",
    "manufacture": "Lincoln",
    "model": "MKZ",
    "available": true,
    "type": "Sedan",
    "year": 2021,
    "options": [
      "Bucket Seats",
      "Airbag: Passenger",
      "Airbag: Driver",
      "Power Seats",
      "Airbag: Side",
      "Antilock Brakes",
      "CD (Multi Disc)"
    ],
    "specs": [
      "Driver & front passenger map pockets",
      "Direct-type tire pressure monitor system",
      "Cargo area lamp",
      "Glove box lamp",
      "Silver finish interior door handles",
      "Driver & front passenger advanced multistage airbags w/occupant sensors",
      "Silver accent IP trim finisher -inc: silver shifter finisher",
      "Fasten seat belt warning light/chime"
    ]
  }
]
```
