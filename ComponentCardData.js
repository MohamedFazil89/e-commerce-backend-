const ComponentsData = [
  {
    id: 1,
    img:"https://m.media-amazon.com/images/I/61m8egNHmEL._AC_UF350,350_QL80_.jpg",
    title: "Intel Core i9-13900K",
    description: "High-performance CPU for gaming and productivity.",
    price: "58999",
    type: "Processor"
  },
  {
    id: 2,
    img:"https://m.media-amazon.com/images/I/51jNS8epPeL._AC_UF1000,1000_QL80_.jpg",
    title: "AMD Ryzen 9 7950X",
    description: "Powerful processor with excellent multitasking.",
    price: "54999",
    type: "Processor"
  },
  {
    id: 3,
    img:"https://m.media-amazon.com/images/I/515lU6LNpsL.jpg",
    title: "Intel Core i7-13700K",
    description: "Balanced performance for gaming and content creation.",
    price: "42999",
    type: "Processor"
  },
  {
    id: 4,
    img:"https://m.media-amazon.com/images/I/51hfER1cZVL.jpg",
    title: "AMD Ryzen 7 7700X",
    description: "Excellent for gaming with high clock speeds.",
    price: "35999",
    type: "Processor"
  },
  {
    id: 5,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowFDFQBPb4ZYmkMOP1tUORDzZOjndKu5WzQ&s",
    title: "Intel Core i5-13600K",
    description: "Mid-range CPU ideal for modern gaming and daily tasks.",
    price: "29999",
    type: "Processor"
  },
  {
    id: 6,
    img:"https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-5-7600x.jpg",
    title: "AMD Ryzen 5 7600X",
    description: "Affordable performance for budget gaming builds.",
    price: "24999",
    type: "Processor"
  },
  {
    id: 7,
    img:"https://compumise.in/wp-content/uploads/2023/03/19-118-432-03.png",
    title: "Intel Core i3-13100",
    description: "Entry-level processor for basic computing tasks.",
    price: "15999",
    type: "Processor"
  },
  {
    id: 8,
    img:"https://www.techpowerup.com/review/amd-athlon-3000g-with-vega-3-graphics/images/package1.jpg",
    title: "AMD Athlon 3000G",
    description: "Budget-friendly CPU for everyday use.",
    price: "8999",
    type: "Processor"
  },
  {
    id: 9,
    img:"https://parshvacomputers.co.in/public/uploads/all/N3ZklhmXmHGxeiT5hhVtlIQ9lCor69AlsZisbeba.jpg",
    title: "Intel Pentium Gold G6400",
    description: "Efficient processor for light multitasking.",
    price: "10999",
    type: "Processor"
  },
  {
    id: 10,
    img:"https://5.imimg.com/data5/SELLER/Default/2022/6/UJ/NB/AE/110783022/amd-4000-series-ryzen-3-4100-desktop-processor.jpg",
    title: "AMD Ryzen 3 4100",
    description: "Basic CPU for cost-effective computing.",
    price: "12999",
    type: "Processor"
  },

  {
    id: 11,
    img: "https://dlcdnwebimgs.asus.com/files/media/E8F9316B-CB25-42B5-9422-CA99338CDB38/v1/img/kv/ROG-STRIX-Z790-E-II.png",
    title: "ASUS ROG Strix Z790-E",
    description: "Premium motherboard with robust power delivery.",
    price: "39999",
    type: "Motherboard"
  },
  {
    id: 12,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpL-iSGPgUU0zQslnCGn4Cj5J3t2Nv6ap8_g&s",
    title: "MSI MEG Z690 Unify",
    description: "High-performance board with advanced cooling features.",
    price: "37999",
    type: "Motherboard"
  },
  {
    id: 13,
    img: "https://m.media-amazon.com/images/I/71ubTinPcOL._AC_UF1000,1000_QL80_.jpg",
    title: "Gigabyte AORUS X670",
    description: "Feature-rich motherboard for AMD builds.",
    price: "34999",
    type: "Motherboard"
  },
  {
    id: 14,
    img: "https://m.media-amazon.com/images/I/91NU8vKX0WL.jpg",
    title: "ASRock B660M Pro4",
    description: "Affordable board with essential features.",
    price: "12999",
    type: "Motherboard"
  },
  {
    id: 15,
    img: "https://m.media-amazon.com/images/I/917DzuUbxxL.jpg",
    title: "MSI B550-A Pro",
    description: "Solid motherboard for mid-range AMD builds.",
    price: "14999",
    type: "Motherboard"
  },
  {
    id: 16,
    img: "https://computersolutionranchi.com/wp-content/uploads/2022/12/81ooBORY4aL._SX522_.jpg",
    title: "ASUS Prime B660-Plus",
    description: "Reliable board for Intel 12th gen processors.",
    price: "15999",
    type: "Motherboard"
  },
  {
    id: 17,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILAtZSIblQz4eaZQGrFqNSqbXupjdderB4g&s",
    title: "Gigabyte Z690 Aorus Elite",
    description: "High-end motherboard with excellent connectivity.",
    price: "29999",
    type: "Motherboard"
  },
  {
    id: 18,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdc3YRjC_f23Q-eDVAM--jePgIGME2p9WvQ&s",
    title: "ASRock X570 Taichi",
    description: "Feature-packed board for high-performance AMD systems.",
    price: "399.99",
    type: "Motherboard"
  },
  {
    id: 19,
    img: "https://m.media-amazon.com/images/I/61oGooBNNGL.jpg",
    title: "Biostar B660M Pro+",
    description: "Compact board with good performance for budget builds.",
    price: "119.99",
    type: "Motherboard"
  },
  {
    id: 20,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFznTJSFKg6bBQGWMU9BqljWfO-SyYtevyw&s",
    title: "ASUS TUF Gaming B550-Plus",
    description: "Durable motherboard designed for gaming and stability.",
    price: "169.99",
    type: "Motherboard"
  },
  {
    id: 21,
    img: "https://m.media-amazon.com/images/I/51Gs2sm696L.jpg",
    title: "Corsair Vengeance LPX 16GB",
    description: "High-speed DDR4 RAM ideal for gaming and multitasking.",
    price: "3999",
    type: "Memory (RAM)"
  },
  {
    id: 22,
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTgRkvhcgctraYhxC6LvaaZ0Zlwp2N8bIk16zXSSqpe-lAbSyxPW-TB527pYyCNYvV7ZC6CHz6dE0csNm2NzXOwbsteZ1nb-2DjxVQcwLMJSPLVohBIsR6x",
    title: "G.Skill TridentZ RGB 32GB",
    description: "Stylish, high-performance memory with RGB lighting.",
    price: "149.99",
    type: "Memory (RAM)"
  },
  {
    id: 23,
    img: "https://m.media-amazon.com/images/I/61aDeyMWIsL.jpg",
    title: "Kingston HyperX Fury 16GB",
    description: "Reliable DDR4 memory for everyday computing.",
    price: "69.99",
    type: "Memory (RAM)"
  },
  {
    id: 24,
    img: "https://m.media-amazon.com/images/I/51BZEAbbFDL.jpg",
    title: "Crucial MX500 32GB",
    description: "High-performance memory with robust durability.",
    price: "139.99",
    type: "Memory (RAM)"
  },
  {
    id: 25,
    img: "https://m.media-amazon.com/images/I/61kZaFXI2uL._AC_UF1000,1000_QL80_.jpg",
    title: "Corsair Dominator Platinum 16GB",
    description: "Premium RAM offering excellent performance and reliability.",
    price: "99.99",
    type: "Memory (RAM)"
  },
  {
    id: 26,
    img: "https://m.media-amazon.com/images/I/618SEnJR1nL.jpg",
    title: "G.Skill Ripjaws V 16GB",
    description: "Great performance memory for gaming and professional use.",
    price: "79.99",
    type: "Memory (RAM)"
  },
  {
    id: 27,
    img: "https://5.imimg.com/data5/MJ/UG/RJ/SELLER-5409718/original-kingston-hyperx-predator-rgb-32gb-4x8gb-ddr4-pc4-25600c16-3200mhz-quad-channel-kit-500x500.jpg",
    title: "Kingston HyperX Predator 32GB",
    description: "High-end performance memory with aggressive timings.",
    price: "159.99",
    type: "Memory (RAM)"
  },
  {
    id: 28,
    img: "https://m.media-amazon.com/images/I/81XNrcp5BKL.jpg",
    title: "Patriot Viper Steel 16GB",
    description: "Fast and reliable memory perfect for gaming rigs.",
    price: "69.99",
    type: "Memory (RAM)"
  },
  {
    id: 29,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2fgQm4_EqGAp1_i4tRWhHICm2_g2TsVbDA&s",
    title: "Team T-Force Delta 16GB",
    description: "RGB-enhanced memory for a dynamic gaming setup.",
    price: "89.99",
    type: "Memory (RAM)"
  },
  {
    id: 30,
    img: "https://5.imimg.com/data5/SELLER/Default/2021/2/LU/ZL/LK/49942529/crucial-ballistix-16gb-kit-2-x-8gb-ddr4-3600-desktop-gaming-memory-red-1--500x500.jpg",
    title: "Crucial Ballistix TLC 16GB",
    description: "Solid performance memory with reliability for multitasking.",
    price: "74.99",
    type: "Memory (RAM)"
  },
  {
    id: 31,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcA_40H5XrRVfoBc6BwOT3qih_ghCa4uJR2A&s",
    title: "Samsung 970 EVO Plus 1TB",
    description: "High-speed NVMe SSD for blazing fast boot times.",
    price: "149.99",
    type: "Storage (SSD/HDD)"
  },
  {
    id: 32,
    img: "https://sathya.in/media/94154/catalog/Western%20Digital%20WD10EZEX_02.jpg",
    title: "Western Digital Blue 1TB",
    description: "Reliable SATA SSD for everyday computing.",
    price: "109.99",
    type: "Storage (SSD/HDD)"
  },
  {
    id: 33,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpnnutgSrjv5uRZ32sdMF-jcfzEHkpSPVnA&s",
    title: "Crucial MX500 1TB",
    description: "High-performance SSD with robust durability.",
    price: "119.99",
    type: "Storage (SSD/HDD)"
  },
  {
    id: 34,
    img: "https://elitehubs.com/cdn/shop/products/mz-77e1t0bw-image-4-600x600-1.webp?v=1683974955&width=533",
    title: "Samsung 860 EVO 1TB",
    description: "Trusted SATA SSD for consistent performance.",
    price: "99.99",
    type: "Storage (SSD/HDD)"
  },
  {
    id: 35,
    img: "https://www.vedantcomputers.com/image/cache/catalog/assets/product/seagate/hdd/st2000dm008/st2000dm008-1-800x800.jpg",
    title: "Seagate Barracuda 2TB",
    description: "High-capacity HDD ideal for mass storage.",
    price: "79.99",
    type: "Storage (SSD/HDD)"
  },
  {
    id: 36,
    img: "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-black-sn850x-nvme-ssd/gallery/wd-black-sn850x-nvme-ssd-heatsink-front.png.thumb.1280.1280.png",
    title: "Western Digital Black 2TB",
    description: "High-performance HDD for demanding workloads.",
    price: "89.99",
    type: "Storage (SSD/HDD)"
  },
  {
    id: 37,
    img: "https://www.vedantcomputers.com/image/cache/catalog/assets/product/kingston/ssd/sa2000m8-500g/a2000-500gb-2-550x550w.jpg",
    title: "Kingston A2000 500GB",
    description: "Affordable NVMe SSD for fast boot and load times.",
    price: "59.99",
    type: "Storage (SSD/HDD)"
  },
  {
    id: 38,
    img: "https://www.crucial.com/content/dam/crucial/ssd-products/p5-plus/images/web/amazon-gallery/en/interoperable-2-en.jpg",
    title: "Crucial P5 500GB",
    description: "Budget-friendly NVMe SSD with solid performance.",
    price: "64.99",
    type: "Storage (SSD/HDD)"
  },
  {
    id: 39,
    img: "https://m.media-amazon.com/images/I/41vzR2RhNjL.jpg",
    title: "Seagate FireCuda 510 1TB",
    description: "Gaming SSD with high endurance and speed.",
    price: "139.99",
    type: "Storage (SSD/HDD)"
  },
  {
    id: 40,
    img: "https://m.media-amazon.com/images/I/812DsfxDSVL.jpg",
    title: "Samsung 980 PRO 1TB",
    description: "Next-gen NVMe SSD with extreme performance.",
    price: "169.99",
    type: "Storage (SSD/HDD)"
  },
  {
    id: 41,
    img: "https://5.imimg.com/data5/SELLER/Default/2022/9/KR/GN/OZ/98782831/nvidia-geforce-rtx-3080-family-graphic-card-500x500.png",
    title: "NVIDIA GeForce RTX 3080",
    description: "High-end GPU for excellent gaming performance.",
    price: "699.99",
    type: "Graphics Card (GPU)"
  },
  {
    id: 42,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0sB9mA8Ft_WneNyxXy8RP7U4_crXdZe7zA&s",
    title: "AMD Radeon RX 6800 XT",
    description: "Powerful GPU for immersive gaming experiences.",
    price: "649.99",
    type: "Graphics Card (GPU)"
  },
  {
    id: 43,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GC_4bUFGug31Ask-Jo6_Z5RsFBxenpLhSg&s",
    title: "NVIDIA GeForce RTX 3070",
    description: "Great balance of performance and efficiency.",
    price: "499.99",
    type: "Graphics Card (GPU)"
  },
  {
    id: 44,
    img: "https://m.media-amazon.com/images/I/711OlprqckL.jpg",
    title: "AMD Radeon RX 6700 XT",
    description: "Mid-range GPU with solid performance for 1440p gaming.",
    price: "479.99",
    type: "Graphics Card (GPU)"
  },
  {
    id: 45,
    img: "https://m.media-amazon.com/images/I/61XAtpgr1lL.jpg",
    title: "NVIDIA GeForce RTX 3060",
    description: "Affordable GPU ideal for high-quality gaming.",
    price: "329.99",
    type: "Graphics Card (GPU)"
  },
  {
    id: 46,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NC1W2acWsbFMoHpqwLh15CN4Qs1gfDYv8Q&s",
    title: "AMD Radeon RX 6600",
    description: "Budget-friendly GPU for 1080p gaming.",
    price: "279.99",
    type: "Graphics Card (GPU)"
  },
  {
    id: 47,
    img: "https://m.media-amazon.com/images/I/71ytP3Pa6IL.jpg",
    title: "NVIDIA GeForce RTX 3090",
    description: "Ultimate GPU for gaming and creative workloads.",
    price: "1499.99",
    type: "Graphics Card (GPU)"
  },
  {
    id: 48,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmH2K9t8mcR1bdeGQQmMrkastAlMB8zZA0g&s",
    title: "AMD Radeon RX 6900 XT",
    description: "Top-tier GPU for peak gaming performance.",
    price: "999.99",
    type: "Graphics Card (GPU)"
  },
  {
    id: 49,
    img: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/geforce-rtx-3060-ti-out-december-2/nvidia-geforce-rtx-3060-ti-announcement-article-key-visual.jpg",
    title: "NVIDIA GeForce RTX 3060 Ti",
    description: "Excellent performance at a reasonable price.",
    price: "399.99",
    type: "Graphics Card (GPU)"
  },
  {
    id: 50,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON0DIuuBFd551qPkFe2afo6eXX-bzNkMyDQ&s",
    title: "AMD Radeon RX 6650 XT",
    description: "Efficient GPU for smooth 1080p and 1440p gaming.",
    price: "359.99",
    type: "Graphics Card (GPU)"
  },
  {
    id: 51,
    img: "https://m.media-amazon.com/images/I/71vXweqjv+L.jpg",
    title: "Corsair RM750x",
    description: "High efficiency 750W PSU with modular cables.",
    price: "129.99",
    type: "Power Supply Unit (PSU)"
  },
  {
    id: 52,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr97jKT7MdmrLm7PnupDBv63znuHmrV_S9Ng&s",
    title: "EVGA SuperNOVA 750 G+",
    description: "Reliable 750W PSU with 80+ Gold certification.",
    price: "139.99",
    type: "Power Supply Unit (PSU)"
  },
  {
    id: 53,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTmvUYE_04nQeYtn-8lpPG6QhgXVUcprexw&s",
    title: "Seasonic FOCUS GX-650",
    description: "Efficient 650W PSU with full modular design.",
    price: "109.99",
    type: "Power Supply Unit (PSU)"
  },
  {
    id: 54,
    img: "https://via.placeholder.com/150?text=Cooler+Master+MWE+Gold+650",
    title: "Cooler Master MWE Gold 650",
    description: "650W PSU offering reliable power and quiet operation.",
    price: "99.99",
    type: "Power Supply Unit (PSU)"
  },
  {
    id: 55,
    img: "https://m.media-amazon.com/images/I/81ghpcd8hrL.jpg",
    title: "Corsair CX650M",
    description: "Semi-modular 650W PSU with 80+ Bronze certification.",
    price: "79.99",
    type: "Power Supply Unit (PSU)"
  },
  {
    id: 56,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0yj4wUAXHIAmd_azA0JdKaXYQ5Z-jy9hHg&s",
    title: "EVGA 600 BR",
    description: "Budget 600W PSU with reliable performance.",
    price: "59.99",
    type: "Power Supply Unit (PSU)"
  },
  {
    id: 57,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8LAT5Gn6-OZrVAuLMINK3hpx2Lg8njVfOew&s",
    title: "Seasonic FOCUS GX-850",
    description: "850W high-performance PSU with full modularity.",
    price: "149.99",
    type: "Power Supply Unit (PSU)"
  },
  {
    id: 58,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmjyJNgQJB-3HaMEXE6aAiuv8Pdwxq-iWYkg&s",
    title: "Thermaltake Smart 500W",
    description: "Cost-effective PSU for basic systems.",
    price: "49.99",
    type: "Power Supply Unit (PSU)"
  },
  {
    id: 59,
    img: "https://www.bequiet.com/volumes/pim/powersupply/straightpower/straightpower11/3d/lowwatt/004.jpg",
    title: "BeQuiet! Straight Power 11 550W",
    description: "Quiet and efficient 550W PSU with high performance.",
    price: "89.99",
    type: "Power Supply Unit (PSU)"
  },
  {
    id: 60,
    img: "https://www.bequiet.com/volumes/pim/powersupply/straightpower/straightpower11/3d/lowwatt/004.jpg",
    title: "Corsair RM850x",
    description: "Premium 850W PSU with high efficiency and modular cables.",
    price: "149.99",
    type: "Power Supply Unit (PSU)"
  },
  {
    id: 61,
    img: "https://images.aasaan.shop/stores/thunderz/products/product_images/seo/seo_1713608687313.png",
    title: "NZXT H510",
    description: "Mid-tower case with sleek design and excellent cable management.",
    price: "69.99",
    type: "Computer Case"
  },
  {
    id: 62,
    img: "https://m.media-amazon.com/images/I/91Edlq2QdFL._AC_UF1000,1000_QL80_.jpg",
    title: "Fractal Design Meshify C",
    description: "Compact mid-tower with a focus on airflow and aesthetics.",
    price: "89.99",
    type: "Computer Case"
  },
  {
    id: 63,
    img: "https://a.storyblok.com/f/281110/640x811/ada6146465/nr600-odd-sec3-1.png/m/640x0/smart",
    title: "Cooler Master MasterBox NR600",
    description: "Minimalist case with excellent cooling potential.",
    price: "79.99",
    type: "Computer Case"
  },
  {
    id: 64,
    img: "https://m.media-amazon.com/images/I/81MRlQKdq1L.jpg",
    title: "Phanteks P400A",
    description: "High airflow case with a clean and modern design.",
    price: "99.99",
    type: "Computer Case"
  },
  {
    id: 65,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXYfjDsWIuK0dasHb6TKQi54jQ8Be9XBayQ&s",
    title: "Corsair iCUE 400C",
    description: "Elegant case with tempered glass and excellent build quality.",
    price: "109.99",
    type: "Computer Case"
  },
  {
    id: 66,
    img: "https://m.media-amazon.com/images/I/71AE8TX13OL.jpg",
    title: "Thermaltake V200",
    description: "Budget-friendly case with ample space for components.",
    price: "49.99",
    type: "Computer Case"
  },
  {
    id: 67,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTctqS6GaXc3o3w8-bpyQiXd7X9aJMIZOyfnA&s",
    title: "Cooler Master MasterCase H500",
    description: "Large mid-tower with high airflow and modern styling.",
    price: "119.99",
    type: "Computer Case"
  },
  {
    id: 68,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUbUeosJwt3sg8Uglr0tIyRXEJ3U37xlSog&s",
    title: "Fractal Design Define 7",
    description: "Premium case designed for silent operation and modularity.",
    price: "159.99",
    type: "Computer Case"
  },
  {
    id: 69,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegswEJAdyCOarp_859IhfkS2t9hkRu8HWyQ&s",
    title: "Corsair Carbide Series 275R",
    description: "Sleek mid-tower with a focus on minimalist design and performance.",
    price: "74.99",
    type: "Computer Case"
  },
  {
    id: 70,
    img: "https://m.media-amazon.com/images/I/61TFoBuPGwL.jpg",
    title: "NZXT H710",
    description: "Full-tower case with excellent build quality and plenty of space.",
    price: "149.99",
    type: "Computer Case"
  },
  {
    id: 71,
    img: "https://www.primeabgb.com/wp-content/uploads/2023/10/Noctua-NH-D15-Chromax-Pure-Black-CPU-Cooler-with-Dual-140m-Fans.jpg",
    title: "Noctua NH-D15",
    description: "Top-tier air cooler with exceptional cooling performance.",
    price: "89.99",
    type: "Cooling System"
  },
  {
    id: 72,
    img: "https://m.media-amazon.com/images/I/519SXOVA0JL.jpg",
    title: "Corsair H100i RGB",
    description: "Liquid cooling solution with customizable RGB lighting.",
    price: "129.99",
    type: "Cooling System"
  },
  {
    id: 73,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVmWQx1sm33MvW_52FOgmwSJ9g4rWuhYe-w&s",
    title: "Cooler Master Hyper 212 RGB",
    description: "Affordable air cooler with excellent performance and RGB lighting.",
    price: "39.99",
    type: "Cooling System"
  },
  {
    id: 74,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlK66ciLgcpaHtlQWrwVZ7Itu4kD2_Lr8Qw&s",
    title: "NZXT Kraken X63",
    description: "Efficient liquid cooler with a stunning 280mm radiator.",
    price: "149.99",
    type: "Cooling System"
  },
  {
    id: 75,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zMCm2TkLOPaLSo5KzY9ABfqd8C8CHlCBeA&s",
    title: "beQuiet! Dark Rock Pro 4",
    description: "Silent air cooler with powerful cooling capabilities.",
    price: "89.99",
    type: "Cooling System"
  },
  {
    id: 76,
    img: "https://elitehubs.com/cdn/shop/products/cw-9060038-ww-image-03-600x600-1-2.jpg?v=1695323848&width=533",
    title: "Corsair H115i RGB Platinum",
    description: "High-performance liquid cooler with a 280mm radiator.",
    price: "169.99",
    type: "Cooling System"
  },
  {
    id: 77,
    img: "https://www.vedantcomputers.com/image/cache/catalog/assets/product/arctic/cpu-cooler/acfre00093a/acfre00093a-2-550x550.jpg",
    title: "Arctic Liquid Freezer II 240",
    description: "Excellent liquid cooling solution with minimal noise.",
    price: "119.99",
    type: "Cooling System"
  },
  {
    id: 78,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkD2ImVDv-449--HkH7YbScfw-vGTMzdudDg&s",
    title: "Cooler Master MasterLiquid ML240L",
    description: "Efficient liquid cooler with dual-fan design.",
    price: "99.99",
    type: "Cooling System"
  },
  {
    id: 79,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGM_kpFduzYpwqOOlYMCFgahOPuZC3YrLCkg&s",
    title: "Deepcool Captain 240",
    description: "Reliable liquid cooling system with a 240mm radiator.",
    price: "79.99",
    type: "Cooling System"
  },
  {
    id: 80,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhIPn0n2oyCdRci8J1SZ_rcO5IYm1KZT5XA&s",
    title: "Noctua NH-U12S",
    description: "Compact and efficient air cooler ideal for mid-range builds.",
    price: "49.99",
    type: "Cooling System"
  },
  {
    id: 81,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYFze3dIZxu8nRKMSqhhrLPggOn3whA-esQ&s",
    title: "Windows 11 Home",
    description: "Latest Windows OS with modern features for home users.",
    price: "139.99",
    type: "Operating System"
  },
  {
    id: 82,
    img: "https://www.licencedeals.com/cdn/shop/products/Windows-11-Pro-32bit-64bit-download-digital-licence.png?v=1635340831o",
    title: "Windows 11 Pro",
    description: "Advanced Windows OS for professional users with extra security.",
    price: "199.99",
    type: "Operating System"
  },
  {
    id: 83,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgy6zx-VWoF_JywdXVtapPZsmyPRuP9yNO9Q&s",
    title: "Ubuntu 22.04 LTS",
    description: "Popular Linux distribution with long-term support for stability.",
    price: "0.00",
    type: "Operating System"
  },
  {
    id: 84,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5yxNEkFrAu3vQ4Y90A7g-pQPs_tSO14r2PA&s",
    title: "Fedora Workstation",
    description: "Modern Linux OS with cutting-edge features for developers.",
    price: "0.00",
    type: "Operating System"
  },
  {
    id: 85,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXIMIDO8mC6AnwXgjgeLzjYGTmg7dodbcQzw&s",
    title: "macOS Monterey",
    description: "Apple's operating system designed for Mac hardware.",
    price: "0.00",
    type: "Operating System"
  },
  {
    id: 86,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx9gdSlwWUnHWWsRsQgIiebGrzwGdjPEGlyw&s",
    title: "Windows 10 Home",
    description: "Reliable Windows OS with familiar interface and features.",
    price: "109.99",
    type: "Operating System"
  },
  {
    id: 87,
    img: "https://networkitstore.in/wp-content/uploads/2022/10/September-special-discount-win10-pro.png",
    title: "Windows 10 Pro",
    description: "Enhanced version of Windows 10 with additional enterprise features.",
    price: "149.99",
    type: "Operating System"
  },
  {
    id: 88,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaAiPmOVn8Mk9WPcNaqf3YAO_4YLJmE4gZzg&s",
    title: "Linux Mint 20",
    description: "User-friendly Linux distribution ideal for beginners.",
    price: "0.00",
    type: "Operating System"
  },
  {
    id: 89,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGzZmIN-cV6zEifxtreM3SbgIywy55YD7h5Q&s",
    title: "Debian 10",
    description: "Stable Linux OS known for its robustness and versatility.",
    price: "0.00",
    type: "Operating System"
  },
  {
    id: 90,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4Abvbhlpw28v1DD6DxqHzwACZSjZ3_dxbg&s",
    title: "Pop!_OS",
    description: "Optimized Linux OS for performance and productivity, popular among gamers.",
    price: "0.00",
    type: "Operating System"
  }

]
module.exports = ComponentsData;
