export const navItems = [
    {
        titleEn:'Home',
        titleAr:'الرئيسية',
        url:'/',
        cName:'nav-links',
    },
    {
        titleEn:'Services',
        titleAr:'الخدمات',
        url:'/services',
        cName:'nav-links',
    },
    {
        titleEn:'Contact',
        titleAr:'تواصل معنا',
        url:'/contact',
        cName:'nav-links',
    },
    
]


import { alwatania, aramco,jazan, metro, port } from "../assets"

import { FaWrench, FaHammer, FaShieldAlt, FaPalette, FaWarehouse, FaFire } from 'react-icons/fa';

export const servicesData = [
  {
    titleAr: 'أرضيات صناعية',
    titleEn: 'Industrial flooring',
    Icon: FaWarehouse,
    id: '1',
  },
  {
    titleAr: 'طلاء وقائي',
    titleEn: 'Protective coating',
    Icon: FaShieldAlt,
    id: '2',
  },
  {
    titleAr: 'اللحام والصيانة',
    titleEn: 'Water Roofing',
    Icon: FaWrench,
    id: '3',
  },
  {
    titleAr: 'إصلاح الخرسانة',
    titleEn: 'Concrete Repair',
    Icon: FaHammer,
    id: '4',
  },
  {
    titleAr: 'الطلاءات المقاومة للحريق',
    titleEn: 'FIREPROOFING COATINGS',
    Icon: FaFire,
    id: '5',
  },
  {
    titleAr: 'الأرضيات الزخرفية',
    titleEn: 'Decorative Floors',
    Icon: FaPalette,
    id: '6',
  },
];





import { FaShoePrints, FaCar, FaLevelUpAlt, FaBuilding, FaBolt } from 'react-icons/fa';

export const servicesData2 = [
  {
    titleAr: 'أرضيات مقاومة للانزلاق',
    titleEn: 'Skid-Resistant Flooring',
    Icon: FaShoePrints,
    id: '1',
  },
  {
    titleAr: 'أنظمة حركة مرور المركبات',
    titleEn: 'Vehicular Traffic Systems',
    Icon: FaCar,
    id: '2',
  },
  {
    titleAr: 'الأرضيات ذاتية التسوية',
    titleEn: 'Self-Levelling Flooring',
    Icon: FaLevelUpAlt,
    id: '3',
  },
  {
    titleAr: 'أنظمة PU الثقيلة',
    titleEn: 'Heavy-Duty PU Systems',
    Icon: FaBuilding,
    id: '4',
  },
  {
    titleAr: 'أنظمة الإبوكسي',
    titleEn: 'Epoxy Screed',
    Icon: FaPalette,
    id: '5',
  },
  {
    titleAr: 'الأرضيات المضادة للكهرباء الساكنة',
    titleEn: 'Antistatic Flooring',
    Icon: FaBolt,
    id: '6',
  },
];



export const projectsData = [
    {
      titleAr: 'الدواجن الوطنية',
      titleEn: 'AL WATANIA POULTRY',
      subtitleEn: 'QASSIM FACTORY',
      subtitleAr: 'مصنع القصيم',
      valueEn: 'Contract Value: SAR 6,540,000',
      valueAr: 'قيمة العقد: 6,540,000 ريال سعودي',
      descriptionEn:
        'Al Wataniya Poultry invited CONEX and other companies to bid for the new meat factory in Al Qassim. The required system was a heavy-duty polyurethane screed from BASF (Ucrete). After reviewing the technical and financial submissions from all bidders, Al Wataniya awarded the project to CONEX with a total contract value of SAR 6,540,000. CONEX considers this project as one of the main milestones in its job reference list, as the client was totally satisfied, and the project was completed within the planned duration with very high quality at one of the top client facilities in Saudi Arabia.',
        descriptionAr:
            'دعت شركة الدواجن الوطنية شركة CONEX وشركات أخرى للمشاركة في مناقصة مصنع اللحوم الجديد في القصيم. تم استخدام نظام بولي يوريثين ثقيل من BASF (Ucrete). بعد مراجعة العروض الفنية والمالية من جميع المناقصين، منحت الدواجن الوطنية المشروع لشركة CONEX بقيمة إجمالية للعقد بلغت 6,540,000 ريال سعودي. تعتبر CONEX هذا المشروع واحداً من الإنجازات الرئيسية في قائمة مرجعها، حيث كان العميل راضياً تماماً وتم الانتهاء من المشروع ضمن المدة المحددة بجودة عالية جداً.',
        img: alwatania,
      id: 1,
    },
    {
      titleAr: 'أنم مترو | الرياض التنقل الجديد',
      titleEn: 'ANM METRO | ArRiyadh New Mobility',
      subtitleEn: 'FAST Consortium',
      subtitleAr: 'تحالف فاست',
      valueEn: 'Contracts Value: SAR 19,800,000',
      valueAr: 'قيمة العقود: 19,800,000 ريال سعودي',
      descriptionEn:
        'ANM Metro FAST Consortium - Trains Stabling Area. Type of service: Epoxy Terrazzo Vehicular Traffic System, Concrete Screed works, and Epoxy Flooring System.',
        descriptionAr:
        'تحالف فاست لمترو أنم - منطقة إيقاف القطارات. نوع الخدمة: نظام المرور الأرضي من الإيبوكسي التيرازو، أعمال الخرسانة، ونظام الأرضيات الإيبوكسي.',
      img: metro,
      id: 2,
    },
    {
      titleAr: 'مصفاة شركة أرامكو السعودية شل',
      titleEn: 'SAUDI ARAMCO SHELL REFINERY CO.',
      subtitleEn: 'Industrial Services Expansion',
      subtitleAr: 'توسيع الخدمات الصناعية',
      valueEn: 'Contracts Value: SAR 41,650,000',
      valueAr: 'قيمة العقود: 41,650,000 ريال سعودي',
      descriptionEn:
        'In 2019, CONEX introduced its industrial services to Saudi Aramco Shell Refinery Co. (SASREF), becoming one of the main players in the running shutdown for renovation and repair works. Through its partner ATTS, CONEX won one of the major contracts with a value of SAR 41,650,000, demonstrating its status as a leading market player. With a highly experienced team and 24/7 operations, CONEX aligned with the tight project schedule and high specifications of Civil and MEP scopes. CONEX was appreciated by SASREF for completing the first stage of the project without any Lost Time Incidents (LTI).',
        descriptionAr:
            'في عام 2019، قدمت CONEX خدماتها الصناعية لشركة مصفاة أرامكو السعودية شل (ساسرف)، وأصبحت واحدة من اللاعبين الرئيسيين في أعمال الصيانة والتجديد. من خلال شريكها ATTS، فازت CONEX بأحد العقود الرئيسية بقيمة 41,650,000 ريال سعودي، مما يعزز مكانتها كقوة رئيسية في السوق. بفضل فريق عمل ذو خبرة عالية وعمليات على مدار الساعة، أنجزت CONEX المشروع ضمن الجدول الزمني المحدد وبمواصفات عالية دون أي حوادث فقد وقت (LTI).',
      img: aramco,
      id: 3,
    },
    {
      titleAr: 'البنية التحتية والموانئ (JECPI)',
      titleEn: 'INFRASTRUCTURE & PORT (JECPI)',
      subtitleEn: 'Infrastructure & Port Project',
      subtitleAr: 'مشروع البنية التحتية والموانئ',
      valueEn: 'Contracts Value: SAR 6,000,000',
      valueAr: 'قيمة العقود: 6,000,000 ريال سعودي',
      descriptionEn:
          'Al-Kifah Contracting Co. was awarded the main package of the Jazan Economic City Infrastructure & Port (JECPI). CONEX contributed to the project using its extensive experience and professionalism. The total service provided added significant value to the overall development of the port.',
      descriptionAr:
          'حصلت شركة الكفاح للمقاولات على الحزمة الرئيسية لمشروع البنية التحتية والموانئ في مدينة جازان الاقتصادية (JECPI). ساهمت شركة CONEX في المشروع باستخدام خبرتها الواسعة واحترافيتها، مما أضاف قيمة كبيرة للتطوير الشامل للميناء.',
      img: port,
      id: 4,
  },
  {
      titleAr: 'المدينة الاقتصادية بجازان - خزانات الشمال والجنوب',
      titleEn: 'JAZAN ECONOMIC CITY NORTH & SOUTH TANK FARMS',
      subtitleEn: 'Packages #4 & #5',
      subtitleAr: 'الحزم #4 و #5',
      valueEn: 'Contracts Value: SAR 40,200,000',
      valueAr: 'قيمة العقود: 40,200,000 ريال سعودي',
      descriptionEn:
          'CONEX successfully completed one of the most significant milestones at the Jazan Economic City project, packages #4 & #5. The main contractor was Consolidated Contractors Co. (CCC), and CONEX delivered exceptional quality throughout the project duration, exceeding client expectations. This excellence earned CONEX high praise and recognition.',
      descriptionAr:
          'أكملت شركة CONEX بنجاح أحد أهم الإنجازات في مشروع مدينة جازان الاقتصادية، الحزم #4 و #5. كان المقاول الرئيسي شركة المقاولون المتحدون (CCC)، وقدمت CONEX جودة استثنائية طوال مدة المشروع، متجاوزة توقعات العميل. وقد أكسب هذا الأداء الممتاز CONEX تقديرًا وإشادة كبيرة.',
      img: jazan,
      id: 5,
  },
];


  


