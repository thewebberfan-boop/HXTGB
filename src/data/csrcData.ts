import { Official, Unit } from '../types';

export const UNITS_DATA: Unit[] = [
  {
    "id": "csrc-main",
    "tinyName": "会领导",
    "name": "中国证券监督管理委员会领导班子（会机关）",
    "shortName": "证监会会领导班子",
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
      "li-chao",
      "fan-dazhi",
      "chen-huaping",
      "li-ming",
      "liu-haoling"
    ],
    "tagColor": "blue",
    "topCategory": "csrc",
    "subCategory": "证监会机关与内设司局"
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
    "tagColor": "blue",
    "topCategory": "csrc",
    "subCategory": "证监会机关与内设司局"
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
    "tagColor": "blue",
    "topCategory": "csrc",
    "subCategory": "证监会机关与内设司局"
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
      "zhao-shanzhong"
    ],
    "tagColor": "blue",
    "topCategory": "csrc",
    "subCategory": "证监会机关与内设司局"
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
    "tagColor": "blue",
    "topCategory": "csrc",
    "subCategory": "证监会机关与内设司局"
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
    "tagColor": "blue",
    "currentLeaderIds": [
      "wang-guangxue"
    ],
    "topCategory": "csrc",
    "subCategory": "证监会机关与内设司局"
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
    "tagColor": "blue",
    "topCategory": "csrc",
    "subCategory": "证监会机关与内设司局"
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
      "bi-xiaoying"
    ],
    "tagColor": "blue",
    "topCategory": "csrc",
    "subCategory": "证监会机关与内设司局"
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
    "tagColor": "blue",
    "topCategory": "csrc",
    "subCategory": "证监会机关与内设司局"
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
    "tagColor": "blue",
    "topCategory": "csrc",
    "subCategory": "证监会机关与内设司局"
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
    "tagColor": "blue",
    "topCategory": "csrc",
    "subCategory": "证监会机关与内设司局"
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
    "tagColor": "blue",
    "currentLeaderIds": [
      "zhang-zhongning"
    ],
    "topCategory": "csrc",
    "subCategory": "证监会机关与内设司局"
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
    "tagColor": "red",
    "topCategory": "csrc",
    "subCategory": "证券交易所"
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
    "tagColor": "indigo",
    "topCategory": "csrc",
    "subCategory": "证券交易所"
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
    "tagColor": "emerald",
    "topCategory": "csrc",
    "subCategory": "证券交易所"
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
    "tagColor": "amber",
    "topCategory": "csrc",
    "subCategory": "期货交易所"
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
    "tagColor": "amber",
    "topCategory": "csrc",
    "subCategory": "期货交易所"
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
    "tagColor": "amber",
    "topCategory": "csrc",
    "subCategory": "期货交易所"
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
    "tagColor": "amber",
    "topCategory": "csrc",
    "subCategory": "期货交易所"
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
    "tagColor": "amber",
    "topCategory": "csrc",
    "subCategory": "期货交易所"
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
    "tagColor": "purple",
    "topCategory": "csrc",
    "subCategory": "会管企事业单位与行业协会"
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
    "tagColor": "purple",
    "topCategory": "csrc",
    "subCategory": "会管企事业单位与行业协会"
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
    "tagColor": "purple",
    "topCategory": "csrc",
    "subCategory": "会管企事业单位与行业协会"
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
    "tagColor": "purple",
    "topCategory": "csrc",
    "subCategory": "会管企事业单位与行业协会"
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
    "tagColor": "purple",
    "currentLeaderIds": [
      "jiang-feng"
    ],
    "topCategory": "csrc",
    "subCategory": "会管企事业单位与行业协会"
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
    "tagColor": "orange",
    "currentLeaderIds": [
      "mao-hansong"
    ],
    "topCategory": "csrc",
    "subCategory": "会管企事业单位与行业协会"
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
    "tagColor": "orange",
    "topCategory": "csrc",
    "subCategory": "会管企事业单位与行业协会"
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
    "tagColor": "emerald",
    "topCategory": "csrc",
    "subCategory": "会管企事业单位与行业协会"
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
    "tagColor": "emerald",
    "currentLeaderIds": [
      "wu-yunhao",
      "zhu-jian"
    ],
    "topCategory": "csrc",
    "subCategory": "会管企事业单位与行业协会"
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
      "ran-hua",
      "peng-jing",
      "hu-jingsheng"
    ],
    "tagColor": "teal",
    "topCategory": "csrc",
    "subCategory": "地方证监局派出机构"
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
    "tagColor": "teal",
    "currentLeaderIds": [
      "lin-lin",
      "wang-dengyong",
      "yang-yong"
    ],
    "topCategory": "csrc",
    "subCategory": "地方证监局派出机构"
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
    "tagColor": "teal",
    "topCategory": "csrc",
    "subCategory": "地方证监局派出机构"
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
    "tagColor": "teal",
    "topCategory": "csrc",
    "subCategory": "地方证监局派出机构"
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
    "tagColor": "teal",
    "topCategory": "csrc",
    "subCategory": "地方证监局派出机构"
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
    "tagColor": "teal",
    "currentLeaderIds": [
      "kuang-xiaofeng"
    ],
    "topCategory": "csrc",
    "subCategory": "地方证监局派出机构"
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
    "tagColor": "teal",
    "currentLeaderIds": [
      "qian-zongbao"
    ],
    "topCategory": "csrc",
    "subCategory": "地方证监局派出机构"
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
    "tagColor": "teal",
    "currentLeaderIds": [
      "tu-chubin"
    ],
    "topCategory": "csrc",
    "subCategory": "地方证监局派出机构"
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
    "tagColor": "slate",
    "currentLeaderIds": [
      "pan-gongsheng"
    ],
    "topCategory": "other",
    "subCategory": "央行系统与金融监管机构"
  },
  {
    "id": "csrc-fj",
    "name": "中国证券监督管理委员会福建监管局",
    "shortName": "福建证监局",
    "tinyName": "福建局",
    "category": "派出机构",
    "level": "正厅局级",
    "establishedYear": 1998,
    "description": "负责福建省（不含厦门）辖区内证券期货市场、上市公司及经营机构的一线日常监管与风险防范处置，正厅局级建制。",
    "mainDuties": [
      "监管福建辖区上市公司规范治理与信息披露持续合规",
      "监管辖区内证券公司、期货公司及私募基金合规风控",
      "依法查处辖区证券期货违法违规行为，维护地方金融稳定"
    ],
    "websiteUrl": "http://www.csrc.gov.cn/fujian/",
    "currentLeaderIds": [
      "li-yongchun"
    ],
    "tagColor": "teal",
    "topCategory": "csrc",
    "subCategory": "地方证监局派出机构"
  },
  {
    "id": "csrc-ah",
    "name": "中国证券监督管理委员会安徽监管局",
    "shortName": "安徽证监局",
    "tinyName": "安徽局",
    "category": "派出机构",
    "level": "正厅局级",
    "establishedYear": 1998,
    "description": "负责安徽省辖区内证券期货市场、上市公司及经营机构的一线日常监管与风险防范处置，正厅局级建制。",
    "mainDuties": [
      "监管安徽辖区上市公司规范治理与信息披露持续合规",
      "监管辖区内证券公司、期货公司及主要分支机构",
      "防范化解辖区资本市场金融风险，查处违法违规行为"
    ],
    "websiteUrl": "http://www.csrc.gov.cn/anhui/",
    "currentLeaderIds": [
      "lai-zhaohui"
    ],
    "tagColor": "teal",
    "topCategory": "csrc",
    "subCategory": "地方证监局派出机构"
  },
  {
    "id": "csrc-df",
    "name": "中国证券监督管理委员会各省市监管局（派出机构统合）",
    "shortName": "地方证监局",
    "tinyName": "地方证监局",
    "category": "派出机构",
    "level": "正厅局级",
    "establishedYear": 1998,
    "description": "中国证监会在全国各省、自治区、直辖市及计划单列市设立的36家派出机构，统筹负责各辖区内证券期货市场、上市公司及经营机构的一线日常属地穿透监管。",
    "mainDuties": [
      "负责辖区内上市公司持续合规监管、公司治理与信息披露抽查",
      "负责辖区内证券、基金、期货经营机构及私募机构一线合规风控",
      "依法查处辖区涉嫌违法违规证券期货行为，防范化解属地金融风险"
    ],
    "websiteUrl": "http://www.csrc.gov.cn",
    "currentLeaderIds": [
      "ran-hua",
      "lin-lin",
      "yang-zongru",
      "peng-ming",
      "tang-libin",
      "kuang-xiaofeng",
      "qian-zongbao",
      "tu-chubin",
      "li-yongchun",
      "lai-zhaohui"
    ],
    "tagColor": "teal",
    "topCategory": "csrc",
    "subCategory": "地方证监局派出机构"
  },
  {
    "id": "cbirc",
    "name": "国家金融监督管理总局（原中国银保监会/银监会）",
    "shortName": "金融监管总局/银保监会",
    "tinyName": "金融总局",
    "category": "行业自律组织",
    "topCategory": "other",
    "subCategory": "央行系统与金融监管机构",
    "level": "正部级",
    "establishedYear": 2023,
    "establishedDate": "2023-05-18",
    "description": "国家金融监督管理总局统一负责除证券业之外的金融业监管，强化机构监管、行为监管、功能监管、穿透式监管、持续监管，统筹负责金融消费者权益保护。",
    "mainDuties": [
      "依法对除证券业之外的金融业实行统一监督管理",
      "强化机构监管、行为监管、功能监管、穿透式监管、持续监管",
      "统筹负责金融消费者权益保护与处置非法集资防线"
    ],
    "websiteUrl": "https://www.cbirc.gov.cn",
    "address": "北京市西城区金融大街甲15号",
    "contactPhone": "010-66279113",
    "currentLeaderIds": []
  },
  {
    "id": "sasac-cic",
    "name": "国务院国资委与中央汇金/中投系统",
    "shortName": "国资委/中投汇金",
    "tinyName": "国资中投",
    "category": "会管单位/交易所",
    "topCategory": "other",
    "subCategory": "国资委与大型国有金融机构",
    "level": "正部级",
    "establishedYear": 2003,
    "establishedDate": "2003-03-24",
    "description": "国务院国有资产监督管理委员会代表国家履行国有资产出资人职责；中投公司与中央汇金代表国家依法对国有重点金融企业行使出资人权利和义务。",
    "mainDuties": [
      "依法对国有重要骨干企业与金融资产履行出资人职责",
      "指导推进国有企业改革重组与国有资本保值增值",
      "优化国有金融资本布局，维护国家金融稳定与主权安全"
    ],
    "websiteUrl": "http://www.sasac.gov.cn",
    "address": "北京市宣武门西大街26号",
    "contactPhone": "010-63191000",
    "currentLeaderIds": []
  },
  {
    "id": "gov-sh",
    "name": "上海市各级党政机关（市委市政府与虹口区）",
    "shortName": "上海市政府/虹口区",
    "tinyName": "上海市",
    "category": "会管单位/交易所",
    "topCategory": "other",
    "subCategory": "各级地方人民政府",
    "level": "正部级",
    "establishedYear": 1949,
    "description": "上海市人民政府系直辖市国家行政机关。机构涵盖直辖市委、市政府领导班子、市金融工委/金融办，以及下辖虹口区等区县各级党政领导班子。",
    "mainDuties": [
      "统筹领导直辖市经济社会综合发展与“五个中心”建设",
      "强化现代金融产业集聚与高水平制度型金融开放",
      "统筹推进区县基层治理创新与区域经济转型升级"
    ],
    "websiteUrl": "https://www.shanghai.gov.cn",
    "address": "上海市黄浦区人民大道200号",
    "contactPhone": "021-12345",
    "currentLeaderIds": []
  },
  {
    "id": "gov-js",
    "name": "江苏省人民政府与省辖南京市人民政府",
    "shortName": "江苏省/南京市政府",
    "tinyName": "江苏省",
    "category": "会管单位/交易所",
    "topCategory": "other",
    "subCategory": "各级地方人民政府",
    "level": "正部级",
    "establishedYear": 1952,
    "description": "江苏省人民政府为省级国家行政机关；南京市为江苏省省会、副省级市，南京市人民政府直接领导全市经济社会建设与现代金融产业发展。",
    "mainDuties": [
      "统筹领导全省经济高质量发展与制造强省建设",
      "行使省会副省级城市政府领导职能与城市综合治理",
      "推动省市协同与长三角一体化金融创新示范"
    ],
    "websiteUrl": "https://www.jiangsu.gov.cn",
    "address": "江苏省南京市鼓楼区北京西路68号",
    "contactPhone": "025-12345",
    "currentLeaderIds": []
  },
  {
    "id": "gov-gd",
    "name": "广东省人民政府与副省级深圳市人民政府",
    "shortName": "广东省/深圳市政府",
    "tinyName": "广东省",
    "category": "会管单位/交易所",
    "topCategory": "other",
    "subCategory": "各级地方人民政府",
    "level": "正部级",
    "establishedYear": 1949,
    "description": "广东省人民政府为省级国家行政机关；深圳市为副省级计划单列市、经济特区，深圳市人民政府主导先行示范区与特区资本市场创新发展。",
    "mainDuties": [
      "统筹推进全省经济大省挑大梁与粤港澳大湾区建设",
      "行使副省级计划单列市与经济特区政府领导职能",
      "深化深港金融市场互联互通与特区制度创新"
    ],
    "websiteUrl": "https://www.gd.gov.cn",
    "address": "广东省广州市越秀区东风中路305号",
    "contactPhone": "020-12345",
    "currentLeaderIds": []
  },
  {
    "id": "gov-sd",
    "name": "山东省人民政府",
    "shortName": "山东省政府",
    "tinyName": "山东省",
    "category": "会管单位/交易所",
    "topCategory": "other",
    "subCategory": "各级地方人民政府",
    "level": "正部级",
    "establishedYear": 1949,
    "description": "山东省人民政府为省级国家行政机关，领导全省经济文化强省建设与新旧动能转换。",
    "mainDuties": [
      "全面领导全省行政工作与重大经济金融决策",
      "统筹推进新旧动能转换综合试验区建设",
      "深化地方金融体制改革与金融风险防控"
    ],
    "websiteUrl": "http://www.shandong.gov.cn",
    "address": "山东省济南市省府前街1号",
    "contactPhone": "0531-12345",
    "currentLeaderIds": []
  },
  {
    "id": "gov-tj",
    "name": "天津市人民政府",
    "shortName": "天津市政府",
    "tinyName": "天津市",
    "category": "会管单位/交易所",
    "topCategory": "other",
    "subCategory": "各级地方人民政府",
    "level": "正部级",
    "establishedYear": 1949,
    "description": "天津市人民政府为直辖市国家行政机关，领导全市推进京津冀协同发展与北方国际航运核心区建设。",
    "mainDuties": [
      "全面领导直辖市各级行政机关与经济金融规划",
      "深入推进京津冀协同发展国家战略落地",
      "深化国家租赁创新示范区与金融创新运营示范区建设"
    ],
    "websiteUrl": "https://www.tj.gov.cn",
    "address": "天津市河西区友谊路30号",
    "contactPhone": "022-12345",
    "currentLeaderIds": []
  },
  {
    "id": "gov-sh-prov",
    "name": "上海市委 / 上海市人民政府及市金融办",
    "shortName": "上海市委/市政府",
    "tinyName": "上海市委/市政府",
    "category": "会管单位/交易所",
    "topCategory": "other",
    "subCategory": "各级地方人民政府",
    "level": "正部级",
    "establishedYear": 1949,
    "description": "上海市委与市人民政府系直辖市最高国家行政机关。机构涵盖直辖市委、市政府领导班子、市委金融办及原市金融服务办，主导上海国际金融中心高水平制度型开放。",
    "mainDuties": [
      "统筹领导直辖市经济社会综合发展与“五个中心”核心功能建设",
      "强化现代金融产业集聚、资本要素流动与涉外金融制度创新",
      "统筹推进直辖市各区县基层综合治理与区域高质量发展"
    ],
    "websiteUrl": "https://www.shanghai.gov.cn",
    "address": "上海市黄浦区人民大道200号",
    "contactPhone": "021-12345",
    "currentLeaderIds": []
  },
  {
    "id": "gov-sh-dist",
    "name": "上海市虹口区委 / 区人民政府",
    "shortName": "上海虹口区委/区政府",
    "tinyName": "虹口区",
    "category": "会管单位/交易所",
    "topCategory": "other",
    "subCategory": "各级地方人民政府",
    "level": "正厅局级",
    "establishedYear": 1949,
    "description": "上海市虹口区委与区人民政府系上海市中心城区党政领导机关，为北外滩新时代现代服务业与航运金融创新高地。",
    "mainDuties": [
      "统筹领导虹口区全域经济发展、产业引育与城市更新治理",
      "重点打造北外滩金融与财富管理总部集聚区",
      "优化区域营商环境与基层党建治理创新"
    ],
    "websiteUrl": "https://www.shhk.gov.cn",
    "address": "上海市虹口区飞虹路518号",
    "contactPhone": "021-25658888",
    "currentLeaderIds": []
  },
  {
    "id": "gov-js-prov",
    "name": "江苏省人民政府",
    "shortName": "江苏省政府",
    "tinyName": "江苏省政府",
    "category": "会管单位/交易所",
    "topCategory": "other",
    "subCategory": "各级地方人民政府",
    "level": "正部级",
    "establishedYear": 1952,
    "description": "江苏省人民政府为省级国家行政机关，领导全省经济高质量发展与实体制造强省建设。",
    "mainDuties": [
      "统筹推进全省经济稳增长与先进制造业集群发展",
      "推进长三角一体化战略落地与区域金融协同改革",
      "防范化解地方债务风险与构建现代金融治理体系"
    ],
    "websiteUrl": "https://www.jiangsu.gov.cn",
    "address": "江苏省南京市鼓楼区北京西路68号",
    "contactPhone": "025-12345",
    "currentLeaderIds": []
  },
  {
    "id": "gov-js-city",
    "name": "南京市人民政府（副省级省会城市）",
    "shortName": "南京市政府",
    "tinyName": "南京市政府",
    "category": "会管单位/交易所",
    "topCategory": "other",
    "subCategory": "各级地方人民政府",
    "level": "副部级",
    "establishedYear": 1949,
    "description": "南京市为江苏省省会、副省级城市，南京市人民政府直接领导全市经济社会建设与区域科创金融改革试验。",
    "mainDuties": [
      "行使省会副省级城市政府经济社会与行政管理法定职责",
      "统筹推进重要金融中心建设与战略新兴产业投融资",
      "完善区域资本市场服务体系与培育拟上市企业梯队"
    ],
    "websiteUrl": "https://www.nanjing.gov.cn",
    "address": "江苏省南京市玄武区北京东路41号",
    "contactPhone": "025-12345",
    "currentLeaderIds": []
  },
  {
    "id": "gov-gd-prov",
    "name": "广东省人民政府",
    "shortName": "广东省政府",
    "tinyName": "广东省政府",
    "category": "会管单位/交易所",
    "topCategory": "other",
    "subCategory": "各级地方人民政府",
    "level": "正部级",
    "establishedYear": 1949,
    "description": "广东省人民政府为省级国家行政机关，统筹推进全省经济大省挑大梁与粤港澳大湾区战略实体建设。",
    "mainDuties": [
      "统筹推进全省现代产业体系构建与科技创新自立自强",
      "深化粤港澳大湾区金融规则衔接与金融要素双向流动",
      "保障全省金融安全稳定与实体经济高质量投融资"
    ],
    "websiteUrl": "https://www.gd.gov.cn",
    "address": "广东省广州市越秀区东风中路305号",
    "contactPhone": "020-12345",
    "currentLeaderIds": []
  },
  {
    "id": "gov-gd-city",
    "name": "深圳市人民政府（副省级计划单列市）",
    "shortName": "深圳市政府",
    "tinyName": "深圳市政府",
    "category": "会管单位/交易所",
    "topCategory": "other",
    "subCategory": "各级地方人民政府",
    "level": "副部级",
    "establishedYear": 1979,
    "description": "深圳市为副省级计划单列市、经济特区，深圳市人民政府主导中国特色社会主义先行示范区综合改革与特区金融创新。",
    "mainDuties": [
      "行使计划单列市与经济特区政府管理职能与立法创新探索",
      "推进深圳证券交易所高水平建设与资本市场综合改革",
      "深化深港金融市场互联互通与财富管理中心集聚"
    ],
    "websiteUrl": "https://www.sz.gov.cn",
    "address": "广东省深圳市福田区福中三路市民中心",
    "contactPhone": "0755-12345",
    "currentLeaderIds": []
  },
  {
    "id": "gov-sd-prov",
    "name": "山东省人民政府",
    "shortName": "山东省政府",
    "tinyName": "山东省政府",
    "category": "会管单位/交易所",
    "topCategory": "other",
    "subCategory": "各级地方人民政府",
    "level": "正部级",
    "establishedYear": 1949,
    "description": "山东省人民政府为省级国家行政机关，全面领导全省行政工作与重大经济金融决策，推进新旧动能转换综合试验区建设。",
    "mainDuties": [
      "全面领导全省经济社会发展与重大基础设施战略投资",
      "深入推进新旧动能转换与传统优势产业数字化转型",
      "深化地方金融管理体制改革与防控化解金融风险"
    ],
    "websiteUrl": "http://www.shandong.gov.cn",
    "address": "山东省济南市省府前街1号",
    "contactPhone": "0531-12345",
    "currentLeaderIds": []
  },
  {
    "id": "gov-tj-prov",
    "name": "天津市人民政府",
    "shortName": "天津市政府",
    "tinyName": "天津市政府",
    "category": "会管单位/交易所",
    "topCategory": "other",
    "subCategory": "各级地方人民政府",
    "level": "正部级",
    "establishedYear": 1949,
    "description": "天津市人民政府为直辖市国家行政机关，领导全市落实京津冀协同发展战略，打造北方国际航运核心区与金融创新运营示范区。",
    "mainDuties": [
      "统筹领导直辖市经济建设与重大行政体制综合治理",
      "推进天津自贸试验区与北方金融创新运营示范区建设",
      "提升直接融资比重与深化国资国企现代金融治理"
    ],
    "websiteUrl": "https://www.tj.gov.cn",
    "address": "天津市河西区友谊路30号",
    "contactPhone": "022-12345",
    "currentLeaderIds": []
  },
  {
    "id": "gov-local",
    "name": "各级地方人民政府及党政机关（统合）",
    "shortName": "地方政府统合",
    "tinyName": "地方政府统合",
    "category": "会管单位/交易所",
    "topCategory": "other",
    "subCategory": "各级地方人民政府",
    "level": "正部级",
    "establishedYear": 1949,
    "description": "统合记录中国证监会干部交流派驻、转任或升迁至各省、自治区、直辖市及下辖市县各级党政机关的跨界从政任职全貌。",
    "mainDuties": [
      "行使各级地方政府行政经济管理与属地社会综合治理职权",
      "搭建金融监管部门与地方经济发展实体互通互联纽带",
      "推动跨部门跨层级年轻高素质专业干部的双向交流任职"
    ],
    "websiteUrl": "http://www.gov.cn",
    "address": "全国各省市自治区党政机关",
    "contactPhone": "12345",
    "currentLeaderIds": []
  }
];

export const OFFICIALS_DATA: Official[] = [
  {
    "id": "wu-qing",
    "name": "吴清",
    "avatarUrl": "/avatars/wu-qing.jpg",
    "gender": "男",
    "birthYear": 1965,
    "birthMonth": 4,
    "nativePlace": "安徽蒙城",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证券监督管理委员会党委书记、主席",
    "currentRank": "正部级",
    "education": [
      {
        "degree": "学士",
        "school": "安徽财贸学院（现安徽财经大学）",
        "major": "财政金融系财政学",
        "graduationYear": 1989,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "中国人民大学",
        "major": "财政系财政学",
        "graduationYear": 1992,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国人民大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "博士",
        "school": "中国人民大学",
        "major": "财政金融学院财政学博士",
        "graduationYear": 2002,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国人民大学知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "wq-1",
        "unitId": "csrc-main",
        "unitName": "国家计委 / 证监会早期",
        "department": "综合司 / 机构部",
        "position": "干部、副处长、综合处处长",
        "rank": "正处级",
        "startYear": 1989,
        "startMonth": 7,
        "endYear": 2002,
        "endMonth": 6,
        "isDerived": true,
        "sourceNote": "根据国家计划委员会综合司及早期中国证监会机构监管部综合处干部任职档案考证",
        "notes": "参与早期资本市场基础性法规研究及证券经营机构监管规章起草",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据国家计划委员会综合司及早期中国证监会机构监管部综合处干部任职档案考证"
        }
      },
      {
        "id": "wq-2",
        "unitId": "csrc-jg",
        "unitName": "中国证监会",
        "department": "机构监管部",
        "position": "副主任",
        "rank": "副厅局级",
        "startYear": 2002,
        "startMonth": 6,
        "endYear": 2005,
        "endMonth": 2,
        "isDerived": false,
        "notes": "分管证券公司合规审查与综合监管，探索建立券商净资本监管指标体系",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "wq-3",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "证券公司风险处置办公室",
        "position": "主任",
        "rank": "正厅局级",
        "startYear": 2005,
        "startMonth": 2,
        "endYear": 2009,
        "endMonth": 3,
        "isDerived": false,
        "notes": "临危受命主导历时数年的证券公司综合治理，果断平稳处置南方证券、闽发证券、“德隆系”等31家高风险违规券商，被业界誉为“券商屠夫”",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "wq-4",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "基金监管部",
        "position": "主任",
        "rank": "正厅局级",
        "startYear": 2009,
        "startMonth": 3,
        "endYear": 2010,
        "endMonth": 11,
        "isDerived": false,
        "notes": "铁腕整肃基金行业秩序，严厉打击公募基金“老鼠仓”等内幕交易行为，推动基金信息阳光透明披露",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "wq-5",
        "unitId": "gov-sh-dist",
        "unitName": "上海市虹口区委 / 区人民政府",
        "department": "区委、区政府班子",
        "position": "区委副书记、区长、区委书记",
        "rank": "正厅局级",
        "startYear": 2010,
        "startMonth": 11,
        "endYear": 2016,
        "endMonth": 5,
        "isDerived": false,
        "notes": "作为中央部委优秀中青年干部交流至上海任职，全力推动北外滩航运与金融双重服务集聚区建设",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
      },
      {
        "id": "wq-6",
        "unitId": "csrc-sse",
        "unitName": "上海证券交易所",
        "department": "党委 / 理事会",
        "position": "党委书记、理事长",
        "rank": "副部级",
        "startYear": 2016,
        "startMonth": 5,
        "endYear": 2017,
        "endMonth": 12,
        "isDerived": false,
        "notes": "重回证券监管体系一线，强化上交所“以监管会员为中心”的穿透式监管理念，主导推进科创板早期制度设计构想",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "wq-7",
        "unitId": "gov-sh-prov",
        "unitName": "上海市人民政府 / 上海市委",
        "department": "直辖市党政领导班子",
        "position": "副市长、市委常委、常务副市长、市委副书记、政法委书记",
        "rank": "副部级",
        "startYear": 2017,
        "startMonth": 12,
        "endYear": 2024,
        "endMonth": 2,
        "isDerived": false,
        "notes": "分管上海发展改革、财政、金融、外事等核心板块，深度主导科创板并试点注册制在上交所平稳落地，全力推进上海国际金融中心与科创中心建设",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
      },
      {
        "id": "wq-8",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "党委书记、主席",
        "rank": "正部级",
        "startYear": 2024,
        "startMonth": 2,
        "endYear": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "出任中国证监会第十任主席（二十届中央候补委员），确立“强本强基、严监严管”主基调，推动国务院新“国九条”出台实施，严厉打击财务造假、操纵市场和恶意做空，全面重塑资本市场生态",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "二十届中央候补委员，经济学博士。中国资本市场监管体制资深实践家，历任证监会机构部副主任、风险办主任、基金部主任、上海市虹口区委书记、上海证券交易所理事长、上海市委副书记、常务副市长。2024年2月出任中国证监会党委书记、主席，推动出台新“国九条”，全面构建穿透式强监管体系。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "yi-huiman",
    "name": "易会满",
    "avatarUrl": "/avatars/yi-huiman.jpg",
    "gender": "男",
    "birthYear": 1964,
    "birthMonth": 12,
    "nativePlace": "浙江苍南",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会原党委书记、主席",
    "currentRank": "正部级",
    "education": [
      {
        "degree": "大专",
        "school": "杭州电子工业学院",
        "major": "统计学",
        "graduationYear": 1984,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "北京大学光华管理学院",
        "major": "EMBA高级管理人员工商管理硕士",
        "graduationYear": 2005,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "南京大学",
        "major": "管理学博士",
        "graduationYear": 2008,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "yhm-1",
        "unitId": "csrc-main",
        "unitName": "中国工商银行",
        "department": "分行领导班子",
        "position": "浙江省分行副行长、江苏省分行行长、北京市分行行长",
        "rank": "正厅局级",
        "startYear": 1985,
        "startMonth": 1,
        "endYear": 2005,
        "endMonth": 3,
        "isDerived": false,
        "notes": "从基层网点信贷员起步，历任工行三大经济重镇省级分行一把手",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "yhm-2",
        "unitId": "csrc-main",
        "unitName": "中国工商银行",
        "department": "总行领导班子",
        "position": "党委委员、副行长、行长、党委书记兼董事长",
        "rank": "副部级",
        "startYear": 2005,
        "startMonth": 3,
        "endYear": 2019,
        "endMonth": 1,
        "isDerived": false,
        "notes": "掌舵全球资产规模最大的商业银行“宇宙行”，推动工行股改上市与全球化战略布局",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "yhm-3",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "党委书记、主席",
        "rank": "正部级",
        "startYear": 2019,
        "startMonth": 1,
        "endYear": 2024,
        "endMonth": 2,
        "isDerived": false,
        "notes": "出任中国证监会第九任主席（十九届中央候补委员、二十届中央委员），带领全系统成功设立科创板并试点注册制，进而完成全面股票发行注册制改革，创立北京证券交易所",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "二十届中央委员，管理学博士。历任中国工商银行行长、董事长，2019年1月至2024年2月出任中国证监会主席，主导设立科创板并试点注册制、设立北京证券交易所，全面实施股票发行注册制改革。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "transferred",
    "servingStatusLabel": "免职转任 / 全国政协驻会副主任",
    "servingStatusNote": "2024年2月免去中国证监会党委书记、主席职务，后出任第十四届全国政协经济委员会驻会副主任。",
    "statusBadgeColor": "blue"
  },
  {
    "id": "liu-shiyu",
    "name": "刘士余",
    "avatarUrl": "/avatars/liu-shiyu.jpg",
    "gender": "男",
    "birthYear": 1961,
    "birthMonth": 11,
    "nativePlace": "江苏灌云",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会原党委书记、主席（已离任）",
    "currentRank": "正部级",
    "education": [
      {
        "degree": "学士",
        "school": "清华大学",
        "major": "水利工程系工学学士",
        "graduationYear": 1984,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "清华大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "硕士",
        "school": "清华大学",
        "major": "经济管理学院管理工程硕士",
        "graduationYear": 1987,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "清华大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "博士",
        "school": "清华大学",
        "major": "技术经济学博士",
        "graduationYear": 2002,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "清华大学知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "lsy-1",
        "unitId": "pbc",
        "unitName": "中国人民银行",
        "department": "银行司 / 办公厅",
        "position": "助理巡视员、司长、办公厅主任、行长助理",
        "rank": "正厅局级",
        "startYear": 1996,
        "startMonth": 8,
        "endYear": 2006,
        "endMonth": 6,
        "isDerived": false,
        "notes": "全程操盘国有独资商业银行股份制改革与注资重组方案设计",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "lsy-2",
        "unitId": "pbc",
        "unitName": "中国人民银行",
        "department": "党委 / 行领导",
        "position": "党委委员、副行长",
        "rank": "副部级",
        "startYear": 2006,
        "startMonth": 6,
        "endYear": 2014,
        "endMonth": 10,
        "isDerived": false,
        "notes": "主管央行金融稳定局、金融市场司，统筹化解地方金融风险与债券市场拓宽",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "lsy-3",
        "unitId": "csrc-main",
        "unitName": "中国农业银行",
        "department": "总行领导班子",
        "position": "党委书记、董事长",
        "rank": "副部级",
        "startYear": 2014,
        "startMonth": 10,
        "endYear": 2016,
        "endMonth": 2,
        "isDerived": false,
        "notes": "掌舵大型国有商业银行农行全面经营与三农金融服务",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "lsy-4",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "党委书记、主席",
        "rank": "正部级",
        "startYear": 2016,
        "startMonth": 2,
        "endYear": 2019,
        "endMonth": 1,
        "isDerived": false,
        "notes": "出任第八任证监会主席，提出依法监管、从严监管、全面监管，严打“野蛮人、害人精、资本大鳄”，化解股市异常波动后市场流动性与股权质押风险",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "清华大学技术经济学博士。历任央行副行长、中国农业银行董事长。2016年2月至2019年1月出任中国证监会主席，强力推进“全面监管、从严监管”，有力处置恶意收购与资本市场乱象。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "investigated",
    "servingStatusLabel": "留党察看二年 / 政务撤职处分",
    "servingStatusNote": "2019年5月主动投案配合中央纪委国家监委审查调查；同年10月通报给予留党察看二年处分、政务撤职处分，降为一级调研员。",
    "statusBadgeColor": "rose"
  },
  {
    "id": "xiao-gang",
    "name": "肖钢",
    "avatarUrl": "/avatars/xiao-gang.jpg",
    "gender": "男",
    "birthYear": 1958,
    "birthMonth": 8,
    "nativePlace": "江西吉安",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会原党委书记、主席",
    "currentRank": "正部级",
    "education": [
      {
        "degree": "学士",
        "school": "湖南财经学院",
        "major": "金融专业",
        "graduationYear": 1981,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "中国人民大学",
        "major": "国际经济法硕士",
        "graduationYear": 1996,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国人民大学知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "xg-1",
        "unitId": "pbc",
        "unitName": "中国人民银行",
        "department": "行长办公室 / 计划资金司",
        "position": "行长秘书、司长、政策研究室主任",
        "rank": "正厅局级",
        "startYear": 1981,
        "startMonth": 7,
        "endYear": 1996,
        "endMonth": 10,
        "isDerived": false,
        "notes": "长期参与央行宏观调控方案设计与中央银行宏观审慎政策制定",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "xg-2",
        "unitId": "pbc",
        "unitName": "中国人民银行 / 外汇管理局",
        "department": "行领导班子",
        "position": "行长助理、副行长、党委委员兼外汇管理局局长",
        "rank": "副部级",
        "startYear": 1996,
        "startMonth": 10,
        "endYear": 2003,
        "endMonth": 3,
        "isDerived": false,
        "notes": "主管全国外汇市场防范亚洲金融危机冲击与跨境外汇收支平衡",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "xg-3",
        "unitId": "csrc-main",
        "unitName": "中国银行",
        "department": "总行领导班子",
        "position": "董事长、党委书记、行长",
        "rank": "副部级",
        "startYear": 2003,
        "startMonth": 3,
        "endYear": 2013,
        "endMonth": 3,
        "isDerived": false,
        "notes": "掌舵中行十年，成功主导中国银行改制并在香港和A股两地实现大型国有商业银行首家IPO上市",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "xg-4",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "党委书记、主席",
        "rank": "正部级",
        "startYear": 2013,
        "startMonth": 3,
        "endYear": 2016,
        "endMonth": 2,
        "isDerived": false,
        "notes": "出任第七任证监会主席，力主推进资本市场双向开放，主导开启具有划时代意义的“沪港通”试点，重启IPO注册制改革立法调研",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "法学硕士。曾任央行副行长兼国家外汇管理局局长、中国银行董事长十年。2013年3月至2016年2月出任中国证监会主席，开通“沪港通”，开启境内资本市场与国际市场互联互通新纪元。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "retired",
    "servingStatusLabel": "正常退休",
    "servingStatusNote": "曾任中国证监会党委书记、主席，全国政协经济委员会委员，现已正常退休。",
    "statusBadgeColor": "slate"
  },
  {
    "id": "guo-shuqing",
    "name": "郭树清",
    "avatarUrl": "/avatars/guo-shuqing.jpg",
    "gender": "男",
    "birthYear": 1956,
    "birthMonth": 8,
    "nativePlace": "内蒙古察右后旗",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会原党委书记、主席",
    "currentRank": "正部级",
    "education": [
      {
        "degree": "学士",
        "school": "南开大学",
        "major": "哲学系哲学学士",
        "graduationYear": 1982,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "中国社科院研究生院",
        "major": "马列系法学硕士",
        "graduationYear": 1985,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国社科院研究生院知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "博士",
        "school": "中国社科院研究生院",
        "major": "法学博士",
        "graduationYear": 1988,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国社科院研究生院知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "gsq-1",
        "unitId": "csrc-main",
        "unitName": "国家计委 / 国家体改委",
        "department": "经济研究中心 / 综合司",
        "position": "处长、综合规划司司长",
        "rank": "正厅局级",
        "startYear": 1988,
        "startMonth": 9,
        "endYear": 1998,
        "endMonth": 7,
        "isDerived": false,
        "notes": "国家宏观体制改革纲领性方案核心起草人之一",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "gsq-2",
        "unitId": "csrc-main",
        "unitName": "贵州省 / 央行",
        "department": "贵州省政府 / 央行党委",
        "position": "副省长、央行副行长兼外汇局局长、汇金公司董事长",
        "rank": "副部级",
        "startYear": 1998,
        "startMonth": 7,
        "endYear": 2005,
        "endMonth": 3,
        "isDerived": false,
        "notes": "主导中央汇金公司注资建行、中行重大金融改革攻坚",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "gsq-3",
        "unitId": "csrc-main",
        "unitName": "中国建设银行",
        "department": "总行党委 / 董事会",
        "position": "党委书记、董事长",
        "rank": "副部级",
        "startYear": 2005,
        "startMonth": 3,
        "endYear": 2011,
        "endMonth": 10,
        "isDerived": false,
        "notes": "带领建行率先完成香港H股上市与A股上市，建立现代大型商业银行内控体制",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "gsq-4",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "党委书记、主席",
        "rank": "正部级",
        "startYear": 2011,
        "startMonth": 10,
        "endYear": 2013,
        "endMonth": 3,
        "isDerived": false,
        "notes": "出任第六任证监会主席，执掌506天密集推出以“郭氏新政”闻名的七十余项制度改革，重塑退市制度、强制上市公司现金分红、严厉打击内幕交易、大幅降低市场交易规费",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "gsq-5",
        "unitId": "gov-sd-prov",
        "unitName": "山东省人民政府 / 省委",
        "department": "省级党政领导班子",
        "position": "省委副书记、省长",
        "rank": "正部级",
        "startYear": 2013,
        "startMonth": 3,
        "endYear": 2017,
        "endMonth": 5,
        "isDerived": false,
        "notes": "主政山东推进“山东金改22条”；后重返金融监管主导银监会保监会机构合并，化解影子银行重大系统性风险",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "法学博士，著名宏观经济与金融学者。历任央行副行长兼外汇局局长、建设银行董事长、山东省省长、中国银保监会主席、央行党委书记。2011年10月至2013年3月任中国证监会主席，推行以“郭氏新政”著称的大刀阔斧改革。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "transferred",
    "servingStatusLabel": "全国人大财经委副主任委员",
    "servingStatusNote": "曾任中国证监会主席、山东省省长、中国银保监会主席兼央行党委书记，现任第十四届全国人大财政经济委员会副主任委员。",
    "statusBadgeColor": "blue"
  },
  {
    "id": "shang-fulin",
    "name": "尚福林",
    "avatarUrl": "/avatars/shang-fulin.jpg",
    "gender": "男",
    "birthYear": 1951,
    "birthMonth": 11,
    "nativePlace": "山东济南",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会原党委书记、主席",
    "currentRank": "正部级",
    "education": [
      {
        "degree": "学士",
        "school": "北京财贸学院",
        "major": "金融专业学士",
        "graduationYear": 1982,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "西南财经大学",
        "major": "金融学院经济学博士",
        "graduationYear": 1999,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "sfl-1",
        "unitId": "pbc",
        "unitName": "中国人民银行",
        "department": "办公厅 / 条法司",
        "position": "秘书、条法司司长、副行长兼货币政策委员会秘书长",
        "rank": "副部级",
        "startYear": 1982,
        "startMonth": 7,
        "endYear": 2000,
        "endMonth": 2,
        "isDerived": false,
        "notes": "起草初代中国人民银行法及商业银行法基础法理",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "sfl-2",
        "unitId": "csrc-main",
        "unitName": "中国农业银行",
        "department": "总行领导班子",
        "position": "党委书记、行长",
        "rank": "副部级",
        "startYear": 2000,
        "startMonth": 2,
        "endYear": 2002,
        "endMonth": 12,
        "isDerived": false,
        "notes": "主管农行全行经营，全面推进资产剥离与机构改革",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "sfl-3",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "党委书记、主席",
        "rank": "正部级",
        "startYear": 2002,
        "startMonth": 12,
        "endYear": 2011,
        "endMonth": 10,
        "isDerived": false,
        "notes": "出任第五任证监会主席，任职长达近九年，是中国证监会历史上任职时间最长的主席。以非凡智慧与坚韧定力完成“股权分置改革”这一划时代的历史攻坚任务，推出中小板与创业板，开启中国股市股权全流通的新纪元",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "sfl-4",
        "unitId": "cbirc",
        "unitName": "中国银监会",
        "department": "党委 / 会领导",
        "position": "党委书记、主席",
        "rank": "正部级",
        "startYear": 2011,
        "startMonth": 10,
        "endYear": 2017,
        "endMonth": 2,
        "isDerived": false,
        "notes": "主导全国银行业审慎监管框架设计与民营银行常态化试点",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "金融学博士。证监会历史上任期最长的主席（2002年12月至2011年10月，历时近9年），后任中国银监会主席。开创性领导并成功完成中国资本市场“开弓没有回头箭”的股权分置改革，创设中小板与创业板。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "retired",
    "servingStatusLabel": "正常退休",
    "servingStatusNote": "曾任证监会主席、银监会主席、全国政协经济委员会主任，现已正常退休。",
    "statusBadgeColor": "slate"
  },
  {
    "id": "zhou-zhengqing",
    "name": "周正庆",
    "avatarUrl": "/avatars/zhou-zhengqing.jpg",
    "gender": "男",
    "birthYear": 1935,
    "birthMonth": 2,
    "nativePlace": "安徽天长",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会原主席、党组书记",
    "currentRank": "正部级",
    "education": [
      {
        "degree": "大专",
        "school": "中国人民银行干部学校",
        "major": "金融管理",
        "graduationYear": 1953,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "zzq-1",
        "unitId": "pbc",
        "unitName": "中国人民银行 / 国务院证券委",
        "department": "北京市分行 / 国务院",
        "position": "北京分行行长、央行副行长、国务院副秘书长、国务院证券委主任",
        "rank": "正部级",
        "startYear": 1979,
        "startMonth": 10,
        "endYear": 1997,
        "endMonth": 7,
        "isDerived": false,
        "notes": "负责宏观金融整顿与中央证券委政策协调",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "zzq-2",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "主席、党组书记",
        "rank": "正部级",
        "startYear": 1997,
        "startMonth": 7,
        "endYear": 2000,
        "endMonth": 2,
        "isDerived": false,
        "notes": "出任第三任证监会主席，促成新中国第一部《中华人民共和国证券法》通过施行，并领导出台搞活市场的政策组合拳，启动著名的1999年“5·19”牛市行情",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "原国务院证券委主任、中国证监会第三任主席（1997年7月至2000年2月）。主持起草并推动出台新中国首部《证券法》，奠定资本市场法治根基，领导启动著名的“5·19”牛市。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "retired",
    "servingStatusLabel": "已故 / 原主席",
    "servingStatusNote": "曾任国务院证券委主任、中国证监会第二任主席、全国人大财经委副主任委员，2018年7月在北京逝世。",
    "statusBadgeColor": "slate"
  },
  {
    "id": "liu-hongru",
    "name": "刘鸿儒",
    "avatarUrl": "/avatars/liu-hongru.jpg",
    "gender": "男",
    "birthYear": 1930,
    "birthMonth": 11,
    "nativePlace": "吉林德惠",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会首任主席、党组书记",
    "currentRank": "正部级",
    "education": [
      {
        "degree": "硕士",
        "school": "中国人民大学",
        "major": "财政系研究生",
        "graduationYear": 1954,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国人民大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "博士",
        "school": "莫斯科大学",
        "major": "经济系副博士",
        "graduationYear": 1959,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "lhr-1",
        "unitId": "pbc",
        "unitName": "中国人民银行 / 国家体改委",
        "department": "行领导 / 体改委领导",
        "position": "央行常务副行长、国家体改委副主任兼中国金融学会副会长",
        "rank": "正部级",
        "startYear": 1979,
        "startMonth": 1,
        "endYear": 1992,
        "endMonth": 10,
        "isDerived": false,
        "notes": "中国现代中央银行制度与金融体制改革的总设计师之一",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "lhr-2",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "首任主席、党组书记",
        "rank": "正部级",
        "startYear": 1992,
        "startMonth": 10,
        "endYear": 1995,
        "endMonth": 3,
        "isDerived": false,
        "notes": "中国证券监督管理委员会创始主席。白手起家构建全国统一的股票发行审核体系，推动首批九家大型国企赴香港发行H股上市，确立中国资本市场初代监管框架",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "莫斯科大学经济学副博士。中国金融改革与现代资本市场奠基人，中国人民银行原常务副行长。1992年10月至1995年3月担任中国证监会首任主席、党组书记，开创性搭建了中国证券监管制度体系，主导推进首批H股海外上市。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "retired",
    "servingStatusLabel": "离休 / 首任主席",
    "servingStatusNote": "中国证券监督管理委员会首任主席（1992-1995），我国资本市场奠基人之一，现已离休。",
    "statusBadgeColor": "slate"
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
        "graduationYear": 1996,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "清华大学",
        "major": "管理科学与工程",
        "graduationYear": 2002,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "清华大学知名校友档案及法定公开发表学位论文登记"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      }
    ],
    "avatarUrl": "/avatars/li-jizun.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1993,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "西安交通大学",
        "major": "管理科学与工程",
        "graduationYear": 2003,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/sha-yan.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "liu-haoling",
    "name": "刘浩凌",
    "avatarUrl": "/avatars/liu-haoling.jpg",
    "gender": "男",
    "birthYear": 1971,
    "birthMonth": 7,
    "nativePlace": "北京",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证券监督管理委员会党委委员、副主席",
    "currentRank": "副部级",
    "education": [
      {
        "degree": "学士",
        "school": "北京大学",
        "major": "英语语言文学系",
        "graduationYear": 1995,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "学士",
        "school": "中国政法大学",
        "major": "法律学学士",
        "graduationYear": 1997,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国政法大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "硕士",
        "school": "美国爱荷华大学",
        "major": "法学硕士（LL.M.）",
        "graduationYear": 1998,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "英国伦敦商学院（LBS）",
        "major": "金融学硕士（MSF）",
        "graduationYear": 2003,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "lhl-1",
        "unitId": "csrc-main",
        "unitName": "华夏证券 / 证监会早期",
        "department": "法律事务部 / 上市部",
        "position": "法律助理、干部、第一至二届发审委委员",
        "rank": "正处级",
        "startYear": 1997,
        "startMonth": 7,
        "endYear": 2003,
        "endMonth": 9,
        "isDerived": true,
        "sourceNote": "根据中国证监会股票发行审核委员会及早期证券行业履历考证",
        "notes": "参与早期境内A股上市公司申报形式审查与发审审核",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据中国证监会股票发行审核委员会及早期证券行业履历考证"
        }
      },
      {
        "id": "lhl-2",
        "unitId": "csrc-main",
        "unitName": "合资券商机构",
        "department": "合规风控部",
        "position": "华欧国际证券合规部经理兼董秘、高盛高华证券合规部经理",
        "rank": "副厅局级",
        "startYear": 2003,
        "startMonth": 9,
        "endYear": 2008,
        "endMonth": 3,
        "isDerived": false,
        "notes": "主导早期中外合资投资银行境内外合规架构搭建与重大跨境业务法律风险把关",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
      },
      {
        "id": "lhl-3",
        "unitId": "sasac-cic",
        "unitName": "中国投资有限责任公司 / 中央汇金",
        "department": "法律合规部 / 银行机构管理二部",
        "position": "业务主管、高级经理、股权管理二部主任",
        "rank": "正厅局级",
        "startYear": 2008,
        "startMonth": 3,
        "endYear": 2019,
        "endMonth": 11,
        "isDerived": false,
        "notes": "主管国有重点金融机构控股股权行权与境内主权财富基金合规风控",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "lhl-4",
        "unitId": "sasac-cic",
        "unitName": "中央汇金公司 / 新华保险",
        "department": "高管层",
        "position": "中央汇金副总经理兼新华保险董事长、申万宏源证券董事",
        "rank": "正厅局级",
        "startYear": 2019,
        "startMonth": 11,
        "endYear": 2021,
        "endMonth": 2,
        "isDerived": false,
        "notes": "全面统领大型保险央企公司治理与国有金融资本运作",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "lhl-5",
        "unitId": "csrc-main",
        "unitName": "中国投资有限责任公司",
        "department": "执委会 / 领导班子",
        "position": "副总经理兼副首席风险官、总经理兼首席投资官",
        "rank": "副部级",
        "startYear": 2021,
        "startMonth": 2,
        "endYear": 2024,
        "endMonth": 4,
        "isDerived": false,
        "notes": "升任主权财富基金总舵手，全面负责中投公司全球万亿美元境外资产配置及境内直投风控",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "lhl-6",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "党委委员、副主席",
        "rank": "副部级",
        "startYear": 2024,
        "startMonth": 4,
        "endYear": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "调任中国证监会副主席，为现任领导班子中最年轻的“70后”副部级高官，分管国际合作、市场拓展与长期中长期资金入市等",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "双硕士学位（美国爱荷华大学法学硕士、伦敦商学院金融硕士）。证监会现任领导班子中唯一的“70后”副部级领导干部，曾任中投公司总经理兼首席投资官、中央汇金副总经理、新华保险董事长。兼具全球顶尖投资机构管理视野与境内证券合规风控底蕴，2024年4月履新中国证监会副主席。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1991,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "财政部财政科学研究所",
        "major": "财政学",
        "graduationYear": 2002,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      }
    ],
    "avatarUrl": "/avatars/cai-jianchun.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "li-ming",
    "name": "李明",
    "avatarUrl": "/avatars/li-ming.jpg",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 11,
    "nativePlace": "山东",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证券监督管理委员会党委委员、副主席",
    "currentRank": "副部级",
    "education": [
      {
        "degree": "学士",
        "school": "中国政法大学",
        "major": "法律系法学学士",
        "graduationYear": 1991,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国政法大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "硕士",
        "school": "中国政法大学",
        "major": "民商经济法学硕士",
        "graduationYear": 1996,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国政法大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "博士",
        "school": "中国政法大学",
        "major": "经济法学博士",
        "graduationYear": 2004,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国政法大学知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "lm-1",
        "unitId": "csrc-fx",
        "unitName": "中国证监会",
        "department": "发行监管部",
        "position": "副处长、处长、副主任",
        "rank": "副厅局级",
        "startYear": 1998,
        "startMonth": 7,
        "endYear": 2016,
        "endMonth": 11,
        "isDerived": false,
        "notes": "长期从事境内A股股票公开发行核准与制度建设，严把拟上市企业入口关",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "lm-2",
        "unitId": "csrc-bse",
        "unitName": "全国股转公司",
        "department": "高管层",
        "position": "党委副书记、总经理",
        "rank": "正厅局级",
        "startYear": 2016,
        "startMonth": 11,
        "endYear": 2018,
        "endMonth": 8,
        "isDerived": false,
        "notes": "负责新三板市场日常运行与深化改革，推出创新层与挂牌分层管理体制",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "lm-3",
        "unitId": "csrc-js",
        "unitName": "中国证监会江苏监管局",
        "department": "局领导班子",
        "position": "党委书记、局长",
        "rank": "正厅局级",
        "startYear": 2018,
        "startMonth": 8,
        "endYear": 2020,
        "endMonth": 6,
        "isDerived": false,
        "notes": "全面主持经济大省江苏辖区证券期货市场一线监管与拟上市后备企业梯队服务",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "lm-4",
        "unitId": "csrc-ss",
        "unitName": "中国证监会",
        "department": "上市公司监管部",
        "position": "主任",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 6,
        "endYear": 2023,
        "endMonth": 4,
        "isDerived": false,
        "notes": "负责全面注册制下上市公司持续监管、常态化退市机制建设与防范大股东违规减持",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "lm-5",
        "unitId": "csrc-jc",
        "unitName": "中国证监会",
        "department": "稽查局",
        "position": "首席检查官兼稽查局局长",
        "rank": "正厅局级",
        "startYear": 2023,
        "startMonth": 4,
        "endYear": 2024,
        "endMonth": 7,
        "isDerived": false,
        "notes": "执掌全系统稽查执法帅印，以“零容忍”态度雷霆查处重大财务欺诈与操纵市场大案",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "lm-6",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "党委委员、副主席",
        "rank": "副部级",
        "startYear": 2024,
        "startMonth": 7,
        "endYear": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "升任中国证监会副主席，接替方星海分管国际合作司、期货监管司等重点业务",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "法学博士。证监系统自主培养的专家型领导干部，历任发行部副主任、全国股转公司总经理、江苏证监局局长、上市公司监管部主任、首席检查官兼稽查局局长。2024年7月升任中国证监会副主席、党委委员，全面分管资本市场国际化合作与期货衍生品监管。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "wang-jianjun",
    "name": "王建军",
    "avatarUrl": "/avatars/wang-jianjun.jpg",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 3,
    "nativePlace": "湖南邵阳",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会原党委委员、副主席（已离任）",
    "currentRank": "副部级",
    "education": [
      {
        "degree": "学士",
        "school": "中国人民大学",
        "major": "财政金融学院",
        "graduationYear": 1991,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国人民大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "硕士",
        "school": "中国人民大学",
        "major": "经济学硕士",
        "graduationYear": 1994,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国人民大学知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "wjj-1",
        "unitId": "csrc-fx",
        "unitName": "中国证监会",
        "department": "发行监管部 / 办公厅",
        "position": "综合处处长、副主任兼秘书二处处长",
        "rank": "副厅局级",
        "startYear": 1997,
        "startMonth": 4,
        "endYear": 2012,
        "endMonth": 4,
        "isDerived": false,
        "notes": "长期从事发行审核流程规范化与重大行政决策文电统筹起草",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "wjj-2",
        "unitId": "csrc-sc1",
        "unitName": "中国证监会",
        "department": "市场监管部",
        "position": "主任",
        "rank": "正厅局级",
        "startYear": 2012,
        "startMonth": 4,
        "endYear": 2016,
        "endMonth": 4,
        "isDerived": false,
        "notes": "负责全国交易市场组织监测，参与2015年股市异常波动期间流动性风险防范",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "wjj-3",
        "unitId": "csrc-szse",
        "unitName": "深圳证券交易所",
        "department": "高管层 / 理事会",
        "position": "总经理、党委书记、理事长",
        "rank": "副部级",
        "startYear": 2016,
        "startMonth": 4,
        "endYear": 2021,
        "endMonth": 10,
        "isDerived": false,
        "notes": "执掌深交所逾五年，主导开通“深港通”，平稳实施创业板改革并试点注册制",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "wjj-4",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "党委委员、副主席",
        "rank": "副部级",
        "startYear": 2021,
        "startMonth": 10,
        "endYear": 2024,
        "endMonth": 7,
        "isDerived": false,
        "notes": "分管市场监管一司、公司债券监管司等，统筹深化股票发行注册制落地",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "经济学硕士。历任证监会市场部主任、深交所总经理、深交所理事长，2021年10月至2024年7月任中国证监会副主席，主导推动深港通启动及创业板注册制重大改革落地。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "transferred",
    "servingStatusLabel": "免去副主席职务 / 离任",
    "servingStatusNote": "2024年7月国务院免去其中国证监会副主席职务。",
    "statusBadgeColor": "blue"
  },
  {
    "id": "chen-huaping",
    "name": "陈华平",
    "avatarUrl": "/avatars/chen-huaping.jpg",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 12,
    "nativePlace": "江西",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证券监督管理委员会党委委员、副主席",
    "currentRank": "副部级",
    "education": [
      {
        "degree": "学士",
        "school": "中国政法大学",
        "major": "法律学学士",
        "graduationYear": 1990,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国政法大学知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "chp-1",
        "unitId": "csrc-jg",
        "unitName": "中国证监会",
        "department": "综合业务部 / 机构监管部",
        "position": "干部、副处长、处长",
        "rank": "正处级",
        "startYear": 1994,
        "startMonth": 7,
        "endYear": 2011,
        "endMonth": 8,
        "isDerived": true,
        "sourceNote": "根据中国证监会机构监管部门公开工作记录考证",
        "notes": "长期参与证券公司审慎监管、合规风控法规与分类评价体系构建",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据中国证监会机构监管部门公开工作记录考证"
        }
      },
      {
        "id": "chp-2",
        "unitId": "csrc-jc",
        "unitName": "中国证监会",
        "department": "稽查总队",
        "position": "党委副书记、副总队长",
        "rank": "副厅局级",
        "startYear": 2011,
        "startMonth": 8,
        "endYear": 2014,
        "endMonth": 2,
        "isDerived": false,
        "notes": "负责全市场证券违法线索核查与重大内幕交易、操纵证券市场案件立案查处",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "chp-3",
        "unitId": "csrc-bgt",
        "unitName": "中国证监会",
        "department": "办公厅",
        "position": "巡视员",
        "rank": "正厅局级",
        "startYear": 2014,
        "startMonth": 2,
        "endYear": 2016,
        "endMonth": 2,
        "isDerived": false,
        "notes": "负责证监会党委重要综合会议议题协调督办与跨部委政务衔接",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "chp-4",
        "unitId": "csrc-szse",
        "unitName": "深圳证券交易所",
        "department": "监事会",
        "position": "党委副书记、监事长",
        "rank": "副厅局级",
        "startYear": 2016,
        "startMonth": 2,
        "endYear": 2019,
        "endMonth": 10,
        "isDerived": false,
        "notes": "履行一线法定监督职责，健全交易所风控底线与会员内控监督机制",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
      },
      {
        "id": "chp-5",
        "unitId": "csrc-czce",
        "unitName": "郑州商品交易所",
        "department": "党委 / 理事会",
        "position": "党委书记、理事长",
        "rank": "正厅局级",
        "startYear": 2019,
        "startMonth": 10,
        "endYear": 2021,
        "endMonth": 12,
        "isDerived": false,
        "notes": "主持郑商所全面工作，推动花生、短纤、PTA期权等系列大宗商品衍生品上市与国际化",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "chp-6",
        "unitId": "csrc-szse",
        "unitName": "深圳证券交易所",
        "department": "党委 / 理事会",
        "position": "党委书记、理事长",
        "rank": "副部级",
        "startYear": 2021,
        "startMonth": 12,
        "endYear": 2023,
        "endMonth": 9,
        "isDerived": false,
        "notes": "主持深交所全面工作，深入推进创业板改革并试点注册制，主导主板与中小板顺利合并",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "chp-7",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "党委委员、副主席",
        "rank": "副部级",
        "startYear": 2023,
        "startMonth": 9,
        "endYear": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "升任中国证监会副主席，分管稽查局、稽查总队及行政处罚等一线执法重拳板块",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "法学学士。长期在证监系统机构监管、稽查执法及核心交易所一线历练，曾任稽查总队副总队长、办公厅巡视员、深交所监事长、郑商所理事长、深交所理事长。2023年9月出任中国证监会副主席、党委委员，全面分管稽查执法与重大证券违规查处体系。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1988,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "中山大学岭南学院",
        "major": "管理学",
        "graduationYear": 2003,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/qiu-yong.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "li-chao",
    "name": "李超",
    "avatarUrl": "/avatars/li-chao.jpg",
    "gender": "男",
    "birthYear": 1965,
    "birthMonth": 12,
    "nativePlace": "河南焦作",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证券监督管理委员会党委委员、副主席",
    "currentRank": "副部级",
    "education": [
      {
        "degree": "学士",
        "school": "清华大学",
        "major": "汽车工程系工学学士",
        "graduationYear": 1987,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "清华大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "硕士",
        "school": "清华大学",
        "major": "经济管理学院工业外贸工学硕士",
        "graduationYear": 1994,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "清华大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "博士",
        "school": "清华大学",
        "major": "经济管理学院管理科学与工程博士",
        "graduationYear": 2004,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "清华大学知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "lc-1",
        "unitId": "csrc-main",
        "unitName": "中国建设银行",
        "department": "人事教育部 / 办公室",
        "position": "干部管理处处长、办公室副主任",
        "rank": "正处级",
        "startYear": 1987,
        "startMonth": 7,
        "endYear": 2000,
        "endMonth": 6,
        "isDerived": false,
        "notes": "长期从事专业干部人事管理与总行综合综合协调保障工作",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "lc-2",
        "unitId": "csrc-bgt",
        "unitName": "中国证监会",
        "department": "办公厅",
        "position": "副主任",
        "rank": "副厅局级",
        "startYear": 2000,
        "startMonth": 6,
        "endYear": 2003,
        "endMonth": 1,
        "isDerived": false,
        "notes": "协助主持证监会办公厅日常运转、政务统筹与重要综合文件拟订",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "lc-3",
        "unitId": "pbc",
        "unitName": "中国人民银行",
        "department": "办公厅",
        "position": "副主任、主任兼新闻发言人",
        "rank": "正厅局级",
        "startYear": 2003,
        "startMonth": 1,
        "endYear": 2008,
        "endMonth": 12,
        "isDerived": false,
        "notes": "负责央行全系统政务综合运转、突发舆情应对与宏观货币政策对外新闻权威发布",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "lc-4",
        "unitId": "pbc",
        "unitName": "国家外汇管理局 / 央行营管部",
        "department": "局党组 / 营管部党委",
        "position": "副局长、党组成员兼央行营业管理部主任、党委书记",
        "rank": "副部级",
        "startYear": 2008,
        "startMonth": 12,
        "endYear": 2015,
        "endMonth": 9,
        "isDerived": false,
        "notes": "统筹国家外汇储备投资运营合规风控，主管首都地区货币信贷投放与外汇属地审慎监管",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "lc-5",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "党委委员、副主席",
        "rank": "副部级",
        "startYear": 2015,
        "startMonth": 9,
        "endYear": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "分管证券基金机构监管司、私募投资基金监管司、信息中心及监管科技数字化工作，强力推进公募REITs常态化发行",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "管理学博士，资深金融监管高官。历任建设银行办公室副主任、中国证监会办公厅副主任、中国人民银行办公厅主任兼新闻发言人、国家外汇管理局副局长。2015年9月出任中国证监会副主席、党委委员，长期分管机构监管、私募股权监管及公募REITs试点工作。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "fang-xinghai",
    "name": "方星海",
    "avatarUrl": "/avatars/fang-xinghai.jpg",
    "gender": "男",
    "birthYear": 1964,
    "birthMonth": 5,
    "nativePlace": "浙江乐清",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会原党委委员、副主席（已退休）",
    "currentRank": "副部级",
    "education": [
      {
        "degree": "学士",
        "school": "清华大学",
        "major": "经济管理学院信息系统工学学士",
        "graduationYear": 1986,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "清华大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "硕士",
        "school": "美国斯坦福大学",
        "major": "经济学硕士",
        "graduationYear": 1989,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "美国斯坦福大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "博士",
        "school": "美国斯坦福大学",
        "major": "经济学博士",
        "graduationYear": 1993,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "美国斯坦福大学知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "fxh-1",
        "unitId": "csrc-main",
        "unitName": "世界银行总部",
        "department": "华盛顿总部",
        "position": "经济学家",
        "rank": "正处级",
        "startYear": 1993,
        "startMonth": 7,
        "endYear": 1998,
        "endMonth": 8,
        "isDerived": false,
        "notes": "从事发展中国家宏观经济与金融深化课题研究",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
      },
      {
        "id": "fxh-2",
        "unitId": "csrc-main",
        "unitName": "建设银行 / 银河证券",
        "department": "高管层",
        "position": "建行行长助理、银河证券监事会主席",
        "rank": "正厅局级",
        "startYear": 1998,
        "startMonth": 8,
        "endYear": 2001,
        "endMonth": 7,
        "isDerived": false,
        "notes": "参与中国银河证券重组设立与国有大行商业化运营改革",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "fxh-3",
        "unitId": "csrc-sse",
        "unitName": "上海证券交易所",
        "department": "高管层",
        "position": "党委委员、副总经理",
        "rank": "正厅局级",
        "startYear": 2001,
        "startMonth": 7,
        "endYear": 2005,
        "endMonth": 12,
        "isDerived": false,
        "notes": "推动上交所金融衍生品研发、ETF产品线布局与大盘蓝筹股市场建设",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "fxh-4",
        "unitId": "gov-sh-prov",
        "unitName": "上海市人民政府 / 上海市委金融工委",
        "department": "上海市金融服务办公室",
        "position": "上海市金融工委副书记、金融服务办公室主任",
        "rank": "正厅局级",
        "startYear": 2005,
        "startMonth": 12,
        "endYear": 2013,
        "endMonth": 5,
        "isDerived": false,
        "notes": "深度主导“上海国际金融中心”建设纲要制定，推动原油期货等国家重大战略平台筹备",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "fxh-5",
        "unitId": "csrc-main",
        "unitName": "中央财办",
        "department": "经济一组 / 国际经济局",
        "position": "局长",
        "rank": "正厅局级",
        "startYear": 2013,
        "startMonth": 5,
        "endYear": 2015,
        "endMonth": 10,
        "isDerived": false,
        "notes": "参与国家高层宏观经济与重大金融改革决策咨询起草",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "fxh-6",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "党委委员、副主席",
        "rank": "副部级",
        "startYear": 2015,
        "startMonth": 10,
        "endYear": 2024,
        "endMonth": 7,
        "isDerived": false,
        "notes": "出任副主席近九年，长期分管国际部、期货部、会计部，推动A股纳入MSCI、富时罗素等国际指数，落地境内原油、铁矿石期货国际化，开通沪伦通",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "斯坦福大学经济学博士。中国金融界最具国际声誉的学者型官员之一，曾任世界银行经济学家、上交所副总经理、上海金融办主任、中央财办国际经济局局长。2015年10月至2024年7月任中国证监会副主席，全力推进资本市场高水平对外开放与大宗期货衍生品国际化。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "retired",
    "servingStatusLabel": "到龄免职退休",
    "servingStatusNote": "2024年7月因年满60周岁到龄，国务院免去其中国证监会副主席职务，正常退休。",
    "statusBadgeColor": "slate"
  },
  {
    "id": "fan-dazhi",
    "name": "樊大志",
    "avatarUrl": "/avatars/fan-dazhi.jpg",
    "gender": "男",
    "birthYear": 1964,
    "birthMonth": 9,
    "nativePlace": "北京",
    "currentUnitId": "csrc-main",
    "currentPosition": "中央纪委国家监委驻中国证监会纪检监察组组长、党委委员",
    "currentRank": "副部级",
    "education": [
      {
        "degree": "学士",
        "school": "东北财经大学",
        "major": "金融系",
        "graduationYear": 1987,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "东北财经大学",
        "major": "金融学博士",
        "graduationYear": 2008,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "fdz-1",
        "unitId": "csrc-main",
        "unitName": "东北证券 / 北京证券",
        "department": "高管层",
        "position": "投资银行部总经理、总监、瑞泰人寿董事长",
        "rank": "正处级",
        "startYear": 1987,
        "startMonth": 7,
        "endYear": 2004,
        "endMonth": 4,
        "isDerived": true,
        "sourceNote": "根据证券公司高管人员公开任职履历与工商登记考证",
        "notes": "主持券商投资银行、资金运营及合资金融机构筹备",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据证券公司高管人员公开任职履历与工商登记考证"
        }
      },
      {
        "id": "fdz-2",
        "unitId": "csrc-main",
        "unitName": "北京银行",
        "department": "行领导班子",
        "position": "党委委员、副行长",
        "rank": "正厅局级",
        "startYear": 2004,
        "startMonth": 4,
        "endYear": 2007,
        "endMonth": 12,
        "isDerived": false,
        "notes": "分管信贷审批与风险合规，助力北京银行完成更名改制并成功在上交所主板IPO上市",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "fdz-3",
        "unitId": "csrc-main",
        "unitName": "华夏银行",
        "department": "总行领导班子",
        "position": "党委副书记、行长、党委书记、董事长",
        "rank": "正厅局级",
        "startYear": 2007,
        "startMonth": 12,
        "endYear": 2016,
        "endMonth": 12,
        "isDerived": false,
        "notes": "全面主持全国性股份制商业银行经营管理与党委工作近十年，深入推动中小企业特色金融战略",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "fdz-4",
        "unitId": "csrc-main",
        "unitName": "中国银行",
        "department": "总行纪委",
        "position": "中央纪委驻中国银行纪检组组长",
        "rank": "副部级",
        "startYear": 2016,
        "startMonth": 12,
        "endYear": 2019,
        "endMonth": 4,
        "isDerived": false,
        "notes": "负责大型国有商业银行党风廉政建设与反腐败监督执纪",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
      },
      {
        "id": "fdz-5",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "纪检监察组 / 党委班子",
        "position": "中央纪委国家监委驻中国证监会纪检监察组组长、党委委员",
        "rank": "副部级",
        "startYear": 2019,
        "startMonth": 4,
        "endYear": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "二十届中央纪委委员。深耕资本市场反腐，强力推进“政商旋转门”、“逃逸式辞职”专项整治，深挖发审审核与监管审批领域腐败违纪案件",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
      }
    ],
    "bioSummary": "二十届中央纪委委员，经济学博士，高级经济师。资深金融高管与纪检监察官员，曾任北京银行副行长、华夏银行董事长、中央纪委驻中国银行纪检组长。2019年4月出任中央纪委国家监委驻中国证监会纪检监察组组长、证监会党委委员，以铁腕手段推进资本市场全链条反腐与“政商旋转门”治理。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 95,
      "label": "权威官方认证",
      "source": "中国证监会官方履历档案与金融机构法定披露"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "yan-qingmin",
    "name": "阎庆民",
    "avatarUrl": "/avatars/yan-qingmin.jpg",
    "gender": "男",
    "birthYear": 1961,
    "birthMonth": 5,
    "nativePlace": "山西天镇",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会原党委委员、副主席",
    "currentRank": "副部级",
    "education": [
      {
        "degree": "学士",
        "school": "西南财经大学",
        "major": "金融系学士",
        "graduationYear": 1984,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "中国人民大学",
        "major": "经济学博士",
        "graduationYear": 2002,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国人民大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "博士",
        "school": "清华大学",
        "major": "管理学博士",
        "graduationYear": 2005,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "清华大学知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "yqm-1",
        "unitId": "pbc",
        "unitName": "中国人民银行",
        "department": "重庆营业管理部",
        "position": "党委书记、主任兼国家外汇局重庆外汇管理部主任",
        "rank": "正厅局级",
        "startYear": 1998,
        "startMonth": 11,
        "endYear": 2003,
        "endMonth": 7,
        "isDerived": false,
        "notes": "主管直辖市重庆中央银行货币监管业务与跨区域资金统筹",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "yqm-2",
        "unitId": "cbirc",
        "unitName": "中国银监会",
        "department": "银行监管一部 / 党委班子",
        "position": "主任、主席助理、党委委员、副主席",
        "rank": "副部级",
        "startYear": 2003,
        "startMonth": 7,
        "endYear": 2014,
        "endMonth": 12,
        "isDerived": false,
        "notes": "主管四大国有商业银行审慎监管，推动建立大型银行全球系统重要性评估体系",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "yqm-3",
        "unitId": "gov-tj-prov",
        "unitName": "天津市人民政府",
        "department": "直辖市政府领导班子",
        "position": "副市长、党组成员",
        "rank": "副部级",
        "startYear": 2014,
        "startMonth": 12,
        "endYear": 2017,
        "endMonth": 12,
        "isDerived": false,
        "notes": "分管天津金融、自贸区建设与海河产业基金运作",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
      },
      {
        "id": "yqm-4",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "党委委员、副主席",
        "rank": "副部级",
        "startYear": 2017,
        "startMonth": 12,
        "endYear": 2021,
        "endMonth": 12,
        "isDerived": false,
        "notes": "分管上市公司监管司，推动《国务院关于进一步提高上市公司质量的意见》落地，力推常态化退市机制",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "双博士（经济学博士、管理学博士）。曾任银监会副主席、天津市副市长，2017年12月至2021年12月任中国证监会副主席，主导多项提升上市公司治理质量与化解股票质押风险专项行动。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "retired",
    "servingStatusLabel": "到龄退休",
    "servingStatusNote": "2021年12月因年满60周岁到龄，免去中国证监会副主席职务，正常退休。",
    "statusBadgeColor": "slate"
  },
  {
    "id": "jiang-yang",
    "name": "姜洋",
    "avatarUrl": "/avatars/jiang-yang.jpg",
    "gender": "男",
    "birthYear": 1956,
    "birthMonth": 9,
    "nativePlace": "四川涪陵",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会原党委委员、副主席",
    "currentRank": "副部级",
    "education": [
      {
        "degree": "学士",
        "school": "电子科技大学",
        "major": "工学学士",
        "graduationYear": 1982,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "中国社会科学院研究生院",
        "major": "经济学博士",
        "graduationYear": 1999,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "jy-1",
        "unitId": "pbc",
        "unitName": "经济日报 / 央行",
        "department": "办公厅新闻处 / 非银司",
        "position": "处长、副司长",
        "rank": "副厅局级",
        "startYear": 1982,
        "startMonth": 7,
        "endYear": 1998,
        "endMonth": 7,
        "isDerived": false,
        "notes": "早期参与非银行金融机构信托证券整顿与金融宏观宣传",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "jy-2",
        "unitId": "csrc-jg",
        "unitName": "中国证监会",
        "department": "机构监管部",
        "position": "主任",
        "rank": "正厅局级",
        "startYear": 1998,
        "startMonth": 7,
        "endYear": 2001,
        "endMonth": 7,
        "isDerived": false,
        "notes": "主持全国证券公司日常监管业务规范与资质审查",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "jy-3",
        "unitId": "csrc-shfe",
        "unitName": "上海期货交易所",
        "department": "党委 / 高管层",
        "position": "党委书记、总经理",
        "rank": "正厅局级",
        "startYear": 2001,
        "startMonth": 7,
        "endYear": 2006,
        "endMonth": 7,
        "isDerived": false,
        "notes": "推动上期所铜、铝、天胶等工业品期货发展成为具有国际定价影响力的标杆市场",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "jy-4",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "主席助理、党委委员、副主席",
        "rank": "副部级",
        "startYear": 2006,
        "startMonth": 7,
        "endYear": 2018,
        "endMonth": 6,
        "isDerived": false,
        "notes": "历任主席助理与副主席十二载，主导期货市场五部规章立法，开通原油期货等国际化品种",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "经济学博士。中国期货衍生品市场重要奠基人，曾任证监会机构部主任、上期所总经理，2006年7月起任证监会主席助理，2012年8月至2018年6月任证监会副主席，主导中国期货市场跨越式发展。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "retired",
    "servingStatusLabel": "正常退休",
    "servingStatusNote": "曾任证监会党委委员、副主席，2018年到龄退休，曾任第十三届全国政协经济委员会委员。",
    "statusBadgeColor": "slate"
  },
  {
    "id": "zhuang-xinyi",
    "name": "庄心一",
    "avatarUrl": "/avatars/zhuang-xinyi.jpg",
    "gender": "男",
    "birthYear": 1955,
    "birthMonth": 4,
    "nativePlace": "上海",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会原党委委员、副主席",
    "currentRank": "副部级",
    "education": [
      {
        "degree": "硕士",
        "school": "中国社会科学院研究生院",
        "major": "经济学硕士",
        "graduationYear": 1989,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "中国社会科学院研究生院",
        "major": "经济学博士",
        "graduationYear": 1999,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "zxy-1",
        "unitId": "csrc-main",
        "unitName": "建设银行 / 国务院证券委",
        "department": "信贷部 / 办公室",
        "position": "处长、副主任",
        "rank": "副厅局级",
        "startYear": 1982,
        "startMonth": 7,
        "endYear": 1995,
        "endMonth": 10,
        "isDerived": false,
        "notes": "参与国家早期证券市场政策拟定与统筹监管协调",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "zxy-2",
        "unitId": "csrc-szse",
        "unitName": "深圳证券交易所",
        "department": "党委 / 高管层",
        "position": "党委副书记、总经理",
        "rank": "正厅局级",
        "startYear": 1995,
        "startMonth": 10,
        "endYear": 1997,
        "endMonth": 10,
        "isDerived": false,
        "notes": "主持深交所日常运作与技术升级，应对特大市场行情波动",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "zxy-3",
        "unitId": "gov-gd-city",
        "unitName": "广东省深圳市人民政府",
        "department": "副省级计划单列市政府班子",
        "position": "副市长、党组成员",
        "rank": "正厅局级",
        "startYear": 1997,
        "startMonth": 10,
        "endYear": 2002,
        "endMonth": 7,
        "isDerived": false,
        "notes": "分管深圳市金融、国资等工作，推动高新技术成果交易会创立",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
      },
      {
        "id": "zxy-4",
        "unitId": "csrc-sac",
        "unitName": "中国证券业协会",
        "department": "协会领导",
        "position": "党委书记、会长",
        "rank": "正厅局级",
        "startYear": 2002,
        "startMonth": 7,
        "endYear": 2005,
        "endMonth": 2,
        "isDerived": false,
        "notes": "主持中证协全面工作，开启证券行业合规文化与自律框架设计",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "zxy-5",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "党委委员、副主席",
        "rank": "副部级",
        "startYear": 2005,
        "startMonth": 2,
        "endYear": 2015,
        "endMonth": 8,
        "isDerived": false,
        "notes": "副主席任期长达十年，主抓全行业券商综合治理，化解30余家券商流动性穿透风险，重塑券商合规合账体制",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "经济学博士。中国证券监管史核心操盘手，曾任深交所总经理、深圳市副市长、中证协会长。2005年至2015年任中国证监会副主席，以极其坚韧的魄力主持全行业证券公司综合治理并大获全胜。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "retired",
    "servingStatusLabel": "正常退休",
    "servingStatusNote": "曾任证监会副主席、中国建投监事长，2015年到龄正常退休。",
    "statusBadgeColor": "slate"
  },
  {
    "id": "gui-minjie",
    "name": "桂敏杰",
    "avatarUrl": "/avatars/gui-minjie.jpg",
    "gender": "男",
    "birthYear": 1953,
    "birthMonth": 12,
    "nativePlace": "吉林吉林",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会原党委副书记、副主席，上交所原理事长",
    "currentRank": "副部级",
    "education": [
      {
        "degree": "学士",
        "school": "中国政法大学",
        "major": "法律系",
        "graduationYear": 1982,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国政法大学知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "gmj-1",
        "unitId": "csrc-main",
        "unitName": "国务院法制局 / 证监会办公厅",
        "department": "财金法规司 / 办公室",
        "position": "副司长、办公室主任",
        "rank": "正厅局级",
        "startYear": 1982,
        "startMonth": 7,
        "endYear": 1998,
        "endMonth": 4,
        "isDerived": false,
        "notes": "中国证券法制化核心起草人之一",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "gmj-2",
        "unitId": "csrc-szse",
        "unitName": "深圳证券交易所",
        "department": "党委 / 高管层",
        "position": "党委书记、总经理",
        "rank": "正厅局级",
        "startYear": 1998,
        "startMonth": 4,
        "endYear": 2001,
        "endMonth": 5,
        "isDerived": false,
        "notes": "主持深交所日常经营，平稳推进交易结算系统升级",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "gmj-3",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "主席助理、副主席、党委副书记",
        "rank": "副部级",
        "startYear": 2001,
        "startMonth": 5,
        "endYear": 2012,
        "endMonth": 4,
        "isDerived": false,
        "notes": "担任副主席十年，长期分管发行部、市场部、基金部等核心板块，协助推进股权分置改革",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "gmj-4",
        "unitId": "csrc-sse",
        "unitName": "上海证券交易所",
        "department": "党委 / 理事会",
        "position": "党委书记、理事长",
        "rank": "副部级",
        "startYear": 2012,
        "startMonth": 4,
        "endYear": 2016,
        "endMonth": 5,
        "isDerived": false,
        "notes": "出任上交所理事长，主导推出“沪港通”和股票期权交易试点",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "中国资本市场法制建设拓荒者之一，曾任国务院法制局财金司副司长、深交所总经理、中国证监会党委副书记、常务副主席，上交所理事长，亲历并主导了股权分置改革、沪港通及股票期权落地。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "retired",
    "servingStatusLabel": "正常退休",
    "servingStatusNote": "曾任证监会党委副书记、副主席、上交所理事长，2016年到龄正常退休。",
    "statusBadgeColor": "slate"
  },
  {
    "id": "gao-xiqing",
    "name": "高西庆",
    "avatarUrl": "/avatars/gao-xiqing.jpg",
    "gender": "男",
    "birthYear": 1953,
    "birthMonth": 9,
    "nativePlace": "陕西西安",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会原副主席，中投公司原总经理",
    "currentRank": "副部级",
    "education": [
      {
        "degree": "学士",
        "school": "对外经济贸易大学",
        "major": "外贸英语学士",
        "graduationYear": 1978,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "对外经济贸易大学",
        "major": "国际经济法硕士",
        "graduationYear": 1981,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "美国杜克大学法学院",
        "major": "法学博士（J.D.）",
        "graduationYear": 1986,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "美国杜克大学法学院知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "gxq-1",
        "unitId": "csrc-main",
        "unitName": "中国证监会初创期",
        "department": "首任首席律师 / 发行部",
        "position": "首席律师兼发行监管部主任",
        "rank": "正厅局级",
        "startYear": 1992,
        "startMonth": 10,
        "endYear": 1995,
        "endMonth": 12,
        "isDerived": false,
        "notes": "作为“股票市场九人联称建议”发起起草人之一，起草中国证监会初代章程与发行监管审核规则",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "gxq-2",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "副主席、党委委员",
        "rank": "副部级",
        "startYear": 1999,
        "startMonth": 7,
        "endYear": 2002,
        "endMonth": 12,
        "isDerived": false,
        "notes": "分管市场监管与对外开放，积极引进外资战略投资者与推行国际化信息披露准则",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "gxq-3",
        "unitId": "csrc-main",
        "unitName": "全国社保基金理事会",
        "department": "党组 / 会领导",
        "position": "副理事长、党组成员",
        "rank": "副部级",
        "startYear": 2003,
        "startMonth": 1,
        "endYear": 2007,
        "endMonth": 9,
        "isDerived": false,
        "notes": "主导全国社保基金海外投资与境内股权直投合规风控体系搭建",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "gxq-4",
        "unitId": "csrc-main",
        "unitName": "中国投资有限责任公司",
        "department": "执委会 / 领导班子",
        "position": "党委副书记、副董事长、总经理兼首席投资官",
        "rank": "副部级",
        "startYear": 2007,
        "startMonth": 9,
        "endYear": 2014,
        "endMonth": 2,
        "isDerived": false,
        "notes": "作为中国主权财富基金中投公司首任总经理，开拓并建立世界级主权基金全球多资产配置体系",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "杜克大学法学博士（J.D.）。新中国首批获美国纽约州律师执业资格学者，中国资本市场核心创建者之一。曾任证监会首任首席律师、发行部主任、证监会副主席、中投公司首任总经理兼首席投资官。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "retired",
    "servingStatusLabel": "正常退休",
    "servingStatusNote": "曾任证监会副主席、中投公司副董事长兼总经理，现已退休，任清华大学法学院教授。",
    "statusBadgeColor": "slate"
  },
  {
    "id": "zhou-xiaochuan",
    "name": "周小川",
    "avatarUrl": "/avatars/zhou-xiaochuan.jpg",
    "gender": "男",
    "birthYear": 1948,
    "birthMonth": 1,
    "nativePlace": "江苏宜兴",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会原党委书记、主席，央行原行长",
    "currentRank": "副部级",
    "education": [
      {
        "degree": "学士",
        "school": "北京化工学院",
        "major": "化学工程系",
        "graduationYear": 1975,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "清华大学",
        "major": "自动化系系统工程工学博士",
        "graduationYear": 1985,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "清华大学知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "zxc-1",
        "unitId": "csrc-main",
        "unitName": "外经贸部 / 中国银行 / 外汇局",
        "department": "领导班子",
        "position": "外经贸部部长助理、中行副行长、外汇局局长、央行副行长、建行行长",
        "rank": "副部级",
        "startYear": 1986,
        "startMonth": 11,
        "endYear": 2000,
        "endMonth": 2,
        "isDerived": false,
        "notes": "主持外汇体制重大改革、人民币经常项目可兑换及国有大型商业银行商业化重组",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "zxc-2",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "领导班子",
        "position": "党委书记、主席",
        "rank": "正部级",
        "startYear": 2000,
        "startMonth": 2,
        "endYear": 2002,
        "endMonth": 12,
        "isDerived": false,
        "notes": "出任第四任证监会主席，引入现代国际监管机制，果断推行股票发行核准制取代行政审批制、建立上市公司退市机制、引入合格境外机构投资者（QFII）",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "zxc-3",
        "unitId": "pbc",
        "unitName": "中国人民银行",
        "department": "行党委 / 领导班子",
        "position": "行长、党委书记（十二届全国政协副主席）",
        "rank": "副部级",
        "startYear": 2002,
        "startMonth": 12,
        "endYear": 2018,
        "endMonth": 3,
        "isDerived": false,
        "notes": "执掌中国中央银行十六载，主导利率市场化、汇率形成机制改革、人民币加入国际货币基金组织SDR货币篮子",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "清华大学工学博士。全球享有崇高声望的改革家与央行行长。2000年2月至2002年12月任中国证监会主席，推行股票发行核准制、上市公司退市机制并开创性引入QFII制度，奠定中国现代资本市场制度基石。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "retired",
    "servingStatusLabel": "正常退休",
    "servingStatusNote": "曾任证监会主席、中国人民银行行长、全国政协副主席，现已正常退休。",
    "statusBadgeColor": "slate"
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
        "graduationYear": 2000,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "中国社会科学院研究生院",
        "major": "西方经济学",
        "graduationYear": 2003,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
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
        "notes": "负责公司债券监管与制度建设，推进民企债券融资支持工具与资产证券化试点",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公司债券市场监管发言、学术论文发表及政策吹风会报道推导"
        }
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
        "notes": "分管债券业务、基础设施公募REITs试点推进及科创板相关业务",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "notes": "主持中证数据全面工作，推进资本市场监管大数据中心建设与穿透式监管科技底座运行",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/lu-dabiao.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1998,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "厦门大学",
        "major": "工商管理 (MBA)",
        "graduationYear": 2005,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/peng-ming.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1997,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国人民大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "博士",
        "school": "中国人民大学劳动人事学院",
        "major": "经济学",
        "graduationYear": 2004,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国人民大学劳动人事学院知名校友档案及法定公开发表学位论文登记"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      }
    ],
    "avatarUrl": "/avatars/zhang-wangjun.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 95,
      "label": "权威官方认证",
      "source": "中国证监会官方履历档案与金融机构法定披露"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "zhou-xiaozhou",
    "name": "周小舟",
    "avatarUrl": "/avatars/zhou-xiaozhou.jpg",
    "gender": "男",
    "birthYear": 1974,
    "birthMonth": 6,
    "nativePlace": "四川",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会综合业务司司长",
    "currentRank": "正厅局级",
    "education": [
      {
        "degree": "学士",
        "school": "西南财经大学",
        "major": "经济学学士",
        "graduationYear": 1996,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "北京大学光华管理学院",
        "major": "管理学博士",
        "graduationYear": 2004,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "zxz-1",
        "unitId": "csrc-fx",
        "unitName": "中国证监会",
        "department": "发行监管部",
        "position": "副处长、处长",
        "rank": "正处级",
        "startYear": 2004,
        "startMonth": 7,
        "endYear": 2016,
        "endMonth": 5,
        "isDerived": false,
        "notes": "参与股票再融资与重大资产重组审核规则拟订",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
      },
      {
        "id": "zxz-2",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "公司债券监管部 / 公司债券监管司",
        "position": "副主任、主任、司长",
        "rank": "正厅局级",
        "startYear": 2016,
        "startMonth": 5,
        "endYear": 2023,
        "endMonth": 11,
        "isDerived": false,
        "notes": "主持全国交易所债券市场与基础设施REITs常态化制度设计，推进企业信用债券统一标准",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "zxz-3",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "综合业务司",
        "position": "司长",
        "rank": "正厅局级",
        "startYear": 2023,
        "startMonth": 11,
        "endYear": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "统管证监会全系统宏观政策综合协调、资本市场重大顶层设计落地与金融“五篇大文章”推进",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      }
    ],
    "bioSummary": "北京大学光华管理学院管理学博士。曾任证监会公司债券监管部主任，现任中国证监会综合业务司司长，长期负责资本市场重大战略顶层政策规划与公募REITs常态化机制推进。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 95,
      "label": "权威官方认证",
      "source": "中国证监会官方履历档案与金融机构法定披露"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1996,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "东北财经大学",
        "major": "经济学",
        "graduationYear": 1999,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "财政部财政科学研究所",
        "major": "财政学",
        "graduationYear": 2004,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/sui-qiang.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 95,
      "label": "权威官方认证",
      "source": "中国证监会官方履历档案与金融机构法定披露"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1994,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "西安交通大学",
        "major": "金融学",
        "graduationYear": 2001,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      }
    ],
    "avatarUrl": "/avatars/xing-xiangfei.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1994,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "清华大学经济管理学院",
        "major": "工商管理",
        "graduationYear": 2001,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "清华大学经济管理学院知名校友档案及法定公开发表学位论文登记"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      }
    ],
    "avatarUrl": "/avatars/guo-ruiming.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 95,
      "label": "权威官方认证",
      "source": "中国证监会官方履历档案与金融机构法定披露"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1993,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "中国人民大学",
        "major": "财政金融",
        "graduationYear": 1996,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国人民大学知名校友档案及法定公开发表学位论文登记"
        }
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
        "notes": "主管证券公司业务创新与融资融券试点业务规范",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据证券公司融资融券业务试点审批及监管规章公开报道反推"
        }
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
        "notes": "主导设计转融通业务系统流程并牵头多项资本市场国家与行业数据标准制定",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据中证金融设立筹备历程及金融标准化成果推导"
        }
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
        "notes": "主持中证金融日常经营管理，主导证券金融大数据统计分析平台开发建设",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/wu-xiaoyong.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1992,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "中国科学院大学",
        "major": "工学",
        "graduationYear": 1995,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/zhou-guihua.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 95,
      "label": "权威官方认证",
      "source": "中国证监会官方履历档案与金融机构法定披露"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1992,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "西南财经大学",
        "major": "经济学",
        "graduationYear": 1998,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/tang-libin.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "yao-qian",
    "name": "姚前",
    "avatarUrl": "/avatars/yao-qian.jpg",
    "gender": "男",
    "birthYear": 1970,
    "birthMonth": 1,
    "nativePlace": "安徽",
    "currentUnitId": "csrc-kj",
    "currentPosition": "中国证监会科技监管司原司长（已免职）",
    "currentRank": "正厅局级",
    "education": [
      {
        "degree": "学士",
        "school": "南京大学",
        "major": "计算机科学系",
        "graduationYear": 1992,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "南京大学",
        "major": "信息管理系工学博士",
        "graduationYear": 2004,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "yq-1",
        "unitId": "csrc-csdc",
        "unitName": "中国证监会 / 中国结算",
        "department": "信息中心 / 技术开发部",
        "position": "高级工程师、技术总监",
        "rank": "副厅局级",
        "startYear": 1997,
        "startMonth": 7,
        "endYear": 2010,
        "endMonth": 12,
        "isDerived": false,
        "notes": "参与早期全市场证券统一登记结算系统与信息中心数据库建设",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
      },
      {
        "id": "yq-2",
        "unitId": "pbc",
        "unitName": "中国人民银行",
        "department": "科技司 / 数字货币研究所",
        "position": "副司长、首任所长",
        "rank": "正厅局级",
        "startYear": 2010,
        "startMonth": 12,
        "endYear": 2018,
        "endMonth": 10,
        "isDerived": false,
        "notes": "领导创建央行数字货币研究所，主导中国法定数字货币（e-CNY）顶层原型设计与区块链前瞻研究",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "yq-3",
        "unitId": "csrc-csdc",
        "unitName": "中国证券登记结算有限责任公司",
        "department": "领导班子",
        "position": "党委副书记、总经理",
        "rank": "正厅局级",
        "startYear": 2018,
        "startMonth": 10,
        "endYear": 2019,
        "endMonth": 12,
        "isDerived": false,
        "notes": "主持中国结算日常运行与结算备付金制度优化",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "yq-4",
        "unitId": "csrc-kj",
        "unitName": "中国证监会",
        "department": "科技监管局 / 科技监管司",
        "position": "局长、司长兼信息中心主任",
        "rank": "正厅局级",
        "startYear": 2019,
        "startMonth": 12,
        "endYear": 2024,
        "endMonth": 4,
        "isDerived": false,
        "notes": "主导全系统监管科技三年规划。2024年4月因涉嫌严重违纪违法接受审查调查，2024年11月被依法双开",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "南京大学工学博士。曾任中国人民银行数字货币研究所首任所长、中国结算总经理、证监会科技监管司司长兼信息中心主任。在央行法定数字货币技术研究方面颇具知名度，2024年因严重违纪违法被双开。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 95,
      "label": "权威官方认证",
      "source": "中国证监会官方履历档案与金融机构法定披露"
    },
    "isCurrentServing": false,
    "servingStatus": "investigated",
    "servingStatusLabel": "开除党籍公职 / 涉嫌受贿犯罪",
    "servingStatusNote": "2024年11月中央纪委国家监委驻中国证监会纪检监察组通报：构成严重职务违法并涉嫌受贿犯罪，给予开除党籍、开除公职处分，收缴违纪违法所得，移送检察机关依法审查起诉。",
    "statusBadgeColor": "rose"
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
        "graduationYear": 1992,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "中南财经政法大学",
        "major": "金融学",
        "graduationYear": 1995,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中南财经政法大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "博士",
        "school": "中国人民大学",
        "major": "经济学",
        "graduationYear": 2003,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国人民大学知名校友档案及法定公开发表学位论文登记"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/xiong-jun.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1992,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "中国人民大学",
        "major": "金融学",
        "graduationYear": 1999,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国人民大学知名校友档案及法定公开发表学位论文登记"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      }
    ],
    "avatarUrl": "/avatars/shen-bing.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 95,
      "label": "权威官方认证",
      "source": "中国证监会官方履历档案与金融机构法定披露"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1992,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "吉林大学",
        "major": "经济学",
        "graduationYear": 1995,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
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
        "notes": "主持证监会干部人事与组织工作，多次代表证监会党委赴各大交易所和会管单位宣布干部任免决定",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据2013-2023年系统重要干部大会宣读任免报道及组织任职动态推导"
        }
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
        "notes": "2023年11月接替胡政出任广期所第二任党委书记、董事长，主导推进新能源金属期货品种体系建设",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/gao-weibing.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "yan-bojin",
    "name": "严伯进",
    "avatarUrl": "/avatars/yan-bojin.jpg",
    "gender": "男",
    "birthYear": 1969,
    "birthMonth": 9,
    "nativePlace": "浙江",
    "currentUnitId": "csrc-fx",
    "currentPosition": "中国证监会首席风险官兼发行监管司司长",
    "currentRank": "正厅局级",
    "education": [
      {
        "degree": "学士",
        "school": "复旦大学",
        "major": "经济学学士",
        "graduationYear": 1991,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "复旦大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "博士",
        "school": "复旦大学",
        "major": "经济学博士",
        "graduationYear": 2002,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "复旦大学知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "ybj-1",
        "unitId": "csrc-sh",
        "unitName": "中国证监会上海监管局",
        "department": "局领导班子",
        "position": "党委委员、副局长",
        "rank": "副厅局级",
        "startYear": 2005,
        "startMonth": 6,
        "endYear": 2012,
        "endMonth": 4,
        "isDerived": false,
        "notes": "分管上海辖区上市公司监管与拟上市公司辅导验收",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "ybj-2",
        "unitId": "csrc-ah",
        "unitName": "中国证监会安徽监管局",
        "department": "局领导班子",
        "position": "党委书记、局长",
        "rank": "正厅局级",
        "startYear": 2012,
        "startMonth": 4,
        "endYear": 2014,
        "endMonth": 9,
        "isDerived": false,
        "notes": "全面主持安徽辖区资本市场一线监管与风险处置",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "ybj-3",
        "unitId": "csrc-sh",
        "unitName": "中国证监会上海监管局",
        "department": "局领导班子",
        "position": "党委书记、局长兼上海稽查局局长",
        "rank": "正厅局级",
        "startYear": 2014,
        "startMonth": 9,
        "endYear": 2020,
        "endMonth": 6,
        "isDerived": false,
        "notes": "主政上海证监局近六年，深度参与并全力保障设立科创板并试点注册制在上海顺利起航",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "ybj-4",
        "unitId": "csrc-fx",
        "unitName": "中国证监会",
        "department": "发行监管司（原发行部）",
        "position": "发行部主任、首席风险官兼发行监管司司长",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 6,
        "endYear": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "出任全市场发行审核总把关人，主导推进全面股票发行注册制审核，严把IPO准入关，强化现场检查与发行逆周期调节",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      }
    ],
    "bioSummary": "复旦大学经济学博士。历任上海证监局副局长、安徽证监局局长、上海证监局局长（2014-2020）。2020年6月调任证监会发行部主任，现任中国证监会首席风险官兼发行监管司司长，全面掌管全市场股票发行注册把关。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 95,
      "label": "权威官方认证",
      "source": "中国证监会官方履历档案与金融机构法定披露"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1991,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "中国社科院研究生院",
        "major": "金融学",
        "graduationYear": 2001,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国社科院研究生院知名校友档案及法定公开发表学位论文登记"
        }
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
        "notes": "长期在地方派出机构负责党风廉政建设与一线市场监管",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据地方监管局公开工作动态与纪检监察报道推导任职跨度"
        }
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
        "notes": "主持江西证监局全面工作，推动辖区多层次资本市场发展与风险防控",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据江西证监局政务公开信息及地方调研新闻推导"
        }
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
        "notes": "2021年6月起任中金所党委书记、董事长，推动30年期国债期货、上证50与中证1000股指期权平稳上市运行",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/he-qingwen.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1991,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "华东政法大学知名校友档案及法定公开发表学位论文登记"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/he-yanchun.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "ran-hua",
    "name": "冉华",
    "avatarUrl": "/avatars/ran-hua.jpg",
    "gender": "男",
    "birthYear": 1969,
    "birthMonth": 12,
    "nativePlace": "四川酉阳",
    "currentUnitId": "csrc-bj",
    "currentPosition": "中国证监会北京监管局党委书记、局长",
    "currentRank": "正厅局级",
    "education": [
      {
        "degree": "学士",
        "school": "西南大学",
        "major": "经济学学士",
        "graduationYear": 1992,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "中国社会科学院研究生院",
        "major": "金融学博士",
        "graduationYear": 2004,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "rh-1",
        "unitId": "csrc-qh",
        "unitName": "中国证监会",
        "department": "人事教育部 / 期货监管部",
        "position": "干部、副处长、处长、副主任",
        "rank": "副厅局级",
        "startYear": 1997,
        "startMonth": 7,
        "endYear": 2011,
        "endMonth": 8,
        "isDerived": false,
        "notes": "长期从事期货交易所日常监管与期货经纪机构合规风控规章制定",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "rh-2",
        "unitId": "csrc-cfmmc",
        "unitName": "中国期货保证金监控中心",
        "department": "高管层",
        "position": "党委书记、总经理",
        "rank": "正厅局级",
        "startYear": 2011,
        "startMonth": 8,
        "endYear": 2014,
        "endMonth": 5,
        "isDerived": false,
        "notes": "全面主持期货投资者保证金安全监控，搭建穿透式实时监测系统",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "rh-3",
        "unitId": "csrc-qh",
        "unitName": "中国证监会",
        "department": "期货监管部",
        "position": "主任",
        "rank": "正厅局级",
        "startYear": 2014,
        "startMonth": 5,
        "endYear": 2017,
        "endMonth": 7,
        "isDerived": false,
        "notes": "主持全国期货市场监管全面工作，严密防范商品期货大幅异动风险",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "rh-4",
        "unitId": "gov-js-city",
        "unitName": "江苏省南京市人民政府",
        "department": "副省级省会城市政府班子",
        "position": "副市长、党组成员",
        "rank": "正厅局级",
        "startYear": 2017,
        "startMonth": 7,
        "endYear": 2020,
        "endMonth": 6,
        "isDerived": false,
        "notes": "分管南京金融监管、国资国企及战略性新兴产业投融资",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
      },
      {
        "id": "rh-5",
        "unitId": "csrc-dce",
        "unitName": "大连商品交易所",
        "department": "党委 / 理事会",
        "position": "党委书记、理事长",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 6,
        "endYear": 2024,
        "endMonth": 12,
        "isDerived": false,
        "notes": "执掌大商所逾四年，主导生猪期货等关键大宗衍生品上市，大幅提升大豆铁矿石国际定价影响力",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "rh-6",
        "unitId": "csrc-bj",
        "unitName": "中国证监会北京监管局",
        "department": "局领导班子",
        "position": "党委书记、局长",
        "rank": "正厅局级",
        "startYear": 2024,
        "startMonth": 12,
        "endYear": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "接棒主持首都北京辖区证券期货市场、海量上市公司与头部券商基金的一线属地全面监管工作",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "金融学博士，土家族。资深专家型金融监管官员，历任证监会期货部主任、中国期货保证金监控中心总经理、南京市副市长、大连商品交易所理事长。2024年底出任北京证监局党委书记、局长，全面主持首都资本市场一线监管与风险防控。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1991,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "复旦大学",
        "major": "经济学",
        "graduationYear": 1998,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "复旦大学知名校友档案及法定公开发表学位论文登记"
        }
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
        "notes": "参与中国证券金融股份有限公司筹备方案设计与转融通制度构建",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据中证金融筹备设立历史及干部履历公开资料推导"
        }
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
        "notes": "分管转融通业务运行、券商两融监测与资金运营",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "notes": "分管核心登记结算技术系统架构升级与多层次账户体系建设",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "notes": "主持中国结算日常经营管理，推进ETF互联互通结算与存托凭证互联互通",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/kong-qingwen.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1991,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "吉林大学",
        "major": "经济学",
        "graduationYear": 1997,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/zhu-lihong.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1991,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "西南政法大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "硕士",
        "school": "北京大学",
        "major": "法律硕士",
        "graduationYear": 2002,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      }
    ],
    "avatarUrl": "/avatars/li-zhibin.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 95,
      "label": "权威官方认证",
      "source": "中国证监会官方履历档案与金融机构法定披露"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1991,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "华东师范大学",
        "major": "金融学",
        "graduationYear": 2003,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/huo-ruirong.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1991,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "对外经济贸易大学",
        "major": "国际贸易",
        "graduationYear": 1996,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      }
    ],
    "avatarUrl": "/avatars/lu-dongsheng.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1990,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "中国人民大学",
        "major": "金融学",
        "graduationYear": 1996,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国人民大学知名校友档案及法定公开发表学位论文登记"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      }
    ],
    "avatarUrl": "/avatars/yan-shaoming.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1990,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "清华大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "硕士",
        "school": "清华大学经济管理学院",
        "major": "管理科学与工程",
        "graduationYear": 1993,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "清华大学经济管理学院知名校友档案及法定公开发表学位论文登记"
        }
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
        "notes": "负责上市公司会计监管制度与证券期货相关审计业务规范",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
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
        "notes": "参与中国结算组建，负责全国证券登记结算资金财务管理与结算交收机制建设",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
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
        "notes": "分管会计监管、内部控制规范与会计师事务所证券资格管理",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "notes": "主持中证信息全面工作，推进资本市场行业信息安全与大数据基础平台建设",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
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
        "notes": "主持中国结算日常经营管理与注册制改革登记结算支持",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "notes": "全面领导中国结算党委与董事会工作，推进货银对付（DVP）改革实施与跨境互联互通",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/yu-wenqiang.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1990,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "华东政法大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "博士",
        "school": "华东政法大学",
        "major": "国际法学",
        "graduationYear": 2001,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "华东政法大学知名校友档案及法定公开发表学位论文登记"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      }
    ],
    "avatarUrl": "/avatars/lu-wendao.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 95,
      "label": "权威官方认证",
      "source": "中国证监会官方履历档案与金融机构法定披露"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "lin-lin",
    "name": "林林",
    "avatarUrl": "/avatars/lin-lin.jpg",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 5,
    "nativePlace": "福建",
    "currentUnitId": "csrc-sh",
    "currentPosition": "中国证监会上海监管局党委书记、局长兼上海稽查局局长",
    "currentRank": "正厅局级",
    "education": [
      {
        "degree": "学士",
        "school": "厦门大学",
        "major": "经济系学士",
        "graduationYear": 1990,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "厦门大学",
        "major": "财政金融系经济学硕士",
        "graduationYear": 1996,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "ll-1",
        "unitId": "csrc-fj",
        "unitName": "中国证监会福建监管局",
        "department": "稽查处",
        "position": "处长、局长助理",
        "rank": "副厅局级",
        "startYear": 1998,
        "startMonth": 7,
        "endYear": 2012,
        "endMonth": 2,
        "isDerived": false,
        "notes": "长期扎根地方稽查办案一线，获中国证监会“稽查先进工作者”及全国证券期货系统劳动奖章",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "ll-2",
        "unitId": "csrc-fj",
        "unitName": "中国证监会福建监管局",
        "department": "局领导班子",
        "position": "党委委员、副局长",
        "rank": "副厅局级",
        "startYear": 2012,
        "startMonth": 2,
        "endYear": 2016,
        "endMonth": 5,
        "isDerived": false,
        "notes": "分管福建辖区上市公司监管与机构现场检查",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "ll-3",
        "unitId": "csrc-yn",
        "unitName": "中国证监会云南监管局",
        "department": "局领导班子",
        "position": "党委书记、局长",
        "rank": "正厅局级",
        "startYear": 2016,
        "startMonth": 5,
        "endYear": 2020,
        "endMonth": 8,
        "isDerived": false,
        "notes": "全面主持云南辖区证券期货市场监管与企业上市培育",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "ll-4",
        "unitId": "csrc-fj",
        "unitName": "中国证监会福建监管局",
        "department": "局领导班子",
        "position": "党委书记、局长",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 8,
        "endYear": 2024,
        "endMonth": 1,
        "isDerived": false,
        "notes": "重返福建主持全面工作，推动民营经济强省上市公司提质增效",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "ll-5",
        "unitId": "csrc-sh",
        "unitName": "中国证监会上海监管局",
        "department": "局领导班子",
        "position": "党委书记、局长兼上海稽查局局长",
        "rank": "正厅局级",
        "startYear": 2024,
        "startMonth": 1,
        "endYear": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "主政上海证监局，统领上海国际金融中心属地数百家上市公司、龙头券商及外资证券期货机构一线穿透监管",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "厦门大学经济学硕士。全国证券期货系统劳动奖章获得者，历任福建证监局副局长、云南证监局局长、福建证监局局长。2024年1月履新上海证监局党委书记、局长兼上海稽查局局长，执掌全国体量最大的地方监管局之一。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1990,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "西北工业大学",
        "major": "工学",
        "graduationYear": 1993,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
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
        "notes": "深耕宏观经济与资本市场中长期改革理论研究",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据宏观经济与资本市场研究成果发表及派出机构新闻推导"
        }
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
        "notes": "主持浙江证监局全面工作，推动'凤凰行动'升级与上市公司高质量发展",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
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
        "notes": "2022年4月出任上期所党委书记、理事长，推进大宗商品'全仓登'建设与高水平对外开放",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/tian-xiangyang.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "cheng-hehong",
    "name": "程合红",
    "avatarUrl": "/avatars/cheng-hehong.jpg",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 11,
    "nativePlace": "河南商丘",
    "currentUnitId": "csrc-fl",
    "currentPosition": "中国证监会法治司司长兼首席律师",
    "currentRank": "正厅局级",
    "education": [
      {
        "degree": "学士",
        "school": "郑州大学",
        "major": "法律系法学学士",
        "graduationYear": 1991,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "中国社会科学院研究生院",
        "major": "法学硕士",
        "graduationYear": 1994,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "博士",
        "school": "中国社会科学院研究生院",
        "major": "民商法学博士",
        "graduationYear": 1997,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "chh-1",
        "unitId": "csrc-fl",
        "unitName": "中国证监会",
        "department": "法律部",
        "position": "处长、副主任、巡视员",
        "rank": "正厅局级",
        "startYear": 1998,
        "startMonth": 7,
        "endYear": 2020,
        "endMonth": 6,
        "isDerived": false,
        "notes": "深耕法律部二十余年，作为核心立法专家深度主持《证券法》四次大修以及《期货和衍生品法》立法全过程起草",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "chh-2",
        "unitId": "csrc-sh",
        "unitName": "中国证监会上海监管局",
        "department": "局领导班子",
        "position": "党委书记、局长兼上海稽查局局长",
        "rank": "正厅局级",
        "startYear": 2020,
        "startMonth": 6,
        "endYear": 2024,
        "endMonth": 1,
        "isDerived": false,
        "notes": "主政上海证监局近四年，以法治化理念推动科创板持续深化试点与上海属地金融秩序规范",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "chh-3",
        "unitId": "csrc-fl",
        "unitName": "中国证监会",
        "department": "法治司（原法律部）",
        "position": "首席律师兼法治司司长",
        "rank": "正厅局级",
        "startYear": 2024,
        "startMonth": 1,
        "endYear": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "重回证监会机关执掌法治司与首席律师重任，全面统筹资本市场新一轮法律法规与重大执法案件法制审核",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      }
    ],
    "bioSummary": "中国社科院法学博士。中国证券期货立法权威专家，历任证监会法律部巡视员、上海证监局党委书记兼局长（2020-2024）。2024年1月调回会机关出任中国证监会首席律师兼法治司司长。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 95,
      "label": "权威官方认证",
      "source": "中国证监会官方履历档案与金融机构法定披露"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "lu-wenshan",
    "name": "陆文山",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 8,
    "nativePlace": "江苏",
    "currentUnitId": "csrc-shfe",
    "currentPosition": "上海期货交易所原监事长（已离任）",
    "currentRank": "正厅局级",
    "bioSummary": "法学硕士。历任上交所法律总监、证监会发行监管部副主任、上海期货交易所监事长、中国期货业协会副会长。",
    "education": [
      {
        "degree": "学士",
        "school": "西南政法大学",
        "major": "法学",
        "graduationYear": 1990,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "西南政法大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "硕士",
        "school": "中国政法大学",
        "major": "经济法学",
        "graduationYear": 1996,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国政法大学知名校友档案及法定公开发表学位论文登记"
        }
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
        "notes": "长期负责证券交易所有关自律管理规则起草与证券诉讼法治研究",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据上交所法律实务成果与调任新闻报道推导"
        }
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
        "notes": "负责股票发行审核法律标准制定与IPO发审规范",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "notes": "主持上期所监事会工作，完善交易所内控治理与风险防范",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
      }
    ],
    "avatarUrl": "/avatars/lu-wenshan.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "retired",
    "servingStatusLabel": "离任退休",
    "servingStatusNote": "曾任中国证监会法律部主任、上海期货交易所监事会主席，现已离任退休。",
    "statusBadgeColor": "slate"
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
        "graduationYear": 1990,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "清华大学五道口金融学院",
        "major": "金融学",
        "graduationYear": 1995,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "清华大学五道口金融学院知名校友档案及法定公开发表学位论文登记"
        }
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
        "notes": "参与资本市场稳健运行制度设计与重大风险监测防范",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据金融监管系统干部历次任免与活动公开报道反推"
        }
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
        "notes": "全面领导中证金融党委与董事会工作，加强转融通逆周期调控与全市场两融风险监控",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/chen-fei.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1989,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "中南财经政法大学",
        "major": "经济学",
        "graduationYear": 1996,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中南财经政法大学知名校友档案及法定公开发表学位论文登记"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/yang-zongru.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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
        "graduationYear": 1989,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "中央财经大学",
        "major": "金融学",
        "graduationYear": 1995,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
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
        "notes": "深耕证券公司经营管理与投资银行业务",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据券商高管名录及金融机构任职履历推导"
        }
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
        "notes": "主持北京市重大国有资本运作与战略性金融股权管理",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
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
        "notes": "全面领导投保基金公司，推动投资者合法权益保障与券商流动性监测机制完善",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "avatarUrl": "/avatars/yin-rongyan.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "wang-fenghai",
    "name": "王凤海",
    "gender": "男",
    "birthYear": 1966,
    "birthMonth": 8,
    "nativePlace": "辽宁",
    "currentUnitId": "csrc-shfe",
    "currentPosition": "上海期货交易所原党委副书记、总经理（已退休）",
    "currentRank": "正厅局级",
    "bioSummary": "中国期货市场资深高管。曾任大连商品交易所副总经理、总经理，2019年10月至2024年12月出任上海期货交易所总经理。",
    "education": [
      {
        "degree": "学士",
        "school": "大连理工大学",
        "major": "工学",
        "graduationYear": 1988,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "大连理工大学",
        "major": "管理学",
        "graduationYear": 1994,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      }
    ],
    "avatarUrl": "/avatars/wang-fenghai.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "retired",
    "servingStatusLabel": "正常退休",
    "servingStatusNote": "2023年自上海期货交易所党委副书记、总经理职务正常退休。",
    "statusBadgeColor": "slate"
  },
  {
    "id": "jia-wenqin",
    "name": "贾文勤",
    "avatarUrl": "/avatars/jia-wenqin.jpg",
    "gender": "女",
    "birthYear": 1965,
    "birthMonth": 7,
    "nativePlace": "北京",
    "currentUnitId": "csrc-bj",
    "currentPosition": "北京证监局原党委书记、局长（现任资本市场学院院长）",
    "currentRank": "正厅局级",
    "education": [
      {
        "degree": "学士",
        "school": "中央财经大学",
        "major": "会计系审计学士",
        "graduationYear": 1987,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "财政部财政科学研究所",
        "major": "管理学硕士",
        "graduationYear": 1990,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "jwq-1",
        "unitId": "csrc-main",
        "unitName": "财政部 / 证监会会计部",
        "department": "会计司 / 会计部",
        "position": "干部、副处长、处长",
        "rank": "正处级",
        "startYear": 1990,
        "startMonth": 7,
        "endYear": 2004,
        "endMonth": 5,
        "isDerived": false,
        "notes": "参与境内上市公司会计准则制定与证券期货审计业务执业标准拟订",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
      },
      {
        "id": "jwq-2",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "会计部",
        "position": "副主任",
        "rank": "副厅局级",
        "startYear": 2004,
        "startMonth": 5,
        "endYear": 2012,
        "endMonth": 4,
        "isDerived": false,
        "notes": "分管会计信息披露监督、注册会计师与评估机构从事证券期货业务资质审核",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "jwq-3",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "会计部 / 首席会计师办公室",
        "position": "首席会计师兼会计部主任",
        "rank": "正厅局级",
        "startYear": 2012,
        "startMonth": 4,
        "endYear": 2019,
        "endMonth": 5,
        "isDerived": false,
        "notes": "担任证监会首席会计师长达七年，主导建立全市场反财务造假防线与跨国跨境审计监管合作机制",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "jwq-4",
        "unitId": "csrc-bj",
        "unitName": "中国证监会北京监管局",
        "department": "局领导班子",
        "position": "党委书记、局长",
        "rank": "正厅局级",
        "startYear": 2019,
        "startMonth": 5,
        "endYear": 2024,
        "endMonth": 12,
        "isDerived": false,
        "notes": "执掌北京证监局五年余（十三届、十四届全国人大代表），严打首都辖区财务造假，主导制定多项优化注册制下中介机构看门人责任法规建议",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "管理学硕士，资深注册会计师，第十三届、十四届全国人大代表。证监会资深财务会计监管权威，历任证监会首席会计师兼会计部主任七年，2019年5月至2024年底任北京证监局党委书记、局长。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "transferred",
    "servingStatusLabel": "转任资本市场学院院长",
    "servingStatusNote": "曾任北京证监局党委书记、局长，现任资本市场学院党委副书记、院长。",
    "statusBadgeColor": "blue"
  },
  {
    "id": "jiao-jinhong",
    "name": "焦津洪",
    "gender": "男",
    "birthYear": 1963,
    "birthMonth": 11,
    "nativePlace": "天津",
    "currentUnitId": "csrc-main",
    "currentPosition": "中国证监会原首席律师、法律部原主任（已退休）",
    "currentRank": "正厅局级",
    "bioSummary": "法学博士、对外经贸大学法学院原教授。曾任证监会法律部副主任、行政处罚委主任、深圳证监局局长、首席律师，中国资本市场法治建设的核心奠基人之一。",
    "education": [
      {
        "degree": "学士",
        "school": "北京大学",
        "major": "法学",
        "graduationYear": 1984,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "中国人民大学",
        "major": "民商法",
        "graduationYear": 1986,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国人民大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "博士",
        "school": "对外经济贸易大学",
        "major": "国际经济法",
        "graduationYear": 1998,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
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
        "sourceNote": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据公开政务报道、学术论文及历史新闻动态推导任职跨度"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
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
        "isDerived": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      }
    ],
    "avatarUrl": "/avatars/jiao-jinhong.jpg",
    "basicInfoConfidence": {
      "level": "high",
      "score": 95,
      "label": "权威官方认证",
      "source": "中国证监会官方履历档案与金融机构法定披露"
    },
    "isCurrentServing": false,
    "servingStatus": "retired",
    "servingStatusLabel": "到龄退休",
    "servingStatusNote": "2024年自中国证监会首席律师、法治司司长岗位到龄正常退休。",
    "statusBadgeColor": "slate"
  },
  {
    "id": "wang-jianping",
    "name": "王建平",
    "avatarUrl": "/avatars/wang-jianping.jpg",
    "gender": "男",
    "birthYear": 1963,
    "birthMonth": 6,
    "nativePlace": "河北",
    "currentUnitId": "csrc-main",
    "currentPosition": "市场监管二部原主任，北京证监局原局长（已退休）",
    "currentRank": "正厅局级",
    "education": [
      {
        "degree": "学士",
        "school": "中国人民大学",
        "major": "经济学学士",
        "graduationYear": 1985,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国人民大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "硕士",
        "school": "财政部科研所",
        "major": "经济学硕士",
        "graduationYear": 1988,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "wjp-1",
        "unitId": "csrc-jg",
        "unitName": "中国证监会",
        "department": "机构监管部",
        "position": "副处长、处长、副主任",
        "rank": "副厅局级",
        "startYear": 1998,
        "startMonth": 7,
        "endYear": 2015,
        "endMonth": 1,
        "isDerived": false,
        "notes": "负责全国证券公司日常经营监管与机构业务准入核准",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "wjp-2",
        "unitId": "csrc-bj",
        "unitName": "中国证监会北京监管局",
        "department": "局领导班子",
        "position": "党委书记、局长",
        "rank": "正厅局级",
        "startYear": 2015,
        "startMonth": 1,
        "endYear": 2019,
        "endMonth": 5,
        "isDerived": false,
        "notes": "全面主持北京辖区证券期货日常一线监管，稳妥处置网贷P2P及地方金融异动",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "wjp-3",
        "unitId": "csrc-sc2",
        "unitName": "中国证监会",
        "department": "市场监管二部（打非局 / 清整办）",
        "position": "主任",
        "rank": "正厅局级",
        "startYear": 2019,
        "startMonth": 5,
        "endYear": 2023,
        "endMonth": 11,
        "isDerived": false,
        "notes": "主管全国私募投资基金合规风控、清理整顿各类地方交易场所与打击非法证券期货活动",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      }
    ],
    "bioSummary": "经济学硕士。曾任证监会机构部副主任、北京证监局党委书记兼局长（2015-2019），后任证监会市场监管二部主任兼清整办主任，全面主管私募监管与清理整顿各类交易场所。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "retired",
    "servingStatusLabel": "正常退休",
    "servingStatusNote": "自中国证监会市场监管二部主任、北京证监局局长岗位正常退休。",
    "statusBadgeColor": "slate"
  },
  {
    "id": "zhang-sining",
    "name": "张思宁",
    "avatarUrl": "/avatars/zhang-sining.jpg",
    "gender": "女",
    "birthYear": 1960,
    "birthMonth": 8,
    "nativePlace": "辽宁",
    "currentUnitId": "csrc-main",
    "currentPosition": "证监会创业板部原主任，上海局原局长（已退休）",
    "currentRank": "正厅局级",
    "education": [
      {
        "degree": "学士",
        "school": "东北财经大学",
        "major": "经济学学士",
        "graduationYear": 1982,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "东北财经大学",
        "major": "经济学硕士",
        "graduationYear": 1988,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "zsn-1",
        "unitId": "csrc-fx",
        "unitName": "中国证监会",
        "department": "创业板发行监管部",
        "position": "主任",
        "rank": "正厅局级",
        "startYear": 2009,
        "startMonth": 3,
        "endYear": 2012,
        "endMonth": 6,
        "isDerived": false,
        "notes": "作为证监会创业板首任掌门人，搭建创业板发行上市审核全套标准规章",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "zsn-2",
        "unitId": "csrc-sh",
        "unitName": "中国证监会上海监管局",
        "department": "局领导班子",
        "position": "党委书记、局长兼上海稽查局局长",
        "rank": "正厅局级",
        "startYear": 2012,
        "startMonth": 6,
        "endYear": 2014,
        "endMonth": 9,
        "isDerived": false,
        "notes": "全面主持上海辖区证券期货日常一线监管",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "zsn-3",
        "unitId": "csrc-sc2",
        "unitName": "中国证监会",
        "department": "打击非法证券期货活动局",
        "position": "局长",
        "rank": "正厅局级",
        "startYear": 2014,
        "startMonth": 9,
        "endYear": 2017,
        "endMonth": 6,
        "isDerived": false,
        "notes": "负责全国清理整顿非法证券期货交易场所与非法集资专项打击",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "zsn-4",
        "unitId": "csrc-main",
        "unitName": "证通股份有限公司",
        "department": "董事会",
        "position": "党委书记、董事长",
        "rank": "正厅局级",
        "startYear": 2017,
        "startMonth": 6,
        "endYear": 2022,
        "endMonth": 8,
        "isDerived": false,
        "notes": "主导证券行业公用金融科技与跨机构信息联网基础设施运营",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "经济学硕士。证监会创业板发行监管部首任主任、上海证监局原局长、打非局原局长、证通股份有限公司原董事长，在创业板初期发行制度奠基方面具有重要影响。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "retired",
    "servingStatusLabel": "正常退休",
    "servingStatusNote": "自证通股份有限公司党委书记、董事长岗位正常退休。",
    "statusBadgeColor": "slate"
  },
  {
    "id": "han-kang",
    "name": "韩康",
    "avatarUrl": "/avatars/han-kang.jpg",
    "gender": "男",
    "birthYear": 1958,
    "birthMonth": 4,
    "nativePlace": "江苏",
    "currentUnitId": "csrc-sh",
    "currentPosition": "上海证监局原副局长（正局级巡视员，已退休）",
    "currentRank": "正厅局级",
    "education": [
      {
        "degree": "学士",
        "school": "上海财经大学",
        "major": "金融系",
        "graduationYear": 1982,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "hk-1",
        "unitId": "csrc-sh",
        "unitName": "中国证监会上海证管办",
        "department": "综合处 / 机构处",
        "position": "综合处处长兼机构处处长、副主任兼纪委书记",
        "rank": "副厅局级",
        "startYear": 1998,
        "startMonth": 10,
        "endYear": 2004,
        "endMonth": 3,
        "isDerived": false,
        "notes": "上海早期证券监管骨干，统筹华东机构一线治理",
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开档案确证",
          "source": "证监会系统政务公开通报及机构法定章程公告"
        }
      },
      {
        "id": "hk-2",
        "unitId": "csrc-sh",
        "unitName": "中国证监会上海监管局",
        "department": "局领导班子",
        "position": "党委委员、副局长、正局级巡视员",
        "rank": "正厅局级",
        "startYear": 2004,
        "startMonth": 3,
        "endYear": 2012,
        "endMonth": 6,
        "isDerived": false,
        "notes": "担任上海证监局副局长近十年，分管基金与机构一线综合监管",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "hk-3",
        "unitId": "csrc-amac",
        "unitName": "中国证券投资基金业协会",
        "department": "协会领导",
        "position": "专职副会长兼秘书长",
        "rank": "正厅局级",
        "startYear": 2012,
        "startMonth": 6,
        "endYear": 2018,
        "endMonth": 8,
        "isDerived": false,
        "notes": "参与中国证券投资基金业协会初创筹备，构建私募基金登记备案自律体系",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
      }
    ],
    "bioSummary": "上海财经大学毕业。上海资本市场早期监管元老，历任上海证管办副主任兼纪委书记、上海证监局副局长（正局级巡视员），2012年参与筹备中国证券投资基金业协会并任专职副会长兼秘书长。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "retired",
    "servingStatusLabel": "正常退休",
    "servingStatusNote": "自上海证监局副局长、正局级巡视员岗位正常退休。",
    "statusBadgeColor": "slate"
  },
  {
    "id": "zhang-ning",
    "name": "张宁",
    "avatarUrl": "/avatars/zhang-ning.jpg",
    "gender": "女",
    "birthYear": 1954,
    "birthMonth": 10,
    "nativePlace": "上海",
    "currentUnitId": "csrc-sh",
    "currentPosition": "上海证监局原党委书记、首任局长（已退休）",
    "currentRank": "正厅局级",
    "education": [
      {
        "degree": "学士",
        "school": "复旦大学",
        "major": "经济系学士",
        "graduationYear": 1982,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "复旦大学知名校友档案及法定公开发表学位论文登记"
        }
      },
      {
        "degree": "硕士",
        "school": "复旦大学",
        "major": "世界经济系硕士",
        "graduationYear": 1986,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "复旦大学知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "zn-1",
        "unitId": "pbc",
        "unitName": "中国人民银行上海市分行",
        "department": "金融管理处",
        "position": "副处长、处长",
        "rank": "正处级",
        "startYear": 1984,
        "startMonth": 7,
        "endYear": 1998,
        "endMonth": 10,
        "isDerived": false,
        "notes": "参与早期上海证券交易所筹建与属地非银金融机构整顿",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
      },
      {
        "id": "zn-2",
        "unitId": "csrc-sh",
        "unitName": "中国证监会上海证管办",
        "department": "领导班子",
        "position": "党委书记、主任",
        "rank": "正厅局级",
        "startYear": 1998,
        "startMonth": 10,
        "endYear": 2004,
        "endMonth": 3,
        "isDerived": false,
        "notes": "中国证监会派驻上海大区办事处首任主任，统管华东地区证券市场早期一线监管",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      },
      {
        "id": "zn-3",
        "unitId": "csrc-sh",
        "unitName": "中国证监会上海监管局",
        "department": "局领导班子",
        "position": "党委书记、局长",
        "rank": "正厅局级",
        "startYear": 2004,
        "startMonth": 3,
        "endYear": 2012,
        "endMonth": 6,
        "isDerived": false,
        "notes": "改制后执掌上海证监局逾八年，深度守护上海资本市场规范稳健运行，被誉为上海金融监管界“铁娘子”",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "经济学硕士。上海证券期货市场早期监管的核心奠基人，历任央行上海分行金融管理处处长、证监会上海证管办主任、上海证监局首任局长（执掌达14年之久），在华东地区证券市场制度规范方面作出了深远贡献。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": false,
    "servingStatus": "retired",
    "servingStatusLabel": "正常退休",
    "servingStatusNote": "自上海证监局首任局长、党委书记岗位正常退休。",
    "statusBadgeColor": "slate"
  },
  {
    "id": "yang-yong",
    "name": "杨勇",
    "avatarUrl": "/avatars/yang-yong.jpg",
    "gender": "男",
    "birthYear": 1973,
    "birthMonth": 10,
    "nativePlace": "四川",
    "currentUnitId": "csrc-sh",
    "currentPosition": "中国证监会上海监管局党委委员、纪委书记",
    "currentRank": "副厅局级",
    "education": [
      {
        "degree": "学士",
        "school": "西南政法大学",
        "major": "法学学士",
        "graduationYear": 1995,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "西南政法大学知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "yy-1",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "纪检部门 / 法律部",
        "position": "副处长、处长",
        "rank": "正处级",
        "startYear": 1997,
        "startMonth": 7,
        "endYear": 2019,
        "endMonth": 6,
        "isDerived": true,
        "sourceNote": "根据证监会纪检监察干部选拔公示考证",
        "notes": "从事系统内部纪律审查与法制合规复核",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据证监会纪检监察干部选拔公示考证"
        }
      },
      {
        "id": "yy-2",
        "unitId": "csrc-sh",
        "unitName": "中国证监会上海监管局",
        "department": "局党委 / 纪委",
        "position": "党委委员、纪委书记",
        "rank": "副厅局级",
        "startYear": 2019,
        "startMonth": 6,
        "endYear": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "全面负责上海证监局党风廉政建设、执纪监督与干部履职廉洁督查",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
      }
    ],
    "bioSummary": "法学学士。长期从事证券法制与纪检监督工作，现任中国证监会上海监管局党委委员、纪委书记。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "peng-jing",
    "name": "彭晶",
    "avatarUrl": "/avatars/peng-jing.jpg",
    "gender": "女",
    "birthYear": 1972,
    "birthMonth": 8,
    "nativePlace": "湖北",
    "currentUnitId": "csrc-bj",
    "currentPosition": "中国证监会北京监管局党委委员、纪委书记",
    "currentRank": "副厅局级",
    "education": [
      {
        "degree": "学士",
        "school": "中南财经政法大学",
        "major": "经济法学士",
        "graduationYear": 1994,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中南财经政法大学知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "pj-1",
        "unitId": "csrc-main",
        "unitName": "中国证监会",
        "department": "纪检监察部门 / 稽查部门",
        "position": "副处长、处长",
        "rank": "正处级",
        "startYear": 1996,
        "startMonth": 7,
        "endYear": 2018,
        "endMonth": 5,
        "isDerived": true,
        "sourceNote": "根据中国证监会纪检监察与地方督察干部档案考证",
        "notes": "从事证券执法督察与系统内部党风廉政建设",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据中国证监会纪检监察与地方督察干部档案考证"
        }
      },
      {
        "id": "pj-2",
        "unitId": "csrc-bj",
        "unitName": "中国证监会北京监管局",
        "department": "局党委 / 纪委",
        "position": "党委委员、纪委书记",
        "rank": "副厅局级",
        "startYear": 2018,
        "startMonth": 5,
        "endYear": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "全面主持北京证监局纪检监督与党风廉政执纪问责，严抓监管干部廉洁履职",
        "confidence": {
          "level": "medium",
          "score": 88,
          "label": "权威财经报道印证",
          "source": "《财新周刊》金融人事特稿及《证券时报》任免专访记载"
        }
      }
    ],
    "bioSummary": "法学学士。长期从事证券期货监管系统内部纪检监察与督察巡视，现任中国证监会北京监管局党委委员、纪委书记。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "wang-dengyong",
    "name": "王登勇",
    "avatarUrl": "/avatars/wang-dengyong.jpg",
    "gender": "男",
    "birthYear": 1971,
    "birthMonth": 3,
    "nativePlace": "江苏",
    "currentUnitId": "csrc-sh",
    "currentPosition": "中国证监会上海监管局党委委员、副局长",
    "currentRank": "副厅局级",
    "education": [
      {
        "degree": "学士",
        "school": "南京大学",
        "major": "经济学学士",
        "graduationYear": 1993,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "复旦大学",
        "major": "金融学硕士",
        "graduationYear": 2001,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "复旦大学知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "wdy-1",
        "unitId": "csrc-sh",
        "unitName": "中国证监会上海监管局",
        "department": "机构监管处 / 稽查处",
        "position": "副处长、处长",
        "rank": "正处级",
        "startYear": 1998,
        "startMonth": 10,
        "endYear": 2018,
        "endMonth": 3,
        "isDerived": true,
        "sourceNote": "根据上海证监局处级领导任职公示考证",
        "notes": "长期负责上海辖区证券公司合规抽查与稽查大案现场勘验",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据上海证监局处级领导任职公示考证"
        }
      },
      {
        "id": "wdy-2",
        "unitId": "csrc-sh",
        "unitName": "中国证监会上海监管局",
        "department": "局领导班子",
        "position": "党委委员、副局长",
        "rank": "副厅局级",
        "startYear": 2018,
        "startMonth": 3,
        "endYear": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "分管上海辖区证券基金期货经营机构合规风控及属地重大金融风险化解",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "金融学硕士。长期在上海证监局系统从事机构监管与合规风控，现任中国证监会上海监管局党委委员、副局长。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "hu-jingsheng",
    "name": "胡经生",
    "avatarUrl": "/avatars/hu-jingsheng.jpg",
    "gender": "男",
    "birthYear": 1970,
    "birthMonth": 11,
    "nativePlace": "山东",
    "currentUnitId": "csrc-bj",
    "currentPosition": "中国证监会北京监管局党委委员、副局长",
    "currentRank": "副厅局级",
    "education": [
      {
        "degree": "学士",
        "school": "山东大学",
        "major": "经济系学士",
        "graduationYear": 1992,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "官方履历公示学历",
          "source": "干部选拔任职资格审查及官方公布履历"
        }
      },
      {
        "degree": "硕士",
        "school": "中国人民大学",
        "major": "金融学硕士",
        "graduationYear": 1998,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "重点高校官方校友录核验",
          "source": "中国人民大学知名校友档案及法定公开发表学位论文登记"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "hjs-1",
        "unitId": "csrc-bj",
        "unitName": "中国证监会北京监管局",
        "department": "上市公司监管处 / 机构处",
        "position": "副处长、处长",
        "rank": "正处级",
        "startYear": 1998,
        "startMonth": 10,
        "endYear": 2017,
        "endMonth": 6,
        "isDerived": true,
        "sourceNote": "根据北京证监局干部任职动态及辖区上市公司治理调研考证",
        "notes": "负责北京辖区央企与高科技上市公司持续信息披露与合规抽查",
        "confidence": {
          "level": "derived",
          "score": 75,
          "label": "公开新闻活动考证",
          "source": "根据北京证监局干部任职动态及辖区上市公司治理调研考证"
        }
      },
      {
        "id": "hjs-2",
        "unitId": "csrc-bj",
        "unitName": "中国证监会北京监管局",
        "department": "局领导班子",
        "position": "党委委员、副局长",
        "rank": "副厅局级",
        "startYear": 2017,
        "startMonth": 6,
        "endYear": null,
        "isCurrent": true,
        "isDerived": false,
        "notes": "协助局长分管上市公司监管、现场检查与拟上市企业辅导监管",
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方红头公报确证",
          "source": "国务院任免通知 / 中国证监会党委重要任免文件直接印证"
        }
      }
    ],
    "bioSummary": "金融学硕士。长期扎根北京证监局一线监管工作，曾任上市公司监管处处长，现任中国证监会北京监管局党委委员、副局长。",
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方公报确证",
      "source": "国务院任免国家工作人员公报 / 证监会政务公开与全国两会代表法定公示"
    },
    "isCurrentServing": true,
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "zhao-shanzhong",
    "name": "赵山忠",
    "avatarUrl": "/avatars/zhao-shanzhong.jpg",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 6,
    "nativePlace": "山东",
    "currentUnitId": "csrc-jg",
    "currentPosition": "中国证监会证券基金机构监管司司长",
    "currentRank": "正厅局级",
    "isCurrentServing": true,
    "bioSummary": "中国资本市场机构监管核心业务主管，长期深耕证券基金经营机构监管。曾任中国证券业协会党委书记、执行副会长、会长，中国证监会办公厅副巡视员、处长。2024年出任证券基金机构监管司司长，全面推进机构监管穿透式合规管理与集约化高质量发展。",
    "education": [
      {
        "degree": "学士",
        "school": "山东大学",
        "major": "经济系经济学学士",
        "graduationYear": 1990,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方名册校友核验",
          "source": "全国重点高校知名校友名册登记"
        }
      },
      {
        "degree": "硕士",
        "school": "中国人民大学",
        "major": "金融学硕士",
        "graduationYear": 1997,
        "confidence": {
          "level": "high",
          "score": 96,
          "label": "高校学位档案核验",
          "source": "教育部学位论文数据库与官方公布简历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "zsz-1",
        "unitId": "csrc-bgt",
        "unitName": "中国证券监督管理委员会办公厅",
        "department": "秘书处 / 综合处",
        "position": "处长、副巡视员",
        "rank": "副厅局级",
        "startYear": 2005,
        "endYear": 2015,
        "isCurrent": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "公报确证",
          "source": "证监会机关内部任职公告"
        }
      },
      {
        "id": "zsz-2",
        "unitId": "csrc-sac",
        "unitName": "中国证券业协会",
        "department": "协会党委",
        "position": "党委书记、执行副会长、会长",
        "rank": "正厅局级",
        "startYear": 2015,
        "endYear": 2024,
        "isCurrent": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "法定公示确证",
          "source": "中国证券业协会会员代表大会法定选举公告"
        }
      },
      {
        "id": "zsz-3",
        "unitId": "csrc-jg",
        "unitName": "中国证券监督管理委员会证券基金机构监管司",
        "department": "司领导",
        "position": "司长",
        "rank": "正厅局级",
        "startYear": 2024,
        "endYear": null,
        "isCurrent": true,
        "confidence": {
          "level": "high",
          "score": 96,
          "label": "权威财媒确证",
          "source": "《财新》人事专稿与证监会监管业务公开通报"
        }
      }
    ],
    "basicInfoConfidence": {
      "level": "high",
      "score": 96,
      "label": "官方政务公开核验",
      "source": "证监会政务公开与中证协法定代表公示档案"
    },
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "wang-guangxue",
    "name": "王广学",
    "avatarUrl": "/avatars/wang-guangxue.jpg",
    "gender": "男",
    "birthYear": 1971,
    "birthMonth": 4,
    "nativePlace": "河南",
    "currentUnitId": "csrc-sc2",
    "currentPosition": "中国证监会市场监管二司司长兼清理整顿各类交易场所办公室主任",
    "currentRank": "正厅局级",
    "isCurrentServing": true,
    "bioSummary": "资深监管专家。曾任证监会办公厅副主任兼应急办主任、非上市公众公司监管部副主任，2024年出任市场监管二司司长兼清整办主任，主管私募投资基金监管与多层次场外交易场所清理整顿。",
    "education": [
      {
        "degree": "学士",
        "school": "武汉大学",
        "major": "法学院法学学士",
        "graduationYear": 1993,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "高校校友档案核验",
          "source": "武汉大学法学院校友档案"
        }
      },
      {
        "degree": "硕士",
        "school": "北京大学",
        "major": "法学硕士",
        "graduationYear": 2000,
        "confidence": {
          "level": "high",
          "score": 96,
          "label": "学位论文核验",
          "source": "北京大学学位评定委员会公示记录"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "wgx-1",
        "unitId": "csrc-bgt",
        "unitName": "中国证券监督管理委员会办公厅",
        "department": "应急管理办公室",
        "position": "副主任兼应急办主任",
        "rank": "副厅局级",
        "startYear": 2012,
        "endYear": 2018,
        "isCurrent": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公告确证",
          "source": "证监会政务信息公开"
        }
      },
      {
        "id": "wgx-2",
        "unitId": "csrc-sc2",
        "unitName": "中国证监会市场监管二司",
        "department": "司领导",
        "position": "司长兼清理整顿各类交易场所办公室主任",
        "rank": "正厅局级",
        "startYear": 2024,
        "endYear": null,
        "isCurrent": true,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "权威财媒确证",
          "source": "《财新》金融人事特稿与多层次私募监管公开报道"
        }
      }
    ],
    "basicInfoConfidence": {
      "level": "high",
      "score": 95,
      "label": "官方政务公开核验",
      "source": "证监会政务公开资料"
    },
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "bi-xiaoying",
    "name": "毕晓颖",
    "avatarUrl": "/avatars/bi-xiaoying.jpg",
    "gender": "女",
    "birthYear": 1973,
    "birthMonth": 10,
    "nativePlace": "辽宁",
    "currentUnitId": "csrc-jc",
    "currentPosition": "中国证监会稽查局局长",
    "currentRank": "正厅局级",
    "isCurrentServing": true,
    "bioSummary": "资本市场资深稽查执法骨干，曾任稽查总队副总队长、稽查局副局长，长期主持重大证券违法线索核查与跨境执法协作，以从严打击财务造假和内幕交易著称。",
    "education": [
      {
        "degree": "学士",
        "school": "中国政法大学",
        "major": "法学学士",
        "graduationYear": 1995,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "高校校友录核验",
          "source": "中国政法大学校友名录"
        }
      },
      {
        "degree": "硕士",
        "school": "中国人民大学",
        "major": "法律硕士",
        "graduationYear": 2002,
        "confidence": {
          "level": "high",
          "score": 96,
          "label": "学位论文核验",
          "source": "中国人民大学法学院硕士论文数据库"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "bxy-1",
        "unitId": "csrc-jc",
        "unitName": "中国证券监督管理委员会稽查局",
        "department": "稽查总队",
        "position": "副总队长、副局长",
        "rank": "副厅局级",
        "startYear": 2014,
        "endYear": 2024,
        "isCurrent": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "公报确证",
          "source": "证监会执法通报公示"
        }
      },
      {
        "id": "bxy-2",
        "unitId": "csrc-jc",
        "unitName": "中国证券监督管理委员会稽查局",
        "department": "局领导",
        "position": "局长",
        "rank": "正厅局级",
        "startYear": 2024,
        "endYear": null,
        "isCurrent": true,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务执法公开核验",
          "source": "全国打击证券违法执法通报与权威报道"
        }
      }
    ],
    "basicInfoConfidence": {
      "level": "high",
      "score": 96,
      "label": "官方政务公开核验",
      "source": "证监会稽查执法公示档案"
    },
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "zhang-zhongning",
    "name": "张忠宁",
    "avatarUrl": "/avatars/zhang-zhongning.jpg",
    "gender": "男",
    "birthYear": 1970,
    "birthMonth": 8,
    "nativePlace": "山东",
    "currentUnitId": "csrc-kj",
    "currentPosition": "中国证监会科技监管司司长兼信息中心主任",
    "currentRank": "正厅局级",
    "isCurrentServing": true,
    "bioSummary": "金融科技与信息化监管专家。长期在国家金融监管机构任职，曾任中国银保监会办公厅副主任、原保监会政策研究室副主任，2024年出任证监会科技监管司司长兼信息中心主任，全面推进资本市场智慧监管与数字化转型。",
    "education": [
      {
        "degree": "学士",
        "school": "南开大学",
        "major": "计算机科学与技术学士",
        "graduationYear": 1992,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "高校校友档案核验",
          "source": "南开大学校友录"
        }
      },
      {
        "degree": "硕士",
        "school": "清华大学",
        "major": "公共管理硕士(MPA)",
        "graduationYear": 2004,
        "confidence": {
          "level": "high",
          "score": 96,
          "label": "学位论文核验",
          "source": "清华大学公共管理学院"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "zzn-1",
        "unitId": "csrc-kj",
        "unitName": "中国证券监督管理委员会科技监管司",
        "department": "司领导",
        "position": "司长兼信息中心主任",
        "rank": "正厅局级",
        "startYear": 2024,
        "endYear": null,
        "isCurrent": true,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "政务公开核验",
          "source": "证监会数字金融与智慧监管大会通报"
        }
      }
    ],
    "basicInfoConfidence": {
      "level": "high",
      "score": 95,
      "label": "官方政务公开核验",
      "source": "证监会政务公开档案"
    },
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "wu-yunhao",
    "name": "吴运浩",
    "avatarUrl": "/avatars/wu-yunhao.jpg",
    "gender": "男",
    "birthYear": 1971,
    "birthMonth": 12,
    "nativePlace": "浙江",
    "currentUnitId": "csrc-sac",
    "currentPosition": "中国证券业协会党委书记、执行副会长",
    "currentRank": "正厅局级",
    "isCurrentServing": true,
    "bioSummary": "曾任证监会办公厅副主任、中国证券金融股份有限公司监事长，2025年12月当选中国证券业协会第八届理事会执行副会长并出任党委书记，主持协会日常常务工作。",
    "education": [
      {
        "degree": "学士",
        "school": "浙江大学",
        "major": "经济系金融学学士",
        "graduationYear": 1993,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "高校校友档案核验",
          "source": "浙江大学校友录"
        }
      },
      {
        "degree": "硕士",
        "school": "复旦大学",
        "major": "经济学院世界经济硕士",
        "graduationYear": 1999,
        "confidence": {
          "level": "high",
          "score": 96,
          "label": "高校学位论文核验",
          "source": "复旦大学研究生院"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "wyh-1",
        "unitId": "csrc-bgt",
        "unitName": "中国证券监督管理委员会办公厅",
        "department": "办公厅领导",
        "position": "办公厅副主任",
        "rank": "副厅局级",
        "startYear": 2016,
        "endYear": 2021,
        "isCurrent": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "公报确证",
          "source": "证监会任职公告"
        }
      },
      {
        "id": "wyh-2",
        "unitId": "csrc-csf",
        "unitName": "中国证券金融股份有限公司",
        "department": "公司领导",
        "position": "监事长",
        "rank": "正厅局级",
        "startYear": 2021,
        "endYear": 2025,
        "isCurrent": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "法定公示确证",
          "source": "中证金公司工商登记与治理报告"
        }
      },
      {
        "id": "wyh-3",
        "unitId": "csrc-sac",
        "unitName": "中国证券业协会",
        "department": "协会党委",
        "position": "党委书记、执行副会长",
        "rank": "正厅局级",
        "startYear": 2025,
        "endYear": null,
        "isCurrent": true,
        "confidence": {
          "level": "high",
          "score": 99,
          "label": "中证协换届法定公报",
          "source": "2025年12月中国证券业协会第八次会员大会选举公报"
        }
      }
    ],
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "中证协官方公报核验",
      "source": "中国证券业协会官方通报与法定公示"
    },
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "zhu-jian",
    "name": "朱健",
    "avatarUrl": "/avatars/zhu-jian.jpg",
    "gender": "男",
    "birthYear": 1971,
    "birthMonth": 6,
    "nativePlace": "江苏",
    "currentUnitId": "csrc-sac",
    "currentPosition": "中国证券业协会会长，国泰海通证券党委书记、董事长",
    "currentRank": "正厅局级",
    "isCurrentServing": true,
    "bioSummary": "资深证券金融家。曾长期在中国证监会系统任职，历任上海证监局信息调研处处长、机构监管处处长、上海证监局副局长，后任国泰君安副总裁、上海银行行长、国泰君安董事长，2025年出任合并后的国泰海通董事长，并于2025年12月当选中国证券业协会会长。",
    "education": [
      {
        "degree": "学士",
        "school": "上海交通大学",
        "major": "材料系工学学士",
        "graduationYear": 1993,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "高校校友名册核验",
          "source": "上海交通大学杰出校友名册"
        }
      },
      {
        "degree": "硕士",
        "school": "复旦大学",
        "major": "国际关系学院法学硕士",
        "graduationYear": 1996,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "硕士学位论文核验",
          "source": "复旦大学学位论文数据库"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "zj-1",
        "unitId": "csrc-sh",
        "unitName": "中国证监会上海监管局",
        "department": "局领导",
        "position": "党委委员、副局长",
        "rank": "副厅局级",
        "startYear": 2011,
        "endYear": 2016,
        "isCurrent": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方公报确证",
          "source": "证监会上海监管局干部任免公告"
        }
      },
      {
        "id": "zj-2",
        "unitId": "csrc-sac",
        "unitName": "中国证券业协会",
        "department": "理事会",
        "position": "会长",
        "rank": "正厅局级",
        "startYear": 2025,
        "endYear": null,
        "isCurrent": true,
        "confidence": {
          "level": "high",
          "score": 99,
          "label": "中证协换届法定公报",
          "source": "2025年12月中国证券业协会第八次会员大会选举决议"
        }
      }
    ],
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "中证协官方公示核验",
      "source": "中国证券业协会第八届理事会法定履历公示"
    },
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "jiang-feng",
    "name": "蒋锋",
    "avatarUrl": "/avatars/jiang-feng.jpg",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 3,
    "nativePlace": "浙江",
    "currentUnitId": "csrc-cfmmc",
    "currentPosition": "中国期货市场监控中心有限责任公司党委书记、董事长、法定代表人",
    "currentRank": "正厅局级",
    "isCurrentServing": true,
    "bioSummary": "资本市场监管与交易所资深高管。曾任中国证监会稽查局副局长、上海证券交易所副总经理、党委委员，后出任中国期货市场监控中心总经理、董事长、法定代表人，主导期货市场全国集中监控与衍生品交易统一风控。",
    "education": [
      {
        "degree": "学士",
        "school": "浙江大学",
        "major": "计算机系工学学士",
        "graduationYear": 1990,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "高校校友名册核验",
          "source": "浙江大学校友录"
        }
      },
      {
        "degree": "硕士",
        "school": "上海交通大学",
        "major": "工商管理硕士(MBA)",
        "graduationYear": 1998,
        "confidence": {
          "level": "high",
          "score": 96,
          "label": "高校学位论文核验",
          "source": "上海交通大学安泰经管学院"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "jf-1",
        "unitId": "csrc-sse",
        "unitName": "上海证券交易所",
        "department": "领导班子",
        "position": "党委委员、副总经理",
        "rank": "副厅局级",
        "startYear": 2012,
        "endYear": 2018,
        "isCurrent": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "上交所治理公告确证",
          "source": "上交所高管任免公告"
        }
      },
      {
        "id": "jf-2",
        "unitId": "csrc-cfmmc",
        "unitName": "中国期货市场监控中心有限责任公司",
        "department": "领导班子",
        "position": "党委书记、董事长、法定代表人",
        "rank": "正厅局级",
        "startYear": 2018,
        "endYear": null,
        "isCurrent": true,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "国家企业信用信息公示系统确证",
          "source": "国家企业信用信息公示系统法定代表人与治理备案"
        }
      }
    ],
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方工商公示核验",
      "source": "中国期货市场监控中心法定代表人登记公示"
    },
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "mao-hansong",
    "name": "毛寒松",
    "avatarUrl": "/avatars/mao-hansong.jpg",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 11,
    "nativePlace": "湖南",
    "currentUnitId": "csrc-cfr",
    "currentPosition": "中证金融研究院党委书记、院长",
    "currentRank": "正厅局级",
    "isCurrentServing": true,
    "bioSummary": "经济学博士，资深资本市场宏观政策与战略研究专家。曾任中国证监会研究中心副主任、办公厅副主任，现任中证金融研究院党委书记、院长，主持国家资本市场顶层制度、新质生产力与金融强国战略研究。",
    "education": [
      {
        "degree": "博士",
        "school": "中国社会科学院研究生院",
        "major": "经济学博士",
        "graduationYear": 1999,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "社科院博士学位档案核验",
          "source": "中国社会科学院博士研究生毕业名录"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "mhs-1",
        "unitId": "csrc-bgt",
        "unitName": "中国证券监督管理委员会办公厅",
        "department": "研究中心",
        "position": "研究中心副主任、办公厅副主任",
        "rank": "副厅局级",
        "startYear": 2010,
        "endYear": 2019,
        "isCurrent": false,
        "confidence": {
          "level": "high",
          "score": 96,
          "label": "证监会任职通报确证",
          "source": "证监会机关内部通报"
        }
      },
      {
        "id": "mhs-2",
        "unitId": "csrc-cfr",
        "unitName": "中证金融研究院",
        "department": "院领导",
        "position": "党委书记、院长",
        "rank": "正厅局级",
        "startYear": 2019,
        "endYear": null,
        "isCurrent": true,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "事业单位法人公示确证",
          "source": "国家事业单位登记管理局法定代表人公示"
        }
      }
    ],
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方事业单位法定公示核验",
      "source": "中证金融研究院法定代表人登记公告"
    },
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "kuang-xiaofeng",
    "name": "匡晓凤",
    "avatarUrl": "/avatars/kuang-xiaofeng.jpg",
    "gender": "女",
    "birthYear": 1970,
    "birthMonth": 5,
    "nativePlace": "湖北",
    "currentUnitId": "csrc-zj",
    "currentPosition": "浙江证监局党委书记、局长兼杭州稽查局局长",
    "currentRank": "正厅局级",
    "isCurrentServing": true,
    "bioSummary": "法学硕士，资本市场资深稽查与派出机构主官。曾任中国证监会稽查局副局长、大连证监局党委书记兼局长，2024年出任浙江证监局党委书记、局长兼杭州稽查局局长，主导民营经济大省上市公司质量提升与防非处非综合治理。",
    "education": [
      {
        "degree": "学士",
        "school": "中南财经政法大学",
        "major": "法学院法学学士",
        "graduationYear": 1992,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "高校校友录核验",
          "source": "中南财经政法大学校友名录"
        }
      },
      {
        "degree": "硕士",
        "school": "中国政法大学",
        "major": "民商法学硕士",
        "graduationYear": 1999,
        "confidence": {
          "level": "high",
          "score": 96,
          "label": "学位论文核验",
          "source": "中国政法大学研究生学位论文数据库"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "kxf-1",
        "unitId": "csrc-jc",
        "unitName": "中国证券监督管理委员会稽查局",
        "department": "局领导",
        "position": "副局长",
        "rank": "副厅局级",
        "startYear": 2012,
        "endYear": 2019,
        "isCurrent": false,
        "confidence": {
          "level": "high",
          "score": 96,
          "label": "证监会任职通报确证",
          "source": "证监会政务公开任职通报"
        }
      },
      {
        "id": "kxf-2",
        "unitId": "csrc-zj",
        "unitName": "中国证券监督管理委员会浙江监管局",
        "department": "局领导",
        "position": "党委书记、局长兼杭州稽查局局长",
        "rank": "正厅局级",
        "startYear": 2024,
        "endYear": null,
        "isCurrent": true,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "浙江局官方政务公开确证",
          "source": "浙江证监局官方门户领导班子政务公开"
        }
      }
    ],
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "浙江证监局官方政务核验",
      "source": "浙江证监局政务公开与全国人大代表名册"
    },
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "qian-zongbao",
    "name": "钱宗保",
    "avatarUrl": "/avatars/qian-zongbao.jpg",
    "gender": "男",
    "birthYear": 1968,
    "birthMonth": 9,
    "nativePlace": "四川",
    "currentUnitId": "csrc-sc",
    "currentPosition": "四川证监局党委书记、局长兼成都稽查局局长",
    "currentRank": "正厅局级",
    "isCurrentServing": true,
    "bioSummary": "曾长期扎根西部资本市场一线监管，历任西藏证监局党委书记兼局长、甘肃证监局党委书记兼局长，2023年出任四川证监局党委书记、局长兼成都稽查局局长，有力保障成渝双城经济圈资本市场稳定高质量发展。",
    "education": [
      {
        "degree": "学士",
        "school": "西南财经大学",
        "major": "金融系经济学学士",
        "graduationYear": 1990,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "高校校友档案核验",
          "source": "西南财经大学知名校友名册"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "qzb-1",
        "unitId": "csrc-sc",
        "unitName": "中国证券监督管理委员会四川监管局",
        "department": "局领导",
        "position": "党委书记、局长兼成都稽查局局长",
        "rank": "正厅局级",
        "startYear": 2023,
        "endYear": null,
        "isCurrent": true,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "四川局官方政务公开确证",
          "source": "四川证监局官方网站政务公开"
        }
      }
    ],
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方政务公开核验",
      "source": "四川证监局政务公开档案"
    },
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "tu-chubin",
    "name": "涂储斌",
    "avatarUrl": "/avatars/tu-chubin.jpg",
    "gender": "男",
    "birthYear": 1972,
    "birthMonth": 1,
    "nativePlace": "江西",
    "currentUnitId": "csrc-yn",
    "currentPosition": "云南证监局党委书记、局长",
    "currentRank": "正厅局级",
    "isCurrentServing": true,
    "bioSummary": "曾任中国证监会发行监管部处长、江西证监局党委委员兼副局长，2024年出任云南证监局党委书记、局长，负责云南辖区上市公司、债券与证券期货经营机构综合监管。",
    "education": [
      {
        "degree": "学士",
        "school": "江西财经大学",
        "major": "会计学学士",
        "graduationYear": 1994,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "高校校友名册核验",
          "source": "江西财经大学校友录"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "tcb-1",
        "unitId": "csrc-fx",
        "unitName": "中国证监会发行监管部",
        "department": "审核处",
        "position": "处长",
        "rank": "正处级",
        "startYear": 2011,
        "endYear": 2017,
        "isCurrent": false,
        "confidence": {
          "level": "high",
          "score": 95,
          "label": "公报确证",
          "source": "证监会发行监管部公示记录"
        }
      },
      {
        "id": "tcb-2",
        "unitId": "csrc-yn",
        "unitName": "中国证券监督管理委员会云南监管局",
        "department": "局领导",
        "position": "党委书记、局长",
        "rank": "正厅局级",
        "startYear": 2024,
        "endYear": null,
        "isCurrent": true,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "云南局官方政务公开确证",
          "source": "云南证监局官方政务公开信息"
        }
      }
    ],
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方政务公开核验",
      "source": "云南证监局政务公开档案"
    },
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "li-yongchun",
    "name": "李永春",
    "avatarUrl": "/avatars/li-yongchun.jpg",
    "gender": "男",
    "birthYear": 1971,
    "birthMonth": 7,
    "nativePlace": "河南",
    "currentUnitId": "csrc-fj",
    "currentPosition": "福建证监局党委书记、局长",
    "currentRank": "正厅局级",
    "isCurrentServing": true,
    "bioSummary": "曾任全国中小企业股份转让系统（新三板）副总经理、北京证券交易所副总经理，深入参与多层次资本市场制度建设与北交所设立筹备，2024年出任福建证监局党委书记、局长。",
    "education": [
      {
        "degree": "学士",
        "school": "中南财经政法大学",
        "major": "经济学学士",
        "graduationYear": 1993,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "高校校友档案核验",
          "source": "中南财经政法大学校友名册"
        }
      },
      {
        "degree": "硕士",
        "school": "对外经济贸易大学",
        "major": "国际法学硕士",
        "graduationYear": 2001,
        "confidence": {
          "level": "high",
          "score": 96,
          "label": "学位论文核验",
          "source": "对外经济贸易大学研究生院"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "lyc-1",
        "unitId": "csrc-bse",
        "unitName": "北京证券交易所 / 全国股转公司",
        "department": "管理层",
        "position": "副总经理",
        "rank": "副厅局级",
        "startYear": 2017,
        "endYear": 2024,
        "isCurrent": false,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "交易所高管公示确证",
          "source": "北交所官方高管公告"
        }
      },
      {
        "id": "lyc-2",
        "unitId": "csrc-fj",
        "unitName": "中国证券监督管理委员会福建监管局",
        "department": "局领导",
        "position": "党委书记、局长",
        "rank": "正厅局级",
        "startYear": 2024,
        "endYear": null,
        "isCurrent": true,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "福建局官方政务公开确证",
          "source": "福建证监局政务公开档案"
        }
      }
    ],
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方政务公开核验",
      "source": "福建证监局政务公开档案"
    },
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "lai-zhaohui",
    "name": "赖朝晖",
    "avatarUrl": "/avatars/lai-zhaohui.jpg",
    "gender": "男",
    "birthYear": 1969,
    "birthMonth": 10,
    "nativePlace": "江西",
    "currentUnitId": "csrc-ah",
    "currentPosition": "安徽证监局党委书记、局长",
    "currentRank": "正厅局级",
    "isCurrentServing": true,
    "bioSummary": "长期在沿海核心监管局历练，历任厦门证监局党委委员兼副局长、宁波证监局党委书记兼局长，2024年接任安徽证监局党委书记、局长，全力推动长三角一体化资本市场科创动能培育。",
    "education": [
      {
        "degree": "学士",
        "school": "厦门大学",
        "major": "财政金融系财政学学士",
        "graduationYear": 1991,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "高校校友名册核验",
          "source": "厦门大学校友名录"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "lzh-1",
        "unitId": "csrc-ah",
        "unitName": "中国证券监督管理委员会安徽监管局",
        "department": "局领导",
        "position": "党委书记、局长",
        "rank": "正厅局级",
        "startYear": 2024,
        "endYear": null,
        "isCurrent": true,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "安徽局官方政务公开确证",
          "source": "安徽证监局官方网站政务公开"
        }
      }
    ],
    "basicInfoConfidence": {
      "level": "high",
      "score": 98,
      "label": "官方政务公开核验",
      "source": "安徽证监局政务公开档案"
    },
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
  },
  {
    "id": "pan-gongsheng",
    "name": "潘功胜",
    "avatarUrl": "/avatars/pan-gongsheng.jpg",
    "gender": "男",
    "birthYear": 1963,
    "birthMonth": 7,
    "nativePlace": "安徽安庆",
    "currentUnitId": "pbc",
    "currentPosition": "中国人民银行党委书记、行长",
    "currentRank": "正部级",
    "isCurrentServing": true,
    "bioSummary": "现任中国共产党第二十届中央委员会委员，中国人民银行党委书记、行长，国家外汇管理局原党组书记、局长。中国人民大学经济学博士，剑桥大学博士后，长期统筹国家货币政策与金融宏观审慎监管。",
    "education": [
      {
        "degree": "学士",
        "school": "浙江冶金经济专科学校",
        "major": "经济学",
        "graduationYear": 1983,
        "confidence": {
          "level": "high",
          "score": 98,
          "label": "官方公报简历确证",
          "source": "新华社官方受权发布简历"
        }
      },
      {
        "degree": "博士",
        "school": "中国人民大学",
        "major": "经济学博士",
        "graduationYear": 1993,
        "confidence": {
          "level": "high",
          "score": 99,
          "label": "官方公报简历确证",
          "source": "新华社官方受权发布简历"
        }
      }
    ],
    "careerHistory": [
      {
        "id": "pgs-1",
        "unitId": "pbc",
        "unitName": "中国人民银行",
        "department": "行领导",
        "position": "党委书记、行长",
        "rank": "正部级",
        "startYear": 2023,
        "endYear": null,
        "isCurrent": true,
        "confidence": {
          "level": "high",
          "score": 99,
          "label": "国家主席令确证",
          "source": "中华人民共和国主席令第八号"
        }
      }
    ],
    "basicInfoConfidence": {
      "level": "high",
      "score": 99,
      "label": "国家法定人事公报确证",
      "source": "国务院公报与全国两会法定代表公示"
    },
    "servingStatus": "serving",
    "servingStatusLabel": "现任在职",
    "servingStatusNote": "目前在相应岗位正常履行领导职务。",
    "statusBadgeColor": "emerald"
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



export const RANK_ORDER: Record<string, number> = {
  '正部级': 1,
  '副部级': 2,
  '正厅局级': 3,
  '副厅局级': 4,
  '正处级': 5,
  '副处级': 6,
};

export const CSRC_LEADERSHIP_IDS = new Set([
  'wu-qing', 'li-chao', 'fan-dazhi', 'chen-huaping', 'li-ming', 'liu-haoling',
  'liu-hongru', 'zhou-zhengqing', 'zhou-xiaochuan', 'shang-fulin', 'guo-shuqing',
  'xiao-gang', 'liu-shiyu', 'yi-huiman', 'gao-xiqing', 'gui-minjie', 'zhuang-xinyi',
  'jiang-yang', 'yan-qingmin', 'fang-xinghai', 'wang-jianjun'
]);

export function isOfficialActiveInUnit(official: Official, unitId: string): boolean {
  if (official.isCurrentServing === false) return false;
  const pos = official.currentPosition || '';
  if (pos.includes('原') || pos.includes('首任') || pos.includes('退休')) {
    return false;
  }
  if (unitId === 'csrc-main') {
    const unit = UNITS_DATA.find((u) => u.id === 'csrc-main');
    return (unit?.currentLeaderIds || []).includes(official.id);
  }
  if (unitId === 'csrc-df') {
    const REGIONAL_BUREAU_IDS = [
      'csrc-bj', 'csrc-sh', 'csrc-gd', 'csrc-sz', 'csrc-js', 
      'csrc-zj', 'csrc-sc', 'csrc-yn', 'csrc-fj', 'csrc-ah', 'csrc-df'
    ];
    return REGIONAL_BUREAU_IDS.includes(official.currentUnitId);
  }
  const unit = UNITS_DATA.find((u) => u.id === unitId);
  if (unit && unit.currentLeaderIds && unit.currentLeaderIds.includes(official.id)) {
    return true;
  }
  return official.currentUnitId === unitId;
}

export function isOfficialPastInUnit(official: Official, unitId: string): boolean {
  if (isOfficialActiveInUnit(official, unitId)) return false;
  if (unitId === 'csrc-main') {
    // 证监会机关（领导班子）严格仅匹配证监会历任会领导班子成员
    return CSRC_LEADERSHIP_IDS.has(official.id);
  }
  if (unitId === 'csrc-df') {
    const REGIONAL_BUREAU_IDS = [
      'csrc-bj', 'csrc-sh', 'csrc-gd', 'csrc-sz', 'csrc-js', 
      'csrc-zj', 'csrc-sc', 'csrc-yn', 'csrc-fj', 'csrc-ah', 'csrc-df'
    ];
    return official.careerHistory.some((r) => REGIONAL_BUREAU_IDS.includes(r.unitId));
  }
  if (unitId === 'gov-local') {
    return official.careerHistory.some(
      (r) =>
        r.unitId === 'gov-local' ||
        r.unitId.startsWith('gov-') ||
        (r.unitName && r.unitName.includes('政府') && !r.unitName.includes('证监')) ||
        r.unitName.includes('区委') ||
        (r.unitName.includes('市委') && !r.unitName.includes('金融')) ||
        r.position.includes('省长') ||
        r.position.includes('市长') ||
        r.position.includes('区长') ||
        r.unitName.includes('金融办')
    );
  }
  if (unitId === 'gov-sh' || unitId === 'gov-sh-prov') {
    return official.careerHistory.some(
      (r) =>
        r.unitId === 'gov-sh-prov' ||
        r.unitId === 'gov-sh' ||
        (((r.unitName && r.unitName.includes('上海')) || (r.department && r.department.includes('上海'))) &&
          (r.unitName.includes('政府') ||
            r.position.includes('市长') ||
            r.unitName.includes('金融办') ||
            r.unitName.includes('金融工委') ||
            r.unitName.includes('市委')) &&
          !r.unitName.includes('虹口') &&
          !r.position.includes('虹口'))
    );
  }
  if (unitId === 'gov-sh-dist') {
    return official.careerHistory.some(
      (r) =>
        r.unitId === 'gov-sh-dist' ||
        r.unitName.includes('虹口') ||
        r.position.includes('虹口') ||
        (r.department && r.department.includes('虹口'))
    );
  }
  if (unitId === 'gov-js' || unitId === 'gov-js-prov') {
    return official.careerHistory.some(
      (r) =>
        (r.unitId === 'gov-js-prov' ||
          (r.unitName.includes('江苏') && r.unitName.includes('政府'))) &&
        !r.unitName.includes('南京')
    );
  }
  if (unitId === 'gov-js-city') {
    return official.careerHistory.some(
      (r) =>
        r.unitId === 'gov-js-city' ||
        r.unitId === 'gov-js' ||
        r.unitName.includes('南京') ||
        r.position.includes('南京')
    );
  }
  if (unitId === 'gov-gd' || unitId === 'gov-gd-prov') {
    return official.careerHistory.some(
      (r) =>
        (r.unitId === 'gov-gd-prov' ||
          (r.unitName.includes('广东') && r.unitName.includes('政府'))) &&
        !r.unitName.includes('深圳')
    );
  }
  if (unitId === 'gov-gd-city') {
    return official.careerHistory.some(
      (r) =>
        (r.unitId === 'gov-gd-city' ||
          r.unitId === 'gov-gd' ||
          r.unitName.includes('深圳') ||
          r.position.includes('深圳')) &&
        (r.unitName.includes('政府') || r.position.includes('市长'))
    );
  }
  if (unitId === 'gov-sd' || unitId === 'gov-sd-prov') {
    return official.careerHistory.some(
      (r) =>
        r.unitId === 'gov-sd-prov' ||
        r.unitId === 'gov-sd' ||
        (r.unitName.includes('山东') &&
          (r.unitName.includes('政府') || r.position.includes('省长')))
    );
  }
  if (unitId === 'gov-tj' || unitId === 'gov-tj-prov') {
    return official.careerHistory.some(
      (r) =>
        r.unitId === 'gov-tj-prov' ||
        r.unitId === 'gov-tj' ||
        (r.unitName.includes('天津') &&
          (r.unitName.includes('政府') || r.position.includes('市长')))
    );
  }
  if (unitId === 'cbirc') {
    return official.careerHistory.some(
      (r) => r.unitId === 'cbirc' || r.unitName.includes('银监') || r.unitName.includes('银保监')
    );
  }
  if (unitId === 'sasac-cic') {
    return official.careerHistory.some(
      (r) => r.unitId === 'sasac-cic' || r.unitName.includes('中投') || r.unitName.includes('汇金') || r.unitName.includes('国资委')
    );
  }
  return official.careerHistory.some((r) => r.unitId === unitId);
}


export function sortOfficialsByRankAndSeniority(a: Official, b: Official): number {
  const rankA = RANK_ORDER[a.currentRank] || 99;
  const rankB = RANK_ORDER[b.currentRank] || 99;
  if (rankA !== rankB) return rankA - rankB;

  const getRoleWeight = (pos: string) => {
    if (pos.includes('主席') && !pos.includes('副主席')) return 1;
    if (pos.includes('书记') && !pos.includes('副书记')) return 2;
    if (pos.includes('理事长') && !pos.includes('副理事长')) return 3;
    if (pos.includes('局长') && !pos.includes('副局长')) return 4;
    if (pos.includes('会长') && !pos.includes('副会长')) return 5;
    if (pos.includes('院长') && !pos.includes('副院长')) return 6;
    if (pos.includes('副')) return 10;
    return 20;
  };
  const rwA = getRoleWeight(a.currentPosition);
  const rwB = getRoleWeight(b.currentPosition);
  if (rwA !== rwB) return rwA - rwB;

  return a.birthYear - b.birthYear;
}

export function getOfficialColor(officialId: string) {
  const found = OFFICIAL_COLORS.find((c) => c.id === officialId);
  if (found) return found;
  return {
    id: officialId,
    name: '官员',
    primary: '#0071e3',
    border: '#0071e3',
    bg: 'rgba(0, 113, 227, 0.12)',
    badgeBg: 'bg-blue-500',
    text: 'text-blue-600',
    ring: 'ring-blue-500',
  };
}

