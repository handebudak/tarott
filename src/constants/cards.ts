import { Card } from '../types';

// Tarot kartları verileri
export const TAROT_CARDS: Card[] = [
  {
    id: 0,
    name: "The Fool",
    turkish_name: "Deli",
    number: 0,
    suit: "Major Arcana",
    keywords: ["yeni başlangıçlar", "özgürlük", "macera"],
    meaning_upright: "Yeni başlangıçlara cesaret, hayata umutla yaklaşmak.",
    meaning_reversed: "Dikkatsizlik, sorumsuz davranışlar, riskleri görmezden gelmek.",
    detailed_meaning: "The Fool, Tarot destesinin en önemli kartlarından biridir ve yolculuğun başlangıcını temsil eder. Bu kart, hayatınızda yeni bir sayfa açmaya hazır olduğunuzu gösterir. Tecrübesizlik ve masumiyet içinde olsanız da, kalbinizdeki cesaret ve merak duygusu sizi yeni maceralara yönlendirir. The Fool, spontane kararlar alma, riskleri göze alma ve bilinmeze adım atma enerjisini temsil eder. Bu kart çıktığında, geçmişin ağırlığından kurtulup özgürce hareket etme zamanının geldiğini işaret eder. Aşk hayatında yeni bir ilişki, kariyer hayatında yeni bir iş fırsatı ya da kişisel gelişimde yeni bir hobiye başlama gibi durumları simgeler.",
    advice: "Bu kartın size tavsiyesi, korkularınızı bir kenara bırakıp kalbinizin sesini dinlemenizdir. Fazla düşünmeden, sezgilerinize güvenerek adım atın. Her yolculuk bir adımla başlar ve sizin de harekete geçme zamanınız gelmiştir.",
    symbolism: "Karttaki genç adam uçurumun kenarında durur, bu da bilinmeye adım atma cesaretini simgeler. Elindeki beyaz gül saflığı, yanındaki köpek sadakati temsil eder. Sarı gökyüzü ise yeni umutları ve parlak geleceği işaret eder.",
    image: "/card/Major-Arcana/RWS_Tarot_00_Fool.jpg"
  },
  {
    id: 1,
    name: "The Magician",
    turkish_name: "Büyücü",
    number: 1,
    suit: "Major Arcana",
    keywords: ["güç", "yaratıcılık", "manifest etme", "beceri"],
    meaning_upright: "İçsel gücü kullanma, hedeflere odaklanma, yaratıcı enerji.",
    meaning_reversed: "Manipülasyon, güç kötüye kullanımı, odak kaybı, potansiyelin boşa harcanması.",
    detailed_meaning: "The Magician, kişisel gücün ve yaratıcı enerjinin simgesidir. Bu kart, hayallerinizi gerçeğe dönüştürme yeteneğinizin olduğunu gösterir. Büyücü, dört elementi (toprak, su, hava, ateş) kontrol eder ve bunları hedeflerine ulaşmak için kullanır. Elinizdeki tüm araçlara ve yeteneklere sahipsiniz, şimdi bunları doğru şekilde yönlendirme zamanı. Bu kart çıktığında, kendinize güvenmeniz ve içsel gücünüzü ortaya çıkarmanız gerektiğini işaret eder. İş hayatında liderlik, aşk hayatında çekicilik, kişisel gelişimde ise potansiyelinizi keşfetme anlamına gelir. The Magician, harekete geçme ve sonuçlara odaklanma kartıdır.",
    advice: "Bu kartın size tavsiyesi, sahip olduğunuz yetenekleri keşfetmeniz ve bunları amacınız doğrultusunda kullanmanızdır. Kararlılıkla hedefinize odaklanın ve eylem planınızı uygulayın. Güçlerinizi doğru yönde kullandığınızda başarı kaçınılmazdır.",
    symbolism: "Masadaki dört element (kupa, değnek, kılıç, pentagram) dört elementi temsil eder. Yukarı kaldırılan el göksel enerjiyi, aşağıya işaret eden el ise bu enerjiyi yeryüzüne indirmeyi simgeler. Başındaki sonsuzluk işareti ebedi bilgiyi temsil eder.",
    image: "/card/Major-Arcana/RWS_Tarot_01_Magician.jpg"
  },
  {
    id: 2,
    name: "The High Priestess",
    turkish_name: "Başrahibe",
    number: 2,
    suit: "Major Arcana",
    keywords: ["sezgi", "gizem", "bilinçaltı", "kadınsı enerji"],
    meaning_upright: "İçsel bilgelik, sezgileri dinleme, gizli bilgilere erişim.",
    meaning_reversed: "Sezgileri görmezden gelme, gizli düşmanlık, iç sesini duyamama.",
    detailed_meaning: "The High Priestess, bilinçaltının derinliklerini ve sezgisel bilgeliği temsil eder. Bu kart, mantığın ötesinde bir anlayışa sahip olduğunuzu ve iç sesinizi dinlemeniz gerektiğini gösterir. Yüksek Rahibe, gizli bilgilerin koruyucusudur ve size henüz ortaya çıkmamış gerçekleri keşfetme yetisi verir. Bu kart çıktığında, aceleci kararlar vermek yerine beklemeli ve iç dünyanıza odaklanmalısınız. Kadınsı enerjinin, sabrın ve pasif gücün önemini vurgular. Aşk hayatında derin bağlantılar, iş hayatında sezgisel kararlar, kişisel gelişimde ise ruhsal arayış anlamına gelir. The High Priestess, görünenden fazlasını gördüğünüzü ve bu vizyonunuza güvenmeniz gerektiğini işaret eder.",
    advice: "Bu kartın size tavsiyesi, sabırlı olmanız ve iç sesinizi dinlemenizdir. Tüm cevaplar içinizde mevcut, sadece sessizliğe ve meditasyona zaman ayırmanız gerekiyor. Aceleci davranmayın, doğru zaman geldiğinde ne yapmanız gerektiğini bileceksiniz.",
    symbolism: "İki sütun arasında oturan figür, bilinçli ve bilinçsiz arasındaki dengeyi temsil eder. Arkasındaki perde gizli bilgileri, ayağındaki hilal ay sezgisel gücü simgeler. Elindeki tomar (Torah) ise kutsal bilgiyi temsil eder.",
    image: "/card/Major-Arcana/RWS_Tarot_02_High_Priestess.jpg"
  },
  {
    id: 3,
    name: "The Empress",
    turkish_name: "İmparatoriçe",
    number: 3,
    suit: "Major Arcana",
    keywords: ["bolluk", "annelik", "yaratıcılık", "doğa"],
    meaning_upright: "Bereket, yaratıcı enerji, annelik içgüdüsü, doğal büyüme.",
    meaning_reversed: "Yaratıcı blok, aşırı korumacılık, maddi kaygılar, verimsizlik.",
    detailed_meaning: "The Empress, ana tanrıça enerjisini ve yaratıcı gücün kadınsı yönünü temsil eder. Bu kart, hayatınızda bereket ve bolluk döneminin başladığını gösterir. İmparatoriçe, sadece fiziksel doğurganlığı değil, fikirlerinizin, projelerinizin ve ilişkilerinizin de büyüyüp gelişmesini simgeler. Bu kart çıktığında, sevgi dolu ve besleyici yaklaşımınızla çevrenizdekileri etkileyeceğinizi işaret eder. Aile yaşamında huzur, iş hayatında yaratıcı projeler, kişisel gelişimde ise öz sevgi anlamına gelir. The Empress, sabırlı olmanızı ve doğal süreçlerin işlemesine izin vermenizi önerir. Zorlamak yerine, büyümeye uygun ortam yaratmanın önemini vurgular.",
    advice: "Bu kartın size tavsiyesi, kendinize ve sevdiklerinize karşı şefkatli olmanızdır. Yaratıcı enerjinizi serbest bırakın ve projelerinizin olgunlaşması için sabır gösterin. Doğayla bağlantınızı güçlendirin ve içsel bereket kaynağınızı keşfedin.",
    symbolism: "Tahtındaki yastıklar konforu, çevresindeki yeşillik bereket ve doğurganlığı temsil eder. Tacındaki 12 yıldız burçları, kalkanındaki Venüs işareti aşk ve güzelliği simgeler. Akan su yaşam enerjisini temsil eder.",
    image: "/card/Major-Arcana/RWS_Tarot_03_Empress.jpg"
  },
  {
    id: 4,
    name: "The Emperor",
    turkish_name: "İmparator",
    number: 4,
    suit: "Major Arcana",
    keywords: ["otorite", "liderlik", "disiplin", "yapı"],
    meaning_upright: "Güçlü liderlik, kontrol, disiplin, istikrar sağlama.",
    meaning_reversed: "Diktatörlük, katılık, kontrolü kaybetme, otorite sorunları.",
    detailed_meaning: "The Emperor, erkek enerjinin yapıcı gücünü ve otoriteyi temsil eder. Bu kart, hayatınızda düzen kurma ve liderlik rolü üstlenme zamanının geldiğini gösterir. İmparator, sadece güç sahibi olmayı değil, bu gücü sorumlu bir şekilde kullanmayı simgeler. Bu kart çıktığında, kararlı adımlar atmanız ve çevrenizdeki karmaşayı düzene sokmanız gerektiğini işaret eder. İş hayatında yöneticilik, aile yaşamında koruyucu rol, kişisel gelişimde ise öz disiplin anlamına gelir. The Emperor, planlı hareket etmenin ve sistemli yaklaşımın önemini vurgular. Duygusal kararlar yerine mantıklı ve pratik çözümler üretme zamanıdır.",
    advice: "Bu kartın size tavsiyesi, sorumluluk almanız ve liderlik özelliklerinizi ortaya çıkarmanızdır. Disiplinli olun ve uzun vadeli planlar yapın. Gücünüzü adaletli kullanın ve başkalarına rehberlik edin.",
    symbolism: "Taş taht gücün sağlamlığını, elindeki asa otoriteyi temsil eder. Dağlık arazi zorluklara karşı dayanıklılığı, kırmızı giysi tutku ve güçlü iradeyi simgeler. Tahtındaki koç başları Koç burcunu ve Mars enerjisini temsil eder.",
    image: "/card/Major-Arcana/RWS_Tarot_04_Emperor.jpg"
  },
  {
    id: 5,
    name: "The Hierophant",
    turkish_name: "Başrahip",
    number: 5,
    suit: "Major Arcana",
    keywords: ["gelenek", "ruhani öğreti", "konformizm", "kurallar"],
    meaning_upright: "Geleneksel değerler, ruhani rehberlik, öğretim, kurumlara bağlılık.",
    meaning_reversed: "Dogmacılık, gelenekleri reddetme, özgür düşünce, yenilikçilik.",
    detailed_meaning: "The Hierophant, geleneksel bilgelik ve ruhani öğretinin temsilcisidir. Bu kart, toplumsal normlar ve kurallar çerçevesinde hareket etmenin önemini vurgular. Hierophant, sadece dini otoriteyi değil, her türlü öğretmen-öğrenci ilişkisini ve rehberlik sürecini simgeler. Bu kart çıktığında, deneyimli birinin tavsiyesine ihtiyaç duyabileceğinizi ve geleneksel yöntemlerin işe yarayabileceğini gösterir. Eğitim, evlilik, inanç sistemleri gibi konularda önemli kararlar verme zamanı olabilir. The Hierophant, bireysel arayış yerine toplumsal kabul görmüş yolları takip etmenin bazen daha güvenli olduğunu işaret eder. Ahlaki değerler ve etik kurallar bu dönemde daha önemli hale gelir.",
    advice: "Bu kartın size tavsiyesi, tecrübeli insanlardan öğrenmeye açık olmanız ve köklü geleneklere saygı göstermenizdir. Sabırlı olun ve adım adım ilerleyin. Bazen yenilik yerine kanıtlanmış yöntemler daha etkili olabilir.",
    symbolism: "İki parmağı yukarı kaldırması ruhani bilgiyi, anahtarlar gizli öğretilere erişimi temsil eder. İki öğrencinin varlığı bilgi aktarımını, üç katlı taç ise üçlü bilgeliği (fiziksel, zihinsel, ruhsal) simgeler.",
    image: "/card/Major-Arcana/RWS_Tarot_05_Hierophant.jpg"
  },
  {
    id: 6,
    name: "The Lovers",
    turkish_name: "Aşıklar",
    number: 6,
    suit: "Major Arcana",
    keywords: ["aşk", "uyum", "karar"],
    meaning_upright: "İlişkilerde uyum, duygusal bağ, sevgiyle karar alma.",
    meaning_reversed: "Kararsızlık, uyumsuzluk, ilişkide dengesizlik.",
    detailed_meaning: "The Lovers, sadece romantik aşkı değil, hayatın tüm alanlarında derin bağlantılar kurma ve önemli seçimler yapma anlamına gelir. Bu kart, iki zıt gücün uyum içinde bir araya gelmesini ve bunun sonucunda ortaya çıkan yaratıcı enerjiyi temsil eder. Bu kart çıktığında, kalbinizle aklınız arasında denge kurmanız gereken önemli bir karar vereceksiniz. İlişkilerde derin bağlılık, iş hayatında ortaklıklar, kişisel gelişimde ise iç uyum anlamına gelir. The Lovers, seçimlerinizin sadece sizi değil, sevdiklerinizi de etkileyeceğini hatırlatır. Bu kart, değerlerinize uygun yaşamanın ve otantik olmanın önemini vurgular.",
    advice: "Bu kartın size tavsiyesi, kararlarınızı verirken hem kalbinizi hem aklınızı dinlemenizdir. İlişkilerinizde açık iletişim kurun ve karşılıklı saygıya dayalı bağlantılar geliştirin. Değerlerinize uygun seçimler yapın.",
    symbolism: "Çıplak figürler otantikliği, üstteki melek ilahi rehberliği temsil eder. Kadının arkasındaki elma ağacı bilgeliği, erkeğin arkasındaki alev ağacı tutkuyu simgeler. Güneş birlikteliği ve uyumu temsil eder.",
    image: "/card/Major-Arcana/RWS_Tarot_06_Lovers.jpg"
  },
  {
    id: 7,
    name: "The Chariot",
    turkish_name: "Savaş Arabası",
    number: 7,
    suit: "Major Arcana",
    keywords: ["zafer", "kontrol", "kararlılık", "ilerleme"],
    meaning_upright: "Başarı, güçlü irade, hedeflere ulaşma, kendine güven.",
    meaning_reversed: "Kontrol kaybı, yönelim eksikliği, agresiflik, başarısızlık.",
    detailed_meaning: "The Chariot, zafer ve başarının simgesidir. Bu kart, hedeflerinize ulaşmak için gereken kararlılık ve gücü temsil eder. Savaş Arabası, zıt güçleri bir araya getirerek ilerleme sağlar. Bu kart çıktığında, hayatınızda önemli bir dönüm noktasına geldiğinizi ve başarıya ulaşmak için tüm kaynaklarınızı kullanmanız gerektiğini gösterir. İş hayatında terfi, aşk hayatında ilişki ilerlemesi, kişisel gelişimde ise hedefe ulaşma anlamına gelir. The Chariot, disiplinli çalışmanın ve odaklanmanın önemini vurgular. Zorluklar karşısında pes etmek yerine, kararlılıkla ilerleme zamanıdır.",
    advice: "Bu kartın size tavsiyesi, hedeflerinize odaklanmanız ve kararlılıkla ilerlemenizdir. Zorluklar karşısında pes etmeyin, güçlü iradenizi kullanın. Başarı için gereken tüm araçlara sahipsiniz, şimdi bunları kullanma zamanı.",
    symbolism: "İki at zıt güçleri, savaş arabası kontrolü temsil eder. Sürücünün tacı zaferi, kalkanı korunmayı simgeler. Yıldızlı gökyüzü ilahi rehberliği, şehir duvarları hedefe ulaşmayı temsil eder.",
    image: "/card/Major-Arcana/RWS_Tarot_07_Chariot.jpg"
  }
  // Not: Tüm 78 kartı buraya eklemek çok uzun olacağı için sadece ilk 8 kartı gösterdim
  // Gerçek uygulamada tüm kartları eklemeniz gerekecek
];

// Kart kategorileri
export const CARD_CATEGORIES = {
  MAJOR_ARCANA: "Major Arcana",
  CUPS: "Cups",
  WANDS: "Wands",
  SWORDS: "Swords",
  PENTACLES: "Pentacles"
};

// Kart görsel yolları için mapping
export const CARD_IMAGE_MAPPING: { [key: string]: any } = {
  "The Fool": require("../../assets/cards/Major-Arcana/RWS_Tarot_00_Fool.jpg"),
  "The Magician": require("../../assets/cards/Major-Arcana/RWS_Tarot_01_Magician.jpg"),
  "The High Priestess": require("../../assets/cards/Major-Arcana/RWS_Tarot_02_High_Priestess.jpg"),
  "The Empress": require("../../assets/cards/Major-Arcana/RWS_Tarot_03_Empress.jpg"),
  "The Emperor": require("../../assets/cards/Major-Arcana/RWS_Tarot_04_Emperor.jpg"),
  "The Hierophant": require("../../assets/cards/Major-Arcana/RWS_Tarot_05_Hierophant.jpg"),
  "The Lovers": require("../../assets/cards/Major-Arcana/RWS_Tarot_06_Lovers.jpg"),
  "The Chariot": require("../../assets/cards/Major-Arcana/RWS_Tarot_07_Chariot.jpg"),
  // Diğer kartlar için de aynı şekilde devam edin
};

// Kart arka yüzü görseli
export const CARD_BACK_IMAGE = require("../../assets/cards/card-bg.png");

// Kart arka plan görseli
export const TAROTT_BACKGROUND = require("../../assets/tarott-bg.png");

// Logo görseli
export const TAROTT_LOGO = require("../../assets/tarott-logo-2.png"); 