const portofoliosData = [
    {id:1,img:"/images/horizontal1.jpeg",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus ullamcorper erat, sed tincidunt dolor ullamcorper eget. Suspendisse potenti. Quisque maximus varius felis a convallis. Praesent aliquet arcu ac purus fringilla aliquet."},
    {id:2,img:"/images/horizontal2.jpeg",desc:"Maecenas viverra justo in condimentum mattis. Integer fermentum interdum cursus. Phasellus dignissim, enim et iaculis sagittis, magna metus commodo dui, nec maximus augue tellus at nulla. Etiam erat massa, scelerisque eget ex vel, vestibulum porta purus. Pellentesque at lectus nibh. Nulla quis purus eget purus bibendum vehicula non sit amet sapien. Duis non vestibulum libero. Nulla at magna elementum, eleifend purus ac, finibus quam."},
    {id:3,img:"/images/vertical1.jpeg", desc:"Cras hendrerit lorem vitae libero finibus auctor ut ac nunc. Quisque facilisis ligula sit amet sem porta ornare. In ac dictum leo. Quisque maximus libero nec semper tempus. Mauris eleifend ex in nulla porttitor pharetra. Aliquam egestas non lorem eget ultricies. Suspendisse quis maximus ligula."},
    {id:4,img:"/images/horizontal3.jpeg", desc:"Proin ut ligula id elit hendrerit luctus. Ut id cursus mi. Morbi vitae congue dolor, ut suscipit dui. Pellentesque blandit turpis in dolor facilisis, ac aliquam mauris imperdiet. Fusce tristique vehicula nisi. In sagittis feugiat nisl id scelerisque. Nulla sodales lobortis posuere. Pellentesque turpis lorem"},
    {id:5,img:"/images/horizontal4.jpg",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus ullamcorper erat, sed tincidunt dolor ullamcorper eget. Suspendisse potenti. Quisque maximus varius felis a convallis. Praesent aliquet arcu ac purus fringilla aliquet."},
    {id:6,img:"/images/vertical2.jpeg",desc:"Maecenas viverra justo in condimentum mattis. Integer fermentum interdum cursus. Phasellus dignissim, enim et iaculis sagittis, magna metus commodo dui, nec maximus augue tellus at nulla. Etiam erat massa, scelerisque eget ex vel, vestibulum porta purus. Pellentesque at lectus nibh. Nulla quis purus eget purus bibendum vehicula non sit amet sapien. Duis non vestibulum libero. Nulla at magna elementum, eleifend purus ac, finibus quam."},
    {id:7,img:"/images/horizontal5.jpeg", desc:"Cras hendrerit lorem vitae libero finibus auctor ut ac nunc. Quisque facilisis ligula sit amet sem porta ornare. In ac dictum leo. Quisque maximus libero nec semper tempus. Mauris eleifend ex in nulla porttitor pharetra. Aliquam egestas non lorem eget ultricies. Suspendisse quis maximus ligula."},
    {id:8,img:"/images/horizontal6.jpeg", desc:"Proin ut ligula id elit hendrerit luctus. Ut id cursus mi. Morbi vitae congue dolor, ut suscipit dui. Pellentesque blandit turpis in dolor facilisis, ac aliquam mauris imperdiet. Fusce tristique vehicula nisi. In sagittis feugiat nisl id scelerisque. Nulla sodales lobortis posuere. Pellentesque turpis lorem"},
    {id:9,img:"/images/vertical3.jpeg",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus ullamcorper erat, sed tincidunt dolor ullamcorper eget. Suspendisse potenti. Quisque maximus varius felis a convallis. Praesent aliquet arcu ac purus fringilla aliquet."},
    // {id:10,img:"/images/slide2.jpg",desc:"Maecenas viverra justo in condimentum mattis. Integer fermentum interdum cursus. Phasellus dignissim, enim et iaculis sagittis, magna metus commodo dui, nec maximus augue tellus at nulla. Etiam erat massa, scelerisque eget ex vel, vestibulum porta purus. Pellentesque at lectus nibh. Nulla quis purus eget purus bibendum vehicula non sit amet sapien. Duis non vestibulum libero. Nulla at magna elementum, eleifend purus ac, finibus quam."},
    // {id:11,img:"/images/slide3.jpg", desc:"Cras hendrerit lorem vitae libero finibus auctor ut ac nunc. Quisque facilisis ligula sit amet sem porta ornare. In ac dictum leo. Quisque maximus libero nec semper tempus. Mauris eleifend ex in nulla porttitor pharetra. Aliquam egestas non lorem eget ultricies. Suspendisse quis maximus ligula."},
    // {id:12,img:"/images/slide4.jpg", desc:"Proin ut ligula id elit hendrerit luctus. Ut id cursus mi. Morbi vitae congue dolor, ut suscipit dui. Pellentesque blandit turpis in dolor facilisis, ac aliquam mauris imperdiet. Fusce tristique vehicula nisi. In sagittis feugiat nisl id scelerisque. Nulla sodales lobortis posuere. Pellentesque turpis lorem"},
    // {id:13,img:"/images/slide1.jpg", desc:"Proin ut ligula id elit hendrerit luctus. Ut id cursus mi. Morbi vitae congue dolor, ut suscipit dui. Pellentesque blandit turpis in dolor facilisis, ac aliquam mauris imperdiet. Fusce tristique vehicula nisi. In sagittis feugiat nisl id scelerisque. Nulla sodales lobortis posuere. Pellentesque turpis lorem"},
    // {id:14,img:"/images/slide1.jpg", desc:"Proin ut ligula id elit hendrerit luctus. Ut id cursus mi. Morbi vitae congue dolor, ut suscipit dui. Pellentesque blandit turpis in dolor facilisis, ac aliquam mauris imperdiet. Fusce tristique vehicula nisi. In sagittis feugiat nisl id scelerisque. Nulla sodales lobortis posuere. Pellentesque turpis lorem"}
];

const clientsData = [
    {id:1, img:"/images/Mirae_Asset_Sekuritas_Indo.png"},
    {id:2, img:"/images/UOB.png"},
    {id:3, img:"/images/Kementrian_Luar _Negeri.png"},
    {id:4, img:"/images/Dyandra_Promosindo.png"},
    {id:5, img:"/images/Pertamina_Geothermal_Energy.png"},
    {id:6, img:"/images/Kementrian_Keuangan.png"},
    {id:7, img:"/images/Kemenkes.png"},
    {id:8, img:"/images/Oneject_Indonesia.jpg"},
    {id:9, img:"/images/Kementrian_BUMN.png"},
    {id:10, img:"/images/Bank_Bukopin.png"},
    {id:11, img:"/images/Adhi_Karya.png"},
    {id:12, img:"/images/CNBC_Indonesia.png"},
]

const articlesData = [
    {id:1, img:"/images/article1.jpg", title:"Jasa sewa alat Interpreter yang berpengalaman.", desc:"Seiring meningkatkanya permintaan sewa alat interpreter di Jakarta, kami telah membuka cabang baru kami di Bali, Bandung, dan Bogor. Hal ini lebih memudahkan klien kami untuk dapat memenuhi kebutuhan yang terkait dengan jasa kami."},
    {id:2, img:"/images/article2.jpg", title:"Sukses event anda adalah tujuan kami.", desc:"Berbagai event baik yang bersifat nasional maupun internasional telah dapat terselenggara dengan menggunakan jasa kami. Sehingga usaha di bidang jasa sewa alat interpreter atau interpreting equipment rental kami semakin dikenal."},
    {id:3, img:"/images/article3.jpeg", title:"Pilihan terbaik untuk event meeting anda.", desc:"BBS Rental dalam hal ini sebagai perusahaan penyedia jasa sewa dan rental alat interpreter akan berupaya semaksimal mungkin guna memenuhi kebutuhan pelanggan-pelanggan kami.Terima kasih telah menggunakan jasa kami."},
]

const servicesData = [
    {id:1, img:"/images/service1.jpg", title:"Sewa Alat Interpreter"},
    {id:2, img:"/images/service2.jpeg", title:"Jasa Penerjemah Dokumen"},
]

export {portofoliosData, clientsData, articlesData, servicesData}