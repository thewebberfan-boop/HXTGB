import { Unit, Official } from '../types';

export const UNITS_DATA: Unit[] = [
  {
    "id": "csrc-main",
    "tinyName": "证监会机关",
    "name": "中国证券监督管理委员会机关本部",
    "shortName": "证监会本部",
    "category": "会机关内设部门",
    "level": "正部级",
    "establishedYear": 1992,
    "establishedDate": "1992-10-26",
    "description": "国务院直属机构，正部级建制。依法统一监督管理全国证券、期货市场，维护证券、期货市场秩序，保障其合法合规高效运行。",
    "mainDuties": [
      "确立证券期货市场监管方针政策，拟订相关法律法规草案与规章规则",
      "统一依法监管全国股票、债券、期货、公募基金及衍生品发行与交易",
      "依法查处证券期货市场违法违规行为，严厉打击财务造假与操纵市场",
      "防范化解资本市场系统性金融风险，统筹跨境监管协作与制度型高水平开放"
    ],
    "websiteUrl": "http://www.csrc.gov.cn",
    "address": "北京市西城区金融大街19号富凯大厦",
    "contactPhone": "010-88061000",
    "currentLeaderIds": [
      "wu-qing",
      "li-ming",
      "chen-huaping",
      "fan-dazhi"
    ],
    "tagColor": "blue"
  },
  {
    "id": "csrc-fx",
    "tinyName": "发行司",
    "name": "中国证监会发行监管司",
    "shortName": "发行监管司",
    "category": "会机关内设部门",
    "level": "正厅局级",
    "establishedYear": 1998,
    "description": "拟订证券发行监管制度，承担股票、可转换公司债券、存托凭证等核准和注册工作，组织拟上市企业现场检查。",
    "mainDuties": [
      "拟订股票公开发行、再融资的规章规则和审核标准",
      "依法实施全面注册制下企业发行上市注册，强化源头把关",
      "监督检查证券交易所发行上市审核工作，组织开展现场抽查与督导"
    ],
    "websiteUrl": "http://www.csrc.gov.cn",
    "currentLeaderIds": [
      "yan-bojin"
    ],
    "tagColor": "blue"
  },
  {
    "id": "csrc-ss",
    "tinyName": "上市司",
    "name": "中国证监会上市公司监管司",
    "shortName": "上市公司监管司",
    "category": "会机关内设部门",
    "level": "正厅局级",
    "establishedYear": 1998,
    "description": "负责上市公司持续监管制度建设，统筹上市公司信息披露、公司治理、并购重组、现金分红及常态化退市监管。",
    "mainDuties": [
      "拟订上市公司信息披露和公司治理监管规则",
      "监管上市公司并购重组、重大资产置换及股份减持行为",
      "构建严格常态化退市机制，出清空壳僵尸企业，提升上市公司投资价值"
    ],
    "websiteUrl": "http://www.csrc.gov.cn",
    "currentLeaderIds": [
      "guo-ruiming"
    ],
    "tagColor": "blue"
  },
  {
    "id": "csrc-jg",
    "tinyName": "机构司",
    "name": "中国证监会证券基金机构监管司",
    "shortName": "证券基金机构监管司",
    "category": "会机关内设部门",
    "level": "正厅局级",
    "establishedYear": 1998,
    "description": "负责证券公司、公募基金管理公司、基金托管机构及证券投资咨询机构的设立、业务牌照审批及全流程合规风控监管。",
    "mainDuties": [
      "拟订证券经营机构及公募基金管理人监管规则与业务规范",
      "负责证券公司、基金公司高管任职资格及重大股权变更核准",
      "实施穿透式审慎监管，防范头部机构杠杆风险与流动性风险"
    ],
    "websiteUrl": "http://www.csrc.gov.cn",
    "currentLeaderIds": [
      "shen-bing"
    ],
    "tagColor": "blue"
  },
  {
    "id": "csrc-sc1",
    "tinyName": "市场一司",
    "name": "中国证监会市场监管一司",
    "shortName": "市场监管一司",
    "category": "会机关内设部门",
    "level": "正厅局级",
    "establishedYear": 1998,
    "description": "负责全国证券交易所交易组织和日常运行监控，拟订市场交易规则，监测全市场交易流动性与异动风险。",
    "mainDuties": [
      "拟订证券交易所场内交易规则与市场监控标准",
      "对跨市场异常交易行为与高频量化交易实施实时穿透式监测",
      "防范市场异常剧烈波动，维护交易结算平稳安全运行"
    ],
    "websiteUrl": "http://www.csrc.gov.cn",
    "currentLeaderIds": [
      "zhang-wangjun"
    ],
    "tagColor": "blue"
  },
  {
    "id": "csrc-sc2",
    "tinyName": "市场二司",
    "name": "中国证监会市场监管二司",
    "shortName": "市场监管二司（私募部）",
    "category": "会机关内设部门",
    "level": "正厅局级",
    "establishedYear": 2014,
    "description": "负责私募投资基金、非上市公众公司（新三板）及区域性股权市场的监管制度建设与日常风险防控。",
    "mainDuties": [
      "拟订私募投资基金业务监管规则，规范私募基金募集与投资行为",
      "协调指导区域性股权市场规范健康发展",
      "打击伪私募与非法集资活动，化解存量涉众金融风险"
    ],
    "websiteUrl": "http://www.csrc.gov.cn",
    "tagColor": "blue"
  },
  {
    "id": "csrc-qh",
    "tinyName": "期货司",
    "name": "中国证监会期货监管司",
    "shortName": "期货监管司",
    "category": "会机关内设部门",
    "level": "正厅局级",
    "establishedYear": 1998,
    "description": "依法统一监督管理全国商品期货、金融期货及期权衍生品市场，拟订期货交易规则，审核期货新品种上市。",
    "mainDuties": [
      "拟订期货市场规章规则与品种上市标准，落实《期货和衍生品法》",
      "监管全国期货交易所、期货公司及期货市场服务机构",
      "防范大宗商品过度投机与输入性价格异动风险，服务实体经济保供稳价"
    ],
    "websiteUrl": "http://www.csrc.gov.cn",
    "currentLeaderIds": [
      "li-zhibin"
    ],
    "tagColor": "blue"
  },
  {
    "id": "csrc-jc",
    "tinyName": "稽查局",
    "name": "中国证监会稽查局",
    "shortName": "稽查局",
    "category": "会机关内设部门",
    "level": "正厅局级",
    "establishedYear": 1998,
    "description": "负责组织、协调和指导全国证券期货违法违规案件的调查，查办重大内幕交易、操纵市场和恶性财务造假案件。",
    "mainDuties": [
      "拟订证券期货行政稽查执法制度与办案操作规程",
      "立案查办内幕交易、操纵证券期货市场、上市公司虚假陈述等重大案件",
      "深化与公安部证券犯罪侦查局行刑衔接，依法追究刑事责任"
    ],
    "websiteUrl": "http://www.csrc.gov.cn",
    "currentLeaderIds": [
      "li-ming"
    ],
    "tagColor": "blue"
  },
  {
    "id": "csrc-fl",
    "tinyName": "法治司",
    "name": "中国证监会法治司（原法律部）",
    "shortName": "法治司 / 首席律师办",
    "category": "会机关内设部门",
    "level": "正厅局级",
    "establishedYear": 1992,
    "description": "负责证券期货市场法律法规草案起草、立法协调、规范性文件审查、行政复议、应诉与法治资本市场建设。",
    "mainDuties": [
      "组织起草和修订证券法、期货和衍生品法等核心法律法规",
      "审查证监会发布的各项规章与规范性文件合法性",
      "承办证券期货行政复议案件，代理行政诉讼与国家赔偿案件"
    ],
    "websiteUrl": "http://www.csrc.gov.cn",
    "currentLeaderIds": [
      "cheng-hehong"
    ],
    "tagColor": "blue"
  },
  {
    "id": "csrc-bgt",
    "tinyName": "办公厅",
    "name": "中国证监会办公厅（党委办公室）",
    "shortName": "证监会办公厅",
    "category": "会机关内设部门",
    "level": "正厅局级",
    "establishedYear": 1992,
    "description": "负责会机关文电运转、政务公开、重大督查督办、突发事件应急处置、新闻发布及综合协调枢纽工作。",
    "mainDuties": [
      "统筹会机关政务协调与党委会、主席办公会决策落实督办",
      "统揽资本市场新闻发布、舆情监测应对与新闻发言人机制",
      "负责机要保密、信息安全及与中央各部委综合性政务联络"
    ],
    "websiteUrl": "http://www.csrc.gov.cn",
    "currentLeaderIds": [
      "zhang-wangjun"
    ],
    "tagColor": "blue"
  },
  {
    "id": "csrc-gj",
    "tinyName": "国际司",
    "name": "中国证监会国际合作司",
    "shortName": "国际合作司",
    "category": "会机关内设部门",
    "level": "正厅局级",
    "establishedYear": 1998,
    "description": "负责资本市场跨境双向开放、境内企业境外上市备案、境外机构准入及与国际证券期货监管组织多边协作。",
    "mainDuties": [
      "依法实施境内企业境外发行上市备案全过程常态化监管",
      "推动互联互通（沪深港通、债券通、ETF通）跨境机制扩容优化",
      "承担国际证监会组织（IOSCO）等多边及双边监管合作与跨境执法协助"
    ],
    "websiteUrl": "http://www.csrc.gov.cn",
    "currentLeaderIds": [
      "shen-bing"
    ],
    "tagColor": "blue"
  },
  {
    "id": "csrc-kj",
    "tinyName": "科技司",
    "name": "中国证监会科技监管司",
    "shortName": "科技监管司",
    "category": "会机关内设部门",
    "level": "正厅局级",
    "establishedYear": 2020,
    "description": "统筹全国资本市场金融科技创新、监管科技底座建设、信息系统安全运行与大数据穿透式算法研发。",
    "mainDuties": [
      "拟订证券期货行业金融科技发展规划与监管科技技术标准",
      "指导全行业核心交易结算信息系统网络与数据安全防护",
      "组织研发智能监管算法平台，赋能穿透式现场与非现场监管"
    ],
    "websiteUrl": "http://www.csrc.gov.cn",
    "tagColor": "blue"
  },
  {
    "id": "csrc-sse",
    "tinyName": "上交所",
    "name": "上海证券交易所",
    "shortName": "上交所 (SSE)",
    "category": "会管单位/交易所",
    "level": "副部级",
    "establishedYear": 1990,
    "establishedDate": "1990-11-26",
    "description": "我国内地第一家证券交易所，拥有主板与科创板，是全球前列的综合性证券交易枢纽，副部级建制。",
    "mainDuties": [
      "组织主板与科创板股票、债券、ETF及衍生品集中上市与交易",
      "对上市公司信息披露和会员合规行为实施一线自律监管",
      "深化“科创板硬科技”战略定位，服务高水平科技自立自强"
    ],
    "websiteUrl": "http://www.sse.com.cn",
    "address": "上海市浦东新区杨高南路388号",
    "contactPhone": "021-68808888",
    "currentLeaderIds": [
      "qiu-yong",
      "cai-jianchun",
      "huo-ruirong"
    ],
    "tagColor": "red"
  },
  {
    "id": "csrc-szse",
    "tinyName": "深交所",
    "name": "深圳证券交易所",
    "shortName": "深交所 (SZSE)",
    "category": "会管单位/交易所",
    "level": "副部级",
    "establishedYear": 1990,
    "establishedDate": "1990-12-01",
    "description": "立足粤港澳大湾区，拥有主板与创业板，聚焦创新成长型企业与高新技术产业，副部级建制。",
    "mainDuties": [
      "组织主板与创业板股票、可转债、基础设施REITs集中交易",
      "践行市场一线穿透式监察，防范题材概念炒作与异常交易",
      "赋能“三创四新”战略，打造国际一流创新资本形成中心"
    ],
    "websiteUrl": "http://www.szse.cn",
    "address": "深圳市福田区深南大道2012号",
    "contactPhone": "0755-88668888",
    "currentLeaderIds": [
      "sha-yan",
      "li-jizun"
    ],
    "tagColor": "indigo"
  },
  {
    "id": "csrc-bse",
    "tinyName": "北交所",
    "name": "北京证券交易所",
    "shortName": "北交所 (BSE)",
    "category": "会管单位/交易所",
    "level": "正厅局级",
    "establishedYear": 2021,
    "establishedDate": "2021-09-03",
    "description": "经国务院批准设立的我国第一家公司制证券交易所，定位于打造服务创新型中小企业主阵地。",
    "mainDuties": [
      "组织专精特新中小企业股票公开上市与集中交易",
      "与全国股转系统（新三板）协同联动构建层层递进市场架构",
      "健全契合中小微企业特征的持续融资与并购重组制度"
    ],
    "websiteUrl": "http://www.bse.cn",
    "address": "北京市西城区金融大街丁26号",
    "contactPhone": "010-63889999",
    "currentLeaderIds": [
      "zhou-guihua",
      "sui-qiang"
    ],
    "tagColor": "emerald"
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
    "description": "专门从事大宗工业原材料、有色金属、贵金属与能源衍生品交易与结算，下设上海国际能源交易中心。",
    "mainDuties": [
      "组织铜、铝、原油、黄金等重要工业品及能源衍生品交易与结算",
      "提供全球大宗商品风险管理与远期“上海价格”发现平台",
      "服务国家初级产品保供稳价与大宗商品国际化定价话语权"
    ],
    "websiteUrl": "http://www.shfe.com.cn",
    "address": "上海市浦东新区浦电路500号上海期货大厦",
    "contactPhone": "021-68400000",
    "currentLeaderIds": [
      "tian-xiangyang",
      "lu-dongsheng"
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
    "description": "全球重要的大豆、玉米、铁矿石、塑料等农产品与化工品期货期权衍生品交易枢纽。",
    "mainDuties": [
      "组织大豆、生猪、铁矿石等重点农林黑色化工期货期权交易",
      "维护粮食供应链安全与战略初级商品宏观价格风险对冲"
    ],
    "websiteUrl": "http://www.dce.com.cn",
    "address": "辽宁省大连市沙河口区会展路129号期货大厦",
    "contactPhone": "0411-84808888",
    "currentLeaderIds": [
      "xiong-jun",
      "yan-shaoming"
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
    "description": "新中国第一家期货交易所试点，主要上市粮棉油糖及纯碱、PTA、甲醇等特色基础原材料品种。",
    "mainDuties": [
      "组织小麦、棉花、白糖、苹果及纯碱等重要农工大宗商品期货交易",
      "助力乡村振兴与实体工业企业稳健经营与保供稳价"
    ],
    "websiteUrl": "http://www.czce.com.cn",
    "address": "河南省郑州市郑东新区商务外环路30号期货大厦",
    "contactPhone": "0371-65610069",
    "currentLeaderIds": [
      "zhu-lihong"
    ],
    "tagColor": "amber"
  },
  {
    "id": "csrc-cffex",
    "tinyName": "中金所",
    "name": "中国金融期货交易所",
    "shortName": "中金所 (CFFEX)",
    "category": "会管单位/交易所",
    "level": "正厅局级",
    "establishedYear": 2006,
    "establishedDate": "2006-09-08",
    "description": "专门从事金融期货、期权等金融衍生品交易与结算的公司制交易所，服务宏观审慎金融风险管理。",
    "mainDuties": [
      "组织股指期货、国债期货、股指期权等金融衍生品开发与交易",
      "承担金融衍生品市场的日常运行监测与系统性风险防范",
      "为资本市场机构投资者提供高效可靠的长期风险对冲工具"
    ],
    "websiteUrl": "http://www.cffex.com.cn",
    "address": "上海市浦东新区世纪大道1600号",
    "contactPhone": "021-50160666",
    "currentLeaderIds": [
      "he-qingwen"
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
    "description": "我国第一家混合所有制创新型期货交易所，聚焦绿色低碳、新能源金属及战略新兴产业。",
    "mainDuties": [
      "上市工业硅、碳酸锂、多晶硅等新能源核心金属原材料期货品种",
      "服务绿色低碳转型与粤港澳大湾区国际一流现代金融体系构建"
    ],
    "websiteUrl": "http://www.gfex.com.cn",
    "address": "广东省广州市天河区临江大道391-395号天德广场",
    "contactPhone": "020-28183333",
    "currentLeaderIds": [
      "gao-weibing",
      "xing-xiangfei"
    ],
    "tagColor": "amber"
  },
  {
    "id": "csrc-csdc",
    "tinyName": "中国结算",
    "name": "中国证券登记结算有限责任公司",
    "shortName": "中国结算 (CSDC)",
    "category": "会管单位/交易所",
    "level": "正厅局级",
    "establishedYear": 2001,
    "establishedDate": "2001-03-30",
    "description": "为全国证券交易提供集中登记、存管与结算服务的国家级金融核心基础设施，正厅局级会管机构。",
    "mainDuties": [
      "负责全国证券账户与结算账户的设立、统一监控与集中维护",
      "承办证券的集中登记、存管与法定过户业务",
      "承担全市场多边净额集中清算与货银对付（DVP）安全交收"
    ],
    "websiteUrl": "http://www.chinaclear.cn",
    "address": "北京市西城区太平桥大街17号",
    "contactPhone": "010-58598888",
    "currentLeaderIds": [
      "yu-wenqiang",
      "kong-qingwen"
    ],
    "tagColor": "purple"
  },
  {
    "id": "csrc-csf",
    "tinyName": "中证金融",
    "name": "中国证券金融股份有限公司",
    "shortName": "中证金融 (CSF)",
    "category": "会管单位/交易所",
    "level": "正厅局级",
    "establishedYear": 2011,
    "establishedDate": "2011-10-28",
    "description": "全国性证券类金融基础设施公司，主要从事转融通业务与全市场两融风险监控，防范系统性金融风险。",
    "mainDuties": [
      "为证券公司融资融券业务提供转融通资金融通和证券融券服务",
      "监测监控全市场融资融券与转融通业务运行情况",
      "运用市场化手段协助监管部门平抑市场非理性剧烈波动"
    ],
    "websiteUrl": "http://www.csf.com.cn",
    "address": "北京市西城区金融大街9号金融街中心",
    "contactPhone": "010-63211555",
    "currentLeaderIds": [
      "chen-fei",
      "wu-xiaoyong"
    ],
    "tagColor": "purple"
  },
  {
    "id": "csrc-csdata",
    "tinyName": "中证数据",
    "name": "中证数据有限责任公司",
    "shortName": "中证数据 (CSData)",
    "category": "会管单位/交易所",
    "level": "正厅局级",
    "establishedYear": 2020,
    "establishedDate": "2020-09-28",
    "description": "资本市场大数据监管与智能化分析平台核心承载主体，构建智能穿透式监管科技底座。",
    "mainDuties": [
      "负责全国证券期货市场大数据集中存储、分析挖掘与算力平台建设",
      "开展穿透式监管科技算法研发，赋能稽查执法与市场异常交易侦查",
      "推进资本市场数据标准化与行业数字化转型赋能"
    ],
    "websiteUrl": "http://www.csdata.com.cn",
    "address": "北京市西城区金融大街9号金融街中心",
    "contactPhone": "010-53856688",
    "currentLeaderIds": [
      "lu-dabiao"
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
    "description": "国务院批准设立的国有独资金融机构，筹集、管理和运作证券投资者保护基金，监测证券公司风险。",
    "mainDuties": [
      "筹集、管理和运用证券投资者保护基金",
      "监测证券公司合规风控与流动性风险，参与证券公司风险处置",
      "组织开展全国证券市场投资者满意度调查与合法权益维权支持"
    ],
    "websiteUrl": "http://www.sipf.com.cn",
    "address": "北京市西城区金融大街5号新盛大厦B座",
    "contactPhone": "010-66580666",
    "currentLeaderIds": [
      "yin-rongyan"
    ],
    "tagColor": "purple"
  },
  {
    "id": "csrc-cfmmc",
    "tinyName": "监控中心",
    "name": "中国期货市场监控中心有限责任公司",
    "shortName": "期货市场监控中心",
    "category": "会管单位/交易所",
    "level": "正厅局级",
    "establishedYear": 2006,
    "establishedDate": "2006-03-30",
    "description": "负责全国期货保证金安全存管监控与期货市场运行动态监测，防范期货市场系统性资金风险。",
    "mainDuties": [
      "负责全国期货交易保证金安全存管实时监控与稽核",
      "实施全市场跨期货交易所交易与持仓数据的穿透式集中监控",
      "维护期货投资者保障基金及开展期货市场综合数据统计"
    ],
    "websiteUrl": "http://www.cfmmc.com",
    "address": "北京市西城区金融大街甲9号金融街中心",
    "tagColor": "purple"
  },
  {
    "id": "csrc-cfr",
    "tinyName": "金融研究院",
    "name": "中证金融研究院",
    "shortName": "中证金融研究院",
    "category": "直属事业单位",
    "level": "正厅局级",
    "establishedYear": 2012,
    "description": "中国证监会直属的高端科研智库，定位于资本市场政策研究、宏观经济分析及战略前瞻性研究。",
    "mainDuties": [
      "开展资本市场重大战略性、基础性、前瞻性理论与政策研究",
      "跟踪分析国内外宏观经济金融形势及重大金融风险事件",
      "为中国证监会党组科学决策提供坚实智力支撑与政策储备"
    ],
    "websiteUrl": "http://www.cfr.org.cn",
    "address": "北京市西城区金融大街26号金丰和商务苑",
    "contactPhone": "010-85578000",
    "tagColor": "orange"
  },
  {
    "id": "csrc-isc",
    "tinyName": "投服中心",
    "name": "中证中小投资者服务中心有限责任公司",
    "shortName": "投服中心 (ISC)",
    "category": "会管单位/交易所",
    "level": "正厅局级",
    "establishedYear": 2014,
    "description": "中国证监会直接管理的法定公益投保机构，践行持股行权、纠纷调解及证券代表人诉讼。",
    "mainDuties": [
      "以股东身份买入上市公司一手股票，开展公益性示范行权与表决",
      "建立全国性证券期货纠纷多元化解平台与调解裁决机制",
      "代理中小投资者发起证券虚假陈述集体诉讼与代表人诉讼"
    ],
    "websiteUrl": "http://www.isc.com.cn",
    "currentLeaderIds": [
      "lu-wendao"
    ],
    "tagColor": "orange"
  },
  {
    "id": "csrc-amac",
    "tinyName": "中基协",
    "name": "中国证券投资基金业协会",
    "shortName": "中基协 (AMAC)",
    "category": "行业自律组织",
    "level": "正厅局级",
    "establishedYear": 2012,
    "description": "全国性证券投资基金行业法定自律组织，负责公募基金与私募基金行业自律管理与合规自律。",
    "mainDuties": [
      "负责公募基金、私募基金管理人的登记与私募基金备案服务",
      "拟订基金行业职业道德准则与自律规则，促进行业合规发展",
      "开展行业合规检查与信用评价，引导长期价值投资理念"
    ],
    "websiteUrl": "https://www.amac.org.cn",
    "address": "北京市西城区月坛北街2号月坛大厦",
    "contactPhone": "010-66578200",
    "currentLeaderIds": [
      "he-yanchun"
    ],
    "tagColor": "emerald"
  },
  {
    "id": "csrc-sac",
    "tinyName": "中证协",
    "name": "中国证券业协会",
    "shortName": "中证协 (SAC)",
    "category": "行业自律组织",
    "level": "正厅局级",
    "establishedYear": 1991,
    "description": "依据《中华人民共和国证券法》设立的全国性证券业自律性组织，接受中国证监会的业务指导与监督。",
    "mainDuties": [
      "组织制定证券行业自律规则与业务规范，督促会员合规展业",
      "组织证券从业人员水平评价测试及持续合规执业培训",
      "调解证券业务活动纠纷，维护行业合法权益与合规生态"
    ],
    "websiteUrl": "https://www.sac.net.cn",
    "address": "北京市西城区金融大街19号富凯大厦B座",
    "contactPhone": "010-66575800",
    "tagColor": "emerald"
  },
  {
    "id": "csrc-bj",
    "tinyName": "北京局",
    "name": "中国证券监督管理委员会北京监管局",
    "shortName": "北京证监局",
    "category": "派出机构",
    "level": "正厅局级",
    "establishedYear": 1998,
    "description": "负责北京市辖区内证券期货市场、上市公司及经营机构的一线监管与风险化解，正厅局级建制。",
    "mainDuties": [
      "监管北京市辖区内数百家央国企与高科技上市公司规范治理",
      "监管辖区内证券公司、基金公司及主要分支机构合规风控",
      "查办辖区内涉嫌违法违规证券期货行为，维护首都金融安全稳定"
    ],
    "websiteUrl": "http://www.csrc.gov.cn/beijing/",
    "currentLeaderIds": [
      "jia-wenqin"
    ],
    "tagColor": "teal"
  },
  {
    "id": "csrc-sh",
    "tinyName": "上海局",
    "name": "中国证券监督管理委员会上海监管局",
    "shortName": "上海证监局",
    "category": "派出机构",
    "level": "正厅局级",
    "establishedYear": 1998,
    "description": "负责上海国际金融中心辖区内的证券期货行业全链条日常监管，正厅局级建制。",
    "mainDuties": [
      "对上海辖区上市公司实施信息披露与公司治理持续监管",
      "对辖区内证券公司、公募基金及海量私募股权机构进行现场检查",
      "维护上海国际金融中心市场秩序，依法处置市场风险事件"
    ],
    "websiteUrl": "http://www.csrc.gov.cn/shanghai/",
    "tagColor": "teal"
  },
  {
    "id": "csrc-gd",
    "tinyName": "广东局",
    "name": "中国证券监督管理委员会广东监管局",
    "shortName": "广东证监局",
    "category": "派出机构",
    "level": "正厅局级",
    "establishedYear": 1998,
    "description": "负责除深圳市以外广东省辖区内的证券期货市场监督管理，辖区制造业上市公司极度密集。",
    "mainDuties": [
      "对广东辖区上市公司进行持续合规辅导与穿透式信息披露监管",
      "对辖区内证券期货服务机构、投顾及私募基金实施审慎自律监管",
      "承办证监会交办的重大案件调查与投资者权益保护工作"
    ],
    "websiteUrl": "http://www.csrc.gov.cn/guangdong/",
    "currentLeaderIds": [
      "yang-zongru"
    ],
    "tagColor": "teal"
  },
  {
    "id": "csrc-sz",
    "tinyName": "深圳局",
    "name": "中国证券监督管理委员会深圳监管局",
    "shortName": "深圳证监局",
    "category": "派出机构",
    "level": "正厅局级",
    "establishedYear": 1998,
    "description": "计划单列市证监局，正厅局级建制，负责深圳特区数百家创新型上市公司与头部全国券商基金监管。",
    "mainDuties": [
      "依法监督管理深圳特区上市公司、拟上市公司规范运作",
      "监管中信证券、招商证券及南方公募等全国性头部法人机构合规风控",
      "打击辖区非法证券期货活动，推进粤港澳大湾区金融市场改革创新"
    ],
    "websiteUrl": "http://www.csrc.gov.cn/shenzhen/",
    "currentLeaderIds": [
      "peng-ming"
    ],
    "tagColor": "teal"
  },
  {
    "id": "csrc-js",
    "tinyName": "江苏局",
    "name": "中国证券监督管理委员会江苏监管局",
    "shortName": "江苏证监局",
    "category": "派出机构",
    "level": "正厅局级",
    "establishedYear": 1998,
    "description": "负责江苏省辖区证券期货市场的日常监督管理，辖区实体制造业上市公司数量居全国最前列。",
    "mainDuties": [
      "对江苏辖区实体制造业与战略新兴产业上市公司实施持续监管",
      "督促辖区证券期货分支机构审慎展业，严防发生区域性金融风险"
    ],
    "websiteUrl": "http://www.csrc.gov.cn/jiangsu/",
    "currentLeaderIds": [
      "tang-libin"
    ],
    "tagColor": "teal"
  },
  {
    "id": "csrc-zj",
    "tinyName": "浙江局",
    "name": "中国证券监督管理委员会浙江监管局",
    "shortName": "浙江证监局",
    "category": "派出机构",
    "level": "正厅局级",
    "establishedYear": 1998,
    "description": "负责浙江省（不含宁波）证券期货市场的监督管理，监管民营经济大省上市公司集群与创新资本。",
    "mainDuties": [
      "监管浙江辖区上市公司、拟上市民营龙头企业合规运作",
      "规范辖区证券期货中介机构与庞大民间财富管理生态"
    ],
    "websiteUrl": "http://www.csrc.gov.cn/zhejiang/",
    "tagColor": "teal"
  },
  {
    "id": "csrc-sc",
    "tinyName": "四川局",
    "name": "中国证券监督管理委员会四川监管局",
    "shortName": "四川证监局",
    "category": "派出机构",
    "level": "正厅局级",
    "establishedYear": 1998,
    "description": "负责四川省辖区证券期货市场的监督管理，兼管成都稽查局，服务西部金融中心建设。",
    "mainDuties": [
      "监管成渝双城经济圈上市公司及中西部拟上市骨干企业",
      "查处西部大区重点证券期货违法违规线索与案件"
    ],
    "websiteUrl": "http://www.csrc.gov.cn/sichuan/",
    "tagColor": "teal"
  },
  {
    "id": "csrc-yn",
    "tinyName": "云南局",
    "name": "中国证券监督管理委员会云南监管局",
    "shortName": "云南证监局",
    "category": "派出机构",
    "level": "正厅局级",
    "establishedYear": 1998,
    "description": "负责云南省辖区内证券期货市场的监督管理与金融风险防范。",
    "mainDuties": [
      "监管云南辖区特色资源型上市公司与金融分支机构",
      "防范化解地方资本市场债券违约与流动性风险"
    ],
    "websiteUrl": "http://www.csrc.gov.cn/yunnan/",
    "tagColor": "teal"
  },
  {
    "id": "gov-sh",
    "tinyName": "上海市",
    "name": "上海市人民政府及直辖区",
    "shortName": "上海市政府/区县",
    "category": "会管单位/交易所",
    "level": "正部级",
    "establishedYear": 1949,
    "description": "上海市各级党政机关及区县领导班子，与国家金融监管体系保持密切干部交流与协同发展。",
    "mainDuties": [
      "地方经济社会发展规划与实施",
      "上海国际金融中心建设推进"
    ],
    "websiteUrl": "https://www.shanghai.gov.cn",
    "tagColor": "slate"
  },
  {
    "id": "pbc",
    "tinyName": "央行",
    "name": "中国人民银行",
    "shortName": "央行 (PBC)",
    "category": "会管单位/交易所",
    "level": "正部级",
    "establishedYear": 1948,
    "description": "国家中央银行，制定和执行货币政策，防范和化解系统性金融风险。",
    "mainDuties": [
      "货币政策实施",
      "宏观审慎金融监管"
    ],
    "websiteUrl": "http://www.pbc.gov.cn",
    "tagColor": "slate"
  }
];

export const OFFICIALS_DATA: Official[] = [
  {
    "id": "wu-qing",
    "name": "吴清",
    "gender": "男",
    "birthYear": 1965,
    "birthMonth": 4,
    "nativePlace": "安徽蒙城",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证券监督管理委员会党委书记、主席",
    "currentRank": "正部级",
    "bioSummary": "经济学博士。中国资本市场监管与一线风险处置资深专家，历任中国证监会机构部主任、证券公司风险处置办主任、上海证券交易所理事长、上海市常务副市长、市委副书记，2024年2月出任中国证监会党委书记、主席。",
    "education": [
      {
        "degree": "学士",
        "school": "安徽大学",
        "major": "经济学",
        "graduationYear": 1987
      },
      {
        "degree": "硕士",
        "school": "中国人民大学",
        "major": "财政学",
        "graduationYear": 1990
      },
      {
        "degree": "博士",
        "school": "财政部财政科学研究所",
        "major": "财政学",
        "graduationYear": 2002
      }
    ],
    "careerHistory": [
      {
        "id": "wq-1",
        "unitId": "csrc-main",
        "unitName": "中国证监会机关",
        "department": "机构监管部",
        "position": "副处长、处长、副主任",
        "rank": "副厅局级",
        "startYear": 1998,
        "startMonth": 5,
        "endYear": 2005,
        "endMonth": 3,
        "notes": "参与起草证券公司合规管理和分类监管规章制度",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "wq-2",
        "unitId": "csrc-main",
        "unitName": "中国证监会机关",
        "department": "证券公司风险处置办公室",
        "position": "主任",
        "rank": "正厅局级",
        "startYear": 2005,
        "startMonth": 3,
        "endYear": 2009,
        "endMonth": 3,
        "notes": "雷厉风行处置数十家高风险违规证券公司，化解系统性金融风险，被称为资本市场“券商屠夫”",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "wq-3",
        "unitId": "csrc-main",
        "unitName": "中国证监会机关",
        "department": "基金监管部",
        "position": "主任",
        "rank": "正厅局级",
        "startYear": 2009,
        "startMonth": 3,
        "endYear": 2010,
        "endMonth": 11,
        "notes": "严厉整饬公募基金“老鼠仓”和内幕交易，推动基金行业法治化规范运作",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "wq-4",
        "unitId": "gov-sh",
        "unitName": "上海市政府及直辖区",
        "department": "中共上海市虹口区委",
        "position": "区长、区委书记",
        "rank": "正厅局级",
        "startYear": 2010,
        "startMonth": 11,
        "endYear": 2016,
        "endMonth": 5,
        "notes": "主导北外滩财富管理高地建设，推动航运金融聚集区崛起",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "wq-5",
        "unitId": "csrc-sse",
        "unitName": "上海证券交易所",
        "position": "党委书记、理事长",
        "rank": "副部级",
        "startYear": 2016,
        "startMonth": 5,
        "endYear": 2017,
        "endMonth": 12,
        "notes": "主持上交所全面工作，深化一线穿透式监察与沪港通平稳扩容",
        "isDerived": false
      },
      {
        "id": "wq-6",
        "unitId": "gov-sh",
        "unitName": "上海市政府",
        "department": "上海市委 / 市政府",
        "position": "副市长、常务副市长、市委副书记、政法委书记",
        "rank": "副部级",
        "startYear": 2017,
        "startMonth": 12,
        "endYear": 2024,
        "endMonth": 2,
        "notes": "分管发展改革、财政、科技创新、金融与国有资产，全力推动科创板试点注册制落地",
        "isDerived": false
      },
      {
        "id": "wq-7",
        "unitId": "csrc-main",
        "unitName": "中国证监会机关",
        "position": "党委书记、主席",
        "rank": "正部级",
        "startYear": 2024,
        "startMonth": 2,
        "endYear": null,
        "isCurrent": true,
        "notes": "全面主持中国证监会党组和会行政工作，出台新“国九条”，强化强监管、防风险、促高质量发展主线",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/wu-qing.svg"
  },
  {
    "id": "li-ming",
    "name": "李明",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 11,
    "nativePlace": "山东",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证券监督管理委员会党委委员、副主席",
    "currentRank": "副部级",
    "bioSummary": "法学学士、公共管理硕士。曾任证监会发行部副处长、全国股转公司总经理、江苏证监局局长、证监会上市公司监管部主任、稽查局局长、首席检查官，具有丰富的发行上市、一线监管与稽查执法领导经验。",
    "education": [
      {
        "degree": "学士",
        "school": "中国政法大学",
        "major": "法学",
        "graduationYear": 1990
      },
      {
        "degree": "硕士",
        "school": "清华大学公共管理学院",
        "major": "公共管理",
        "graduationYear": 2004
      }
    ],
    "careerHistory": [
      {
        "id": "lm-1",
        "unitId": "csrc-fx",
        "unitName": "证监会发行监管司",
        "position": "副处长、处长",
        "rank": "正处级",
        "startYear": 2003,
        "startMonth": 4,
        "endYear": 2011,
        "endMonth": 8,
        "notes": "深入参与股票公开发行核准与审核规程规范化建设",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "lm-2",
        "unitId": "csrc-bse",
        "unitName": "全国股转公司（新三板）",
        "position": "党委委员、副总经理、总经理",
        "rank": "正厅局级",
        "startYear": 2011,
        "startMonth": 8,
        "endYear": 2018,
        "endMonth": 8,
        "notes": "主持新三板分层制度改革与做市商交易制度推行",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "lm-3",
        "unitId": "csrc-js",
        "unitName": "江苏证监局",
        "position": "党委书记、局长",
        "rank": "正厅局级",
        "startYear": 2018,
        "startMonth": 8,
        "endYear": 2020,
        "endMonth": 6,
        "notes": "全面主持制造业大省江苏资本市场发展与防范化解股票质押风险",
        "isDerived": false
      },
      {
        "id": "lm-4",
        "unitId": "csrc-ss",
        "unitName": "证监会上市公司监管司",
        "position": "主任",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 6,
        "endYear": 2021,
        "endMonth": 12,
        "notes": "主导常态化退市制度落地与提高上市公司质量专项行动",
        "isDerived": false
      },
      {
        "id": "lm-5",
        "unitId": "csrc-jc",
        "unitName": "证监会稽查局",
        "position": "局长、首席检查官",
        "rank": "正厅局级",
        "startYear": 2021,
        "startMonth": 12,
        "endYear": 2024,
        "endMonth": 7,
        "notes": "统筹全系统稽查执法与跨部委协同，严肃查办恶性财务造假与操纵市场大案要案",
        "isDerived": false
      },
      {
        "id": "lm-6",
        "unitId": "csrc-main",
        "unitName": "中国证监会机关",
        "position": "党委委员、副主席",
        "rank": "副部级",
        "startYear": 2024,
        "startMonth": 7,
        "endYear": null,
        "isCurrent": true,
        "notes": "协助分管发行监管、上市公司监管与稽查执法等核心战线",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/li-ming.svg"
  },
  {
    "id": "chen-huaping",
    "name": "陈华平",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 12,
    "nativePlace": "江西",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证券监督管理委员会党委委员、副主席",
    "currentRank": "副部级",
    "bioSummary": "法学学士。历任证监会机构部副主任、打非办主任、郑商所理事长、证监会办公厅主任、深交所理事长，2023年9月晋升为中国证监会副主席。",
    "education": [
      {
        "degree": "学士",
        "school": "中国政法大学",
        "major": "法学",
        "graduationYear": 1991
      }
    ],
    "careerHistory": [
      {
        "id": "chp-1",
        "unitId": "csrc-jg",
        "unitName": "证监会机构监管部 / 打非办",
        "position": "副主任、主任",
        "rank": "正厅局级",
        "startYear": 2003,
        "startMonth": 6,
        "endYear": 2016,
        "endMonth": 6,
        "notes": "主管证券经营机构日常合规与打击非法证券活动全国协调机制",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "chp-2",
        "unitId": "csrc-czce",
        "unitName": "郑州商品交易所",
        "position": "党委书记、理事长",
        "rank": "正厅局级",
        "startYear": 2016,
        "startMonth": 6,
        "endYear": 2019,
        "endMonth": 10,
        "notes": "主持郑商所全面工作，上市白糖期权、苹果期货等重大特色品种",
        "isDerived": false
      },
      {
        "id": "chp-3",
        "unitId": "csrc-bgt",
        "unitName": "证监会办公厅",
        "position": "主任、党委办公室主任",
        "rank": "正厅局级",
        "startYear": 2019,
        "startMonth": 10,
        "endYear": 2021,
        "endMonth": 12,
        "notes": "主持证监会办公厅综合运转与重大专项任务督办落实",
        "isDerived": false
      },
      {
        "id": "chp-4",
        "unitId": "csrc-szse",
        "unitName": "深圳证券交易所",
        "position": "党委书记、理事长",
        "rank": "副部级",
        "startYear": 2021,
        "startMonth": 12,
        "endYear": 2023,
        "endMonth": 9,
        "notes": "领导深交所党委和理事会，推动创业板注册制深化及主板中小板顺利合并",
        "isDerived": false
      },
      {
        "id": "chp-5",
        "unitId": "csrc-main",
        "unitName": "中国证监会机关",
        "position": "党委委员、副主席",
        "rank": "副部级",
        "startYear": 2023,
        "startMonth": 9,
        "endYear": null,
        "isCurrent": true,
        "notes": "协助分管期货监管、市场监管一司及市场平稳运行保障工作",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/chen-huaping.svg"
  },
  {
    "id": "wang-jianjun",
    "name": "王建军",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 3,
    "nativePlace": "四川阆中",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会原副主席、深交所原理事长",
    "currentRank": "副部级",
    "bioSummary": "经济学硕士。曾任证监会发行监管部处长、云南局副局长、市场监管部主任、办公厅主任、深交所总经理、理事长、证监会副主席。",
    "education": [
      {
        "degree": "学士",
        "school": "中国人民大学",
        "major": "财政金融",
        "graduationYear": 1991
      },
      {
        "degree": "硕士",
        "school": "中国人民大学",
        "major": "经济学",
        "graduationYear": 1994
      }
    ],
    "careerHistory": [
      {
        "id": "wjj-1",
        "unitId": "csrc-fx",
        "unitName": "证监会发行监管部",
        "position": "副处长、处长",
        "rank": "正处级",
        "startYear": 1997,
        "startMonth": 4,
        "endYear": 2005,
        "endMonth": 3,
        "notes": "长期在一线承担股票公开发行核准与材料审核",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "wjj-2",
        "unitId": "csrc-yn",
        "unitName": "云南证监局",
        "position": "党委委员、副局长",
        "rank": "副厅局级",
        "startYear": 2005,
        "startMonth": 3,
        "endYear": 2007,
        "endMonth": 12,
        "notes": "分管辖区上市公司与证券机构一线合规监管",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "wjj-3",
        "unitId": "csrc-sc1",
        "unitName": "证监会市场监管部",
        "position": "副主任（主持工作）、主任",
        "rank": "正厅局级",
        "startYear": 2012,
        "startMonth": 4,
        "endYear": 2015,
        "endMonth": 3,
        "notes": "主持全市场交易监测，兼任研究中心主任与北京证券期货研究院院长",
        "isDerived": false
      },
      {
        "id": "wjj-4",
        "unitId": "csrc-bgt",
        "unitName": "证监会办公厅",
        "position": "主任、党委办公室主任",
        "rank": "正厅局级",
        "startYear": 2015,
        "startMonth": 3,
        "endYear": 2016,
        "endMonth": 4,
        "notes": "统揽会机关行政协调与重大政策起草发布",
        "isDerived": false
      },
      {
        "id": "wjj-5",
        "unitId": "csrc-szse",
        "unitName": "深圳证券交易所",
        "position": "党委副书记、总经理",
        "rank": "正厅局级",
        "startYear": 2016,
        "startMonth": 4,
        "endYear": 2020,
        "endMonth": 3,
        "notes": "主持深交所日常营运，力推深港通开通与深市多层次股权体系",
        "isDerived": false
      },
      {
        "id": "wjj-6",
        "unitId": "csrc-szse",
        "unitName": "深圳证券交易所",
        "position": "党委书记、理事长",
        "rank": "副部级",
        "startYear": 2020,
        "startMonth": 3,
        "endYear": 2021,
        "endMonth": 10,
        "notes": "全面主导创业板改革并试点注册制成功落地",
        "isDerived": false
      },
      {
        "id": "wjj-7",
        "unitId": "csrc-main",
        "unitName": "中国证监会机关",
        "position": "党委委员、副主席",
        "rank": "副部级",
        "startYear": 2021,
        "startMonth": 10,
        "endYear": 2024,
        "endMonth": 5,
        "notes": "分管市场监管、国际交流等多项业务",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/wang-jianjun.svg"
  },
  {
    "id": "fan-dazhi",
    "name": "樊大志",
    "gender": "男",
    "birthYear": 1964,
    "birthMonth": 9,
    "nativePlace": "吉林",
    "currentUnitId": "csrc-main",
    "currentPosition": "中央纪委国家监委驻证监会纪检监察组组长、党委委员",
    "currentRank": "副部级",
    "bioSummary": "经济学博士、高级会计师。曾任华夏银行行长、中国银行纪委书记、驻中行纪检监察组长，2019年4月起担任中央纪委国家监委驻中国证监会纪检监察组组长、中国证监会党委委员。",
    "education": [
      {
        "degree": "学士",
        "school": "东北财经大学",
        "major": "财政学",
        "graduationYear": 1987
      },
      {
        "degree": "博士",
        "school": "辽宁大学",
        "major": "经济学",
        "graduationYear": 2004
      }
    ],
    "careerHistory": [
      {
        "id": "fdz-1",
        "unitId": "gov-sh",
        "unitName": "北京市金融机构 / 华夏银行",
        "position": "华夏银行党委副书记、行长",
        "rank": "正厅局级",
        "startYear": 2007,
        "startMonth": 3,
        "endYear": 2016,
        "endMonth": 11,
        "notes": "主持华夏银行资产负债与全国网络布局日常经营",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "fdz-2",
        "unitId": "pbc",
        "unitName": "中国银行股份有限公司",
        "position": "纪委书记、驻中行纪检监察组长",
        "rank": "副部级",
        "startYear": 2016,
        "startMonth": 12,
        "endYear": 2019,
        "endMonth": 4,
        "notes": "负责大型国有商业银行纪律审查与金融反腐",
        "isDerived": false
      },
      {
        "id": "fdz-3",
        "unitId": "csrc-main",
        "unitName": "中国证监会机关",
        "position": "驻证监会纪检监察组组长、党委委员",
        "rank": "副部级",
        "startYear": 2019,
        "startMonth": 4,
        "endYear": null,
        "isCurrent": true,
        "notes": "主持驻证监会纪检监察组全面工作，强化资本市场正风肃纪反腐与政治监督",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/fan-dazhi.svg"
  },
  {
    "id": "jiao-jinhong",
    "name": "焦津洪",
    "gender": "男",
    "birthYear": 1963,
    "birthMonth": 11,
    "nativePlace": "天津",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会原首席律师、法律部原主任",
    "currentRank": "正厅局级",
    "bioSummary": "法学博士、对外经贸大学法学院原教授。曾任证监会法律部副主任、行政处罚委主任、深圳证监局局长、首席律师，中国资本市场法治建设的核心奠基人之一。",
    "education": [
      {
        "degree": "学士",
        "school": "北京大学",
        "major": "法学",
        "graduationYear": 1984
      },
      {
        "degree": "硕士",
        "school": "中国人民大学",
        "major": "民商法",
        "graduationYear": 1986
      },
      {
        "degree": "博士",
        "school": "对外经济贸易大学",
        "major": "国际经济法",
        "graduationYear": 1998
      }
    ],
    "careerHistory": [
      {
        "id": "jjh-1",
        "unitId": "csrc-fl",
        "unitName": "证监会法律部 / 行政处罚委",
        "position": "副主任、行政处罚委主任委员",
        "rank": "正厅局级",
        "startYear": 2002,
        "startMonth": 11,
        "endYear": 2012,
        "endMonth": 8,
        "notes": "主持行政处罚听证制度化建设，参与证券法、证券投资基金法重大修订",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "jjh-2",
        "unitId": "csrc-sz",
        "unitName": "深圳证监局",
        "position": "党委书记、局长兼深交所理事",
        "rank": "正厅局级",
        "startYear": 2012,
        "startMonth": 8,
        "endYear": 2018,
        "endMonth": 9,
        "notes": "主管深圳辖区一线监管，严厉查处特区证券欺诈和违规质押",
        "isDerived": false
      },
      {
        "id": "jjh-3",
        "unitId": "csrc-fl",
        "unitName": "证监会法律部",
        "position": "主任、首席律师",
        "rank": "正厅局级",
        "startYear": 2018,
        "startMonth": 9,
        "endYear": 2023,
        "endMonth": 12,
        "notes": "全面主导新证券法、期货和衍生品法落地与特别代表人诉讼首案构建",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/jiao-jinhong.svg"
  },
  {
    "id": "cheng-hehong",
    "name": "程合红",
    "gender": "男",
    "birthYear": 1967,
    "birthMonth": 5,
    "nativePlace": "河南",
    "currentUnitId": "csrc-fl",
    "currentPosition": "中国证监会首席律师兼法治司司长",
    "currentRank": "正厅局级",
    "bioSummary": "法学博士。曾任中国证监会法律部副主任、主任兼诚信办主任、上海证监局党委书记、局长兼上海稽查局局长，现任中国证监会首席律师兼法治司司长。",
    "education": [
      {
        "degree": "学士",
        "school": "郑州大学",
        "major": "法学",
        "graduationYear": 1989
      },
      {
        "degree": "博士",
        "school": "中国政法大学",
        "major": "民商法学",
        "graduationYear": 1999
      }
    ],
    "careerHistory": [
      {
        "id": "chh-1",
        "unitId": "csrc-fl",
        "unitName": "证监会法律部",
        "position": "副处长、处长、副主任",
        "rank": "副厅局级",
        "startYear": 2002,
        "startMonth": 3,
        "endYear": 2015,
        "endMonth": 2,
        "notes": "长期主持资本市场法律法规体系建设与行政复议审查",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "chh-2",
        "unitId": "csrc-fl",
        "unitName": "证监会法律部",
        "position": "主任兼诚信建设办公室主任",
        "rank": "正厅局级",
        "startYear": 2015,
        "startMonth": 2,
        "endYear": 2020,
        "endMonth": 6,
        "notes": "深入起草证券法修订草案，建立全国资本市场诚信档案大数据平台",
        "isDerived": false
      },
      {
        "id": "chh-3",
        "unitId": "csrc-sh",
        "unitName": "上海证监局",
        "position": "党委书记、局长兼上海稽查局局长",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 6,
        "endYear": 2024,
        "endMonth": 1,
        "notes": "全面主持上海辖区上市公司、证券期货中介一线监管与大案稽查",
        "isDerived": false
      },
      {
        "id": "chh-4",
        "unitId": "csrc-fl",
        "unitName": "证监会法治司",
        "position": "首席律师兼法治司司长",
        "rank": "正厅局级",
        "startYear": 2024,
        "startMonth": 1,
        "endYear": null,
        "isCurrent": true,
        "notes": "统筹全系统法治建设、行政规章合法性审查及涉外法治保障",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/cheng-hehong.svg"
  },
  {
    "id": "qiu-yong",
    "name": "邱勇",
    "gender": "男",
    "birthYear": 1966,
    "birthMonth": 7,
    "nativePlace": "广东",
    "currentUnitId": "csrc-sse",
    "currentPosition": "上海证券交易所党委书记、理事长",
    "currentRank": "副部级",
    "bioSummary": "管理学博士。曾任广东局副局长、湖南局局长、广东局局长兼广州稽查局局长，2022年9月升任上海证券交易所党委书记、理事长（副部级）。",
    "education": [
      {
        "degree": "学士",
        "school": "中山大学",
        "major": "经济学",
        "graduationYear": 1988
      },
      {
        "degree": "博士",
        "school": "中山大学岭南学院",
        "major": "管理学",
        "graduationYear": 2003
      }
    ],
    "careerHistory": [
      {
        "id": "qy-1",
        "unitId": "csrc-gd",
        "unitName": "广东证监局",
        "position": "副处长、处长、副局长",
        "rank": "副厅局级",
        "startYear": 2000,
        "startMonth": 2,
        "endYear": 2010,
        "endMonth": 6,
        "notes": "负责广东辖区实体企业股份制改革辅导与上市公司监管",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "qy-2",
        "unitId": "csrc-main",
        "unitName": "湖南证监局",
        "position": "党委书记、局长",
        "rank": "正厅局级",
        "startYear": 2010,
        "startMonth": 6,
        "endYear": 2020,
        "endMonth": 6,
        "notes": "全面主政湖南证券期货市场一线监督管理与风险防控",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "qy-3",
        "unitId": "csrc-gd",
        "unitName": "广东证监局",
        "position": "党委书记、局长兼广州稽查局局长",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 6,
        "endYear": 2022,
        "endMonth": 9,
        "notes": "重返广东执掌全国最大辖区一线监管，重拳打击财务造假",
        "isDerived": false
      },
      {
        "id": "qy-4",
        "unitId": "csrc-sse",
        "unitName": "上海证券交易所",
        "position": "党委书记、理事长",
        "rank": "副部级",
        "startYear": 2022,
        "startMonth": 9,
        "endYear": null,
        "isCurrent": true,
        "notes": "主持上交所党委和理事会，深化科创板“硬科技”定位与主板注册制走深走实",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/qiu-yong.svg"
  },
  {
    "id": "cai-jianchun",
    "name": "蔡建春",
    "gender": "男",
    "birthYear": 1969,
    "birthMonth": 3,
    "nativePlace": "江西",
    "currentUnitId": "csrc-sse",
    "currentPosition": "上海证券交易所党委副书记、总经理",
    "currentRank": "副部级",
    "bioSummary": "经济学博士。长期在证监会上市部、债券部任职，历任证监会上市公司监管部副主任、公司债券监管部主任，2020年6月出任上海证券交易所党委副书记、总经理。",
    "education": [
      {
        "degree": "学士",
        "school": "南昌大学",
        "major": "经济学",
        "graduationYear": 1991
      },
      {
        "degree": "博士",
        "school": "财政部财政科学研究所",
        "major": "财政学",
        "graduationYear": 2002
      }
    ],
    "careerHistory": [
      {
        "id": "cjc-1",
        "unitId": "csrc-ss",
        "unitName": "证监会上市公司监管部",
        "position": "副处长、处长、副主任",
        "rank": "副厅局级",
        "startYear": 2004,
        "startMonth": 5,
        "endYear": 2015,
        "endMonth": 8,
        "notes": "起草上市公司重大资产重组、收购管理办法等核心规则",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "cjc-2",
        "unitId": "csrc-main",
        "unitName": "证监会公司债券监管部",
        "position": "主任",
        "rank": "正厅局级",
        "startYear": 2015,
        "startMonth": 8,
        "endYear": 2020,
        "endMonth": 6,
        "notes": "统一公司债发行审核规则，推出创新创业债、绿色债等多元工具",
        "isDerived": false
      },
      {
        "id": "cjc-3",
        "unitId": "csrc-sse",
        "unitName": "上海证券交易所",
        "position": "党委副书记、总经理",
        "rank": "副部级",
        "startYear": 2020,
        "startMonth": 6,
        "endYear": null,
        "isCurrent": true,
        "notes": "主持上交所日常运营，主导基础设施公募REITs常态化发行与科创板做市交易机制",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/cai-jianchun.svg"
  },
  {
    "id": "huo-ruirong",
    "name": "霍瑞戎",
    "gender": "男",
    "birthYear": 1969,
    "birthMonth": 10,
    "nativePlace": "河北",
    "currentUnitId": "csrc-sse",
    "currentPosition": "上海证券交易所党委副书记、副理事长",
    "currentRank": "正厅局级",
    "bioSummary": "经济学博士。历任上海期货交易所副总经理、上海证监局副局长、中国期货市场监控中心总经理、中国金融期货交易所总经理、证监会国际合作司司长，2025年9月调任上交所副理事长。",
    "education": [
      {
        "degree": "学士",
        "school": "上海财经大学",
        "major": "金融学",
        "graduationYear": 1991
      },
      {
        "degree": "博士",
        "school": "华东师范大学",
        "major": "金融学",
        "graduationYear": 2003
      }
    ],
    "careerHistory": [
      {
        "id": "hrr-1",
        "unitId": "csrc-shfe",
        "unitName": "上海期货交易所",
        "position": "总经理助理、副总经理",
        "rank": "副厅局级",
        "startYear": 2005,
        "startMonth": 6,
        "endYear": 2015,
        "endMonth": 2,
        "notes": "分管工业品期货研发、交割结算与市场交易拓展",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "hrr-2",
        "unitId": "csrc-sh",
        "unitName": "上海证监局",
        "position": "党委委员、副局长",
        "rank": "副厅局级",
        "startYear": 2015,
        "startMonth": 2,
        "endYear": 2018,
        "endMonth": 3,
        "notes": "负责辖区期货机构与大宗商品衍生品市场监管",
        "isDerived": false
      },
      {
        "id": "hrr-3",
        "unitId": "csrc-cfmmc",
        "unitName": "中国期货市场监控中心",
        "position": "总经理",
        "rank": "正厅局级",
        "startYear": 2018,
        "startMonth": 3,
        "endYear": 2019,
        "endMonth": 10,
        "notes": "主持全市场期货保证金安全存管动态监测系统",
        "isDerived": false
      },
      {
        "id": "hrr-4",
        "unitId": "csrc-cffex",
        "unitName": "中国金融期货交易所",
        "position": "党委副书记、总经理",
        "rank": "正厅局级",
        "startYear": 2019,
        "startMonth": 10,
        "endYear": 2024,
        "endMonth": 3,
        "notes": "主持中金所经营工作，上市30年期国债期货、中证1000股指期货等",
        "isDerived": false
      },
      {
        "id": "hrr-5",
        "unitId": "csrc-gj",
        "unitName": "证监会国际合作司",
        "position": "司长",
        "rank": "正厅局级",
        "startYear": 2024,
        "startMonth": 3,
        "endYear": 2025,
        "endMonth": 9,
        "notes": "主持境内企业境外上市备案与跨境多边监管合作",
        "isDerived": false
      },
      {
        "id": "hrr-6",
        "unitId": "csrc-sse",
        "unitName": "上海证券交易所",
        "position": "党委副书记、副理事长",
        "rank": "正厅局级",
        "startYear": 2025,
        "startMonth": 9,
        "endYear": null,
        "isCurrent": true,
        "notes": "协助主持上交所理事会工作，主管国际合作与金融衍生品创新",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/huo-ruirong.svg"
  },
  {
    "id": "sha-yan",
    "name": "沙雁",
    "gender": "女",
    "birthYear": 1972,
    "birthMonth": 9,
    "nativePlace": "黑龙江齐齐哈尔",
    "currentUnitId": "csrc-szse",
    "currentPosition": "深圳证券交易所党委书记、理事长",
    "currentRank": "副部级",
    "bioSummary": "管理学博士。历任证监会上市公司监管部处长、副主任、机构监管部主任、深交所总经理，2023年12月晋升为深交所党委书记、理事长（副部级）。",
    "education": [
      {
        "degree": "学士",
        "school": "陕西财经学院（现西安交通大学）",
        "major": "会计学",
        "graduationYear": 1993
      },
      {
        "degree": "博士",
        "school": "西安交通大学",
        "major": "管理科学与工程",
        "graduationYear": 2003
      }
    ],
    "careerHistory": [
      {
        "id": "sy-1",
        "unitId": "csrc-ss",
        "unitName": "证监会上市公司监管部",
        "position": "副处长、处长",
        "rank": "正处级",
        "startYear": 2000,
        "startMonth": 11,
        "endYear": 2013,
        "endMonth": 5,
        "notes": "主持上市公司信息披露准则细化与财务核查",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "sy-2",
        "unitId": "csrc-ss",
        "unitName": "证监会上市公司监管部",
        "position": "副主任",
        "rank": "副厅局级",
        "startYear": 2013,
        "startMonth": 5,
        "endYear": 2017,
        "endMonth": 4,
        "notes": "分管上市公司并购重组与重大风险案件研判",
        "isDerived": false
      },
      {
        "id": "sy-3",
        "unitId": "csrc-jg",
        "unitName": "证监会证券基金机构监管部",
        "position": "主任",
        "rank": "正厅局级",
        "startYear": 2017,
        "startMonth": 4,
        "endYear": 2020,
        "endMonth": 6,
        "notes": "统领全国券商基金法人机构监管，全面推行合规风控全覆盖体系",
        "isDerived": false
      },
      {
        "id": "sy-4",
        "unitId": "csrc-szse",
        "unitName": "深圳证券交易所",
        "position": "党委副书记、总经理",
        "rank": "副部级",
        "startYear": 2020,
        "startMonth": 6,
        "endYear": 2023,
        "endMonth": 12,
        "notes": "主持深交所日常营运，稳步落地创业板注册制与两板合并重大改革",
        "isDerived": false
      },
      {
        "id": "sy-5",
        "unitId": "csrc-szse",
        "unitName": "深圳证券交易所",
        "position": "党委书记、理事长",
        "rank": "副部级",
        "startYear": 2023,
        "startMonth": 12,
        "endYear": null,
        "isCurrent": true,
        "notes": "全面主持深交所党委与理事会工作，着力打造国际领先创新资本形成中心",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/sha-yan.svg"
  },
  {
    "id": "li-jizun",
    "name": "李继尊",
    "gender": "男",
    "birthYear": 1974,
    "birthMonth": 9,
    "nativePlace": "山东莒南",
    "currentUnitId": "csrc-szse",
    "currentPosition": "深圳证券交易所党委副书记、总经理",
    "currentRank": "副部级",
    "bioSummary": "工学学士、管理学硕士。历任国务院研究室宏观司副司长、证监会研究中心主任、中证金融研究院院长、市场一部主任兼全面深改办主任、市场一司司长，2024年4月出任深交所总经理。",
    "education": [
      {
        "degree": "学士",
        "school": "山东大学",
        "major": "工学",
        "graduationYear": 1996
      },
      {
        "degree": "硕士",
        "school": "清华大学",
        "major": "管理科学与工程",
        "graduationYear": 2002
      }
    ],
    "careerHistory": [
      {
        "id": "ljz-1",
        "unitId": "csrc-main",
        "unitName": "国务院研究室 / 证监会",
        "position": "副司长、研究中心主任",
        "rank": "正厅局级",
        "startYear": 2005,
        "startMonth": 8,
        "endYear": 2016,
        "endMonth": 12,
        "notes": "参与中央经济政策草拟与资本市场战略前瞻性研究",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "ljz-2",
        "unitId": "csrc-cfr",
        "unitName": "中证金融研究院",
        "position": "党委书记、院长",
        "rank": "正厅局级",
        "startYear": 2016,
        "startMonth": 12,
        "endYear": 2019,
        "endMonth": 3,
        "notes": "统领证监会核心高端智库科研与金融宏观政策储备",
        "isDerived": false
      },
      {
        "id": "ljz-3",
        "unitId": "csrc-sc1",
        "unitName": "证监会市场监管一部",
        "position": "主任兼全面深化资本市场改革办公室主任",
        "rank": "正厅局级",
        "startYear": 2019,
        "startMonth": 3,
        "endYear": 2022,
        "endMonth": 1,
        "notes": "统筹协调全面深化资本市场改革12条任务实施与总体施工方案",
        "isDerived": false
      },
      {
        "id": "ljz-4",
        "unitId": "csrc-sc1",
        "unitName": "证监会市场监管一司",
        "position": "司长",
        "rank": "正厅局级",
        "startYear": 2022,
        "startMonth": 1,
        "endYear": 2024,
        "endMonth": 4,
        "notes": "统揽全市场交易机制建设与异常交易穿透式监控防范",
        "isDerived": false
      },
      {
        "id": "ljz-5",
        "unitId": "csrc-szse",
        "unitName": "深圳证券交易所",
        "position": "党委副书记、总经理",
        "rank": "副部级",
        "startYear": 2024,
        "startMonth": 4,
        "endYear": null,
        "isCurrent": true,
        "notes": "主持深交所日常经营，推动科技创新企业高水平直接融资与市场稳健运行",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/li-jizun.svg"
  },
  {
    "id": "peng-ming",
    "name": "彭明",
    "gender": "男",
    "birthYear": 1976,
    "birthMonth": 10,
    "nativePlace": "江西泰和",
    "currentUnitId": "csrc-sz",
    "currentPosition": "深圳证监局党委书记、局长兼深圳稽查局局长",
    "currentRank": "正厅局级",
    "bioSummary": "工商管理硕士研究生。深交所历练二十余年，曾任深交所市场监察部总监、办公室主任、党委委员、副总经理，2024年1月调任深圳证监局局长兼深圳稽查局局长。",
    "education": [
      {
        "degree": "学士",
        "school": "南昌大学",
        "major": "经济学",
        "graduationYear": 1998
      },
      {
        "degree": "硕士",
        "school": "厦门大学",
        "major": "工商管理 (MBA)",
        "graduationYear": 2005
      }
    ],
    "careerHistory": [
      {
        "id": "pm-1",
        "unitId": "csrc-szse",
        "unitName": "深圳证券交易所",
        "position": "市场监察部总监、办公室主任",
        "rank": "正处级",
        "startYear": 2000,
        "startMonth": 10,
        "endYear": 2017,
        "endMonth": 9,
        "notes": "主持深市交易实时监控预警模型开发与跨市场联防联控",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "pm-2",
        "unitId": "csrc-szse",
        "unitName": "深圳证券交易所",
        "position": "党委委员、副总经理",
        "rank": "副厅局级",
        "startYear": 2017,
        "startMonth": 9,
        "endYear": 2024,
        "endMonth": 1,
        "notes": "分管债券市场、固定收益及金融科技数字化底座",
        "isDerived": false
      },
      {
        "id": "pm-3",
        "unitId": "csrc-sz",
        "unitName": "深圳证监局",
        "position": "党委书记、局长兼深圳稽查局局长",
        "rank": "正厅局级",
        "startYear": 2024,
        "startMonth": 1,
        "endYear": null,
        "isCurrent": true,
        "notes": "全面主持深圳特区上市公司与头部法人金融机构一线属地监管",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/peng-ming.svg"
  },
  {
    "id": "zhou-guihua",
    "name": "周贵华",
    "gender": "男",
    "birthYear": 1970,
    "birthMonth": 10,
    "nativePlace": "四川",
    "currentUnitId": "csrc-bse",
    "currentPosition": "北京证券交易所董事长、全国股转公司董事长",
    "currentRank": "正厅局级",
    "bioSummary": "工学硕士。曾任中国证监会办公厅副主任、非上市公众公司监管部副主任、主任、综合业务司司长，2022年5月出任北交所、全国股转公司党委书记、董事长。",
    "education": [
      {
        "degree": "学士",
        "school": "华中科技大学",
        "major": "工程学",
        "graduationYear": 1992
      },
      {
        "degree": "硕士",
        "school": "中国科学院大学",
        "major": "工学",
        "graduationYear": 1995
      }
    ],
    "careerHistory": [
      {
        "id": "zgh-1",
        "unitId": "csrc-bgt",
        "unitName": "证监会办公厅",
        "position": "副处长、处长、副主任",
        "rank": "副厅局级",
        "startYear": 2002,
        "startMonth": 3,
        "endYear": 2014,
        "endMonth": 6,
        "notes": "协调会机关综合处务运转与新闻发布会组织",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "zgh-2",
        "unitId": "csrc-sc2",
        "unitName": "证监会非上市公众公司监管部",
        "position": "副主任、主任",
        "rank": "正厅局级",
        "startYear": 2014,
        "startMonth": 6,
        "endYear": 2022,
        "endMonth": 5,
        "notes": "主导非上市公众公司监管制度框架起草，全程主导北京证券交易所设立方案制定",
        "isDerived": false
      },
      {
        "id": "zgh-3",
        "unitId": "csrc-bse",
        "unitName": "北京证券交易所",
        "position": "党委书记、董事长",
        "rank": "正厅局级",
        "startYear": 2022,
        "startMonth": 5,
        "endYear": null,
        "isCurrent": true,
        "notes": "全面主导北交所高质量建设，推出“北证50”成份指数与做市交易机制",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/zhou-guihua.svg"
  },
  {
    "id": "sui-qiang",
    "name": "隋强",
    "gender": "男",
    "birthYear": 1974,
    "birthMonth": 10,
    "nativePlace": "辽宁大连",
    "currentUnitId": "csrc-bse",
    "currentPosition": "北京证券交易所副董事长、总经理",
    "currentRank": "正厅局级",
    "bioSummary": "经济学博士。历任证监会办公厅、市场监管部处长、全国股转公司总经理助理、副总经理，现任全国股转公司党委副书记、副董事长、总经理，北交所副董事长、总经理。",
    "education": [
      {
        "degree": "学士",
        "school": "东北财经大学",
        "major": "金融学",
        "graduationYear": 1996
      },
      {
        "degree": "硕士",
        "school": "东北财经大学",
        "major": "经济学",
        "graduationYear": 1999
      },
      {
        "degree": "博士",
        "school": "财政部财政科学研究所",
        "major": "财政学",
        "graduationYear": 2004
      }
    ],
    "careerHistory": [
      {
        "id": "sq-1",
        "unitId": "csrc-sc1",
        "unitName": "证监会市场监管部 / 办公厅",
        "position": "副处长、处长",
        "rank": "正处级",
        "startYear": 2003,
        "startMonth": 4,
        "endYear": 2013,
        "endMonth": 1,
        "notes": "参与起草非上市公众公司监管办法及多层次资本市场制度",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "sq-2",
        "unitId": "csrc-bse",
        "unitName": "全国股转公司",
        "position": "总经理助理、副总经理",
        "rank": "副厅局级",
        "startYear": 2013,
        "startMonth": 1,
        "endYear": 2020,
        "endMonth": 11,
        "notes": "主导全国股转新三板精选层筹备与制度设计",
        "isDerived": false
      },
      {
        "id": "sq-3",
        "unitId": "csrc-bse",
        "unitName": "北京证券交易所",
        "position": "党委副书记、副董事长、总经理",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 11,
        "endYear": null,
        "isCurrent": true,
        "notes": "主持北交所与全国股转公司日常运营，优化中小企业快速审核机制",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/sui-qiang.svg"
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
    "bioSummary": "曾任中国证监会研究中心从事宏观经济政策研究，后任宁波证监局等职。2019年任浙江证监局局长，2022年4月出任上海期货交易所党委书记、理事长。",
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
        "unitId": "csrc-jg",
        "unitName": "中国证监会机关",
        "department": "研究中心 / 地方派出机构",
        "position": "研究员、处长、宁波局副局长等",
        "rank": "副厅局级",
        "startYear": 2003,
        "startMonth": 7,
        "endYear": 2019,
        "endMonth": 5,
        "isDerived": true,
        "sourceNote": "根据宏观经济与资本市场研究成果发表及派出机构新闻推导",
        "notes": "深耕宏观经济与资本市场中长期改革理论研究"
      },
      {
        "id": "txy-2",
        "unitId": "csrc-df",
        "unitName": "地方证监局",
        "department": "浙江监管局",
        "position": "党委书记、局长兼杭州特派办主任",
        "rank": "正厅局级",
        "startYear": 2019,
        "startMonth": 5,
        "endYear": 2022,
        "endMonth": 4,
        "isDerived": false,
        "notes": "主持浙江证监局全面工作，推动'凤凰行动'升级与上市公司高质量发展"
      },
      {
        "id": "txy-3",
        "unitId": "csrc-shfe",
        "unitName": "上海期货交易所",
        "department": "理事会",
        "position": "党委书记、理事长",
        "rank": "正厅局级",
        "startYear": 2022,
        "startMonth": 4,
        "endYear": null,
        "endMonth": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "2022年4月出任上期所党委书记、理事长，推进大宗商品'全仓登'建设与高水平对外开放"
      }
    ],
    "avatarUrl": "/avatars/tian-xiangyang.svg"
  },
  {
    "id": "lu-dongsheng",
    "name": "鲁东升",
    "gender": "男",
    "birthYear": 1969,
    "birthMonth": 6,
    "nativePlace": "山东",
    "currentUnitId": "csrc-shfe",
    "currentPosition": "上海期货交易所党委副书记、总经理",
    "currentRank": "正厅局级",
    "bioSummary": "经济学硕士。曾任中国金融期货交易所监察部处长、副总经理、证监会期货部巡视员、郑商所总经理，2024年12月调任上海期货交易所总经理。",
    "education": [
      {
        "degree": "学士",
        "school": "山东大学",
        "major": "经济学",
        "graduationYear": 1991
      },
      {
        "degree": "硕士",
        "school": "对外经济贸易大学",
        "major": "国际贸易",
        "graduationYear": 1996
      }
    ],
    "careerHistory": [
      {
        "id": "lds-1",
        "unitId": "csrc-cffex",
        "unitName": "中国金融期货交易所",
        "position": "监察部处长、副总经理",
        "rank": "副厅局级",
        "startYear": 2006,
        "startMonth": 9,
        "endYear": 2016,
        "endMonth": 4,
        "notes": "主导股指期货跨市场监管与异常账户异常持仓监控",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "lds-2",
        "unitId": "csrc-qh",
        "unitName": "证监会期货监管部",
        "position": "巡视员",
        "rank": "正厅局级",
        "startYear": 2016,
        "startMonth": 4,
        "endYear": 2019,
        "endMonth": 12,
        "notes": "指导全国商品与金融期货交易所规则统筹与风险防范",
        "isDerived": false
      },
      {
        "id": "lds-3",
        "unitId": "csrc-czce",
        "unitName": "郑州商品交易所",
        "position": "党委副书记、总经理",
        "rank": "正厅局级",
        "startYear": 2019,
        "startMonth": 12,
        "endYear": 2024,
        "endMonth": 12,
        "notes": "主持郑商所日常经营，推出纯碱、花生、短纤等特色产业期货",
        "isDerived": false
      },
      {
        "id": "lds-4",
        "unitId": "csrc-shfe",
        "unitName": "上海期货交易所",
        "position": "党委副书记、总经理",
        "rank": "正厅局级",
        "startYear": 2024,
        "startMonth": 12,
        "endYear": null,
        "isCurrent": true,
        "notes": "主持上期所日常营运，稳步拓展商品期货期权国际化做市制度",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/lu-dongsheng.svg"
  },
  {
    "id": "wang-fenghai",
    "name": "王凤海",
    "gender": "男",
    "birthYear": 1966,
    "birthMonth": 8,
    "nativePlace": "辽宁",
    "currentUnitId": "csrc-shfe",
    "currentPosition": "上海期货交易所原党委副书记、总经理",
    "currentRank": "正厅局级",
    "bioSummary": "中国期货市场资深高管。曾任大连商品交易所副总经理、总经理，2019年10月至2024年12月出任上海期货交易所总经理。",
    "education": [
      {
        "degree": "学士",
        "school": "大连理工大学",
        "major": "工学",
        "graduationYear": 1988
      },
      {
        "degree": "硕士",
        "school": "大连理工大学",
        "major": "管理学",
        "graduationYear": 1994
      }
    ],
    "careerHistory": [
      {
        "id": "wfh-1",
        "unitId": "csrc-dce",
        "unitName": "大连商品交易所",
        "position": "副总经理",
        "rank": "副厅局级",
        "startYear": 2008,
        "startMonth": 3,
        "endYear": 2016,
        "endMonth": 5,
        "notes": "分管农产品交易与实物交割仓库标准化管理",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "wfh-2",
        "unitId": "csrc-dce",
        "unitName": "大连商品交易所",
        "position": "党委副书记、总经理",
        "rank": "正厅局级",
        "startYear": 2016,
        "startMonth": 5,
        "endYear": 2019,
        "endMonth": 10,
        "notes": "主持大商所日常营运，推出铁矿石期货国际化与豆粕期权",
        "isDerived": false
      },
      {
        "id": "wfh-3",
        "unitId": "csrc-shfe",
        "unitName": "上海期货交易所",
        "position": "党委副书记、总经理",
        "rank": "正厅局级",
        "startYear": 2019,
        "startMonth": 10,
        "endYear": 2024,
        "endMonth": 12,
        "notes": "主持上期所日常营运，上市低硫燃料油、集运指数欧线期货",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/wang-fenghai.svg"
  },
  {
    "id": "zhu-lihong",
    "name": "朱丽红",
    "gender": "女",
    "birthYear": 1969,
    "birthMonth": 3,
    "nativePlace": "辽宁",
    "currentUnitId": "csrc-czce",
    "currentPosition": "郑州商品交易所党委书记、理事长",
    "currentRank": "正厅局级",
    "bioSummary": "经济学硕士。深耕期货市场二十余载，历任大连商品交易所副总经理、广州期货交易所副董事长兼总经理，2025年11月调任郑州商品交易所党委书记、理事长。",
    "education": [
      {
        "degree": "学士",
        "school": "辽宁大学",
        "major": "经济学",
        "graduationYear": 1991
      },
      {
        "degree": "硕士",
        "school": "吉林大学",
        "major": "经济学",
        "graduationYear": 1997
      }
    ],
    "careerHistory": [
      {
        "id": "zlh-1",
        "unitId": "csrc-dce",
        "unitName": "大连商品交易所",
        "position": "副总经理",
        "rank": "副厅局级",
        "startYear": 2005,
        "startMonth": 8,
        "endYear": 2020,
        "endMonth": 11,
        "notes": "主导“保险+期货”金融支农创新模式发源与全国推广",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "zlh-2",
        "unitId": "csrc-gfex",
        "unitName": "广州期货交易所",
        "position": "党委副书记、副董事长、总经理",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 11,
        "endYear": 2025,
        "endMonth": 11,
        "notes": "主持广期所初创运营，成功开创工业硅与碳酸锂新能源绿色期货",
        "isDerived": false
      },
      {
        "id": "zlh-3",
        "unitId": "csrc-czce",
        "unitName": "郑州商品交易所",
        "position": "党委书记、理事长",
        "rank": "正厅局级",
        "startYear": 2025,
        "startMonth": 11,
        "endYear": null,
        "isCurrent": true,
        "notes": "主持郑商所全面工作，深化大宗粮棉原料期货功能发挥与服务国家粮食安全",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/zhu-lihong.svg"
  },
  {
    "id": "xiong-jun",
    "name": "熊军",
    "gender": "男",
    "birthYear": 1970,
    "birthMonth": 5,
    "nativePlace": "湖北",
    "currentUnitId": "csrc-dce",
    "currentPosition": "大连商品交易所党委书记、理事长",
    "currentRank": "正厅局级",
    "bioSummary": "经济学博士。长期从事期货一线监管与现代期货交易所运营管理，历任云南证监局副局长、证监会期货部副主任、郑商所总经理、郑商所理事长，2025年11月出任大连商品交易所党委书记、理事长。",
    "education": [
      {
        "degree": "学士",
        "school": "武汉大学",
        "major": "经济学",
        "graduationYear": 1992
      },
      {
        "degree": "硕士",
        "school": "中南财经政法大学",
        "major": "金融学",
        "graduationYear": 1995
      },
      {
        "degree": "博士",
        "school": "中国人民大学",
        "major": "经济学",
        "graduationYear": 2003
      }
    ],
    "careerHistory": [
      {
        "id": "xj-1",
        "unitId": "csrc-yn",
        "unitName": "云南证监局",
        "position": "党委委员、副局长",
        "rank": "副厅局级",
        "startYear": 2002,
        "startMonth": 4,
        "endYear": 2011,
        "endMonth": 8,
        "notes": "分管云南辖区期货机构与大宗金属企业一线合规监管",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "xj-2",
        "unitId": "csrc-qh",
        "unitName": "证监会期货监管二部 / 期货部",
        "position": "副主任",
        "rank": "副厅局级",
        "startYear": 2011,
        "startMonth": 8,
        "endYear": 2016,
        "endMonth": 6,
        "notes": "负责农产品商品期货监管、规则拟订与异常价格预警研判",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "xj-3",
        "unitId": "csrc-czce",
        "unitName": "郑州商品交易所",
        "position": "党委副书记、总经理",
        "rank": "正厅局级",
        "startYear": 2016,
        "startMonth": 6,
        "endYear": 2019,
        "endMonth": 11,
        "notes": "主持郑商所日常经营，推出苹果期货、PTA期货引入境外交易者",
        "isDerived": false
      },
      {
        "id": "xj-4",
        "unitId": "csrc-czce",
        "unitName": "郑州商品交易所",
        "position": "党委书记、理事长",
        "rank": "正厅局级",
        "startYear": 2019,
        "startMonth": 11,
        "endYear": 2025,
        "endMonth": 11,
        "notes": "领导郑商所党委与理事会，全面提升实体产业参与期货深度",
        "isDerived": false
      },
      {
        "id": "xj-5",
        "unitId": "csrc-dce",
        "unitName": "大连商品交易所",
        "position": "党委书记、理事长",
        "rank": "正厅局级",
        "startYear": 2025,
        "startMonth": 11,
        "endYear": null,
        "isCurrent": true,
        "notes": "主持大商所全面工作，推动全球重要农产品与黑色衍生品定价枢纽建设",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/xiong-jun.svg"
  },
  {
    "id": "yan-shaoming",
    "name": "严绍明",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 7,
    "nativePlace": "湖北",
    "currentUnitId": "csrc-dce",
    "currentPosition": "大连商品交易所党委副书记、总经理",
    "currentRank": "正厅局级",
    "bioSummary": "经济学硕士。长期在证监会期货监管部任职，历任处长、副主任，在期货市场一线法律规章、交易制度及风险防控造诣极深，2022年2月出任大商所总经理。",
    "education": [
      {
        "degree": "学士",
        "school": "中南财经大学",
        "major": "经济学",
        "graduationYear": 1990
      },
      {
        "degree": "硕士",
        "school": "中国人民大学",
        "major": "金融学",
        "graduationYear": 1996
      }
    ],
    "careerHistory": [
      {
        "id": "ysm-1",
        "unitId": "csrc-qh",
        "unitName": "证监会期货监管部",
        "position": "副处长、处长、副主任",
        "rank": "副厅局级",
        "startYear": 2005,
        "startMonth": 6,
        "endYear": 2022,
        "endMonth": 2,
        "notes": "起草期货交易管理条例及大宗商品市场运行监管规程",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "ysm-2",
        "unitId": "csrc-dce",
        "unitName": "大连商品交易所",
        "position": "党委副书记、总经理",
        "rank": "正厅局级",
        "startYear": 2022,
        "startMonth": 2,
        "endYear": null,
        "isCurrent": true,
        "notes": "主持大商所日常营运，推出生猪期权、集装箱运力期货研发",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/yan-shaoming.svg"
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
    "bioSummary": "长期在证券监管系统工作，历任河南证监局副局长兼纪委书记、湖北证监局纪委书记、江西证监局党委书记兼局长。2021年6月起任中国金融期货交易所党委书记、董事长。",
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
        "unitId": "csrc-df",
        "unitName": "地方证监局",
        "department": "河南监管局 / 湖北监管局",
        "position": "党委委员、副局长兼纪委书记",
        "rank": "副厅局级",
        "startYear": 2004,
        "startMonth": 5,
        "endYear": 2016,
        "endMonth": 8,
        "isDerived": true,
        "sourceNote": "根据地方监管局公开工作动态与纪检监察报道推导任职跨度",
        "notes": "长期在地方派出机构负责党风廉政建设与一线市场监管"
      },
      {
        "id": "hqw-2",
        "unitId": "csrc-df",
        "unitName": "地方证监局",
        "department": "江西监管局",
        "position": "党委书记、局长",
        "rank": "正厅局级",
        "startYear": 2016,
        "startMonth": 8,
        "endYear": 2021,
        "endMonth": 6,
        "isDerived": true,
        "sourceNote": "根据江西证监局政务公开信息及地方调研新闻推导",
        "notes": "主持江西证监局全面工作，推动辖区多层次资本市场发展与风险防控"
      },
      {
        "id": "hqw-3",
        "unitId": "csrc-cffex",
        "unitName": "中国金融期货交易所",
        "department": "领导班子",
        "position": "党委书记、董事长",
        "rank": "正厅局级",
        "startYear": 2021,
        "startMonth": 6,
        "endYear": null,
        "endMonth": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "2021年6月起任中金所党委书记、董事长，推动30年期国债期货、上证50与中证1000股指期权平稳上市运行"
      }
    ],
    "avatarUrl": "/avatars/he-qingwen.svg"
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
    "bioSummary": "经济学硕士。长期担任中国证监会人事教育部主任、党委组织部部长、一级巡视员，多次代表证监会党委宣读系统重要任免。2023年11月出任广州期货交易所党委书记、董事长。",
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
        "unitId": "csrc-jg",
        "unitName": "中国证监会机关",
        "department": "人事教育部（党委组织部）",
        "position": "处长、副主任、主任（党委组织部部长、一级巡视员）",
        "rank": "正厅局级",
        "startYear": 2012,
        "startMonth": 6,
        "endYear": 2023,
        "endMonth": 11,
        "isDerived": true,
        "sourceNote": "根据2013-2023年系统重要干部大会宣读任免报道及组织任职动态推导",
        "notes": "主持证监会干部人事与组织工作，多次代表证监会党委赴各大交易所和会管单位宣布干部任免决定"
      },
      {
        "id": "gwb-2",
        "unitId": "csrc-gfex",
        "unitName": "广州期货交易所",
        "department": "领导班子",
        "position": "党委书记、董事长",
        "rank": "正厅局级",
        "startYear": 2023,
        "startMonth": 11,
        "endYear": null,
        "endMonth": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "2023年11月接替胡政出任广期所第二任党委书记、董事长，主导推进新能源金属期货品种体系建设"
      }
    ],
    "avatarUrl": "/avatars/gao-weibing.svg"
  },
  {
    "id": "xing-xiangfei",
    "name": "邢向飞",
    "gender": "男",
    "birthYear": 1972,
    "birthMonth": 8,
    "nativePlace": "河南",
    "currentUnitId": "csrc-gfex",
    "currentPosition": "广州期货交易所党委副书记、总经理",
    "currentRank": "正厅局级",
    "bioSummary": "经济学硕士。曾任郑州商品交易所副总经理、中国期货市场监控中心党委负责人，2025年11月出任广州期货交易所总经理。",
    "education": [
      {
        "degree": "学士",
        "school": "河南大学",
        "major": "经济学",
        "graduationYear": 1994
      },
      {
        "degree": "硕士",
        "school": "西安交通大学",
        "major": "金融学",
        "graduationYear": 2001
      }
    ],
    "careerHistory": [
      {
        "id": "xxf-1",
        "unitId": "csrc-czce",
        "unitName": "郑州商品交易所",
        "position": "副总经理",
        "rank": "副厅局级",
        "startYear": 2008,
        "startMonth": 5,
        "endYear": 2018,
        "endMonth": 10,
        "notes": "负责郑商所交易组织与品种开发创新",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "xxf-2",
        "unitId": "csrc-cfmmc",
        "unitName": "中国期货市场监控中心",
        "position": "党委负责人",
        "rank": "正厅局级",
        "startYear": 2018,
        "startMonth": 10,
        "endYear": 2025,
        "endMonth": 11,
        "notes": "主持监控中心工作，筑牢全国期货市场保证金安全防线",
        "isDerived": false
      },
      {
        "id": "xxf-3",
        "unitId": "csrc-gfex",
        "unitName": "广州期货交易所",
        "position": "党委副书记、总经理",
        "rank": "正厅局级",
        "startYear": 2025,
        "startMonth": 11,
        "endYear": null,
        "isCurrent": true,
        "notes": "主持广期所日常营运与新能源产业链风险管理生态建设",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/xing-xiangfei.svg"
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
    "bioSummary": "经济学博士。历任证监会会计部综合处处长、副主任，中国结算总会计师、中证信息技术董事长，2020年出任中国证券登记结算公司党委书记、董事长。",
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
        "unitId": "csrc-jg",
        "unitName": "中国证监会机关",
        "department": "首席会计师办公室 / 会计部",
        "position": "首席会计师助理、综合处处长",
        "rank": "正处级",
        "startYear": 1997,
        "startMonth": 5,
        "endYear": 2001,
        "endMonth": 3,
        "isDerived": false,
        "notes": "负责上市公司会计监管制度与证券期货相关审计业务规范"
      },
      {
        "id": "ywq-2",
        "unitId": "csrc-csdc",
        "unitName": "中国证券登记结算公司",
        "department": "高管层",
        "position": "总会计师",
        "rank": "副厅局级",
        "startYear": 2001,
        "startMonth": 3,
        "endYear": 2006,
        "endMonth": 9,
        "isDerived": false,
        "notes": "参与中国结算组建，负责全国证券登记结算资金财务管理与结算交收机制建设"
      },
      {
        "id": "ywq-3",
        "unitId": "csrc-jg",
        "unitName": "中国证监会机关",
        "department": "会计部",
        "position": "副主任",
        "rank": "副厅局级",
        "startYear": 2006,
        "startMonth": 9,
        "endYear": 2013,
        "endMonth": 12,
        "isDerived": false,
        "notes": "分管会计监管、内部控制规范与会计师事务所证券资格管理"
      },
      {
        "id": "ywq-4",
        "unitId": "csrc-jg",
        "unitName": "中国证监会机关",
        "department": "中证信息技术服务公司",
        "position": "总经理、党委书记、董事长",
        "rank": "正厅局级",
        "startYear": 2013,
        "startMonth": 12,
        "endYear": 2019,
        "endMonth": 10,
        "isDerived": false,
        "notes": "主持中证信息全面工作，推进资本市场行业信息安全与大数据基础平台建设"
      },
      {
        "id": "ywq-5",
        "unitId": "csrc-csdc",
        "unitName": "中国证券登记结算公司",
        "department": "领导班子",
        "position": "党委副书记、总经理",
        "rank": "正厅局级",
        "startYear": 2019,
        "startMonth": 10,
        "endYear": 2020,
        "endMonth": 11,
        "isDerived": false,
        "notes": "主持中国结算日常经营管理与注册制改革登记结算支持"
      },
      {
        "id": "ywq-6",
        "unitId": "csrc-csdc",
        "unitName": "中国证券登记结算公司",
        "department": "领导班子",
        "position": "党委书记、董事长",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 11,
        "endYear": null,
        "endMonth": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "全面领导中国结算党委与董事会工作，推进货银对付（DVP）改革实施与跨境互联互通"
      }
    ],
    "avatarUrl": "/avatars/yu-wenqiang.svg"
  },
  {
    "id": "kong-qingwen",
    "name": "孔庆文",
    "gender": "男",
    "birthYear": 1969,
    "birthMonth": 8,
    "nativePlace": "山东",
    "currentUnitId": "csrc-csdc",
    "currentPosition": "中国证券登记结算有限责任公司党委副书记、总经理",
    "currentRank": "正厅局级",
    "bioSummary": "曾参与中国证券金融公司筹备设立并任副总经理，后任中国结算副总经理，2020年出任中国证券登记结算公司党委副书记、总经理、副董事长。",
    "education": [
      {
        "degree": "学士",
        "school": "上海财经大学",
        "major": "统计学",
        "graduationYear": 1991
      },
      {
        "degree": "硕士",
        "school": "复旦大学",
        "major": "经济学",
        "graduationYear": 1998
      }
    ],
    "careerHistory": [
      {
        "id": "kqw-1",
        "unitId": "csrc-jg",
        "unitName": "中国证监会机关",
        "department": "证券金融公司筹备组",
        "position": "筹备组成员、处长",
        "rank": "正处级",
        "startYear": 2010,
        "startMonth": 4,
        "endYear": 2012,
        "endMonth": 3,
        "isDerived": true,
        "sourceNote": "根据中证金融筹备设立历史及干部履历公开资料推导",
        "notes": "参与中国证券金融股份有限公司筹备方案设计与转融通制度构建"
      },
      {
        "id": "kqw-2",
        "unitId": "csrc-csf",
        "unitName": "中国证券金融股份有限公司",
        "department": "领导班子",
        "position": "党委委员、副总经理",
        "rank": "副厅局级",
        "startYear": 2012,
        "startMonth": 3,
        "endYear": 2017,
        "endMonth": 6,
        "isDerived": false,
        "notes": "分管转融通业务运行、券商两融监测与资金运营"
      },
      {
        "id": "kqw-3",
        "unitId": "csrc-csdc",
        "unitName": "中国证券登记结算公司",
        "department": "领导班子",
        "position": "党委委员、副总经理",
        "rank": "副厅局级",
        "startYear": 2017,
        "startMonth": 6,
        "endYear": 2020,
        "endMonth": 11,
        "isDerived": false,
        "notes": "分管核心登记结算技术系统架构升级与多层次账户体系建设"
      },
      {
        "id": "kqw-4",
        "unitId": "csrc-csdc",
        "unitName": "中国证券登记结算公司",
        "department": "领导班子",
        "position": "党委副书记、总经理、副董事长",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 11,
        "endYear": null,
        "endMonth": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "主持中国结算日常经营管理，推进ETF互联互通结算与存托凭证互联互通"
      }
    ],
    "avatarUrl": "/avatars/kong-qingwen.svg"
  },
  {
    "id": "lu-wenshan",
    "name": "陆文山",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 8,
    "nativePlace": "江苏",
    "currentUnitId": "csrc-shfe",
    "currentPosition": "上海期货交易所原监事长、中国期货业协会副会长",
    "currentRank": "正厅局级",
    "bioSummary": "法学硕士。历任上交所法律总监、证监会发行监管部副主任、上海期货交易所监事长、中国期货业协会副会长。",
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
        "unitId": "csrc-sse",
        "unitName": "上海证券交易所",
        "department": "法律事务部",
        "position": "法律部总监、交易所法律总监",
        "rank": "副厅局级",
        "startYear": 2000,
        "startMonth": 8,
        "endYear": 2009,
        "endMonth": 2,
        "isDerived": true,
        "sourceNote": "根据上交所法律实务成果与调任新闻报道推导",
        "notes": "长期负责证券交易所有关自律管理规则起草与证券诉讼法治研究"
      },
      {
        "id": "lws-2",
        "unitId": "csrc-jg",
        "unitName": "中国证监会机关",
        "department": "发行监管部",
        "position": "副主任",
        "rank": "副厅局级",
        "startYear": 2009,
        "startMonth": 2,
        "endYear": 2014,
        "endMonth": 6,
        "isDerived": false,
        "notes": "负责股票发行审核法律标准制定与IPO发审规范"
      },
      {
        "id": "lws-3",
        "unitId": "csrc-shfe",
        "unitName": "上海期货交易所",
        "department": "监事会",
        "position": "党委副书记、监事长",
        "rank": "正厅局级",
        "startYear": 2014,
        "startMonth": 6,
        "endYear": 2021,
        "endMonth": 9,
        "isDerived": false,
        "notes": "主持上期所监事会工作，完善交易所内控治理与风险防范"
      }
    ],
    "avatarUrl": "/avatars/lu-wenshan.svg"
  },
  {
    "id": "lu-dabiao",
    "name": "卢大彪",
    "gender": "男",
    "birthYear": 1977,
    "birthMonth": 3,
    "nativePlace": "江西修水",
    "currentUnitId": "csrc-csdata",
    "currentPosition": "中证数据有限责任公司党委书记、董事长、总经理",
    "currentRank": "正厅局级",
    "bioSummary": "西方经济学博士，学者型监管官员。历任证监会市场部处长、公司债券部副巡视员、副主任、上交所副总经理，2022年出任中证数据董事长兼总经理。",
    "education": [
      {
        "degree": "硕士",
        "school": "华中科技大学",
        "major": "数量经济学",
        "graduationYear": 2000
      },
      {
        "degree": "博士",
        "school": "中国社会科学院研究生院",
        "major": "西方经济学",
        "graduationYear": 2003
      }
    ],
    "careerHistory": [
      {
        "id": "ldb-1",
        "unitId": "csrc-jg",
        "unitName": "中国证监会机关",
        "department": "市场监管部 / 公司债券监管部",
        "position": "处长、副巡视员、副主任",
        "rank": "副厅局级",
        "startYear": 2006,
        "startMonth": 4,
        "endYear": 2021,
        "endMonth": 1,
        "isDerived": true,
        "sourceNote": "根据公司债券市场监管发言、学术论文发表及政策吹风会报道推导",
        "notes": "负责公司债券监管与制度建设，推进民企债券融资支持工具与资产证券化试点"
      },
      {
        "id": "ldb-2",
        "unitId": "csrc-sse",
        "unitName": "上海证券交易所",
        "department": "总经理室",
        "position": "党委委员、副总经理",
        "rank": "副厅局级",
        "startYear": 2021,
        "startMonth": 1,
        "endYear": 2022,
        "endMonth": 9,
        "isDerived": false,
        "notes": "分管债券业务、基础设施公募REITs试点推进及科创板相关业务"
      },
      {
        "id": "ldb-3",
        "unitId": "csrc-csdata",
        "unitName": "中证数据有限责任公司",
        "department": "领导班子",
        "position": "党委书记、董事长、总经理",
        "rank": "正厅局级",
        "startYear": 2022,
        "startMonth": 9,
        "endYear": null,
        "endMonth": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "主持中证数据全面工作，推进资本市场监管大数据中心建设与穿透式监管科技底座运行"
      }
    ],
    "avatarUrl": "/avatars/lu-dabiao.svg"
  },
  {
    "id": "yin-rongyan",
    "name": "殷荣彦",
    "gender": "男",
    "birthYear": 1967,
    "birthMonth": 4,
    "nativePlace": "山东",
    "currentUnitId": "csrc-sipf",
    "currentPosition": "中国证券投资者保护基金公司党委书记、董事长",
    "currentRank": "正厅局级",
    "bioSummary": "清华大学MBA。曾任华夏证券、中信建投证券高管、北京国有资本经营管理中心总经理、北京农商行副董事长，2020年出任中国证券投资者保护基金公司董事长。",
    "education": [
      {
        "degree": "学士",
        "school": "山东大学",
        "major": "经济学",
        "graduationYear": 1989
      },
      {
        "degree": "硕士",
        "school": "中央财经大学",
        "major": "金融学",
        "graduationYear": 1995
      }
    ],
    "careerHistory": [
      {
        "id": "yry-1",
        "unitId": "csrc-jg",
        "unitName": "中国证监会机关",
        "department": "北京市金融国资 / 券商高管",
        "position": "华夏证券董事长助理、中信建投证券副总裁",
        "rank": "副厅局级",
        "startYear": 2002,
        "startMonth": 6,
        "endYear": 2010,
        "endMonth": 4,
        "isDerived": true,
        "sourceNote": "根据券商高管名录及金融机构任职履历推导",
        "notes": "深耕证券公司经营管理与投资银行业务"
      },
      {
        "id": "yry-2",
        "unitId": "csrc-jg",
        "unitName": "中国证监会机关",
        "department": "北京国有资本经营管理中心 / 农商行",
        "position": "北京国管中心总经理、北京农商行副董事长",
        "rank": "正厅局级",
        "startYear": 2010,
        "startMonth": 4,
        "endYear": 2020,
        "endMonth": 6,
        "isDerived": false,
        "notes": "主持北京市重大国有资本运作与战略性金融股权管理"
      },
      {
        "id": "yry-3",
        "unitId": "csrc-sipf",
        "unitName": "中国证券投资者保护基金",
        "department": "领导班子",
        "position": "党委书记、董事长",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 6,
        "endYear": null,
        "endMonth": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "全面领导投保基金公司，推动投资者合法权益保障与券商流动性监测机制完善"
      }
    ],
    "avatarUrl": "/avatars/yin-rongyan.svg"
  },
  {
    "id": "he-yanchun",
    "name": "何艳春",
    "gender": "男",
    "birthYear": 1969,
    "birthMonth": 2,
    "nativePlace": "四川",
    "currentUnitId": "csrc-amac",
    "currentPosition": "中国证券投资基金业协会党委书记、会长",
    "currentRank": "正厅局级",
    "bioSummary": "法学学士。历任证监会法律部处长、稽查局副局长、行政处罚委办公室主任，2020年6月起执掌中国证券投资基金业协会，领导全国公私募基金行业自律管理。",
    "education": [
      {
        "degree": "学士",
        "school": "华东政法大学",
        "major": "法学",
        "graduationYear": 1991
      }
    ],
    "careerHistory": [
      {
        "id": "hyc-1",
        "unitId": "csrc-fl",
        "unitName": "证监会法律部",
        "position": "副处长、处长",
        "rank": "正处级",
        "startYear": 2002,
        "startMonth": 5,
        "endYear": 2015,
        "endMonth": 8,
        "notes": "负责证券期货行政处罚法律适用审查",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "hyc-2",
        "unitId": "csrc-jc",
        "unitName": "证监会稽查局 / 处罚委",
        "position": "副局长、行政处罚委办主任",
        "rank": "正厅局级",
        "startYear": 2015,
        "startMonth": 8,
        "endYear": 2020,
        "endMonth": 6,
        "notes": "查处数十起资本市场重大违法大要案",
        "isDerived": false
      },
      {
        "id": "hyc-3",
        "unitId": "csrc-amac",
        "unitName": "中国证券投资基金业协会",
        "position": "党委书记、会长",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 6,
        "endYear": null,
        "isCurrent": true,
        "notes": "全面主持中基协工作，出台私募基金登记备案新规，扶优限劣",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/he-yanchun.svg"
  },
  {
    "id": "lu-wendao",
    "name": "卢文道",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 12,
    "nativePlace": "浙江",
    "currentUnitId": "csrc-isc",
    "currentPosition": "中证中小投资者服务中心总经理、法定代表人",
    "currentRank": "正厅局级",
    "bioSummary": "法学博士。深耕资本市场自律管理与法律实务，曾任上海证券交易所法律事务部总监、首席律师，现任中证中小投资者服务中心党委副书记、总经理。",
    "education": [
      {
        "degree": "学士",
        "school": "华东政法大学",
        "major": "法学",
        "graduationYear": 1990
      },
      {
        "degree": "博士",
        "school": "华东政法大学",
        "major": "国际法学",
        "graduationYear": 2001
      }
    ],
    "careerHistory": [
      {
        "id": "lwd-1",
        "unitId": "csrc-sse",
        "unitName": "上海证券交易所",
        "position": "法律事务部总监",
        "rank": "正处级",
        "startYear": 2000,
        "startMonth": 6,
        "endYear": 2016,
        "endMonth": 4,
        "notes": "主持交易所自律管理法律制度构建与纪律处分规则起草",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "lwd-2",
        "unitId": "csrc-isc",
        "unitName": "中证中小投资者服务中心",
        "position": "党委副书记、总经理",
        "rank": "正厅局级",
        "startYear": 2016,
        "startMonth": 4,
        "endYear": null,
        "isCurrent": true,
        "notes": "主持投服中心日常经营，代理发起康美药业全国首例证券特别代表人诉讼",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/lu-wendao.svg"
  },
  {
    "id": "yan-bojin",
    "name": "严伯进",
    "gender": "男",
    "birthYear": 1971,
    "birthMonth": 6,
    "nativePlace": "浙江",
    "currentUnitId": "csrc-fx",
    "currentPosition": "中国证监会首席风险官兼发行监管司司长",
    "currentRank": "正厅局级",
    "bioSummary": "经济学硕士。长期深耕股票发行上市审核与监管一线，曾任证监会发行监管部处长、副主任、主任，现任证监会首席风险官兼发行监管司司长。",
    "education": [
      {
        "degree": "学士",
        "school": "对外经济贸易大学",
        "major": "国际金融",
        "graduationYear": 1993
      },
      {
        "degree": "硕士",
        "school": "财政部财政科学研究所",
        "major": "财政学",
        "graduationYear": 2001
      }
    ],
    "careerHistory": [
      {
        "id": "ybj-1",
        "unitId": "csrc-fx",
        "unitName": "证监会发行监管部",
        "position": "审核处长、副主任",
        "rank": "副厅局级",
        "startYear": 2004,
        "startMonth": 3,
        "endYear": 2019,
        "endMonth": 6,
        "notes": "负责首发企业财务合规审核及拟上市企业现场抽查",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "ybj-2",
        "unitId": "csrc-fx",
        "unitName": "证监会发行监管司",
        "position": "主任（司长）兼首席风险官",
        "rank": "正厅局级",
        "startYear": 2019,
        "startMonth": 6,
        "endYear": null,
        "isCurrent": true,
        "notes": "严把IPO准入关，杜绝企业“带病闯关”，从源头上提升上市公司可投性与质量",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/yan-bojin.svg"
  },
  {
    "id": "guo-ruiming",
    "name": "郭瑞明",
    "gender": "男",
    "birthYear": 1972,
    "birthMonth": 8,
    "nativePlace": "河北",
    "currentUnitId": "csrc-ss",
    "currentPosition": "中国证监会上市公司监管司司长",
    "currentRank": "正厅局级",
    "bioSummary": "管理学硕士。长期主持上市公司日常监管与制度建设，历任证监会上市公司监管部副主任、主任，现任上市公司监管司司长。",
    "education": [
      {
        "degree": "学士",
        "school": "北京大学",
        "major": "经济学",
        "graduationYear": 1994
      },
      {
        "degree": "硕士",
        "school": "清华大学经济管理学院",
        "major": "工商管理",
        "graduationYear": 2001
      }
    ],
    "careerHistory": [
      {
        "id": "grm-1",
        "unitId": "csrc-ss",
        "unitName": "证监会上市公司监管部",
        "position": "监管处长、副主任",
        "rank": "副厅局级",
        "startYear": 2005,
        "startMonth": 7,
        "endYear": 2018,
        "endMonth": 9,
        "notes": "负责沪深上市公司财务报告披露持续监管",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "grm-2",
        "unitId": "csrc-ss",
        "unitName": "证监会上市公司监管司",
        "position": "司长",
        "rank": "正厅局级",
        "startYear": 2018,
        "startMonth": 9,
        "endYear": null,
        "isCurrent": true,
        "notes": "主导精准出清退市制度、强制现金分红规则与打击资金占用违规担保",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/guo-ruiming.svg"
  },
  {
    "id": "shen-bing",
    "name": "申兵",
    "gender": "男",
    "birthYear": 1970,
    "birthMonth": 7,
    "nativePlace": "北京",
    "currentUnitId": "csrc-gj",
    "currentPosition": "中国证监会国际合作司司长",
    "currentRank": "正厅局级",
    "bioSummary": "经济学硕士。历任证监会国际合作部处长、副主任、主任、证券基金机构监管司司长，2025年8月调任国际合作司司长，统筹境内企业境外上市与跨境监管协作。",
    "education": [
      {
        "degree": "学士",
        "school": "对外经济贸易大学",
        "major": "国际贸易",
        "graduationYear": 1992
      },
      {
        "degree": "硕士",
        "school": "中国人民大学",
        "major": "金融学",
        "graduationYear": 1999
      }
    ],
    "careerHistory": [
      {
        "id": "sb-1",
        "unitId": "csrc-gj",
        "unitName": "证监会国际合作部",
        "position": "处长、副主任、主任",
        "rank": "正厅局级",
        "startYear": 2003,
        "startMonth": 4,
        "endYear": 2018,
        "endMonth": 8,
        "notes": "主持沪港通、深港通开通跨境联合监管协议签署与双向开放",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "sb-2",
        "unitId": "csrc-jg",
        "unitName": "证监会证券基金机构监管司",
        "position": "司长",
        "rank": "正厅局级",
        "startYear": 2018,
        "startMonth": 8,
        "endYear": 2025,
        "endMonth": 8,
        "notes": "推动合资券商外资股比限制全面取消，外资独资公募基金落地展业",
        "isDerived": false
      },
      {
        "id": "sb-3",
        "unitId": "csrc-gj",
        "unitName": "证监会国际合作司",
        "position": "司长",
        "rank": "正厅局级",
        "startYear": 2025,
        "startMonth": 8,
        "endYear": null,
        "isCurrent": true,
        "notes": "深化高水平制度型对外开放，优化中资企业赴美赴港上市常态化备案",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/shen-bing.svg"
  },
  {
    "id": "zhang-wangjun",
    "name": "张望军",
    "gender": "男",
    "birthYear": 1975,
    "birthMonth": 8,
    "nativePlace": "山东",
    "currentUnitId": "csrc-bgt",
    "currentPosition": "中国证监会办公厅主任兼新闻发言人",
    "currentRank": "正厅局级",
    "bioSummary": "中国人民大学经济学博士。历任证监会办公厅、市场部处长、中证金融研究院党委书记兼院长、市场监管一司司长，现任中国证监会办公厅主任兼新闻发言人。",
    "education": [
      {
        "degree": "学士",
        "school": "中国人民大学",
        "major": "经济学",
        "graduationYear": 1997
      },
      {
        "degree": "博士",
        "school": "中国人民大学劳动人事学院",
        "major": "经济学",
        "graduationYear": 2004
      }
    ],
    "careerHistory": [
      {
        "id": "zwj-1",
        "unitId": "csrc-bgt",
        "unitName": "证监会办公厅 / 市场监管部",
        "position": "副处长、处长",
        "rank": "正处级",
        "startYear": 2004,
        "startMonth": 6,
        "endYear": 2015,
        "endMonth": 4,
        "notes": "参与起草资本市场战略改革方案及重大文电起草",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "zwj-2",
        "unitId": "csrc-cfr",
        "unitName": "中证金融研究院",
        "position": "党委书记、院长",
        "rank": "正厅局级",
        "startYear": 2015,
        "startMonth": 4,
        "endYear": 2019,
        "endMonth": 10,
        "notes": "领导国家级资本市场智库建设，承担宏观金融审慎决策咨询",
        "isDerived": false
      },
      {
        "id": "zwj-3",
        "unitId": "csrc-sc1",
        "unitName": "证监会市场监管一司",
        "position": "司长",
        "rank": "正厅局级",
        "startYear": 2019,
        "startMonth": 10,
        "endYear": 2024,
        "endMonth": 6,
        "notes": "主持交易所交易组织监测，规范程序化交易与量化高频交易规则体系",
        "isDerived": false
      },
      {
        "id": "zwj-4",
        "unitId": "csrc-bgt",
        "unitName": "证监会办公厅",
        "position": "主任兼新闻发言人",
        "rank": "正厅局级",
        "startYear": 2024,
        "startMonth": 6,
        "endYear": null,
        "isCurrent": true,
        "notes": "主持证监会办公厅日常运转、政务公开与资本市场新闻发布权威发声",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/zhang-wangjun.svg"
  },
  {
    "id": "li-zhibin",
    "name": "李至斌",
    "gender": "男",
    "birthYear": 1969,
    "birthMonth": 8,
    "nativePlace": "湖南",
    "currentUnitId": "csrc-qh",
    "currentPosition": "中国证监会期货监管司司长",
    "currentRank": "正厅局级",
    "bioSummary": "法学硕士。历任中国证监会打击非法证券期货活动局局长、深圳证监局党委书记兼局长、深圳稽查局局长，2024年1月出任期货监管司司长。",
    "education": [
      {
        "degree": "学士",
        "school": "西南政法大学",
        "major": "法学",
        "graduationYear": 1991
      },
      {
        "degree": "硕士",
        "school": "北京大学",
        "major": "法律硕士",
        "graduationYear": 2002
      }
    ],
    "careerHistory": [
      {
        "id": "lzb-1",
        "unitId": "csrc-main",
        "unitName": "证监会打击非法证券期货活动局",
        "position": "副局长、局长",
        "rank": "正厅局级",
        "startYear": 2005,
        "startMonth": 7,
        "endYear": 2018,
        "endMonth": 6,
        "notes": "牵头全国清理整顿各类交易场所部际联席会议办公室日常工作",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "lzb-2",
        "unitId": "csrc-sz",
        "unitName": "深圳证监局",
        "position": "党委书记、局长兼深圳稽查局局长",
        "rank": "正厅局级",
        "startYear": 2018,
        "startMonth": 6,
        "endYear": 2024,
        "endMonth": 1,
        "notes": "全面领导深圳特区上市公司与经营机构属地监管与一线查办",
        "isDerived": false
      },
      {
        "id": "lzb-3",
        "unitId": "csrc-qh",
        "unitName": "证监会期货监管司",
        "position": "司长",
        "rank": "正厅局级",
        "startYear": 2024,
        "startMonth": 1,
        "endYear": null,
        "isCurrent": true,
        "notes": "统揽全国商品与金融期货市场监管，严控大宗商品过度投机与市场操纵",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/li-zhibin.svg"
  },
  {
    "id": "jia-wenqin",
    "name": "贾文勤",
    "gender": "女",
    "birthYear": 1965,
    "birthMonth": 8,
    "nativePlace": "陕西",
    "currentUnitId": "csrc-bj",
    "currentPosition": "北京证监局党委书记、局长",
    "currentRank": "正厅局级",
    "bioSummary": "管理学硕士，资深注册会计师。中国证监会系统资深财务与会计专家，长期执掌证监会会计部，历任首席会计师，2019年5月起主持北京证监局全面工作。",
    "education": [
      {
        "degree": "学士",
        "school": "中央财政金融学院（现中央财经大学）",
        "major": "会计学",
        "graduationYear": 1987
      },
      {
        "degree": "硕士",
        "school": "中国财政科学研究院",
        "major": "会计学",
        "graduationYear": 1999
      }
    ],
    "careerHistory": [
      {
        "id": "jwq-1",
        "unitId": "csrc-main",
        "unitName": "证监会会计部",
        "position": "副处长、处长、副主任",
        "rank": "副厅局级",
        "startYear": 2000,
        "startMonth": 1,
        "endYear": 2010,
        "endMonth": 10,
        "notes": "构建中国资本市场会计信息披露准则与审计监管框架",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "jwq-2",
        "unitId": "csrc-main",
        "unitName": "证监会会计部",
        "position": "主任、首席会计师",
        "rank": "正厅局级",
        "startYear": 2010,
        "startMonth": 10,
        "endYear": 2019,
        "endMonth": 5,
        "notes": "全面主导资本市场会计信息质量监管及重大会计舞弊定性",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "jwq-3",
        "unitId": "csrc-bj",
        "unitName": "北京证监局",
        "position": "党委书记、局长",
        "rank": "正厅局级",
        "startYear": 2019,
        "startMonth": 5,
        "endYear": null,
        "isCurrent": true,
        "notes": "全面主持北京辖区证券期货市场与拟上市企业一线属地监管",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/jia-wenqin.svg"
  },
  {
    "id": "yang-zongru",
    "name": "杨宗儒",
    "gender": "男",
    "birthYear": 1967,
    "birthMonth": 6,
    "nativePlace": "湖南",
    "currentUnitId": "csrc-gd",
    "currentPosition": "广东证监局党委书记、局长兼广州稽查局局长",
    "currentRank": "正厅局级",
    "bioSummary": "经济学硕士，第十四届全国政协委员。长期在证监会稽查系统工作，曾任稽查局副局长，2018年起出任广东证监局局长兼广州稽查局局长。",
    "education": [
      {
        "degree": "学士",
        "school": "湖南大学",
        "major": "经济学",
        "graduationYear": 1989
      },
      {
        "degree": "硕士",
        "school": "中南财经政法大学",
        "major": "经济学",
        "graduationYear": 1996
      }
    ],
    "careerHistory": [
      {
        "id": "yzr-1",
        "unitId": "csrc-jc",
        "unitName": "证监会稽查局",
        "position": "副处长、处长、副局长",
        "rank": "副厅局级",
        "startYear": 2002,
        "startMonth": 5,
        "endYear": 2018,
        "endMonth": 8,
        "notes": "督办组织查办全国多起恶性跨区域证券违规犯罪",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "yzr-2",
        "unitId": "csrc-gd",
        "unitName": "广东证监局",
        "position": "党委书记、局长兼广州稽查局局长",
        "rank": "正厅局级",
        "startYear": 2018,
        "startMonth": 8,
        "endYear": null,
        "isCurrent": true,
        "notes": "统揽广东辖区证券期货全面监管，服务实体经济与大湾区资本市场繁荣",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/yang-zongru.svg"
  },
  {
    "id": "tang-libin",
    "name": "唐理斌",
    "gender": "男",
    "birthYear": 1970,
    "birthMonth": 10,
    "nativePlace": "四川",
    "currentUnitId": "csrc-js",
    "currentPosition": "江苏证监局党委书记、局长",
    "currentRank": "正厅局级",
    "bioSummary": "经济学硕士。历任安徽证监局副局长、山东证监局副局长、江西证监局局长、四川证监局局长兼成都稽查局局长，2024年8月调任江苏证监局局长。",
    "education": [
      {
        "degree": "学士",
        "school": "西南财经大学",
        "major": "金融学",
        "graduationYear": 1992
      },
      {
        "degree": "硕士",
        "school": "西南财经大学",
        "major": "经济学",
        "graduationYear": 1998
      }
    ],
    "careerHistory": [
      {
        "id": "tlb-1",
        "unitId": "csrc-main",
        "unitName": "安徽证监局 / 山东证监局",
        "position": "副局长、党委委员",
        "rank": "副厅局级",
        "startYear": 2004,
        "startMonth": 3,
        "endYear": 2016,
        "endMonth": 5,
        "notes": "分管地方上市公司与证券分支机构一线检查",
        "isDerived": true,
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
      },
      {
        "id": "tlb-2",
        "unitId": "csrc-main",
        "unitName": "江西证监局",
        "position": "党委书记、局长",
        "rank": "正厅局级",
        "startYear": 2016,
        "startMonth": 5,
        "endYear": 2020,
        "endMonth": 7,
        "notes": "主持江西辖区证券期货日常监督与防范金融风险",
        "isDerived": false
      },
      {
        "id": "tlb-3",
        "unitId": "csrc-sc",
        "unitName": "四川证监局",
        "position": "党委书记、局长兼成都稽查局局长",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 7,
        "endYear": 2024,
        "endMonth": 8,
        "notes": "主持成渝双城经济圈核心省份一线监管与稽查大案办理",
        "isDerived": false
      },
      {
        "id": "tlb-4",
        "unitId": "csrc-js",
        "unitName": "江苏证监局",
        "position": "党委书记、局长",
        "rank": "正厅局级",
        "startYear": 2024,
        "startMonth": 8,
        "endYear": null,
        "isCurrent": true,
        "notes": "全面主政全国上市公司第二大省江苏资本市场稳健发展与合规治理",
        "isDerived": false
      }
    ],
    "avatarUrl": "/avatars/tang-libin.svg"
  },
  {
    "id": "chen-fei",
    "name": "陈飞",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 5,
    "nativePlace": "山东",
    "currentUnitId": "csrc-csf",
    "currentPosition": "中国证券金融股份有限公司党委书记、董事长",
    "currentRank": "正厅局级",
    "bioSummary": "长期在证券监管与金融系统任职。2022年2月出任中国证券金融股份有限公司党委书记、董事长。",
    "education": [
      {
        "degree": "学士",
        "school": "山东大学",
        "major": "经济学",
        "graduationYear": 1990
      },
      {
        "degree": "硕士",
        "school": "清华大学五道口金融学院",
        "major": "金融学",
        "graduationYear": 1995
      }
    ],
    "careerHistory": [
      {
        "id": "cf-1",
        "unitId": "csrc-jg",
        "unitName": "中国证监会机关",
        "department": "综合监管部门",
        "position": "副处长、处长、副主任",
        "rank": "副厅局级",
        "startYear": 2005,
        "startMonth": 6,
        "endYear": 2022,
        "endMonth": 2,
        "isDerived": true,
        "sourceNote": "根据金融监管系统干部历次任免与活动公开报道反推",
        "notes": "参与资本市场稳健运行制度设计与重大风险监测防范"
      },
      {
        "id": "cf-2",
        "unitId": "csrc-csf",
        "unitName": "中国证券金融股份有限公司",
        "department": "董事会",
        "position": "党委书记、董事长",
        "rank": "正厅局级",
        "startYear": 2022,
        "startMonth": 2,
        "endYear": null,
        "endMonth": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "全面领导中证金融党委与董事会工作，加强转融通逆周期调控与全市场两融风险监控"
      }
    ],
    "avatarUrl": "/avatars/chen-fei.svg"
  },
  {
    "id": "wu-xiaoyong",
    "name": "吴孝勇",
    "gender": "男",
    "birthYear": 1971,
    "birthMonth": 9,
    "nativePlace": "湖北",
    "currentUnitId": "csrc-csf",
    "currentPosition": "中国证券金融股份有限公司党委副书记、总经理",
    "currentRank": "正厅局级",
    "bioSummary": "曾任中国证监会机构监管部处长，深度参与中证金融筹备设立与转融通制度构建，现任中证金融总经理、副董事长。",
    "education": [
      {
        "degree": "学士",
        "school": "武汉大学",
        "major": "经济学",
        "graduationYear": 1993
      },
      {
        "degree": "硕士",
        "school": "中国人民大学",
        "major": "财政金融",
        "graduationYear": 1996
      }
    ],
    "careerHistory": [
      {
        "id": "wxy-1",
        "unitId": "csrc-jg",
        "unitName": "中国证监会机关",
        "department": "机构监管部",
        "position": "副处长、处长",
        "rank": "正处级",
        "startYear": 2002,
        "startMonth": 3,
        "endYear": 2011,
        "endMonth": 10,
        "isDerived": true,
        "sourceNote": "根据证券公司融资融券业务试点审批及监管规章公开报道反推",
        "notes": "主管证券公司业务创新与融资融券试点业务规范"
      },
      {
        "id": "wxy-2",
        "unitId": "csrc-csf",
        "unitName": "中国证券金融股份有限公司",
        "department": "筹备组 / 领导班子",
        "position": "筹备组成员、党委委员、副总经理",
        "rank": "副厅局级",
        "startYear": 2011,
        "startMonth": 10,
        "endYear": 2020,
        "endMonth": 8,
        "isDerived": true,
        "sourceNote": "根据中证金融设立筹备历程及金融标准化成果推导",
        "notes": "主导设计转融通业务系统流程并牵头多项资本市场国家与行业数据标准制定"
      },
      {
        "id": "wxy-3",
        "unitId": "csrc-csf",
        "unitName": "中国证券金融股份有限公司",
        "department": "经营管理层",
        "position": "党委副书记、副董事长、总经理",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 8,
        "endYear": null,
        "endMonth": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "主持中证金融日常经营管理，主导证券金融大数据统计分析平台开发建设"
      }
    ],
    "avatarUrl": "/avatars/wu-xiaoyong.svg"
  }
];

export const OFFICIAL_COLORS = [
  {
    "id": "wu-qing",
    "name": "吴清",
    "primary": "#0071e3",
    "border": "#0071e3",
    "bg": "#0071e320",
    "badgeBg": "bg-blue-500",
    "text": "text-gray-900",
    "ring": "ring-[#0071e3]"
  },
  {
    "id": "li-ming",
    "name": "李明",
    "primary": "#af52de",
    "border": "#af52de",
    "bg": "#af52de20",
    "badgeBg": "bg-purple-500",
    "text": "text-gray-900",
    "ring": "ring-[#af52de]"
  },
  {
    "id": "chen-huaping",
    "name": "陈华平",
    "primary": "#ff2d55",
    "border": "#ff2d55",
    "bg": "#ff2d5520",
    "badgeBg": "bg-pink-500",
    "text": "text-gray-900",
    "ring": "ring-[#ff2d55]"
  },
  {
    "id": "wang-jianjun",
    "name": "王建军",
    "primary": "#34c759",
    "border": "#34c759",
    "bg": "#34c75920",
    "badgeBg": "bg-emerald-500",
    "text": "text-gray-900",
    "ring": "ring-[#34c759]"
  },
  {
    "id": "fan-dazhi",
    "name": "樊大志",
    "primary": "#ff9500",
    "border": "#ff9500",
    "bg": "#ff950020",
    "badgeBg": "bg-amber-500",
    "text": "text-gray-900",
    "ring": "ring-[#ff9500]"
  },
  {
    "id": "jiao-jinhong",
    "name": "焦津洪",
    "primary": "#5856d6",
    "border": "#5856d6",
    "bg": "#5856d620",
    "badgeBg": "bg-indigo-500",
    "text": "text-gray-900",
    "ring": "ring-[#5856d6]"
  },
  {
    "id": "cheng-hehong",
    "name": "程合红",
    "primary": "#00c7be",
    "border": "#00c7be",
    "bg": "#00c7be20",
    "badgeBg": "bg-teal-500",
    "text": "text-gray-900",
    "ring": "ring-[#00c7be]"
  },
  {
    "id": "qiu-yong",
    "name": "邱勇",
    "primary": "#a2845e",
    "border": "#a2845e",
    "bg": "#a2845e20",
    "badgeBg": "bg-stone-500",
    "text": "text-gray-900",
    "ring": "ring-[#a2845e]"
  },
  {
    "id": "cai-jianchun",
    "name": "蔡建春",
    "primary": "#d63031",
    "border": "#d63031",
    "bg": "#d6303120",
    "badgeBg": "bg-red-500",
    "text": "text-gray-900",
    "ring": "ring-[#d63031]"
  },
  {
    "id": "huo-ruirong",
    "name": "霍瑞戎",
    "primary": "#0984e3",
    "border": "#0984e3",
    "bg": "#0984e320",
    "badgeBg": "bg-sky-500",
    "text": "text-gray-900",
    "ring": "ring-[#0984e3]"
  },
  {
    "id": "sha-yan",
    "name": "沙雁",
    "primary": "#00b894",
    "border": "#00b894",
    "bg": "#00b89420",
    "badgeBg": "bg-emerald-600",
    "text": "text-gray-900",
    "ring": "ring-[#00b894]"
  },
  {
    "id": "li-jizun",
    "name": "李继尊",
    "primary": "#f39c12",
    "border": "#f39c12",
    "bg": "#f39c1220",
    "badgeBg": "bg-orange-500",
    "text": "text-gray-900",
    "ring": "ring-[#f39c12]"
  },
  {
    "id": "peng-ming",
    "name": "彭明",
    "primary": "#e84393",
    "border": "#e84393",
    "bg": "#e8439320",
    "badgeBg": "bg-rose-500",
    "text": "text-gray-900",
    "ring": "ring-[#e84393]"
  },
  {
    "id": "zhou-guihua",
    "name": "周贵华",
    "primary": "#6c5ce7",
    "border": "#6c5ce7",
    "bg": "#6c5ce720",
    "badgeBg": "bg-violet-500",
    "text": "text-gray-900",
    "ring": "ring-[#6c5ce7]"
  },
  {
    "id": "sui-qiang",
    "name": "隋强",
    "primary": "#27ae60",
    "border": "#27ae60",
    "bg": "#27ae6020",
    "badgeBg": "bg-green-600",
    "text": "text-gray-900",
    "ring": "ring-[#27ae60]"
  },
  {
    "id": "tian-xiangyang",
    "name": "田向阳",
    "primary": "#e17055",
    "border": "#e17055",
    "bg": "#e1705520",
    "badgeBg": "bg-amber-600",
    "text": "text-gray-900",
    "ring": "ring-[#e17055]"
  },
  {
    "id": "lu-dongsheng",
    "name": "鲁东升",
    "primary": "#fdcb6e",
    "border": "#fdcb6e",
    "bg": "#fdcb6e20",
    "badgeBg": "bg-yellow-500",
    "text": "text-gray-900",
    "ring": "ring-[#fdcb6e]"
  },
  {
    "id": "wang-fenghai",
    "name": "王凤海",
    "primary": "#16a085",
    "border": "#16a085",
    "bg": "#16a08520",
    "badgeBg": "bg-teal-600",
    "text": "text-gray-900",
    "ring": "ring-[#16a085]"
  },
  {
    "id": "zhu-lihong",
    "name": "朱丽红",
    "primary": "#2980b9",
    "border": "#2980b9",
    "bg": "#2980b920",
    "badgeBg": "bg-blue-600",
    "text": "text-gray-900",
    "ring": "ring-[#2980b9]"
  },
  {
    "id": "xiong-jun",
    "name": "熊军",
    "primary": "#8e44ad",
    "border": "#8e44ad",
    "bg": "#8e44ad20",
    "badgeBg": "bg-purple-600",
    "text": "text-gray-900",
    "ring": "ring-[#8e44ad]"
  },
  {
    "id": "yan-shaoming",
    "name": "严绍明",
    "primary": "#2c3e50",
    "border": "#2c3e50",
    "bg": "#2c3e5020",
    "badgeBg": "bg-slate-600",
    "text": "text-gray-900",
    "ring": "ring-[#2c3e50]"
  },
  {
    "id": "he-qingwen",
    "name": "何庆文",
    "primary": "#f1c40f",
    "border": "#f1c40f",
    "bg": "#f1c40f20",
    "badgeBg": "bg-yellow-600",
    "text": "text-gray-900",
    "ring": "ring-[#f1c40f]"
  },
  {
    "id": "gao-weibing",
    "name": "高卫兵",
    "primary": "#e67e22",
    "border": "#e67e22",
    "bg": "#e67e2220",
    "badgeBg": "bg-orange-600",
    "text": "text-gray-900",
    "ring": "ring-[#e67e22]"
  },
  {
    "id": "xing-xiangfei",
    "name": "邢向飞",
    "primary": "#e74c3c",
    "border": "#e74c3c",
    "bg": "#e74c3c20",
    "badgeBg": "bg-red-600",
    "text": "text-gray-900",
    "ring": "ring-[#e74c3c]"
  },
  {
    "id": "yu-wenqiang",
    "name": "于文强",
    "primary": "#1abc9c",
    "border": "#1abc9c",
    "bg": "#1abc9c20",
    "badgeBg": "bg-cyan-600",
    "text": "text-gray-900",
    "ring": "ring-[#1abc9c]"
  },
  {
    "id": "kong-qingwen",
    "name": "孔庆文",
    "primary": "#34495e",
    "border": "#34495e",
    "bg": "#34495e20",
    "badgeBg": "bg-slate-700",
    "text": "text-gray-900",
    "ring": "ring-[#34495e]"
  },
  {
    "id": "lu-wenshan",
    "name": "陆文山",
    "primary": "#9b59b6",
    "border": "#9b59b6",
    "bg": "#9b59b620",
    "badgeBg": "bg-fuchsia-600",
    "text": "text-gray-900",
    "ring": "ring-[#9b59b6]"
  },
  {
    "id": "lu-dabiao",
    "name": "卢大彪",
    "primary": "#3498db",
    "border": "#3498db",
    "bg": "#3498db20",
    "badgeBg": "bg-sky-600",
    "text": "text-gray-900",
    "ring": "ring-[#3498db]"
  },
  {
    "id": "yin-rongyan",
    "name": "殷荣彦",
    "primary": "#95a5a6",
    "border": "#95a5a6",
    "bg": "#95a5a620",
    "badgeBg": "bg-gray-500",
    "text": "text-gray-900",
    "ring": "ring-[#95a5a6]"
  },
  {
    "id": "he-yanchun",
    "name": "何艳春",
    "primary": "#d35400",
    "border": "#d35400",
    "bg": "#d3540020",
    "badgeBg": "bg-amber-700",
    "text": "text-gray-900",
    "ring": "ring-[#d35400]"
  },
  {
    "id": "lu-wendao",
    "name": "卢文道",
    "primary": "#c0392b",
    "border": "#c0392b",
    "bg": "#c0392b20",
    "badgeBg": "bg-rose-600",
    "text": "text-gray-900",
    "ring": "ring-[#c0392b]"
  },
  {
    "id": "yan-bojin",
    "name": "严伯进",
    "primary": "#bdc3c7",
    "border": "#bdc3c7",
    "bg": "#bdc3c720",
    "badgeBg": "bg-gray-400",
    "text": "text-gray-900",
    "ring": "ring-[#bdc3c7]"
  },
  {
    "id": "guo-ruiming",
    "name": "郭瑞明",
    "primary": "#7f8c8d",
    "border": "#7f8c8d",
    "bg": "#7f8c8d20",
    "badgeBg": "bg-gray-600",
    "text": "text-gray-900",
    "ring": "ring-[#7f8c8d]"
  },
  {
    "id": "shen-bing",
    "name": "申兵",
    "primary": "#2ecc71",
    "border": "#2ecc71",
    "bg": "#2ecc7120",
    "badgeBg": "bg-green-500",
    "text": "text-gray-900",
    "ring": "ring-[#2ecc71]"
  },
  {
    "id": "zhang-wangjun",
    "name": "张望军",
    "primary": "#e056fd",
    "border": "#e056fd",
    "bg": "#e056fd20",
    "badgeBg": "bg-fuchsia-500",
    "text": "text-gray-900",
    "ring": "ring-[#e056fd]"
  },
  {
    "id": "li-zhibin",
    "name": "李至斌",
    "primary": "#686de0",
    "border": "#686de0",
    "bg": "#686de020",
    "badgeBg": "bg-indigo-600",
    "text": "text-gray-900",
    "ring": "ring-[#686de0]"
  },
  {
    "id": "jia-wenqin",
    "name": "贾文勤",
    "primary": "#30336b",
    "border": "#30336b",
    "bg": "#30336b20",
    "badgeBg": "bg-blue-800",
    "text": "text-gray-900",
    "ring": "ring-[#30336b]"
  },
  {
    "id": "yang-zongru",
    "name": "杨宗儒",
    "primary": "#130f40",
    "border": "#130f40",
    "bg": "#130f4020",
    "badgeBg": "bg-slate-900",
    "text": "text-gray-900",
    "ring": "ring-[#130f40]"
  },
  {
    "id": "tang-libin",
    "name": "唐理斌",
    "primary": "#4834d4",
    "border": "#4834d4",
    "bg": "#4834d420",
    "badgeBg": "bg-indigo-700",
    "text": "text-gray-900",
    "ring": "ring-[#4834d4]"
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
