import { Unit, Official } from '../types';

export const UNITS_DATA: Unit[] = [
  // --- 证监会机关 ---
  {
    id: 'csrc-main',
    tinyName: '证监会机关',
    name: '中国证券监督管理委员会',
    shortName: '证监会机关',
    category: '会机关内设部门',
    level: '正部级',
    establishedYear: 1992,
    establishedDate: '1992-10-26',
    description: '国务院直属机构，正部级单位。依照法律、法规和国务院授权，统一监督管理全国证券期货市场，维护证券期货市场秩序，保障其合法合规运行。',
    mainDuties: [
      '建立健全证券期货市场监管制度规则体系',
      '依法监管股票、可转换公司债券、证券投资基金及期货等品种的发行、上市、交易',
      '依法监管上市公司及其控股股东、实际控制人的信息披露',
      '依法监管证券期货经营机构、基金管理公司及证券期货服务机构',
      '依法查处证券期货违法违规行为，防范化解金融风险'
    ],
    websiteUrl: 'http://www.csrc.gov.cn',
    address: '北京市西城区金融大街19号富凯大厦',
    contactPhone: '010-88061000',
    currentLeaderIds: ['wu-qing', 'li-ming'],
    tagColor: 'blue'
  },
  {
    id: 'csrc-fx',
    tinyName: '发行司',
    name: '中国证监会发行监管司',
    shortName: '发行司',
    category: '会机关内设部门',
    level: '正厅局级',
    establishedYear: 1998,
    description: '负责统筹股票公开发行注册相关工作，监督检查交易所发行上市审核工作，拟订公开发行股票相关规则。',
    mainDuties: [
      '拟订股票公开发行并上市的相关规则与制度标准',
      '统筹监管企业股票公开发行注册与审核程序规范',
      '承担对证券交易所发行审核工作的监督检查',
      '组织协调资本市场重大IPO与再融资监管事务'
    ],
    websiteUrl: 'http://www.csrc.gov.cn',
    address: '北京市西城区金融大街19号富凯大厦',
    tagColor: 'sky'
  },
  {
    id: 'csrc-ss',
    tinyName: '上市司',
    name: '中国证监会上市公司监管司',
    shortName: '上市司',
    category: '会机关内设部门',
    level: '正厅局级',
    establishedYear: 1998,
    description: '负责拟订上市公司监管规章规则，统筹上市公司持续监管、并购重组、退市监管等核心业务。',
    mainDuties: [
      '拟订上市公司监管法律法规与规章制度',
      '统筹上市公司信息披露监管、公司治理和分红监管',
      '依法监管上市公司并购重组、重大资产置换及退市制度执行',
      '指导派出机构对辖区内上市公司的日常监督检查'
    ],
    websiteUrl: 'http://www.csrc.gov.cn',
    address: '北京市西城区金融大街19号富凯大厦',
    tagColor: 'sky'
  },
  {
    id: 'csrc-jg',
    tinyName: '机构司',
    name: '中国证监会证券基金机构监管司',
    shortName: '机构司',
    category: '会机关内设部门',
    level: '正厅局级',
    establishedYear: 1998,
    description: '负责拟订证券公司、公募基金管理公司及期货服务机构监管规章，对机构进行准入审核、合规风控及日常业务监管。',
    mainDuties: [
      '拟订证券经营机构、证券投资基金管理公司监管政策与业务规则',
      '对证券基金经营机构设立、重大变更及高管资质进行监管审核',
      '监测防范证券基金行业合规风控与流动性风险',
      '指导派出机构对辖区证券基金机构的现场检查与风险处置'
    ],
    websiteUrl: 'http://www.csrc.gov.cn',
    address: '北京市西城区金融大街19号富凯大厦',
    tagColor: 'sky'
  },
  {
    id: 'csrc-sc',
    tinyName: '市场一司',
    name: '中国证监会市场监管一司',
    shortName: '市场一司',
    category: '会机关内设部门',
    level: '正厅局级',
    establishedYear: 1998,
    description: '负责多层次资本市场顶层设计、市场交易机制运行监控及宏观风险综合研判。',
    mainDuties: [
      '监测全国股票市场日常交易运行态势与异常波动',
      '统筹协调资本市场深化改革与重大创新机制设计',
      '研究拟订交易机制、程序化交易等监管规范'
    ],
    websiteUrl: 'http://www.csrc.gov.cn',
    address: '北京市西城区金融大街19号富凯大厦',
    tagColor: 'sky'
  },
  {
    id: 'csrc-gz',
    tinyName: '公众公司司',
    name: '中国证监会公众公司监管司',
    shortName: '公众公司司',
    category: '会机关内设部门',
    level: '正厅局级',
    establishedYear: 2013,
    description: '负责拟订非上市公众公司、新三板挂牌公司及北交所拟上市企业的监管规章规则。',
    mainDuties: [
      '依法监管非上市公众公司的股票公开发行与定向发行',
      '推进新三板深化改革与高质量挂牌上市监管',
      '指导并协同北京证券交易所开展中小企业创新孵化与监管'
    ],
    websiteUrl: 'http://www.csrc.gov.cn',
    address: '北京市西城区金融大街19号富凯大厦',
    tagColor: 'sky'
  },
  {
    id: 'csrc-jc',
    tinyName: '稽查局',
    name: '中国证监会稽查局',
    shortName: '稽查局',
    category: '会机关内设部门',
    level: '正厅局级',
    establishedYear: 1998,
    description: '负责统筹组织查处证券期货违法违规案件，开展立案审查、案件线索交办、执法协作与专项打击。',
    mainDuties: [
      '统一管理并组织开展证券期货违法犯罪线索发现与立案调查',
      '组织查处内幕交易、财务造假、操纵市场等重大恶性违法案件',
      '协调并推进与公安、司法部门的行刑衔接和联合执法'
    ],
    websiteUrl: 'http://www.csrc.gov.cn',
    address: '北京市西城区金融大街19号富凯大厦',
    tagColor: 'sky'
  },

  // --- 证券与期货交易所 ---
  {
    id: 'csrc-sse',
    tinyName: '上交所',
    name: '上海证券交易所',
    shortName: '上交所 (SSE)',
    category: '会管单位/交易所',
    level: '副部级',
    establishedYear: 1990,
    establishedDate: '1990-11-26',
    description: '中国内地两大证券交易所之一，受中国证监会直接监督管理，提供证券集中竞价交易场所及设施，下辖主板与科创板。',
    mainDuties: [
      '提供股票、债券、基金、衍生品集中交易的场所与设施',
      '负责主板与科创板股票发行上市的审核与日常监管',
      '组织和监督证券交易活动，监控市场异常交易与系统性风险',
      '服务科技创新与实体经济高水平发展'
    ],
    websiteUrl: 'http://www.sse.com.cn',
    address: '上海市浦东新区杨高南路388号',
    contactPhone: '021-68808888',
    currentLeaderIds: ['qiu-yong', 'cai-jianchun'],
    tagColor: 'rose'
  },
  {
    id: 'csrc-szse',
    tinyName: '深交所',
    name: '深圳证券交易所',
    shortName: '深交所 (SZSE)',
    category: '会管单位/交易所',
    level: '副部级',
    establishedYear: 1990,
    establishedDate: '1990-12-01',
    description: '受中国证监会监督管理，为社会主义市场经济提供高效率资本要素配置平台，下辖主板与创业板，以创新驱动和成长型企业为特色。',
    mainDuties: [
      '提供集中交易场所和设施，组织并管理证券交易',
      '开展创业板与主板发行上市审核及持续监管',
      '培育创新创业企业，深化粤港澳大湾区资本市场互联互通',
      '保障交易系统平稳安全运行与投资者合法权益'
    ],
    websiteUrl: 'http://www.szse.cn',
    address: '深圳市福田区深南大道2012号',
    contactPhone: '0755-88668888',
    currentLeaderIds: ['sha-yan', 'li-jizun'],
    tagColor: 'indigo'
  },
  {
    id: 'csrc-bse',
    tinyName: '北交所',
    name: '北京证券交易所',
    shortName: '北交所 (BSE)',
    category: '会管单位/交易所',
    level: '正厅局级',
    establishedYear: 2021,
    establishedDate: '2021-09-03',
    description: '经国务院批准设立的我国第一家公司制证券交易所，定位于打造服务创新型中小企业主阵地。',
    mainDuties: [
      '组织和监督股票、债券等证券发行审核与交易',
      '健全契合创新型中小企业特征的制度机制',
      '与全国中小企业股份转让系统（新三板）协同联动构建层层递进市场架构'
    ],
    websiteUrl: 'http://www.bse.cn',
    address: '北京市西城区金融大街丁26号',
    contactPhone: '010-63889999',
    currentLeaderIds: ['zhou-guihua'],
    tagColor: 'emerald'
  },
  {
    id: 'csrc-cffex',
    tinyName: '中金所',
    name: '中国金融期货交易所',
    shortName: '中金所 (CFFEX)',
    category: '会管单位/交易所',
    level: '正厅局级',
    establishedYear: 2006,
    establishedDate: '2006-09-08',
    description: '经国务院同意、中国证监会批准设立的专门从事金融期货、期权等金融衍生品交易与结算的公司制交易所。',
    mainDuties: [
      '组织股指期货、国债期货等金融衍生品的开发与交易',
      '承担金融衍生品市场的日常运行监测与风险管控',
      '服务国家宏观调控与金融机构风险对冲'
    ],
    websiteUrl: 'http://www.cffex.com.cn',
    address: '上海市浦东新区世纪大道1600号',
    contactPhone: '021-50160666',
    tagColor: 'amber'
  },

  // --- 代表性派出机构 (各省市证监局) ---
  {
    id: 'csrc-bj',
    tinyName: '北京局',
    name: '中国证券监督管理委员会北京监管局',
    shortName: '北京证监局',
    category: '派出机构',
    level: '正厅局级',
    establishedYear: 1998,
    establishedDate: '1998-11-20',
    description: '中国证监会在北京设立的派出机构，正厅局级建制，负责对北京市辖区内的证券期货市场、上市公司及经营机构进行一线监管。',
    mainDuties: [
      '监管北京市辖区内的上市公司、拟上市公司及非上市公众公司',
      '监管辖区内证券公司、基金公司、期货公司及相关证券分支机构',
      '调查处理辖区内涉嫌违法违规证券期货行为，化解金融风险'
    ],
    websiteUrl: 'http://www.csrc.gov.cn/beijing/',
    address: '北京市西城区金融大街26号金丰和商务苑',
    contactPhone: '010-85578900',
    currentLeaderIds: ['jia-wenqin'],
    tagColor: 'teal'
  },
  {
    id: 'csrc-sh',
    tinyName: '上海局',
    name: '中国证券监督管理委员会上海监管局',
    shortName: '上海证监局',
    category: '派出机构',
    level: '正厅局级',
    establishedYear: 1998,
    establishedDate: '1998-11-20',
    description: '中国证监会在上海设立的派出机构，负责上海国际金融中心辖区内的证券期货行业全链条日常监管。',
    mainDuties: [
      '对上海辖区数百家上市公司实施信息披露与公司治理监管',
      '对上海辖区各类证券公司、基金管理公司及私募机构进行现场检查',
      '维护上海证券期货市场稳定，依法核查违法违规行为'
    ],
    websiteUrl: 'http://www.csrc.gov.cn/shanghai/',
    address: '上海市浦东新区迎春路555号',
    contactPhone: '021-50185000',
    tagColor: 'teal'
  },
  {
    id: 'csrc-gd',
    tinyName: '广东局',
    name: '中国证券监督管理委员会广东监管局',
    shortName: '广东证监局',
    category: '派出机构',
    level: '正厅局级',
    establishedYear: 1998,
    establishedDate: '1998-11-20',
    description: '中国证监会在广东省设立的派出机构，负责除深圳市以外广东省辖区内的证券期货市场监督管理。',
    mainDuties: [
      '对广东辖区上市公司进行持续监督与合规辅导',
      '对辖区内证券期货服务机构、中介机构进行穿透式合规监管',
      '承办证监会交办的重大案件调查与投资者权益保护工作'
    ],
    websiteUrl: 'http://www.csrc.gov.cn/guangdong/',
    address: '广州市天河区临江大道3号发展中心',
    contactPhone: '020-37853900',
    tagColor: 'teal'
  },
  {
    id: 'csrc-sz',
    tinyName: '深圳局',
    name: '中国证券监督管理委员会深圳监管局',
    shortName: '深圳证监局',
    category: '派出机构',
    level: '正厅局级',
    establishedYear: 1998,
    establishedDate: '1998-11-20',
    description: '中国证监会在深圳市设立的派出机构，计划单列市证监局，正厅局级建制，负责特区证券期货市场一线监督管理。',
    mainDuties: [
      '依法监督管理深圳特区上市公司、拟上市公司规范运作',
      '监管招商证券、中信证券等全国性头部券商总部及公募基金总部合规风控',
      '打击辖区非法证券期货活动，推进大湾区金融合规创新'
    ],
    websiteUrl: 'http://www.csrc.gov.cn/shenzhen/',
    address: '深圳市福田区笋岗西路体育大厦',
    contactPhone: '0755-83260000',
    tagColor: 'teal'
  },
  {
    id: 'csrc-zj',
    tinyName: '浙江局',
    name: '中国证券监督管理委员会浙江监管局',
    shortName: '浙江证监局',
    category: '派出机构',
    level: '正厅局级',
    establishedYear: 1998,
    description: '负责浙江省（不含宁波）证券期货市场的监督管理，监管民营经济大省上市公司集群与创新资本。',
    mainDuties: [
      '监管浙江辖区上市公司、拟上市民营龙头企业合规运作',
      '监管辖区证券期货机构与私募股权投资高地合规生态'
    ],
    websiteUrl: 'http://www.csrc.gov.cn/zhejiang/',
    address: '杭州市上城区民心路1号',
    contactPhone: '0571-88473333',
    tagColor: 'teal'
  },
  {
    id: 'csrc-js',
    tinyName: '江苏局',
    name: '中国证券监督管理委员会江苏监管局',
    shortName: '江苏证监局',
    category: '派出机构',
    level: '正厅局级',
    establishedYear: 1998,
    description: '负责江苏省辖区证券期货市场的日常监督管理，辖内实体制造业上市公司数量居全国前列。',
    mainDuties: [
      '对江苏辖区上市公司实施全过程信息披露与治理监管',
      '指导辖区资本市场更好赋能先进制造业与战略新兴产业集群'
    ],
    websiteUrl: 'http://www.csrc.gov.cn/jiangsu/',
    address: '南京市中山东路90号华泰证券大厦',
    contactPhone: '025-84575510',
    tagColor: 'teal'
  },

  // --- 核心会管企业与直属事业单位 ---
  {
    id: 'csrc-csdc',
    tinyName: '中国结算',
    name: '中国证券登记结算有限责任公司',
    shortName: '中国结算 (CSDC)',
    category: '会管单位/交易所',
    level: '正厅局级',
    establishedYear: 2001,
    establishedDate: '2001-03-30',
    description: '为全国证券交易提供集中登记、存管与结算服务的国家级金融基础设施，受中国证监会监督管理。',
    mainDuties: [
      '证券账户与结算账户的设立和集中管理',
      '证券的登记、存管与过户服务',
      '证券交易所场内及跨市场交易的集中清算与交收',
      '代发证券权益及证券持有人名册登记'
    ],
    websiteUrl: 'http://www.chinaclear.cn',
    address: '北京市西城区太平桥大街17号',
    contactPhone: '010-58598888',
    tagColor: 'purple'
  },
  {
    id: 'csrc-csf',
    tinyName: '中证金融',
    name: '中国证券金融股份有限公司',
    shortName: '中证金融 (CSF)',
    category: '会管单位/交易所',
    level: '正厅局级',
    establishedYear: 2011,
    establishedDate: '2011-10-28',
    description: '经国务院同意、中国证监会批准设立的全国性证券类金融机构，主要从事转融通业务，防范化解系统性金融风险。',
    mainDuties: [
      '为证券公司融资融券业务提供转融通资金融通和证券融券服务',
      '监测监控全市场融资融券与转融通业务运行情况',
      '运用市场化手段协助监管部门平抑市场非理性剧烈波动'
    ],
    websiteUrl: 'http://www.csf.com.cn',
    address: '北京市西城区金融大街9号金融街中心',
    contactPhone: '010-63211555',
    tagColor: 'purple'
  },
  {
    id: 'csrc-cfr',
    tinyName: '金融研究院',
    name: '中证金融研究院',
    shortName: '中证金融研究院',
    category: '直属事业单位',
    level: '正厅局级',
    establishedYear: 2012,
    establishedDate: '2012-07-20',
    description: '中国证监会直属的高端智库和科研事业单位，定位于资本市场政策研究、宏观经济分析及战略前瞻性课题研究。',
    mainDuties: [
      '开展资本市场重大战略性、基础性、前瞻性理论与政策研究',
      '跟踪分析国内外宏观经济金融形势及重大金融风险事件',
      '为中国证监会党组科学决策提供坚实研究支撑与咨询建议'
    ],
    websiteUrl: 'http://www.cfr.org.cn',
    address: '北京市西城区金融大街26号金丰和商务苑',
    contactPhone: '010-85578000',
    tagColor: 'orange'
  },

  // --- 行业自律组织 ---
  {
    id: 'csrc-sac',
    tinyName: '中证协',
    name: '中国证券业协会',
    shortName: '中证协 (SAC)',
    category: '行业自律组织',
    level: '正厅局级',
    establishedYear: 1991,
    establishedDate: '1991-08-28',
    description: '依据《中华人民共和国证券法》设立的全国性证券业自律性组织，接受中国证监会的业务指导和监督管理。',
    mainDuties: [
      '组织制定证券行业自律规则与业务规范，督促会员合规展业',
      '组织证券行业专业人员水平评价测试及持续执业培训',
      '调解证券业务活动纠纷，维护行业合法权益与良性生态'
    ],
    websiteUrl: 'https://www.sac.net.cn',
    address: '北京市西城区金融大街19号富凯大厦B座',
    contactPhone: '010-66575800',
    tagColor: 'emerald'
  },
  {
    id: 'csrc-amac',
    tinyName: '中基协',
    name: '中国证券投资基金业协会',
    shortName: '中基协 (AMAC)',
    category: '行业自律组织',
    level: '正厅局级',
    establishedYear: 2012,
    establishedDate: '2012-06-06',
    description: '依据《证券投资基金法》设立的全国性证券投资基金行业自律组织，接受中国证监会的业务指导和监督管理。',
    mainDuties: [
      '负责公募基金、私募基金管理人的登记与私募基金备案服务',
      '拟订基金行业职业道德准则与自律规则，促进行业合规发展',
      '开展行业合规检查与信用评价，引导长期投资理念'
    ],
    websiteUrl: 'https://www.amac.org.cn',
    address: '北京市西城区月坛北街2号月坛大厦',
    contactPhone: '010-66578200',
    tagColor: 'emerald'
  },

  // --- 关联外部机构（供领导干部跨机构流转轨迹泳道展示） ---
  {
    id: 'gov-sh',
    tinyName: '上海市',
    name: '上海市人民政府及直辖区',
    shortName: '上海市政府/虹口区',
    category: '会管单位/交易所', // 用于泳道横向对比
    level: '正部级',
    establishedYear: 1949,
    description: '上海市各级党政机关及区县领导班子，与国家金融监管体系保持密切干部交流与协同发展。',
    mainDuties: ['地方经济社会发展规划与实施', '上海国际金融中心建设推进'],
    websiteUrl: 'https://www.shanghai.gov.cn',
    tagColor: 'slate'
  },
  {
    id: 'pbc',
    tinyName: '央行',
    name: '中国人民银行',
    shortName: '央行 (PBC)',
    category: '会管单位/交易所',
    level: '正部级',
    establishedYear: 1948,
    description: '国家中央银行，制定和执行货币政策，防范和化解系统性金融风险。',
    mainDuties: ['货币政策实施', '宏观审慎金融监管'],
    websiteUrl: 'http://www.pbc.gov.cn',
    tagColor: 'slate'
  },
  {
    "id": "csrc-shfe",
    "tinyName": "上期所",
    "name": "上海期货交易所",
    "shortName": "上期所 (SHFE)",
    "category": "会管单位/交易所",
    "level": "正厅局级",
    "establishedYear": 1999,
    "establishedDate": "1999-12-26",
    "description": "受中国证监会集中统一监督管理，是国际知名、国内领先的大宗商品期货期权交易枢纽，下设上海国际能源交易中心。",
    "mainDuties": [
      "组织铜、铝、原油、黄金等重要工业品及能源衍生品交易与结算",
      "提供大宗商品风险管理与远期价格发现平台",
      "服务国家初级产品保供稳价与高水平对外开放"
    ],
    "websiteUrl": "http://www.shfe.com.cn",
    "address": "上海市浦东新区浦电路500号上海期货大厦",
    "contactPhone": "021-68400000",
    "currentLeaderIds": [
      "tian-xiangyang"
    ],
    "tagColor": "amber"
  },
  {
    "id": "csrc-dce",
    "tinyName": "大商所",
    "name": "大连商品交易所",
    "shortName": "大商所 (DCE)",
    "category": "会管单位/交易所",
    "level": "正厅局级",
    "establishedYear": 1993,
    "establishedDate": "1993-11-18",
    "description": "经国务院批准设立的全国四家期货交易所之一，是全球重要的大豆、铁矿石、塑料等农产品与化工品期货交易中心。",
    "mainDuties": [
      "组织大豆、玉米、铁矿石、生猪等农产品与黑色系期货及期权交易",
      "维护粮食安全与重要产业链供应链供应链价格风险管理"
    ],
    "websiteUrl": "http://www.dce.com.cn",
    "address": "辽宁省大连市沙河口区会展路129号期货大厦",
    "contactPhone": "0411-84808888",
    "currentLeaderIds": [
      "ran-hua"
    ],
    "tagColor": "amber"
  },
  {
    "id": "csrc-czce",
    "tinyName": "郑商所",
    "name": "郑州商品交易所",
    "shortName": "郑商所 (CZCE)",
    "category": "会管单位/交易所",
    "level": "正厅局级",
    "establishedYear": 1990,
    "establishedDate": "1990-10-12",
    "description": "新中国第一家期货交易所试点，国务院批准设立的期货交易所，主要上市粮棉油糖及纯碱、PTA等大宗原料商品品种。",
    "mainDuties": [
      "组织小麦、棉花、白糖、苹果及PTA、甲醇等特色大宗商品期货交易",
      "助力乡村振兴与实体企业稳健经营"
    ],
    "websiteUrl": "http://www.czce.com.cn",
    "address": "河南省郑州市郑东新区商务外环路30号期货大厦",
    "contactPhone": "0371-65610069",
    "currentLeaderIds": [
      "xiong-wei"
    ],
    "tagColor": "amber"
  },
  {
    "id": "csrc-gfex",
    "tinyName": "广期所",
    "name": "广州期货交易所",
    "shortName": "广期所 (GFEX)",
    "category": "会管单位/交易所",
    "level": "正厅局级",
    "establishedYear": 2021,
    "establishedDate": "2021-04-19",
    "description": "经国务院同意、中国证监会批准设立的我国第一家混合所有制创新型期货交易所，立足绿色低碳与新能源金属。",
    "mainDuties": [
      "上市工业硅、碳酸锂等新能源金属期货品种",
      "服务绿色低碳转型与粤港澳大湾区现代金融体系构建"
    ],
    "websiteUrl": "http://www.gfex.com.cn",
    "address": "广东省广州市天河区临江大道391-395号天德广场",
    "contactPhone": "020-28183333",
    "currentLeaderIds": [
      "gao-weibing"
    ],
    "tagColor": "amber"
  },
  {
    "id": "csrc-csdata",
    "tinyName": "中证数据",
    "name": "中证数据有限责任公司",
    "shortName": "中证数据",
    "category": "会管单位/交易所",
    "level": "正厅局级",
    "establishedYear": 2020,
    "establishedDate": "2020-09-28",
    "description": "中国证监会会管金融科技核心基础设施，承担资本市场大数据监管与分析平台建设，构建智能化监管科技底座。",
    "mainDuties": [
      "负责全国证券期货市场大数据集中存储、分析挖掘与算力平台建设",
      "开展穿透式监管科技算法研发，赋能稽查执法与市场异常交易侦查",
      "推进资本市场数据标准化与行业数字化转型赋能"
    ],
    "websiteUrl": "http://www.csdata.com.cn",
    "address": "北京市西城区金融大街9号金融街中心",
    "contactPhone": "010-53856688",
    "currentLeaderIds": [
      "ge-yiping"
    ],
    "tagColor": "purple"
  },
  {
    "id": "csrc-sipf",
    "tinyName": "投保基金",
    "name": "中国证券投资者保护基金有限责任公司",
    "shortName": "投保基金 (SIPF)",
    "category": "会管单位/交易所",
    "level": "正厅局级",
    "establishedYear": 2005,
    "establishedDate": "2005-08-30",
    "description": "国务院批准设立的国有独资金融机构，承担证券投资者保护基金的筹集、管理和使用，监测证券公司风险。",
    "mainDuties": [
      "筹集、管理和运用证券投资者保护基金",
      "监测证券公司合规风控与流动性风险，参与证券公司风险处置",
      "组织开展全国证券市场投资者满意度调查与合法权益维权支持"
    ],
    "websiteUrl": "http://www.sipf.com.cn",
    "address": "北京市西城区金融大街5号新盛大厦B座",
    "contactPhone": "010-66580666",
    "tagColor": "purple"
  }

];

export const OFFICIALS_DATA: Official[] = [
  {
    id: 'wu-qing',
    name: '吴清',
    gender: '男',
    birthYear: 1965,
    birthMonth: 4,
    nativePlace: '安徽蒙城',
    currentUnitId: 'csrc-main',
    currentPosition: '中国证券监督管理委员会党委书记、主席',
    currentRank: '正部级',
    bioSummary: '中国共产党第二十届中央委员会候补委员。经济学博士。长期在国家宏观综合管理部门、证券监管部门、地方重要党政岗位及核心交易所担任主要领导职务，具有极为深厚系统的金融监管及治理实践经验。',
    education: [
      { degree: '学士', school: '安徽财贸学院（现安徽财经大学）', major: '财政金融学', graduationYear: 1989 },
      { degree: '硕士', school: '中国人民大学', major: '财政学', graduationYear: 1992 },
      { degree: '博士', school: '中国人民大学', major: '财政学（金融方向）', graduationYear: 2002 }
    ],
    careerHistory: [
      {
        id: 'wq-1',
        unitId: 'csrc-main',
        unitName: '中国证监会机关',
        department: '机构监管部',
        position: '副处长、处长、副主任',
        rank: '副厅局级',
        startYear: 1998,
        startMonth: 5,
        endYear: 2005,
        endMonth: 4,
        notes: '负责证券公司日常业务监管，推动全行业合规管理体系破冰'
      },
      {
        id: 'wq-2',
        unitId: 'csrc-main',
        unitName: '中国证监会机关',
        department: '证券公司风险处置办公室',
        position: '主任（正局级）',
        rank: '正厅局级',
        startYear: 2005,
        startMonth: 5,
        endYear: 2009,
        endMonth: 3,
        notes: '主导铁腕推进全国券商综合治理整顿，成功平稳处置数十家高风险证券公司'
      },
      {
        id: 'wq-3',
        unitId: 'csrc-main',
        unitName: '中国证监会机关',
        department: '基金监管部',
        position: '主任',
        rank: '正厅局级',
        startYear: 2009,
        startMonth: 3,
        endYear: 2010,
        endMonth: 11,
        notes: '大力加强公募基金合规与老鼠仓查处，推进阳光阳光透明运作'
      },
      {
        id: 'wq-4',
        unitId: 'gov-sh',
        unitName: '上海市政府/虹口区',
        department: '中共虹口区委',
        position: '副书记、区长、区委书记',
        rank: '正厅局级',
        startYear: 2010,
        startMonth: 12,
        endYear: 2016,
        endMonth: 5,
        notes: '推进北外滩航运与对冲基金财富管理集聚区建设，深化地方经济转型'
      },
      {
        id: 'wq-5',
        unitId: 'csrc-sse',
        unitName: '上海证券交易所',
        position: '党委书记、理事长（副部长级）',
        rank: '副部级',
        startYear: 2016,
        startMonth: 5,
        endYear: 2017,
        endMonth: 12,
        notes: '主持上交所全面工作，强化一线监管，推进沪港通运行与国际化合作'
      },
      {
        id: 'wq-6',
        unitId: 'gov-sh',
        unitName: '上海市人民政府',
        department: '上海市委 / 市政府',
        position: '市委常委、副市长、常务副市长、市委副书记',
        rank: '副部级',
        startYear: 2018,
        startMonth: 1,
        endYear: 2024,
        endMonth: 2,
        notes: '主管全市金融、产业、科创与政法，深度主导设立科创板并试点注册制在沪落地'
      },
      {
        id: 'wq-7',
        unitId: 'csrc-main',
        unitName: '中国证监会机关',
        position: '党委书记、主席',
        rank: '正部级',
        startYear: 2024,
        startMonth: 2,
        endYear: null,
        isCurrent: true,
        notes: '主持中国证监会全面工作，提出“两强两严”、强监管防风险促高质量发展'
      }
    ]
  },
  {
    id: 'qiu-yong',
    name: '邱勇',
    gender: '男',
    birthYear: 1966,
    birthMonth: 7,
    nativePlace: '四川',
    currentUnitId: 'csrc-sse',
    currentPosition: '上海证券交易所党委书记、理事长（副部长级）',
    currentRank: '副部级',
    bioSummary: '管理学博士。深耕中国资本市场监管一线三十余年，历任贵州、厦门、湖南、广东等多个重要派出机构一把手，后出任证监会机构部主任，现全面领导上海证券交易所改革发展。',
    education: [
      { degree: '学士', school: '南京大学', major: '信息管理', graduationYear: 1988 },
      { degree: '博士', school: '南京大学', major: '管理科学与工程', graduationYear: 2005 }
    ],
    careerHistory: [
      {
        id: 'qy-1',
        unitId: 'csrc-main',
        unitName: '中国证监会机关',
        position: '早期系统监管干部、贵州监管局副局长',
        rank: '副厅局级',
        startYear: 2000,
        startMonth: 1,
        endYear: 2010,
        endMonth: 5,
        notes: '开展西南区域资本市场规范与现场监管'
      },
      {
        id: 'qy-2',
        unitId: 'csrc-gd',
        unitName: '广东证监局',
        position: '党委委员、纪委书记、副局长',
        rank: '副厅局级',
        startYear: 2010,
        startMonth: 6,
        endYear: 2012,
        endMonth: 7,
        notes: '分管辖区上市公司监管和合规稽查'
      },
      {
        id: 'qy-3',
        unitId: 'csrc-main',
        unitName: '厦门/湖南证监局',
        position: '局长、党委书记',
        rank: '正厅局级',
        startYear: 2012,
        startMonth: 8,
        endYear: 2016,
        endMonth: 4,
        notes: '先后主持厦门证监局与湖南证监局全局工作'
      },
      {
        id: 'qy-4',
        unitId: 'csrc-gd',
        unitName: '广东证监局',
        position: '党委书记、局长兼广州稽查局局长',
        rank: '正厅局级',
        startYear: 2016,
        startMonth: 4,
        endYear: 2020,
        endMonth: 6,
        notes: '全面主持经济第一大省广东辖区证券监管，重拳惩治财务造假与内幕交易'
      },
      {
        id: 'qy-5',
        unitId: 'csrc-jg',
        unitName: '证监会机构部',
        department: '证券基金机构监管部',
        position: '主任',
        rank: '正厅局级',
        startYear: 2020,
        startMonth: 6,
        endYear: 2022,
        endMonth: 9,
        notes: '统筹全国券商与公募基金行业监管，引导资本市场机构文化建设'
      },
      {
        id: 'qy-6',
        unitId: 'csrc-sse',
        unitName: '上海证券交易所',
        position: '党委书记、理事长（副部长级）',
        rank: '副部级',
        startYear: 2022,
        startMonth: 9,
        endYear: null,
        isCurrent: true,
        notes: '主持上海证券交易所全面工作，全面推进科创板做优做强'
      }
    ]
  },
  {
    id: 'sha-yan',
    name: '沙雁',
    gender: '女',
    birthYear: 1972,
    birthMonth: 9,
    nativePlace: '黑龙江齐齐哈尔',
    currentUnitId: 'csrc-szse',
    currentPosition: '深圳证券交易所党委书记、理事长（副部长级）',
    currentRank: '副部级',
    bioSummary: '经济学博士。会计专业出身，历任派出机构、证监会上市公司监管部、证券基金机构监管部主任、深交所总经理，现任深圳证券交易所理事长。具备顶尖专业水准与全局视野。',
    education: [
      { degree: '学士', school: '陕西财经学院（现西安交通大学）', major: '会计学', graduationYear: 1993 },
      { degree: '硕士', school: '西安交通大学', major: '工商管理 (MBA)', graduationYear: 1999 },
      { degree: '博士', school: '中国人民大学', major: '经济学', graduationYear: 2008 }
    ],
    careerHistory: [
      {
        id: 'sy-1',
        unitId: 'csrc-main',
        unitName: '西安/陕西证监局',
        position: '处长、党委委员、副局长',
        rank: '副厅局级',
        startYear: 2000,
        startMonth: 1,
        endYear: 2013,
        endMonth: 5,
        notes: '深耕西北区域上市公司与券商一线财务会计监管'
      },
      {
        id: 'sy-2',
        unitId: 'csrc-ss',
        unitName: '证监会上市部',
        department: '上市公司监管部',
        position: '副主任',
        rank: '副厅局级',
        startYear: 2013,
        startMonth: 5,
        endYear: 2017,
        endMonth: 5,
        notes: '深入推进上市公司持续信息披露规则改革及重组并购规范'
      },
      {
        id: 'sy-3',
        unitId: 'csrc-jg',
        unitName: '证监会机构部',
        department: '证券基金机构监管部',
        position: '主任',
        rank: '正厅局级',
        startYear: 2017,
        startMonth: 5,
        endYear: 2020,
        endMonth: 6,
        notes: '主导全国证券基金业对外开放与合规监管'
      },
      {
        id: 'sy-4',
        unitId: 'csrc-szse',
        unitName: '深圳证券交易所',
        position: '党委副书记、总经理',
        rank: '正厅局级',
        startYear: 2020,
        startMonth: 6,
        endYear: 2023,
        endMonth: 12,
        notes: '主导推进创业板改革并试点注册制、深市主板与中小板平稳合并'
      },
      {
        id: 'sy-5',
        unitId: 'csrc-szse',
        unitName: '深圳证券交易所',
        position: '党委书记、理事长（副部长级）',
        rank: '副部级',
        startYear: 2023,
        startMonth: 12,
        endYear: null,
        isCurrent: true,
        notes: '全面主持深圳证券交易所党委与理事会工作'
      }
    ]
  },
  {
    id: 'zhou-guihua',
    name: '周贵华',
    gender: '男',
    birthYear: 1970,
    birthMonth: 11,
    nativePlace: '湖南',
    currentUnitId: 'csrc-bse',
    currentPosition: '北京证券交易所党委书记、董事长，全国股转公司党委书记、董事长',
    currentRank: '正厅局级',
    bioSummary: '工学硕士。曾长期在证监会办公厅、发行监管部、创新业务监管部、非上市公众公司监管部任职，是深化新三板改革及设立北京证券交易所的核心开拓者之一。',
    education: [
      { degree: '学士', school: '清华大学', major: '热能工程', graduationYear: 1993 },
      { degree: '硕士', school: '清华大学', major: '工学', graduationYear: 1996 }
    ],
    careerHistory: [
      {
        id: 'zgh-1',
        unitId: 'csrc-fx',
        unitName: '证监会发行部',
        department: '发行监管部 / 办公厅',
        position: '处长、助理巡视员',
        rank: '正处级',
        startYear: 2001,
        startMonth: 3,
        endYear: 2013,
        endMonth: 8,
        notes: '负责股票公开发行制度与核准日常实务'
      },
      {
        id: 'zgh-2',
        unitId: 'csrc-main',
        unitName: '证监会机关',
        department: '创新业务监管部',
        position: '副主任',
        rank: '副厅局级',
        startYear: 2013,
        startMonth: 8,
        endYear: 2017,
        endMonth: 9,
        notes: '探索互联网金融与资本市场新型创新产品合规监管机制'
      },
      {
        id: 'zgh-3',
        unitId: 'csrc-gz',
        unitName: '证监会公众公司部',
        department: '非上市公众公司监管部',
        position: '副主任、主任',
        rank: '正厅局级',
        startYear: 2017,
        startMonth: 9,
        endYear: 2022,
        endMonth: 6,
        notes: '主导新三板精选层公开发行改革并直接推动筹建北京证券交易所'
      },
      {
        id: 'zgh-4',
        unitId: 'csrc-bse',
        unitName: '北京证券交易所',
        position: '党委书记、董事长',
        rank: '正厅局级',
        startYear: 2022,
        startMonth: 6,
        endYear: null,
        isCurrent: true,
        notes: '全面负责北京证券交易所运营与打造服务创新型中小企业主阵地'
      }
    ]
  },
  {
    id: 'cai-jianchun',
    name: '蔡建春',
    gender: '男',
    birthYear: 1969,
    birthMonth: 2,
    nativePlace: '江西安远',
    currentUnitId: 'csrc-sse',
    currentPosition: '上海证券交易所党委副书记、总经理',
    currentRank: '正厅局级',
    bioSummary: '经济学博士。长期从事上市公司持续监管与法制合规工作，历任证监会上市公司监管部主任、浙江监管局局长，对资本市场并购重组、退市常态化及市场活力培育经验丰富。',
    education: [
      { degree: '学士', school: '江西财经大学', major: '经济学', graduationYear: 1991 },
      { degree: '博士', school: '北京大学', major: '应用经济学博士后', graduationYear: 2004 }
    ],
    careerHistory: [
      {
        id: 'cjc-1',
        unitId: 'csrc-ss',
        unitName: '证监会上市部',
        department: '上市公司监管部',
        position: '副处长、处长、副主任',
        rank: '副厅局级',
        startYear: 2004,
        startMonth: 5,
        endYear: 2012,
        endMonth: 8,
        notes: '参与制定上市公司重大资产重组管理办法'
      },
      {
        id: 'cjc-2',
        unitId: 'csrc-zj',
        unitName: '浙江证监局',
        position: '党委书记、局长',
        rank: '正厅局级',
        startYear: 2012,
        startMonth: 8,
        endYear: 2015,
        endMonth: 11,
        notes: '全面领导浙江辖区证券期货市场监管，防范区域金融风险'
      },
      {
        id: 'cjc-3',
        unitId: 'csrc-ss',
        unitName: '证监会上市部',
        department: '上市公司监管部',
        position: '主任',
        rank: '正厅局级',
        startYear: 2015,
        startMonth: 11,
        endYear: 2020,
        endMonth: 6,
        notes: '深化上市公司破产重整、常态化退市机制建设与提高上市公司质量'
      },
      {
        id: 'cjc-4',
        unitId: 'csrc-sse',
        unitName: '上海证券交易所',
        position: '党委副书记、总经理',
        rank: '正厅局级',
        startYear: 2020,
        startMonth: 6,
        endYear: null,
        isCurrent: true,
        notes: '全面主持上交所日常业务经营管理与科创板制度创新深化'
      }
    ]
  },
  {
    id: 'li-jizun',
    name: '李继尊',
    gender: '男',
    birthYear: 1974,
    birthMonth: 8,
    nativePlace: '山东',
    currentUnitId: 'csrc-szse',
    currentPosition: '深圳证券交易所党委副书记、总经理',
    currentRank: '正厅局级',
    bioSummary: '工学博士。历任国务院研究室宏观经济研究司局长、证监会深改办主任、市场一部主任、证监会办公厅主任，对国家宏观大政方针与资本市场全面深化改革具有深刻理解。',
    education: [
      { degree: '博士', school: '清华大学', major: '材料科学与工程', graduationYear: 2002 }
    ],
    careerHistory: [
      {
        id: 'ljz-1',
        unitId: 'csrc-main',
        unitName: '国务院研究室/证监会研究中心',
        position: '副主任、宏观经济研究负责人',
        rank: '副厅局级',
        startYear: 2006,
        startMonth: 1,
        endYear: 2016,
        endMonth: 12,
        notes: '参与国家多项经济金融重大政策文件起草'
      },
      {
        id: 'ljz-2',
        unitId: 'csrc-sc',
        unitName: '证监会市场部/深改办',
        department: '市场监管一部 / 深改办',
        position: '主任、深改办主任',
        rank: '正厅局级',
        startYear: 2016,
        startMonth: 12,
        endYear: 2022,
        endMonth: 1,
        notes: '统筹制定并组织实施新一轮全面深化资本市场改革12条总体方案'
      },
      {
        id: 'ljz-3',
        unitId: 'csrc-main',
        unitName: '中国证监会机关',
        department: '办公厅（党委办公室）',
        position: '主任',
        rank: '正厅局级',
        startYear: 2022,
        startMonth: 1,
        endYear: 2024,
        endMonth: 3,
        notes: '统筹协调证监会会机关运转、新闻舆论及重大突发事件处置'
      },
      {
        id: 'ljz-4',
        unitId: 'csrc-szse',
        unitName: '深圳证券交易所',
        position: '党委副书记、总经理',
        rank: '正厅局级',
        startYear: 2024,
        startMonth: 3,
        endYear: null,
        isCurrent: true,
        notes: '全面负责深交所日常组织与市场运营管理'
      }
    ]
  },
  {
    id: 'li-ming',
    name: '李明',
    gender: '男',
    birthYear: 1968,
    birthMonth: 11,
    nativePlace: '山东',
    currentUnitId: 'csrc-main',
    currentPosition: '中国证券监督管理委员会党委委员、副主席',
    currentRank: '副部级',
    bioSummary: '法学博士。历任证监会发行监管部副主任、全国中小企业股份转让系统总经理、江苏证监局局长、证监会上市部主任、首席风险官、稽查局局长，现任中国证监会副主席。',
    education: [
      { degree: '博士', school: '中国政法大学', major: '经济法学', graduationYear: 2003 }
    ],
    careerHistory: [
      {
        id: 'lm-1',
        unitId: 'csrc-fx',
        unitName: '证监会发行部',
        department: '发行监管部',
        position: '副主任',
        rank: '副厅局级',
        startYear: 2011,
        startMonth: 1,
        endYear: 2016,
        endMonth: 11,
        notes: '统筹公开发行审核标准规范'
      },
      {
        id: 'lm-2',
        unitId: 'csrc-bse',
        unitName: '全国股转系统 (新三板)',
        position: '党委副书记、总经理',
        rank: '正厅局级',
        startYear: 2016,
        startMonth: 11,
        endYear: 2018,
        endMonth: 8,
        notes: '推进新三板分层管理与交易制度创新'
      },
      {
        id: 'lm-3',
        unitId: 'csrc-js',
        unitName: '江苏证监局',
        position: '党委书记、局长',
        rank: '正厅局级',
        startYear: 2018,
        startMonth: 8,
        endYear: 2020,
        endMonth: 6,
        notes: '主持制造业第一大省江苏资本市场合规发展与化解股票质押风险'
      },
      {
        id: 'lm-4',
        unitId: 'csrc-ss',
        unitName: '证监会上市部/首席风险官',
        department: '上市公司监管部',
        position: '主任兼首席风险官',
        rank: '正厅局级',
        startYear: 2020,
        startMonth: 6,
        endYear: 2023,
        endMonth: 4,
        notes: '统筹上市公司全链条监管和全市场系统性风险防范'
      },
      {
        id: 'lm-5',
        unitId: 'csrc-jc',
        unitName: '证监会稽查局',
        position: '局长',
        rank: '正厅局级',
        startYear: 2023,
        startMonth: 4,
        endYear: 2024,
        endMonth: 2,
        notes: '重拳打击财务造假、内幕交易和操纵股价大案要案'
      },
      {
        id: 'lm-6',
        unitId: 'csrc-main',
        unitName: '中国证监会机关',
        position: '党委委员、副主席',
        rank: '副部级',
        startYear: 2024,
        startMonth: 2,
        endYear: null,
        isCurrent: true,
        notes: '分管证监会发行、上市、执法稽查等多项关键业务'
      }
    ]
  },
  {
    id: 'jia-wenqin',
    name: '贾文勤',
    gender: '女',
    birthYear: 1965,
    birthMonth: 7,
    nativePlace: '河南',
    currentUnitId: 'csrc-bj',
    currentPosition: '中国证券监督管理委员会北京监管局党委书记、局长',
    currentRank: '正厅局级',
    bioSummary: '管理学硕士，资深注册会计师。中国证监会系统杰出的财务与会计监管专家，长期执掌证监会会计部，历任首席会计师，现主持北京证监局全面工作。',
    education: [
      { degree: '学士', school: '中央财政金融学院（现中央财经大学）', major: '会计学', graduationYear: 1987 },
      { degree: '硕士', school: '中国财政科学研究院', major: '会计学', graduationYear: 1999 }
    ],
    careerHistory: [
      {
        id: 'jwq-1',
        unitId: 'csrc-main',
        unitName: '中国证监会机关',
        department: '会计部',
        position: '副处长、处长、副主任',
        rank: '副厅局级',
        startYear: 2000,
        startMonth: 1,
        endYear: 2010,
        endMonth: 10,
        notes: '构建中国资本市场会计信息披露准则与审计监督框架'
      },
      {
        id: 'jwq-2',
        unitId: 'csrc-main',
        unitName: '中国证监会机关',
        department: '会计部 / 首席会计师',
        position: '主任、首席会计师',
        rank: '正厅局级',
        startYear: 2010,
        startMonth: 10,
        endYear: 2019,
        endMonth: 5,
        notes: '全面主导资本市场会计信息质量监管及重特大会计舞弊技术定性'
      },
      {
        id: 'jwq-3',
        unitId: 'csrc-bj',
        unitName: '北京证监局',
        position: '党委书记、局长',
        rank: '正厅局级',
        startYear: 2019,
        startMonth: 5,
        endYear: null,
        isCurrent: true,
        notes: '全面主持北京辖区证券期货市场与拟上市企业一线监管'
      }
    ]
  },
  {
    "id": "yu-wenqiang",
    "name": "于文强",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 5,
    "nativePlace": "山东",
    "currentUnitId": "csrc-csdc",
    "currentPosition": "中国证券登记结算有限责任公司党委书记、董事长",
    "currentRank": "正厅局级",
    "bioSummary": "清华大学硕士。长期在证监会办公厅、投资者保护基金及中国结算担任主要领导职务，对证券交易集中登记存管结算基础设施与投资者合法权益保护经验极深。",
    "education": [
      {
        "degree": "学士",
        "school": "清华大学",
        "major": "自动化",
        "graduationYear": 1990
      },
      {
        "degree": "硕士",
        "school": "清华大学经济管理学院",
        "major": "管理科学与工程",
        "graduationYear": 1993
      }
    ],
    "careerHistory": [
      {
        "id": "ywq-1",
        "unitId": "csrc-main",
        "unitName": "中国证监会机关",
        "department": "办公厅（党委办公室）",
        "position": "副处长、处长、副主任",
        "rank": "副厅局级",
        "startYear": 2003,
        "startMonth": 3,
        "endYear": 2011,
        "endMonth": 6,
        "notes": "协助协调证监会会机关重要运转和综合事务管理"
      },
      {
        "id": "ywq-2",
        "unitId": "csrc-sipf",
        "unitName": "中国证券投资者保护基金",
        "position": "党委书记、董事长",
        "rank": "正厅局级",
        "startYear": 2011,
        "startMonth": 6,
        "endYear": 2017,
        "endMonth": 12,
        "notes": "主持投保基金全面工作，建立健全证券公司资金监控系统"
      },
      {
        "id": "ywq-3",
        "unitId": "csrc-csdc",
        "unitName": "中国证券登记结算公司",
        "position": "党委副书记、总经理",
        "rank": "正厅局级",
        "startYear": 2017,
        "startMonth": 12,
        "endYear": 2020,
        "endMonth": 11,
        "notes": "主持中国结算日常经营管理，保障全市场股票结算顺畅运行"
      },
      {
        "id": "ywq-4",
        "unitId": "csrc-csdc",
        "unitName": "中国证券登记结算公司",
        "position": "党委书记、董事长",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 11,
        "endYear": null,
        "isCurrent": true,
        "notes": "全面领导中国结算党委与董事会工作，推进登记结算数字化转型"
      }
    ]
  },
  {
    "id": "lu-wenshan",
    "name": "陆文山",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 8,
    "nativePlace": "江苏",
    "currentUnitId": "csrc-csf",
    "currentPosition": "中国证券金融股份有限公司党委副书记、总经理",
    "currentRank": "正厅局级",
    "bioSummary": "法学硕士。资本市场资深法律法规与债券监管权威专家，曾长期主持证监会公司债券监管部工作，现负责全国证券转融通业务与平抑市场异常波动金融职能。",
    "education": [
      {
        "degree": "学士",
        "school": "西南政法大学",
        "major": "法学",
        "graduationYear": 1990
      },
      {
        "degree": "硕士",
        "school": "中国政法大学",
        "major": "经济法学",
        "graduationYear": 1996
      }
    ],
    "careerHistory": [
      {
        "id": "lws-1",
        "unitId": "csrc-main",
        "unitName": "中国证监会机关",
        "department": "法律部",
        "position": "处长、副主任",
        "rank": "副厅局级",
        "startYear": 2002,
        "startMonth": 4,
        "endYear": 2012,
        "endMonth": 7,
        "notes": "深入参与证券法多次修订及资本市场行政执法制度构建"
      },
      {
        "id": "lws-2",
        "unitId": "csrc-main",
        "unitName": "中国证监会机关",
        "department": "公司债券监管部",
        "position": "主任",
        "rank": "正厅局级",
        "startYear": 2012,
        "startMonth": 7,
        "endYear": 2019,
        "endMonth": 8,
        "notes": "主导建立统一规范的交易所债券市场规则体系与违约风险处置"
      },
      {
        "id": "lws-3",
        "unitId": "csrc-csf",
        "unitName": "中国证券金融股份有限公司",
        "position": "党委副书记、总经理",
        "rank": "正厅局级",
        "startYear": 2019,
        "startMonth": 8,
        "endYear": null,
        "isCurrent": true,
        "notes": "全面主持中证金融日常经营，监控全市场两融业务与流动性风险"
      }
    ]
  },
  {
    "id": "ge-yiping",
    "name": "葛一平",
    "gender": "男",
    "birthYear": 1970,
    "birthMonth": 9,
    "nativePlace": "浙江",
    "currentUnitId": "csrc-csdata",
    "currentPosition": "中证数据有限责任公司党委书记、董事长",
    "currentRank": "正厅局级",
    "bioSummary": "计算机工学博士。证券期货行业资深科技监管开拓者，历任证监会信息中心、科技局副局长及中金所技术公司董事长，现统筹全国资本市场大数据智能化监管平台底座建设。",
    "education": [
      {
        "degree": "学士",
        "school": "浙江大学",
        "major": "计算机软件",
        "graduationYear": 1992
      },
      {
        "degree": "博士",
        "school": "浙江大学",
        "major": "计算机应用技术",
        "graduationYear": 1998
      }
    ],
    "careerHistory": [
      {
        "id": "gyp-1",
        "unitId": "csrc-main",
        "unitName": "中国证监会机关",
        "department": "信息中心 / 科技监管局",
        "position": "副处长、处长、副主任",
        "rank": "副厅局级",
        "startYear": 2002,
        "startMonth": 6,
        "endYear": 2016,
        "endMonth": 5,
        "notes": "负责证监会电子政务与金融监管大数据核心系统建设"
      },
      {
        "id": "gyp-2",
        "unitId": "csrc-cffex",
        "unitName": "中金所技术公司",
        "position": "董事长、总经理",
        "rank": "正厅局级",
        "startYear": 2016,
        "startMonth": 5,
        "endYear": 2020,
        "endMonth": 9,
        "notes": "主导新一代低时延高可靠金融衍生品核心交易系统自研"
      },
      {
        "id": "gyp-3",
        "unitId": "csrc-csdata",
        "unitName": "中证数据有限责任公司",
        "position": "党委书记、董事长",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 9,
        "endYear": null,
        "isCurrent": true,
        "notes": "全面主持中证数据筹建与运营，构建全市场智能穿透式数据底座"
      }
    ]
  },
  {
    "id": "tian-xiangyang",
    "name": "田向阳",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 10,
    "nativePlace": "陕西",
    "currentUnitId": "csrc-shfe",
    "currentPosition": "上海期货交易所党委书记、理事长",
    "currentRank": "正厅局级",
    "bioSummary": "工学硕士。曾任深圳证监局副局长、深交所副总经理、中国结算副副总经理，在证券一线监管、交易所运营及商品期货市场治理方面兼具跨界深厚资历。",
    "education": [
      {
        "degree": "学士",
        "school": "西北工业大学",
        "major": "材料学",
        "graduationYear": 1990
      },
      {
        "degree": "硕士",
        "school": "西北工业大学",
        "major": "工学",
        "graduationYear": 1993
      }
    ],
    "careerHistory": [
      {
        "id": "txy-1",
        "unitId": "csrc-sz",
        "unitName": "深圳证监局",
        "position": "副处长、处长、副局长",
        "rank": "副厅局级",
        "startYear": 1999,
        "startMonth": 8,
        "endYear": 2010,
        "endMonth": 6,
        "notes": "负责特区证券期货经营机构现场检查与合规治理"
      },
      {
        "id": "txy-2",
        "unitId": "csrc-szse",
        "unitName": "深圳证券交易所",
        "position": "党委委员、副总经理",
        "rank": "副厅局级",
        "startYear": 2010,
        "startMonth": 6,
        "endYear": 2017,
        "endMonth": 3,
        "notes": "分管深交所市场技术与创业板交易运营"
      },
      {
        "id": "txy-3",
        "unitId": "csrc-csdc",
        "unitName": "中国证券登记结算公司",
        "position": "党委副书记、监事长",
        "rank": "正厅局级",
        "startYear": 2017,
        "startMonth": 3,
        "endYear": 2021,
        "endMonth": 12,
        "notes": "统筹中国结算内控监察与证券账户风险防控"
      },
      {
        "id": "txy-4",
        "unitId": "csrc-shfe",
        "unitName": "上海期货交易所",
        "position": "党委书记、理事长",
        "rank": "正厅局级",
        "startYear": 2021,
        "startMonth": 12,
        "endYear": null,
        "isCurrent": true,
        "notes": "主持上期所全面工作，推动高能级大宗商品国际化定价中心建设"
      }
    ]
  },
  {
    "id": "he-qingwen",
    "name": "何庆文",
    "gender": "男",
    "birthYear": 1969,
    "birthMonth": 11,
    "nativePlace": "湖南",
    "currentUnitId": "csrc-cffex",
    "currentPosition": "中国金融期货交易所党委书记、董事长",
    "currentRank": "正厅局级",
    "bioSummary": "经济学博士。中国期货监管与衍生品市场资深领导，历任证监会期货部、中金所监事会主席、大商所理事长，现领导中国金融期货交易所改革创新。",
    "education": [
      {
        "degree": "学士",
        "school": "湖南大学",
        "major": "经济学",
        "graduationYear": 1991
      },
      {
        "degree": "博士",
        "school": "中国社科院研究生院",
        "major": "金融学",
        "graduationYear": 2001
      }
    ],
    "careerHistory": [
      {
        "id": "hqw-1",
        "unitId": "csrc-qh",
        "unitName": "证监会期货部",
        "department": "期货监管部",
        "position": "处长、副主任",
        "rank": "副厅局级",
        "startYear": 2003,
        "startMonth": 5,
        "endYear": 2012,
        "endMonth": 8,
        "notes": "参与期货交易管理条例及股指期货制度设计起草"
      },
      {
        "id": "hqw-2",
        "unitId": "csrc-cffex",
        "unitName": "中国金融期货交易所",
        "position": "党委委员、监事会主席",
        "rank": "正厅局级",
        "startYear": 2012,
        "startMonth": 8,
        "endYear": 2016,
        "endMonth": 9,
        "notes": "负责金融期货合规监控与市场自律监察"
      },
      {
        "id": "hqw-3",
        "unitId": "csrc-dce",
        "unitName": "大连商品交易所",
        "position": "党委书记、理事长",
        "rank": "正厅局级",
        "startYear": 2016,
        "startMonth": 9,
        "endYear": 2020,
        "endMonth": 10,
        "notes": "主持大商所全面工作，推出豆粕期权等重要风险管理工具"
      },
      {
        "id": "hqw-4",
        "unitId": "csrc-cffex",
        "unitName": "中国金融期货交易所",
        "position": "党委书记、董事长",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 10,
        "endYear": null,
        "isCurrent": true,
        "notes": "全面领导中金所党委与董事会，上市中证1000股指期货及期权"
      }
    ]
  },
  {
    "id": "ran-hua",
    "name": "冉华",
    "gender": "男",
    "birthYear": 1969,
    "birthMonth": 7,
    "nativePlace": "湖北",
    "currentUnitId": "csrc-dce",
    "currentPosition": "大连商品交易所党委书记、理事长",
    "currentRank": "正厅局级",
    "bioSummary": "经济学博士。长期担任中国证监会期货监管司一把手，对我国大宗商品衍生品市场战略规划、制度设计与防范过度投机风险具有杰出建树。",
    "education": [
      {
        "degree": "学士",
        "school": "武汉大学",
        "major": "经济学",
        "graduationYear": 1991
      },
      {
        "degree": "博士",
        "school": "中国人民大学",
        "major": "财政金融学",
        "graduationYear": 2002
      }
    ],
    "careerHistory": [
      {
        "id": "rh-1",
        "unitId": "csrc-qh",
        "unitName": "证监会期货部",
        "department": "期货监管部",
        "position": "副处长、处长、副主任",
        "rank": "副厅局级",
        "startYear": 2000,
        "startMonth": 3,
        "endYear": 2012,
        "endMonth": 6,
        "notes": "推进全国商品期货品种扩容与期货公司规范整顿"
      },
      {
        "id": "rh-2",
        "unitId": "csrc-qh",
        "unitName": "证监会期货司",
        "department": "期货监管部 / 期货司",
        "position": "主任（司长）",
        "rank": "正厅局级",
        "startYear": 2012,
        "startMonth": 6,
        "endYear": 2020,
        "endMonth": 10,
        "notes": "统筹全国商品期货与金融衍生品监管规则制定与对外开放"
      },
      {
        "id": "rh-3",
        "unitId": "csrc-dce",
        "unitName": "大连商品交易所",
        "position": "党委书记、理事长",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 10,
        "endYear": null,
        "isCurrent": true,
        "notes": "主持大连商品交易所全面工作，服务全球初级大宗商品定价中心建设"
      }
    ]
  },
  {
    "id": "xiong-wei",
    "name": "熊伟",
    "gender": "男",
    "birthYear": 1971,
    "birthMonth": 12,
    "nativePlace": "湖北",
    "currentUnitId": "csrc-czce",
    "currentPosition": "郑州商品交易所党委书记、理事长",
    "currentRank": "正厅局级",
    "bioSummary": "经济学博士。历任证监会期货部副处长、处长、河南证监局副局长、郑商所总经理，在商品期货一线监管与现代期货交易所运营方面历经扎实磨练。",
    "education": [
      {
        "degree": "学士",
        "school": "中南财经大学",
        "major": "金融学",
        "graduationYear": 1993
      },
      {
        "degree": "博士",
        "school": "中南财经政法大学",
        "major": "经济学",
        "graduationYear": 2003
      }
    ],
    "careerHistory": [
      {
        "id": "xw-1",
        "unitId": "csrc-qh",
        "unitName": "证监会期货部",
        "department": "期货监管部",
        "position": "副处长、处长",
        "rank": "正处级",
        "startYear": 2004,
        "startMonth": 5,
        "endYear": 2014,
        "endMonth": 3,
        "notes": "参与全国期货市场日常监测与法律规范细则拟订"
      },
      {
        "id": "xw-2",
        "unitId": "csrc-main",
        "unitName": "河南证监局",
        "position": "党委委员、副局长",
        "rank": "副厅局级",
        "startYear": 2014,
        "startMonth": 3,
        "endYear": 2018,
        "endMonth": 11,
        "notes": "负责辖区上市公司及期货中介服务机构一线监管"
      },
      {
        "id": "xw-3",
        "unitId": "csrc-czce",
        "unitName": "郑州商品交易所",
        "position": "党委副书记、总经理",
        "rank": "正厅局级",
        "startYear": 2018,
        "startMonth": 11,
        "endYear": 2022,
        "endMonth": 12,
        "notes": "主持郑商所日常运营，推出纯碱、花生等实体特色农工业期货品种"
      },
      {
        "id": "xw-4",
        "unitId": "csrc-czce",
        "unitName": "郑州商品交易所",
        "position": "党委书记、理事长",
        "rank": "正厅局级",
        "startYear": 2022,
        "startMonth": 12,
        "endYear": null,
        "isCurrent": true,
        "notes": "全面领导郑商所党委与理事会，强化大宗原料品种价格发现功能"
      }
    ]
  },
  {
    "id": "gao-weibing",
    "name": "高卫兵",
    "gender": "男",
    "birthYear": 1970,
    "birthMonth": 4,
    "nativePlace": "吉林",
    "currentUnitId": "csrc-gfex",
    "currentPosition": "广州期货交易所党委书记、董事长",
    "currentRank": "正厅局级",
    "bioSummary": "经济学硕士。历任证监会期货监管干部、大商所副总经理、广期所筹备组组长，主导创建我国首家创新型混合所有制期货交易所广期所。",
    "education": [
      {
        "degree": "学士",
        "school": "吉林大学",
        "major": "国际金融",
        "graduationYear": 1992
      },
      {
        "degree": "硕士",
        "school": "吉林大学",
        "major": "经济学",
        "graduationYear": 1995
      }
    ],
    "careerHistory": [
      {
        "id": "gwb-1",
        "unitId": "csrc-qh",
        "unitName": "证监会期货部/稽查局",
        "position": "副处长、处长",
        "rank": "正处级",
        "startYear": 2002,
        "startMonth": 6,
        "endYear": 2013,
        "endMonth": 8,
        "notes": "查办重大期货操纵市场及违规内幕交易案件"
      },
      {
        "id": "gwb-2",
        "unitId": "csrc-dce",
        "unitName": "大连商品交易所",
        "position": "党委委员、副总经理",
        "rank": "副厅局级",
        "startYear": 2013,
        "startMonth": 8,
        "endYear": 2020,
        "endMonth": 12,
        "notes": "分管大商所品种研发、交割仓储及期权业务设计"
      },
      {
        "id": "gwb-3",
        "unitId": "csrc-gfex",
        "unitName": "广州期货交易所",
        "position": "筹备组组长、党委书记、董事长",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 12,
        "endYear": null,
        "isCurrent": true,
        "notes": "主持广期所组建与开市运行，上市工业硅与碳酸锂等新能源绿色期货"
      }
    ]
  }

];

export const OFFICIAL_COLORS = [
  {
    id: 'wu-qing',
    name: '吴清',
    primary: '#0071e3', // macOS Blue
    border: '#0071e3',
    bg: 'rgba(0, 113, 227, 0.12)',
    badgeBg: 'bg-blue-500',
    text: 'text-blue-600',
    ring: 'ring-blue-500'
  },
  {
    id: 'qiu-yong',
    name: '邱勇',
    primary: '#af52de', // macOS Purple
    border: '#af52de',
    bg: 'rgba(175, 82, 222, 0.12)',
    badgeBg: 'bg-purple-500',
    text: 'text-purple-600',
    ring: 'ring-purple-500'
  },
  {
    id: 'sha-yan',
    name: '沙雁',
    primary: '#ff2d55', // macOS Pink/Rose
    border: '#ff2d55',
    bg: 'rgba(255, 45, 85, 0.12)',
    badgeBg: 'bg-pink-500',
    text: 'text-pink-600',
    ring: 'ring-pink-500'
  },
  {
    id: 'zhou-guihua',
    name: '周贵华',
    primary: '#34c759', // macOS Green
    border: '#34c759',
    bg: 'rgba(52, 199, 89, 0.12)',
    badgeBg: 'bg-emerald-500',
    text: 'text-emerald-600',
    ring: 'ring-emerald-500'
  },
  {
    id: 'cai-jianchun',
    name: '蔡建春',
    primary: '#ff9500', // macOS Orange
    border: '#ff9500',
    bg: 'rgba(255, 149, 0, 0.12)',
    badgeBg: 'bg-amber-500',
    text: 'text-amber-600',
    ring: 'ring-amber-500'
  },
  {
    id: 'li-jizun',
    name: '李继尊',
    primary: '#5856d6', // macOS Indigo
    border: '#5856d6',
    bg: 'rgba(88, 86, 214, 0.12)',
    badgeBg: 'bg-indigo-500',
    text: 'text-indigo-600',
    ring: 'ring-indigo-500'
  },
  {
    id: 'li-ming',
    name: '李明',
    primary: '#00c7be', // macOS Teal
    border: '#00c7be',
    bg: 'rgba(0, 199, 190, 0.12)',
    badgeBg: 'bg-teal-500',
    text: 'text-teal-600',
    ring: 'ring-teal-500'
  },
  {
    id: 'jia-wenqin',
    name: '贾文勤',
    primary: '#a2845e', // macOS Brown
    border: '#a2845e',
    bg: 'rgba(162, 132, 94, 0.12)',
    badgeBg: 'bg-stone-500',
    text: 'text-stone-600',
    ring: 'ring-stone-500'
  },
  {
    "id": "yu-wenqiang",
    "name": "于文强",
    "primary": "#e056fd",
    "border": "#e056fd",
    "bg": "rgba(224, 86, 253, 0.12)",
    "badgeBg": "bg-fuchsia-500",
    "text": "text-fuchsia-600",
    "ring": "ring-fuchsia-500"
  },
  {
    "id": "lu-wenshan",
    "name": "陆文山",
    "primary": "#0984e3",
    "border": "#0984e3",
    "bg": "rgba(9, 132, 227, 0.12)",
    "badgeBg": "bg-sky-500",
    "text": "text-sky-600",
    "ring": "ring-sky-500"
  },
  {
    "id": "ge-yiping",
    "name": "葛一平",
    "primary": "#00b894",
    "border": "#00b894",
    "bg": "rgba(0, 184, 148, 0.12)",
    "badgeBg": "bg-emerald-500",
    "text": "text-emerald-600",
    "ring": "ring-emerald-500"
  },
  {
    "id": "tian-xiangyang",
    "name": "田向阳",
    "primary": "#f39c12",
    "border": "#f39c12",
    "bg": "rgba(243, 156, 18, 0.12)",
    "badgeBg": "bg-amber-500",
    "text": "text-amber-600",
    "ring": "ring-amber-500"
  },
  {
    "id": "he-qingwen",
    "name": "何庆文",
    "primary": "#d63031",
    "border": "#d63031",
    "bg": "rgba(214, 48, 49, 0.12)",
    "badgeBg": "bg-rose-500",
    "text": "text-rose-600",
    "ring": "ring-rose-500"
  },
  {
    "id": "ran-hua",
    "name": "冉华",
    "primary": "#6c5ce7",
    "border": "#6c5ce7",
    "bg": "rgba(108, 92, 231, 0.12)",
    "badgeBg": "bg-indigo-500",
    "text": "text-indigo-600",
    "ring": "ring-indigo-500"
  },
  {
    "id": "xiong-wei",
    "name": "熊伟",
    "primary": "#27ae60",
    "border": "#27ae60",
    "bg": "rgba(39, 174, 96, 0.12)",
    "badgeBg": "bg-green-600",
    "text": "text-green-600",
    "ring": "ring-green-500"
  },
  {
    "id": "gao-weibing",
    "name": "高卫兵",
    "primary": "#e17055",
    "border": "#e17055",
    "bg": "rgba(225, 112, 85, 0.12)",
    "badgeBg": "bg-orange-500",
    "text": "text-orange-600",
    "ring": "ring-orange-500"
  }

];

export function getOfficialColor(officialId: string) {
  const found = OFFICIAL_COLORS.find(c => c.id === officialId);
  if (found) return found;
  return {
    id: officialId,
    name: '官员',
    primary: '#0071e3',
    border: '#0071e3',
    bg: 'rgba(0, 113, 227, 0.12)',
    badgeBg: 'bg-blue-500',
    text: 'text-blue-600',
    ring: 'ring-blue-500'
  };
}
