const lectures = [
  {
    "code": "0001",
    "title": "19890515_BG6.40-41,BG6.47,BG1.8,BG7.3_Bhubaneswar_Permanent Bank Balance",
    "section": "BG1989"
  },
  {
    "code": "0002",
    "title": "19890522_BG_6.47_BBSR_Best of All Yogis",
    "section": "BG1989"
  },
  {
    "code": "0003",
    "title": "19890523_BG1.8_BBSR_Discussion on this Verse",
    "section": "BG1989"
  },
  {
    "code": "0004",
    "title": "19890524_BG_7_3_BBSR_Krsna_Can't_Hide_Himself_Before_A_Devotee",
    "section": "BG1989"
  },
  {
    "code": "0005",
    "title": "19890529_BG7.4_Bhubaneswar_TheScienceOfCreation",
    "section": "BG1989"
  },
  {
    "code": "0006",
    "title": "19890530_BG_7_5_BBSR_Difference_Between_Supreme_Personality_of_Godhead",
    "section": "BG1989"
  },
  {
    "code": "0007",
    "title": "19890530_BG7.5_Bhubaneswar_RealPosition",
    "section": "BG1989"
  },
  {
    "code": "0008",
    "title": "19890603_BG7.8-9_Bhubaneswar_HowKrishnaIsAll-Pervading",
    "section": "BG1989"
  },
  {
    "code": "0009",
    "title": "19890604_BG7.10_Bhubaneswar_IfKrishnaIsSatisfiedTheWholeWorldIsSatisfied&Draupadi'sChastity",
    "section": "BG1989"
  },
  {
    "code": "0010",
    "title": "19890608_BG7.14_Bhubaneswar_TheSupremeLordMukundaIsTheMasterOfMaya",
    "section": "BG1989"
  },
  {
    "code": "0011",
    "title": "19890609_BG7.15_Bhubaneswar_4TypesOfPersonsWhoDon'tSurrenderUntoKrishna",
    "section": "BG1989"
  },
  {
    "code": "0012",
    "title": "19890612_BG7.19_Bhubaneswar_ASurrenderedSoulAMahatmaIsVeryRare",
    "section": "BG1989"
  },
  {
    "code": "0013",
    "title": "19891029_BG11.8_Bhubaneswar_PureDevoteesDon'tWantToSeeTheOpulenceOfKrishna",
    "section": "BG1989"
  },
  {
    "code": "0014",
    "title": "19891030_BG11.9-11_Bhubaneswar_UniversalManifestationOfTheLord",
    "section": "BG1989"
  },
  {
    "code": "0015",
    "title": "19891103_BG11.14_Bhubaneswar_ArjunaWasPlayingThePartOfAConditionedSoul",
    "section": "BG1989"
  },
  {
    "code": "0016",
    "title": "19891105_BG11.15_Bhubaneswar_EverythingIsAManifestationOfTheLord",
    "section": "BG1989"
  },
  {
    "code": "0017",
    "title": "19891106_BG11.16_Bhubaneswar_Arjuna'sEcstasy",
    "section": "BG1989"
  },
  {
    "code": "0018",
    "title": "19891112_BG11.33_Bhubaneswar_YouJustBecomeAnInstrument",
    "section": "BG1989"
  },
  {
    "code": "0019",
    "title": "19891114_BG11.34-36_Bhubaneswar_TheSupremeLordIsOnlyConqueredByBhakti",
    "section": "BG1989"
  },
  {
    "code": "0020",
    "title": "19891117_BG11.37_Bhubaneswar_KrishnaAlwaysSeeksOpportunitiesToServeHisDearDevotees",
    "section": "BG1989"
  },
  {
    "code": "0021",
    "title": "19891118_BG11.38_Bhubaneswar_SpiritualEducationIsLikeAChasteLady",
    "section": "BG1989"
  },
  {
    "code": "0022",
    "title": "19891119_BG11.39_Bhubaneswar_3TypesOfPersonsCannotSleep",
    "section": "BG1989"
  },
  {
    "code": "0023",
    "title": "19891120_BG11.40_Bhubaneswar_BondageOfLove",
    "section": "BG1989"
  },
  {
    "code": "0024",
    "title": "19891121_BG11.41-42_Bhubaneswar_TheSecretAboutSarva-Dharm\u0101nParityajya",
    "section": "BG1989"
  },
  {
    "code": "0025",
    "title": "19891122_BG11.43_Bhubaneswar_UnificationOf4Sampradayas",
    "section": "BG1989"
  },
  {
    "code": "0026",
    "title": "19891123_BG11.44_Bhubaneswar_ByChantingHareKrishnaOneDevelopsTolerance",
    "section": "BG1989"
  },
  {
    "code": "0027",
    "title": "19891124_BG11.45_Bhubaneswar_SignificanceOfRathaYatra",
    "section": "BG1989"
  },
  {
    "code": "0028",
    "title": "19891128_BG11.49_Bhubaneswar_KrishnaIsTheSupremeSanctioningAuthority",
    "section": "BG1989"
  },
  {
    "code": "0029",
    "title": "19891129_BG11.50_Bhubaneswar_TheBeautifulFormOfKrishna&QualifyYourself",
    "section": "BG1989"
  },
  {
    "code": "0030",
    "title": "19891130&1201_BG11.51&Darshan_Bhubaneswar_KrishnaIsVeryTricky",
    "section": "BG1989"
  },
  {
    "code": "0031",
    "title": "19891201_BG11.52_Bhakti could develop only by the Association of Bhakta_BBSR",
    "section": "BG1989"
  },
  {
    "code": "0032",
    "title": "19891202_ BG11.53_Make Plan for Krsna_BBSR",
    "section": "BG1989"
  },
  {
    "code": "0033",
    "title": "19891203_BG11.54_The Purpose of rarely human life to get Krsna_BBSR",
    "section": "BG1989"
  },
  {
    "code": "0034",
    "title": "19891204_BG_In Kaliyuga sinful activites are rampant_BBSR",
    "section": "BG1989"
  },
  {
    "code": "0035",
    "title": "19891207_BG12.2_Maya is waiting when you Lazy_BBSR",
    "section": "BG1989"
  },
  {
    "code": "0036",
    "title": "19891208_BG12.3-4_Take Shelter of the Holy Name_BBSR",
    "section": "BG1989"
  },
  {
    "code": "0037",
    "title": "19891209_SB 7.10.60-66_Surrender, is the most confidential instruction in the BG_BBSR",
    "section": "BG1989"
  },
  {
    "code": "0038",
    "title": "19891210_BG12.6_In Kaliyauga Captured by Maya_BBSR",
    "section": "BG1989"
  },
  {
    "code": "0039",
    "title": "19891213_BG 12.9_BBSR_Stages of Development in Bhakti",
    "section": "BG1989"
  },
  {
    "code": "0040",
    "title": "19891214_BG12_10_BBSR_In_Whatever_Way,_Just_Think_of_Krishna",
    "section": "BG1989"
  },
  {
    "code": "0041",
    "title": "19891217_BG12.12_BBSR_Krsna's Cheating Process",
    "section": "BG1989"
  },
  {
    "code": "0042",
    "title": "19900000_BG_The worthy person to gets Sadhu's Mercy_BBSR",
    "section": "BG1990"
  },
  {
    "code": "0043",
    "title": "19900000_BG_Three modes of material nature could be purified by a bonafide Spiritual Master_BBSR",
    "section": "BG1990"
  },
  {
    "code": "0044",
    "title": "19900000_BG18_Krsna's will is Supreme sanction _BBSR",
    "section": "BG1990"
  },
  {
    "code": "0045",
    "title": "19900314_BG15.13_Krsna is the source of all Potency_ BBSR",
    "section": "BG1990"
  },
  {
    "code": "0046",
    "title": "19900530_BG18.11_What is right action and what is wrong action_BBSR",
    "section": "BG1990"
  },
  {
    "code": "0047",
    "title": "19900600 _BG_One must completely depend upon Krsna_BBSR",
    "section": "BG1990"
  },
  {
    "code": "0048",
    "title": "19900616 _BG18.26_Conditioned soul thinking is all defect_BBSR",
    "section": "BG1990"
  },
  {
    "code": "0049",
    "title": "19900617_BG18.27_Guru can test disciple's determitation, other's can't do_BBSR",
    "section": "BG1990"
  },
  {
    "code": "0050",
    "title": "19900730_BG18.50_Bhubaneswar_AttainingPerfectionByActingAccordingToOneOwnGuna",
    "section": "BG1990"
  },
  {
    "code": "0051",
    "title": "19900731_BG18.51-53_Bhubaneswar_BeASelfRealizedSoul",
    "section": "BG1990"
  },
  {
    "code": "0052",
    "title": "19900802_BG18.54_Bhubaneswar_EqualVision",
    "section": "BG1990"
  },
  {
    "code": "0053",
    "title": "19900803_BG18.55_Bhubaneswar_OnlyThroughBhaktiCanOneKnowKrishna",
    "section": "BG1990"
  },
  {
    "code": "0054",
    "title": "19900808_BG18.58_Bhubaneswar_KrishnaIsPartialToHisDevotees",
    "section": "BG1990"
  },
  {
    "code": "0055",
    "title": "19901026_BG_Brisbane_MahaprabhuIsStraightKrsnaIsCrooked",
    "section": "BG1990"
  },
  {
    "code": "0056",
    "title": "19901027_BG3.37_Brisbane_TheDutyOfAHumanBeing",
    "section": "BG1990"
  },
  {
    "code": "0057",
    "title": "19901029_BG4.40_Cooroy_SimplicityIsVaishnavism",
    "section": "BG1990"
  },
  {
    "code": "0058",
    "title": "19901030_BG5.22_Cooroy_SimplePenance",
    "section": "BG1990"
  },
  {
    "code": "0059",
    "title": "19901031_BG9.24_Brisbane_WhenKrishnaIsSatisfiedEveryoneIsSatisfied",
    "section": "BG1990"
  },
  {
    "code": "0060",
    "title": "19901101_BG5.29_Attain Peace in the Material World and Tapasya_New Govardhan",
    "section": "BG1990"
  },
  {
    "code": "0061",
    "title": "19901103_BG5.29 PII_There is no happiness in this material World_New Govardhan",
    "section": "BG1990"
  },
  {
    "code": "0062",
    "title": "19901104_BG9.22_ Krsna Carries What You Lack_ New Govardhan Aust",
    "section": "BG1990"
  },
  {
    "code": "0063",
    "title": "19901104_Sunday Feast_BG9.22_Types of Vedic evidence and interpretation_Murwillmbah",
    "section": "BG1990"
  },
  {
    "code": "0064",
    "title": "19901106_Evening Programe_The Success and Perfection of Human Life according to BG_Sydney",
    "section": "BG1990"
  },
  {
    "code": "0065",
    "title": "19901112_BG4.39_Nobody has Real Faith in the Heart, only in Lips_Melbourne",
    "section": "BG1990"
  },
  {
    "code": "0066",
    "title": "19901115_BG6.26_Mind is the Cause Conditioned & Liberated Stage_Melbourne",
    "section": "BG1990"
  },
  {
    "code": "0067",
    "title": "19901117_BG9.26_Simplicity in the Heart is most Important_Adelaide",
    "section": "BG1990"
  },
  {
    "code": "0068",
    "title": "19901122_BG4.40_Develop child like Simplicity_ Perth",
    "section": "BG1990"
  },
  {
    "code": "0069",
    "title": "19901123_BG8.14_The Holy Name is Everything_Perth",
    "section": "BG1990"
  },
  {
    "code": "0070",
    "title": "19910118_BG11.38-46 & Isopanisad & Brahma Samhita Recitation with Niketana Babaji and SG_BBSR",
    "section": "BG1991"
  },
  {
    "code": "0071",
    "title": "1011_BG16.4_Demons are in disguise of Vaisnavas_Los Angeles",
    "section": "BG1991"
  },
  {
    "code": "0072",
    "title": "19911228_BG8.14_Bali_UnlessYouGetPremaYouCannotKeepKrishnaInYourMind",
    "section": "BG1991"
  },
  {
    "code": "0073",
    "title": "19920811_BG7_28_Berlin_Attachment_to_Krsna_make_one_free_from_Delusion",
    "section": "BG1992"
  },
  {
    "code": "0074",
    "title": "19920812_BG7_29_Berlin_Human_Body_is_a_chance_for_Elevate_to_Higher",
    "section": "BG1992"
  },
  {
    "code": "0075",
    "title": "19930322_BG8.23.16_Bhubaneswar_ChastityOfSpiritualEducation",
    "section": "BG1993"
  },
  {
    "code": "0076",
    "title": "19930601_BG6.30_Baltimore_Without Love No Question of Manmana bhavah",
    "section": "BG1993"
  },
  {
    "code": "0077",
    "title": "19930606_SF_BG10.8_Potomac_ Gita Class",
    "section": "BG1993"
  },
  {
    "code": "0078",
    "title": "19930712_BG16.4_Birmingham_TheWonderfulNatureOfPrema",
    "section": "BG1993"
  },
  {
    "code": "0079",
    "title": "19930907_BG9.4.48_Bhubaneswar_PutUnflinchingFaithInKrishnaAndGiveUpAllDoubts",
    "section": "BG1993"
  },
  {
    "code": "0080",
    "title": "19930914_BG9.4.65_Bhubaneswar_TheLoveOfTheGopisIsCauseless",
    "section": "BG1993"
  },
  {
    "code": "0081",
    "title": "19930922_BG9.4.67_Bhubaneswar_APureDevotee\u2019sWorshipIsSuperiorToWorshipOfKrishna",
    "section": "BG1993"
  },
  {
    "code": "0082",
    "title": "19930925_BG9.4.68_Bhubaneswar_VaishnavaOffenseIsAMadElephant",
    "section": "BG1993"
  },
  {
    "code": "0083",
    "title": "19931003_BG3.9_Brishben_Offer Everything to Krsna",
    "section": "BG1993"
  },
  {
    "code": "0084",
    "title": "19940116_BG3_9_Sunday_Feast_Mauritius_Bondage_of_Karma_and_Reactions",
    "section": "BG1994"
  },
  {
    "code": "0085",
    "title": "19950122_BG16.4_Nigeria_DemoniacAndDivineCharacteristics",
    "section": "BG1995"
  },
  {
    "code": "0086",
    "title": "19950129_BG16.4_Ghana_HumilityAndPride",
    "section": "BG1995"
  },
  {
    "code": "0087",
    "title": "19951122_Public Prog_BG16.4_Benin City_Why Does Krsna Come to Earth",
    "section": "BG1995"
  },
  {
    "code": "0088",
    "title": "19860719_CCAntya3.266-268_France_PremaDhana",
    "section": "CC1986"
  },
  {
    "code": "0089",
    "title": "19890300_CCAdi3.19-21_Bhubaneswar_GopiBhava",
    "section": "CC1989"
  },
  {
    "code": "0090",
    "title": "19890303_Cc Adi4 227-228_BBSR_To Understand Sri Caitanya Mahaprabhu we have to offer our prayer to his associates",
    "section": "CC1989"
  },
  {
    "code": "0091",
    "title": "19890330_CCAdi4.225-226_Bhubaneswar_CaitanyaTheAbodeOfRasa",
    "section": "CC1989"
  },
  {
    "code": "0092",
    "title": "19890331_CCAdi4.227-228_Bhubaneswar_TheSpiritualMasterIsAGirlCompanionOfRadharani",
    "section": "CC1989"
  },
  {
    "code": "0093",
    "title": "19890406_CCAdi4.229-230_Bhubaneswar_3SignificantPointsInRadharani\u2019sLove",
    "section": "CC1989"
  },
  {
    "code": "0094",
    "title": "19890407_CCAdi4.231-233_Bhubaneswar_Unripe&RipeMango",
    "section": "CC1989"
  },
  {
    "code": "0095",
    "title": "19890413_CCAdi4.234-241_Bhubaneswar_TheDifferenceBetweenCuckoosAndCrows",
    "section": "CC1989"
  },
  {
    "code": "0096",
    "title": "19890414_CCAdi4.242-244_Bhubaneswar_RadhaPrema",
    "section": "CC1989"
  },
  {
    "code": "0097",
    "title": "19890420_CCAdi4.245-248_Bhubaneswar_SrimatiRadharaniHasMoreMellowsThanKrishna",
    "section": "CC1989"
  },
  {
    "code": "0098",
    "title": "19890421_CCAdi4.249-255_Bhubaneswar_Radharani'sHeartIsLikeAMirror",
    "section": "CC1989"
  },
  {
    "code": "0099",
    "title": "19890427_CCAdi4.256-258_Bhubaneswar_KrishnaBecomesADiscipleOfRadharani",
    "section": "CC1989"
  },
  {
    "code": "0100",
    "title": "19890428_CCAdi4.259_Bhubaneswar_DescriptionOfSrimatiRadharani",
    "section": "CC1989"
  },
  {
    "code": "0101",
    "title": "19890504_CCAdi4.260_Bhubaneswar_GloriesOfRadha",
    "section": "CC1989"
  },
  {
    "code": "0102",
    "title": "19890505_CCAdi4.261-272_Bhubaneswar_ThoseWhoHaveGottenKrishnaHaveCriedForKrishna",
    "section": "CC1989"
  },
  {
    "code": "0103",
    "title": "19890518_CCAdi4.273-275_Bhubaneswar_PremaBhaktiSutra",
    "section": "CC1989"
  },
  {
    "code": "0104",
    "title": "19890519_CCAdi4.276-5.6_Bhubaneswar_BalaramaServesKrishnaWith10Bodies",
    "section": "CC1989"
  },
  {
    "code": "0105",
    "title": "19890601_CCAdi5.15-20_Bhubaneswar_HowCanOneHaveSpiritualSensesAndVision",
    "section": "CC1989"
  },
  {
    "code": "0106",
    "title": "19890602_CCAdi5.21_Bhubaneswar_TheBestOfAllLilas",
    "section": "CC1989"
  },
  {
    "code": "0107",
    "title": "19890616_CCAdi5.15-20_BBSR_Develop proper vison to see Vrndavan Dham",
    "section": "CC1989"
  },
  {
    "code": "0108",
    "title": "19890622_CCAdi5.21_BBSR_A Croocked Person and Most beautifu",
    "section": "CC1989"
  },
  {
    "code": "0109",
    "title": "19890629_CCAdi5.22_Bhubaneswar_TheSpiritualMasterIsLikeAGoldSmith",
    "section": "CC1989"
  },
  {
    "code": "0110",
    "title": "19890700_CC Adi.4.221-222_BBSR_The root cause of Sri Caitanya Mahaprabhu's Appearance",
    "section": "CC1989"
  },
  {
    "code": "0111",
    "title": "19890817_CCAdi5.71_Bhubaneswar_BalaramaAppearanceDay",
    "section": "CC1989"
  },
  {
    "code": "0112",
    "title": "19890818_CCAdi5.72_Bhubaneswar_HowCanAConditionedSoulUnderstandTheGloriesOfTheLord",
    "section": "CC1989"
  },
  {
    "code": "0113",
    "title": "19890827_CCAdi4.260_Bhubaneswar_RadharaniIsTheCrestJewelOfAllTheMaidens",
    "section": "CC1989"
  },
  {
    "code": "0114",
    "title": "19890831_CCAdi5.73-76_Bhubaneswar_5TypesOfIgnorance&TheMercifulStrengthOfLordBalarama",
    "section": "CC1989"
  },
  {
    "code": "0115",
    "title": "19890907_CCAdi5.77-81_Bhubaneswar_OneShouldAcceptTheBonafideAutorithyWithoutAnyArgument",
    "section": "CC1989"
  },
  {
    "code": "0116",
    "title": "19890914_CCAdi5.82-83_Bhubaneswar_RealKrishnaKirtan",
    "section": "CC1989"
  },
  {
    "code": "0117",
    "title": "19890915_CCAdi5.84-86_Bhubaneswar_TheSupremeLordCannotBeUnderstoodThroughOurMaterialSenses",
    "section": "CC1989"
  },
  {
    "code": "0118",
    "title": "19890921_CCAdi5.87-89_Bhubaneswar_ AcintyaBhedaAbhedaTattva",
    "section": "CC1989"
  },
  {
    "code": "0119",
    "title": "19890922_CCAdi5.90-92_Bhubaneswar_RealVairagya",
    "section": "CC1989"
  },
  {
    "code": "0120",
    "title": "19890928_CCAdi5.93_Bhubaneswar_LordNityanandaIsTheRootOfTheBhaktiCreeper",
    "section": "CC1989"
  },
  {
    "code": "0121",
    "title": "19890929_CCAdi5.94-98_BBSR_Manifestations of Krsna in Mathura, Dwaraka and Vrndavan",
    "section": "CC1989"
  },
  {
    "code": "0122",
    "title": "19891005_CCAdi5.99-101_Bhubaneswar_FullyBlossomedConsciousness",
    "section": "CC1989"
  },
  {
    "code": "0123",
    "title": "19891006_CCAdi5.102-104_Bhubaneswar_OceanOfPrema",
    "section": "CC1989"
  },
  {
    "code": "0124",
    "title": "19891012_CCAdi5.105-108_Bhubaneswar_KrishnaIsParamesvara",
    "section": "CC1989"
  },
  {
    "code": "0125",
    "title": "19891013_CCAdi5.109-111_Bhubaneswar_It'sAQuestionOfPureHeart",
    "section": "CC1989"
  },
  {
    "code": "0126",
    "title": "19891103_CCAdi5.139-140_Bhubaneswar_KrishnaIsTheSupremeStealer",
    "section": "CC1989"
  },
  {
    "code": "0127",
    "title": "19891109_CCAdi5.141-143_Bhubaneswar_TheMeaningOfHareKrishnaMahaMantra",
    "section": "CC1989"
  },
  {
    "code": "0128",
    "title": "19891110_CCAdi5.144-147_Bhubaneswar_TheWeaponsOfLordCaitanya",
    "section": "CC1989"
  },
  {
    "code": "0129",
    "title": "19891111_CCAdi7.6_Bhubaneswar_PanchaTattva",
    "section": "CC1989"
  },
  {
    "code": "0130",
    "title": "19891116_CCAdi5.149-153_Bhubaneswar_ServantsOfKrishna",
    "section": "CC1989"
  },
  {
    "code": "0131",
    "title": "19891117_CCAdi5.154-160_Bhubaneswar_TheOutcomeOfKrishnaPrema",
    "section": "CC1989"
  },
  {
    "code": "0132",
    "title": "19891123_CCAdi5.161-167_Bhubaneswar_LordNityanandaTheMercifulIncarnation",
    "section": "CC1989"
  },
  {
    "code": "0133",
    "title": "19891124_CCAdi5.168-171_Bhubaneswar_OneMustDevelopSuchVisionToSeeSadhu",
    "section": "CC1989"
  },
  {
    "code": "0134",
    "title": "19891130_CCAdi5.172-179_Bhubaneswar_PancaTattvaAreOne",
    "section": "CC1989"
  },
  {
    "code": "0135",
    "title": "19891201_CCAdi5.180-193_Bhubaneswar_OneMustGetTheMercyOfNityanandaPrabhuToGetTheMercyOfGaurangaMahaprabhu",
    "section": "CC1989"
  },
  {
    "code": "0136",
    "title": "19891208_CcAdi5_Sanatan Goswami_BBSR",
    "section": "CC1989"
  },
  {
    "code": "0137",
    "title": "19891214_CC_Adi5_211_217_BBSR_One_Particle_of_Krishna's_Beauty_Enchants",
    "section": "CC1989"
  },
  {
    "code": "0138",
    "title": "19891215_CCAdi5.00_Krsna is Complete, no question of deficity_BBSR",
    "section": "CC1989"
  },
  {
    "code": "0139",
    "title": "19900311_ CC_ BBSR_If you indipendent you will be punish",
    "section": "CC1990"
  },
  {
    "code": "0140",
    "title": "19900330_CCAdi6.71_Natural consiquence of Krsna Prema and Cause of Devotees fall dowan_BBSR",
    "section": "CC1990"
  },
  {
    "code": "0141",
    "title": "19900330_CCAdi6.72_Association with Devotees_BBSR",
    "section": "CC1990"
  },
  {
    "code": "0142",
    "title": "19900405_CCAdi6.76_Baladeva Tattva_BBSR",
    "section": "CC1990"
  },
  {
    "code": "0143",
    "title": "19900406_CC_Lord Siva Greatest Vaisnava_BBSR",
    "section": "CC1990"
  },
  {
    "code": "0144",
    "title": "19900406_CCAdi6.79-81_Bhakti is a matter in the heart not outward_BBSR",
    "section": "CC1990"
  },
  {
    "code": "0145",
    "title": "19900531_CCAdi7.14_ Diffrence between Suddha Bhakta and Antaranga Bhakta _BBSR",
    "section": "CC1990"
  },
  {
    "code": "0146",
    "title": "19900601_CCAdi7.16-17_Prema Tattva_BBSR",
    "section": "CC1990"
  },
  {
    "code": "0147",
    "title": "19900602_CCAdi7.18_The Pure devotees related with five mellows in Vrndavan defined_BBSR",
    "section": "CC1990"
  },
  {
    "code": "0148",
    "title": "19900603_CCAdi7.22_Mahaprabhu mixed prema in Namsankirtana_BBSR",
    "section": "CC1990"
  },
  {
    "code": "0149",
    "title": "19900726_CCAdi7.38-42_Bhubaneswar_HowMahaprabhuShoweredMercyToMayavadis",
    "section": "CC1990"
  },
  {
    "code": "0150",
    "title": "19900727_CCAdi7.43-46_Bhubaneswar_MayavadisAreOffenders",
    "section": "CC1990"
  },
  {
    "code": "0151",
    "title": "19900802_CCAdi7.47-48_Bhubaneswar_BonafideGuru&Sisya",
    "section": "CC1990"
  },
  {
    "code": "0152",
    "title": "19900803_CCAdi7.49-53_Bhubaneswar_OneShouldNotTolerateBlasphemyOfSadhuGuruSastra",
    "section": "CC1990"
  },
  {
    "code": "0153",
    "title": "19900809_CCAdi7.54-56_Bhubaneswar_TheOrderOfSrimatiRadharani",
    "section": "CC1990"
  },
  {
    "code": "0154",
    "title": "19900810_CCAdi7.57-61_Bhubaneswar_TrnadApiSunicenaAPracticalTeaching",
    "section": "CC1990"
  },
  {
    "code": "0155",
    "title": "19900817_CCAdi7.62-65_Bhubaneswar_MahaprabhuTakingSannyasa",
    "section": "CC1990"
  },
  {
    "code": "0156",
    "title": "19900824_CCAdi7.66-70_Bhubaneswar_VaishnavasVsMayavadis",
    "section": "CC1990"
  },
  {
    "code": "0157",
    "title": "19901104_CC_Four types of Evidence_New Govardhan Aust",
    "section": "CC1990"
  },
  {
    "code": "0158",
    "title": "19901200_CCAdi5.105-108 _Lord Siva's Position & Krsna's Pastime in Vrndavan_BBSR",
    "section": "CC1990"
  },
  {
    "code": "0159",
    "title": "19901220_CCAdi7.108-109_Mayavada defined_BBSR",
    "section": "CC1990"
  },
  {
    "code": "0160",
    "title": "19901221_CCAdi7.110_Mayavada again defined-2_BBSR",
    "section": "CC1990"
  },
  {
    "code": "0161",
    "title": "19901227_CCAdi7.111-112_Undrstand Veda through Mukhya Vicar, chief consideration_BBSR",
    "section": "CC1990"
  },
  {
    "code": "0162",
    "title": "19901228_ CCAdi7.113_Unless one endowed in pure intellegient, can't understand this Knowledge_ BBSR",
    "section": "CC1990"
  },
  {
    "code": "0163",
    "title": "19910103_CCAdi7.114_Why Lord Buddha denied Veda_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0164",
    "title": "19910103_CCAdi7.114-115_Siva has no fault, he is only order carrer and Mayavadis are offenders_ BBSR",
    "section": "CC1991"
  },
  {
    "code": "0165",
    "title": "19910104_CCAdi7.115_Mayavadis calls the deites Material_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0166",
    "title": "19910110_ CCAdi7.116_The diffrence betwee Paramatma and Jivatama_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0167",
    "title": "19910117_ CCAdi7.117_The explanations of Divisons of Vedas_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0168",
    "title": "19910118_ CCAdi7.118_Mayavadis has confuse phiosophy_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0169",
    "title": "19910124_CCAdi7.119_Mayavadis have incorect Phiosophy_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0170",
    "title": "19910125_CCAdi7.120_This HK movement is supreme welfare activites for All_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0171",
    "title": "19910201_CCAdi7.121_Bhubaneswar_TruthIsAlwaysTruth",
    "section": "CC1991"
  },
  {
    "code": "0172",
    "title": "19910306_CCAdhi7.122_Fortunate one could understand Tattva by mercy of Goura Priyajana_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0173",
    "title": "19910308_CCAdi7.123 -126_Krsna is crying for Himself_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0174",
    "title": "19910314_CCAdi7.127-128_Mahaprabhu defeaed the Mayavadis_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0175",
    "title": "19910322_CCAdi7.129-132_Four Vaisnava School and Acintyabhedaveda Tattva_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0176",
    "title": "19910328 _CCAdi7.133-137_Ten essential point of Mahaprabhu's Teaching_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0177",
    "title": "19910329_CCAdi7.138-140_Unless one get Mercy from Mahaprabhu, can't understand Parabramha Tattva_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0178",
    "title": "19910402_CCadi9.33-36_Sri Caitanya's Order and Jiva's distress_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0179",
    "title": "19910404_CCAdi7.141_Only Hearing achiving the Supreme Destination_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0180",
    "title": "19910405_CCAdi7.144_Establishing Relationship with Krsna_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0181",
    "title": "19910411_CCAdi7.144-145_What is the Happiness in the Material World_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0182",
    "title": "19910412_CCAdi7.146-148_Krsna Prema is Wealth_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0183",
    "title": "19910418_CCAdi7.149-150_Krsna Nam is Spureme Sreya for living entity_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0184",
    "title": "19910419_CCAdi7.151-153_Mahaprabhu's Prema Nama and more, most confidential instructions in BG_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0185",
    "title": "19910425_CCAdi7.157_Glories of Lord Siva, Mahaprabhu visit and SP left all his mercy in BBSR Dham_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0186",
    "title": "19910426_CCAdi7.158-160_Mahaprabhu's Three Unfullfilled Desire_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0187",
    "title": "19910502_CCAdi7.162-163_Explanation of Pancatattva,Suddha Bh and Antaranga Bh_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0188",
    "title": "19910506_CCAdi8.5-7_Getting Mercy of a Devotee_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0189",
    "title": "19910509_CCAdi7.167-172_Vaisnava Vandana and Mantras in four Yuga_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0190",
    "title": "19910510_CCAdi8.1-4_The path shown by Pancatattva, no sign of duplicity and crookedness_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0191",
    "title": "19910516_CCAdi8.5-7_Croaking like Frog, welcome Death_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0192",
    "title": "19910517_CCAdi8.8-10 & ACD_Surrender is the Atma Dharma_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0193",
    "title": "19910523_CCAdi8.11_Living in water dying with thirsty_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0194",
    "title": "19910524_CCAdi8.14-16_Mahaprabhu's Mercy is Amandadvaya Daya_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0195",
    "title": "19910627_CCAdi8.24_Ten offences and Jagannath Mahabhava Prakas_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0196",
    "title": "19910628_CCAdi8.25_Effect of sever offences_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0197",
    "title": "19910712_CCAdi8.24_ The Mystrey of Gundicha Marjan lila and Nabajoubana besa_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0198",
    "title": "19910718_CCAdi8.26-27_Only by Mercy a Conditioned Soul Can Chant Hare Krsna_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0199",
    "title": "19910818_CC Intro_Gouranga's confidentional Prema Tattva_BVM,mp3",
    "section": "CC1991"
  },
  {
    "code": "0200",
    "title": "19910905_CCAdi7.2-4_Mahamantra and Taraka bramha in very Yugas_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0201",
    "title": "19910906_CCAdi7.5-6_Panca Tattva Mellow is very difficult to understand_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0202",
    "title": "19910919_CCAdi7.11_Mahaprabhu's pastime in Puri, The Lord cries for himself_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0203",
    "title": "19910923_CC1.8.33-36_Glory of SB and Evidence of diffrent Prasthanas_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0204",
    "title": "19911128_CCAdi8.40-43_The Unique characteristic of Goura Lila, the Mahavadanya Avatara_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0205",
    "title": "19911129_CCAdi 8.44-49_Goura Lila is all Merciful Lila than Krsna Lila_BBSR",
    "section": "CC1991"
  },
  {
    "code": "0206",
    "title": "19911205_CCAdi8.50-57_Bhubaneswar_TheOriginal50QualitiesOfLordKrishna",
    "section": "CC1991"
  },
  {
    "code": "0207",
    "title": "19911206_CCAdi8.59-62_Bhubaneswar_DiscipleMeansUnderStrictDiscipline&KrpaBala",
    "section": "CC1991"
  },
  {
    "code": "0208",
    "title": "19911212_CCAdi8.63-66_Bhubaneswar_ByTheMercyOfTheVaishnavasWeCanDevelopBhakti",
    "section": "CC1991"
  },
  {
    "code": "0209",
    "title": "19911213_CCAdi8.67-72_Bhubaneswar_Visaya&Asraya",
    "section": "CC1991"
  },
  {
    "code": "0210",
    "title": "19920103_CCAdi8.73_The Test of Pure Love and Mixed Love_BBSR",
    "section": "CC1992"
  },
  {
    "code": "0211",
    "title": "19920109_CCAdi8.79-85_Krpa Bala Merciful Strength_BBSR",
    "section": "CC1992"
  },
  {
    "code": "0212",
    "title": "19920117_CCAdi9_1_Gouranga,_the_CrestJewel_of_All_Avatara_BBSR",
    "section": "CC1992"
  },
  {
    "code": "0213",
    "title": "19920123_CCAdi9_2_5_The_Path_of_Viasnava_is_the_safest_Path_BBSR",
    "section": "CC1992"
  },
  {
    "code": "0214",
    "title": "19920124_CCAdi9_6_10_Sri_Caitanya_Mahaprabhu_is_the_Tree_of_Transcendental",
    "section": "CC1992"
  },
  {
    "code": "0215",
    "title": "19920130_CCAdi9_11_12_A_Crooked,_independent_minded_Disciple_can't",
    "section": "CC1992"
  },
  {
    "code": "0216",
    "title": "19920213_CCAdi9_16_21_BBSR_Spreading_Caitanya's_Bhakti_Tree_throughout",
    "section": "CC1992"
  },
  {
    "code": "0217",
    "title": "19920214_CCAdi9_26_29_BBSR_Your_Chanting_is_the_Name_word_available",
    "section": "CC1992"
  },
  {
    "code": "0218",
    "title": "19920313_CCAdi9_30_BBSR_Associating_Sadhus_With_Much_Humility_Beg",
    "section": "CC1992"
  },
  {
    "code": "0219",
    "title": "19920320_CCAdi9.33_BBSR_A Fortunate Jiva does Krsna Bhajan",
    "section": "CC1992"
  },
  {
    "code": "0220",
    "title": "19920326_CCAdi9_37_BBSR_Why_Mahaprabhu_Accepts_the_Complexion_of",
    "section": "CC1992"
  },
  {
    "code": "0221",
    "title": "19920327_CCAdi9_39_BBSR_The_Significance_of_the_Holy_name_coming",
    "section": "CC1992"
  },
  {
    "code": "0222",
    "title": "19920402_ CCAdi9.39-40_BBSR_No Material Survival",
    "section": "CC1992"
  },
  {
    "code": "0223",
    "title": "19920409_CCAdi9_41_BBSR_The_Duty_of_Taking_Human_birth_in_Bharata",
    "section": "CC1992"
  },
  {
    "code": "0224",
    "title": "19920410_CCAdi9.42_BBSR_The Tattva of Sreya and Preya",
    "section": "CC1992"
  },
  {
    "code": "0225",
    "title": "19920416_CCAdi9_43_BBSR_The_Tattva_Vastu_descends_only_through_Hearing",
    "section": "CC1992"
  },
  {
    "code": "0226",
    "title": "19920417_CCAdi9_44_45_BBSR_Become_an_Akincahana_and_enter_into_Krsna's",
    "section": "CC1992"
  },
  {
    "code": "0227",
    "title": "19920423_CCAdi9_46_BBSR_A_True_Attitude_and_Process_of_Chanting",
    "section": "CC1992"
  },
  {
    "code": "0228",
    "title": "19920424_CCAdi9_47_48_BBSR_The_Conditions_of_Mordern_Followers_of",
    "section": "CC1992"
  },
  {
    "code": "0229",
    "title": "19920430_CCAdi9_49_51_BBSR_Merciful_glances_of_Sri_Caitanya_Mahaprabhu",
    "section": "CC1992"
  },
  {
    "code": "0230",
    "title": "19920507_CCAdi9.52_BBSR_The Best Fruit of Vedic Tree",
    "section": "CC1992"
  },
  {
    "code": "0231",
    "title": "19920508_CCAdi10_1_BBSR_Without_Goura_Krpa_Nobody_would_Deliver",
    "section": "CC1992"
  },
  {
    "code": "0232",
    "title": "19920514_CCAdi10_2_BBSR_Sriman_Mahaprabhu's_Practical_Divine_Teachings",
    "section": "CC1992"
  },
  {
    "code": "0233",
    "title": "19920709_CCAdi10_BBSR_Krsna's_Devotee_never_Worship_Demigod_Separately",
    "section": "CC1992"
  },
  {
    "code": "0234",
    "title": "19920716_CCAdi10_12_14_BBSR_Why_Mahaprabhu_accepted_the_Mood_of",
    "section": "CC1992"
  },
  {
    "code": "0235",
    "title": "19920717_CCAdi10_15_19_Who_is_Radha_and_Who_are_Sakhis_and_their",
    "section": "CC1992"
  },
  {
    "code": "0236",
    "title": "19920719_EP_BV_Manor_CCAdi_5_21_The_Most_Amazing_Gift_of_Caitanya",
    "section": "CC1992"
  },
  {
    "code": "0237",
    "title": "19920801_CCAdi8_32_BBSR_Radharani's_Dasami_Dasa,_tenth_condition",
    "section": "CC1992"
  },
  {
    "code": "0238",
    "title": "19920802_CCmadhya_8_24_Antonio_Radharani's_Relishing_is_GreatestSpenish",
    "section": "CC1992"
  },
  {
    "code": "0239",
    "title": "19920827_CCAdi10.25_BBSR_Pastimes of Srila Raghava Pandit",
    "section": "CC1992"
  },
  {
    "code": "0240",
    "title": "19920828_CCAdi10_25_28_BBSR_Krsna_Accapts_only_the_Loving_Mood_of",
    "section": "CC1992"
  },
  {
    "code": "0241",
    "title": "19920903_CCAdi10.29-32_BBSR_Searching Water in a Hot Desert",
    "section": "CC1992"
  },
  {
    "code": "0242",
    "title": "19920910_CCAdi10_33_35_BBSR_Don't_Disturb_Lord_Caitanya's_Mood",
    "section": "CC1992"
  },
  {
    "code": "0243",
    "title": "19920911_CCAdi10_36_38_BBSR_Sriman_Mahaprabhu's_Bhakta_Vatsalya",
    "section": "CC1992"
  },
  {
    "code": "0244",
    "title": "19920917_CCAdi10_39_40_BBSR_In_Goura_Lila_two_contradictory_subjects",
    "section": "CC1992"
  },
  {
    "code": "0245",
    "title": "19920918_CCAdi10_41_42_BBSR_Pure_Devotee's_Heart_Bleeds_for_Suffering",
    "section": "CC1992"
  },
  {
    "code": "0246",
    "title": "19921023_CCAdi10.43_BBSR_Feeling Pangs of Separation",
    "section": "CC1992"
  },
  {
    "code": "0247",
    "title": "19921030_CCAdi10_48_49_BBSR_Mahaprabhu_Tested_Murari_Gupta's_Bhajan",
    "section": "CC1992"
  },
  {
    "code": "0248",
    "title": "19921111_CCAdi10_49_BBSR_The_Explanation_of_Pure_Devotees_and_Intimate",
    "section": "CC1992"
  },
  {
    "code": "0249",
    "title": "19921119_CCAdi10_50_BBSR_Curing_the_Chronic_DiseasesEng_and_Odia",
    "section": "CC1992"
  },
  {
    "code": "0250",
    "title": "19921120_CCAdi10.52_BBSR_Real Svarup of Gopi Prema",
    "section": "CC1992"
  },
  {
    "code": "0251",
    "title": "19921126_CCAdi10_54_BBSR_One_Must_Accept_Guru_As_Atrma_Devata",
    "section": "CC1992"
  },
  {
    "code": "0252",
    "title": "19921203_CCAdi10_63_BBSR_Keeping_up_Your_Minute_Independence_and",
    "section": "CC1992"
  },
  {
    "code": "0253",
    "title": "19921204_CCAdi10.69_BBSR_Natuer of Pure Love",
    "section": "CC1992"
  },
  {
    "code": "0254",
    "title": "19921210_CCAdi10_74_BBSR_Mahaprabhu's_Mercy_upon_Mayavadis_Makes",
    "section": "CC1992"
  },
  {
    "code": "0255",
    "title": "19921211_CCAdi10_78_79_BBSR_One_Must_do_Glorification_of_Devotees",
    "section": "CC1992"
  },
  {
    "code": "0256",
    "title": "19921217_CCAdi10_84_BBSR_Life_and_Teachings_of_Srila_Sanatana_Goswami",
    "section": "CC1992"
  },
  {
    "code": "0257",
    "title": "19921218_CCAdi10.85_BBSR_Sanatana Goswami Life and Pastime-2",
    "section": "CC1992"
  },
  {
    "code": "0258",
    "title": "19921224_CCAdi10_88_BBSR_Glories_of_Sanatan_and_Rupa_Goswami_3",
    "section": "CC1992"
  },
  {
    "code": "0259",
    "title": "19921225_CCAdi10_91_BBSR_Glories_of_Srila_Raghunath_Das_Goswami",
    "section": "CC1992"
  },
  {
    "code": "0260",
    "title": "19921231_CCAdi10.105_BBSR_Krsna Again Got Radha in Dwaraka",
    "section": "CC1992"
  },
  {
    "code": "0261",
    "title": "19930101_CCAdi10.108_BBSR_Citrajalpa, Mahaprabhu's Condition is Same as Radharani",
    "section": "CC1993"
  },
  {
    "code": "0262",
    "title": "19930108_CCAdi10.119_BBSR_Pray and Cry, This is the Only Way for Us",
    "section": "CC1993"
  },
  {
    "code": "0263",
    "title": "19930121_CCAdi10.123_BBSR_If You Can't See the Swarup of Guru, How Can You Follow Him",
    "section": "CC1993"
  },
  {
    "code": "0264",
    "title": "19930122_CCAdi10.127_BBSR_Sarvabhauma Bhatacarya Teaching Vedanta to Lord Caitanya",
    "section": "CC1993"
  },
  {
    "code": "0265",
    "title": "19930128_CCAdi10.131_BBSR_Ramananda Roy Answer Mahaprabhu's Questions",
    "section": "CC1993"
  },
  {
    "code": "0266",
    "title": "19930129_CCAdi10.132_BBSR_Bramhananda Bharati got Mercy from Mahaprabhu in Puri",
    "section": "CC1993"
  },
  {
    "code": "0267",
    "title": "19930204_CCAdi10.138_BBSR_Those Who are Completely Free From Anartha, They See Guru As Sevya",
    "section": "CC1993"
  },
  {
    "code": "0268",
    "title": "19930225_CCAdi10.45_BBSR_Difference Between Jiva and Krsna, Mayavasa and Mayadvhisa",
    "section": "CC1993"
  },
  {
    "code": "0269",
    "title": "19930226_CCAdi10.49_BBSR_Seven Top Teachings From Banishment of Chota Haridasa",
    "section": "CC1993"
  },
  {
    "code": "0270",
    "title": "19930304_CCAdi10.155-158_BBSR_Glories of Srila Raghunath Bhatta Goswami",
    "section": "CC1993"
  },
  {
    "code": "0271",
    "title": "19930305_CCAdi10.159_BBSR_Mahaprabhu's Bhajan is the Final Stage of Prema",
    "section": "CC1993"
  },
  {
    "code": "0272",
    "title": "19930311_CCAdi11.1-4_BBSR_Nirai Brings Prema Nama",
    "section": "CC1993"
  },
  {
    "code": "0273",
    "title": "19930318_CCAdi11.5-8_BBSR_Desire Pleasure to own Senses is Deep rooted",
    "section": "CC1993"
  },
  {
    "code": "0274",
    "title": "19930319_CCAdi11.9_BBSR_Glories of Association of Vaisnavas",
    "section": "CC1993"
  },
  {
    "code": "0275",
    "title": "19930325_ CCAdi11.14-15_BBSR_Radharani's Mood as Citrajalpa",
    "section": "CC1993"
  },
  {
    "code": "0276",
    "title": "19930326_CCAdi11.20_BBSR_A True Disciple Brings Pleasure to His Guru",
    "section": "CC1993"
  },
  {
    "code": "0277",
    "title": "19930402_CCAdi11.24_BBSR_The Separation Makes Love Alive",
    "section": "CC1993"
  },
  {
    "code": "0278",
    "title": "19930408_CCAdi11.27_BBSR_Pure Conjugal Loving Affairs can't Understand without Mercy of Nitai",
    "section": "CC1993"
  },
  {
    "code": "0279",
    "title": "19930409_CCAdi11.31-34_ BBSR_Explanations of Highest mood of Loving Affairs between Krsna and Gopis",
    "section": "CC1993"
  },
  {
    "code": "0280",
    "title": "19930415_CCAdi11.35 & ACD_BBSR_Without Nityananda Nobody could get Radha Krsna",
    "section": "CC1993"
  },
  {
    "code": "0281",
    "title": "19930416_CCAdi11.41 & ACD_BBSR_Three Reasons Krsna Broke His Promises in front of Gopis",
    "section": "CC1993"
  },
  {
    "code": "0282",
    "title": "19930422_CCAdi11.44-47 & ACD_BBSR_Mercy of Nityananda is the Asset of Goudiya Gurus",
    "section": "CC1993"
  },
  {
    "code": "0283",
    "title": "19930423_CCAdi11.52 & ACD_BBSR_Seven Diffrent Conditions of Radharani",
    "section": "CC1993"
  },
  {
    "code": "0284",
    "title": "19930429_CCAdi11.57 & ACD_BBSR_Who is not getting Prema Dhana, is Really Poor",
    "section": "CC1993"
  },
  {
    "code": "0285",
    "title": "19930430_CCAdi12.1_BBSR_Advita Acarya's Call Penetrate Golaka Vrndavan",
    "section": "CC1993"
  },
  {
    "code": "0286",
    "title": "19930507_CCAdi12.5_BBSR_Jiva's Abusement of Minute Independence",
    "section": "CC1993"
  },
  {
    "code": "0287",
    "title": "19930624_CCAdi12.9-12_BBSR_Asat Sisya has No Faith No Mrcey from Guru",
    "section": "CC1993"
  },
  {
    "code": "0288",
    "title": "19930625_CCAdi12.13-17_BBSR_Those who are real simple, very easily get Mercy",
    "section": "CC1993"
  },
  {
    "code": "0289",
    "title": "19930701_CCAdi12.18-26_BBSR_Why become mad for stool, become mad for relish the nectar",
    "section": "CC1993"
  },
  {
    "code": "0290",
    "title": "19930702_CCAdi12.27_BBSR_Beg for Punishment",
    "section": "CC1993"
  },
  {
    "code": "0291",
    "title": "19930702_CCAdi12.27_BBSR_When Mahaprabhu and Adiwita Acarya Dance Eight symptoms of Ecstatic Aries",
    "section": "CC1993"
  },
  {
    "code": "0292",
    "title": "19930708_CCAdi12.38-49_BBSR_Always gladly accept the punishment implicated by Sadhu Vaisnavas",
    "section": "CC1993"
  },
  {
    "code": "0293",
    "title": "19930709_CCAdi12.50_BBSR_Lord's Punishment is Mercy not Cruelty",
    "section": "CC1993"
  },
  {
    "code": "0294",
    "title": "19930813_CCAdi12.54-57_BBSR_The Glories of Vasudeva Datta, a Pure Devotees Desire",
    "section": "CC1993"
  },
  {
    "code": "0295",
    "title": "19930819_CCAdi12.58-62_Bhubaneswar_KrishnaFulfilTheDesiresOfHisDearDevotees",
    "section": "CC1993"
  },
  {
    "code": "0296",
    "title": "19930820_CCAdi12.63_ Caitanya Mahaprabhu's Prema Jala",
    "section": "CC1993"
  },
  {
    "code": "0297",
    "title": "19930903_CCAdi12.71-73_BBSR_Nobody Develop Krsnabhakti without Serving a Dear Devotee of Gouranga",
    "section": "CC1993"
  },
  {
    "code": "0298",
    "title": "19930909_CCAdi12.79-80_BBSR_Glories of Gadadhar Pandit",
    "section": "CC1993"
  },
  {
    "code": "0299",
    "title": "19930910_CCAdi12.81-83_BBSR_Combination of two Tattva of Leftist and Rightists",
    "section": "CC1993"
  },
  {
    "code": "0300",
    "title": "19930916_CCAdi12.84-87_BBSR_Activites of Swarup Sakti, internal Potency of the Lord",
    "section": "CC1993"
  },
  {
    "code": "0301",
    "title": "19930924_CCAdi12.88_Bhubaneswar_LastLimitOfPrema",
    "section": "CC1993"
  },
  {
    "code": "0302",
    "title": "19931104_CCAdi13.1_BBSR_The Most Merciful Incarnation of Caitanya Mahaprabhu",
    "section": "CC1993"
  },
  {
    "code": "0303",
    "title": "19931105_CCAdi13.2-6_BBSR_Duties of the Members of Krsna Conscious Movement",
    "section": "CC1993"
  },
  {
    "code": "0304",
    "title": "19931111_CCAdi13.6-29_BBSR_Purpose all Vedic literature to Understand Krsna",
    "section": "CC1993"
  },
  {
    "code": "0305",
    "title": "19931112_CCAdi13.30_BBSR_Nine Islands of Navadvip Dham",
    "section": "CC1993"
  },
  {
    "code": "0306",
    "title": "19931119_CCAdi13.37_BBSR_Caitanya Mahaprabhu's Teachings of Feeling Separation",
    "section": "CC1993"
  },
  {
    "code": "0307",
    "title": "19931217_ CcAdi13.42-43_BBSR_Radharani Speaking to Bumble Bee",
    "section": "CC1993"
  },
  {
    "code": "0308",
    "title": "19931223_CCAdi13.44-46_BBSR_Shyamsundar Became Gour Sundar as Ripe Mango",
    "section": "CC1993"
  },
  {
    "code": "0309",
    "title": "19931230_CCAdi13.51_BBSR_How to Subside Lust, Heart Disease",
    "section": "CC1993"
  },
  {
    "code": "0310",
    "title": "19931231_CCAdi13.61_BBSR_Lord Nityanananda's Childhood Pastimes",
    "section": "CC1993"
  },
  {
    "code": "0311",
    "title": "19940105_CCAdi13_67_71_BBSR_A_Sadhu_Never_thought_ill_of_any_JIva",
    "section": "CC1994"
  },
  {
    "code": "0312",
    "title": "19940106_CCAdi13_62_67_BBSR_The_Glorious_Process_of_Bhakti_Yoga",
    "section": "CC1994"
  },
  {
    "code": "0313",
    "title": "19940107_CCAdi13_67_71_BBSR_The_Glories_of_Adwitacarya_Prabhu",
    "section": "CC1994"
  },
  {
    "code": "0314",
    "title": "19940116_CCMad4_1_Mauritius_The_Glories_of_Madhavendra_Puri_and",
    "section": "CC1994"
  },
  {
    "code": "0315",
    "title": "19940204_CCAdi13_71_76_BBSR_Catch_the_Feet_of_Nityananda_not_your",
    "section": "CC1994"
  },
  {
    "code": "0316",
    "title": "19940211_CCAdi13_77_80_BBSR_Sadhu_Guru_is_Your_Only_Well_wisher",
    "section": "CC1994"
  },
  {
    "code": "0317",
    "title": "19940217_CCAdi13_81_85_BBSR_A_Bramhana_Surrender_to_Supreme_Will",
    "section": "CC1994"
  },
  {
    "code": "0318",
    "title": "19940218_CCAdi13_86_This_Age_Chanting_Holy_Name_is_Important_than",
    "section": "CC1994"
  },
  {
    "code": "0319",
    "title": "19940317_CCAdi13_87_92_BBSR_Mahaprabhu's_Instruction_on_Name,_Deity",
    "section": "CC1994"
  },
  {
    "code": "0320",
    "title": "19940318_CC1.13.93-97_BBSR_Suddha Nama Bhajan",
    "section": "CC1994"
  },
  {
    "code": "0321",
    "title": "19940324_CC1_13_98_103_Without_Prema_No_Question_of_Bhajan_and_No",
    "section": "CC1994"
  },
  {
    "code": "0322",
    "title": "19940325_C_C_1_13_104_107_BBSR_Understanding_Goura_Tattva_and_The",
    "section": "CC1994"
  },
  {
    "code": "0323",
    "title": "19940331_C_C1_13_109_BBSR_Vedic_Proof_of_Mahaprabhu's_Identity",
    "section": "CC1994"
  },
  {
    "code": "0324",
    "title": "19940401_C_C1_13_118_124_BBSR_Are_you_Chanting_for_Pleasure_of_Goura",
    "section": "CC1994"
  },
  {
    "code": "0325",
    "title": "19940407_CCAdi14.1_BBSR_The Gifts of Sri Caitanya Mahaprabhu",
    "section": "CC1994"
  },
  {
    "code": "0326",
    "title": "19940414_CCAdi14_10_19_BBSR_Sastric_Evidence_Sri_Caitanya's_Appearance",
    "section": "CC1994"
  },
  {
    "code": "0327",
    "title": "19940421_CCAdi14_20_29_BBSR_Childhood_Pastimes_of_Sriman_Mahaprabhu",
    "section": "CC1994"
  },
  {
    "code": "0328",
    "title": "19940422_CCAdi14_30_37_BBSR_Childhood_Pastimes_of_Sriman_Mahaprabhu",
    "section": "CC1994"
  },
  {
    "code": "0329",
    "title": "19940506_CCAdi14_15_61_Wonderful_Pastimes_of_Lord_Gouranga_Continued",
    "section": "CC1994"
  },
  {
    "code": "0330",
    "title": "19940512_C_C_1_14_62_70_BBSR_Surrender,_Completely_Burnt_to_Ashes",
    "section": "CC1994"
  },
  {
    "code": "0331",
    "title": "19940513_CCAdi14.71-93_BBSR_Uddhava Sandesh",
    "section": "CC1994"
  },
  {
    "code": "0332",
    "title": "19940519_CCAdi14_94_97_&_15_1_7_BBSR_Most_Wonderful_Pastimes_of",
    "section": "CC1994"
  },
  {
    "code": "0333",
    "title": "19940520_CC1.15.8-22_BBSR_How to Observe Ekadashi",
    "section": "CC1994"
  },
  {
    "code": "0334",
    "title": "19940526_CCAdi15_23_34_BBSR_Special_Charterstic_of_Gouranga's_Navadwip",
    "section": "CC1994"
  },
  {
    "code": "0335",
    "title": "19940715_CCAdi16.2-8_BBSR_Prema Bhikari Beggar of Prema",
    "section": "CC1994"
  },
  {
    "code": "0336",
    "title": "19940721_CCAdi16_9_15_BBSR_A_Guru_Inflect_Very_Sever_Discipline",
    "section": "CC1994"
  },
  {
    "code": "0337",
    "title": "19940722_CCAdi16_16_23_BBSR_Nam_Sankirtan_Burns_the_Seed_of_Ignorance",
    "section": "CC1994"
  },
  {
    "code": "0338",
    "title": "19940731_CCAdi9_21_Radha_Desh_Why_a_Stupid_Mind_can't_think_Krsna",
    "section": "CC1994"
  },
  {
    "code": "0339",
    "title": "19940825_CCAdi16_20_23_BBSR_Krsna_send_Uddhava_to_Vrajabhumi_for",
    "section": "CC1994"
  },
  {
    "code": "0340",
    "title": "19940826_CCAdi16_24_28_BBSR_Mahaprabhu's_Dealing_is_Very_Pleasing",
    "section": "CC1994"
  },
  {
    "code": "0341",
    "title": "19940901_CCAdi16_29_38_BBSR_Real_Education,_Crushing_the_Pride_of",
    "section": "CC1994"
  },
  {
    "code": "0342",
    "title": "19940902_CCAdi16_39_52_BBSR_The_Duty_and_Characteristic_of_A_Disciple",
    "section": "CC1994"
  },
  {
    "code": "0343",
    "title": "19940908_CCAdi16_52_BBSR_Mahaprabhu's_Mercy_is_so_Wonderful",
    "section": "CC1994"
  },
  {
    "code": "0344",
    "title": "19940909_CCAdi16_53_107_BBSR_Mahaprabhu_Showers_His_Mercy_upon_such",
    "section": "CC1994"
  },
  {
    "code": "0345",
    "title": "19940915_CC_Adi16_103_BBSR_Without_any_Condition_all_Must_Surrender",
    "section": "CC1994"
  },
  {
    "code": "0346",
    "title": "19941027_CCAdi17_1_BBSR_Cry_Before_Gour_Nitai_and_Get_their_Mercy",
    "section": "CC1994"
  },
  {
    "code": "0347",
    "title": "19941028_CCAdi17.2_BBSR_Youthful Pastimes of Lord Caitanya",
    "section": "CC1994"
  },
  {
    "code": "0348",
    "title": "19941111_CCAdi17_8_BBSR_Tattva_Behind_Mahaprabhu's_Offering_Sraddha",
    "section": "CC1994"
  },
  {
    "code": "0349",
    "title": "19941222_CCAdi17.10_BBSR_Sachimata's Offence Nullified",
    "section": "CC1994"
  },
  {
    "code": "0350",
    "title": "19941223_CCAdi17_11_13_BBSR_Childhood_Pastimes_of_Lord_Nityananda",
    "section": "CC1994"
  },
  {
    "code": "0351",
    "title": "19950108_CCAdi7.1_Durban_ThePurposeOfCaitanyaMahaprabhu",
    "section": "CC1995"
  },
  {
    "code": "0352",
    "title": "19950209_CCAdi17.11-15_Bhubaneswar_HowKrishnaStoleRadha'sHeart",
    "section": "CC1995"
  },
  {
    "code": "0353",
    "title": "19950309_CCAdi17.15-17_Bhubaneswar_ByTheCauselessMercyOfNityanandaPrabhuEveryoneCanEasilyAttainKrishnaPrema",
    "section": "CC1995"
  },
  {
    "code": "0354",
    "title": "19950310_CCAdi17.16_Bhubaneswar_WorshipOfVaisnavasIsBetterThanWorshipOfKrishna",
    "section": "CC1995"
  },
  {
    "code": "0355",
    "title": "19950316_CCAdi17.17_Bhubaneswar_Don'tRunFromGaura'sEmbrace",
    "section": "CC1995"
  },
  {
    "code": "0356",
    "title": "19950323_CCAdi17.18_Bhubaneswar_MahaprabhuIsReadyToMakeYouHappy",
    "section": "CC1995"
  },
  {
    "code": "0357",
    "title": "19950330_CCAdi17.19-20_Bhubaneswar_GauraTheSourceOfAllIncarnations",
    "section": "CC1995"
  },
  {
    "code": "0358",
    "title": "19950331_CCAdi17.21-23_Bhubaneswar_HowToChantPureName",
    "section": "CC1995"
  },
  {
    "code": "0359",
    "title": "19950406_CCAdi17.24_BBSR_No Separate Will than Krsna",
    "section": "CC1995"
  },
  {
    "code": "0360",
    "title": "19950407_CCAdi17.34-37_BBSR_Garland of Prema and Nama",
    "section": "CC1995"
  },
  {
    "code": "0361",
    "title": "19950420_CCAdi17.34_BBSR_Determental to Krsna Bhakti",
    "section": "CC1995"
  },
  {
    "code": "0362",
    "title": "19950421_CCAdi17.45_BBSR_One Should Admit as a Great Offender",
    "section": "CC1995"
  },
  {
    "code": "0363",
    "title": "19950427_CCAdi17.60_BBSR_A Bramhana's Curse to Caitanya Mahaprabhu",
    "section": "CC1995"
  },
  {
    "code": "0364",
    "title": "19950428_CCAdi17.66_BBSR_We Must Serve for the Pleasure of Our Master",
    "section": "CC1995"
  },
  {
    "code": "0365",
    "title": "19950505_CCAdi17.70_BBSR_Mahaprabhu Drank Water form Sridhara's Damaged Pot",
    "section": "CC1995"
  },
  {
    "code": "0366",
    "title": "19950511_CCAdi17.71_BBSR_ Sachimata's Offences Nullified",
    "section": "CC1995"
  },
  {
    "code": "0367",
    "title": "19950706_CCAdi17.72-75_BBSR_The Test of Chanting Holy Name",
    "section": "CC1995"
  },
  {
    "code": "0368",
    "title": "19950715_CCAdi13.33-39_Birmingham_Relishing the Stages of Sambhoga and Vipralambha",
    "section": "CC1995"
  },
  {
    "code": "0369",
    "title": "19950723_CC2.6.74-80_Paris_No Difference Between Navadwip and Vraj Lilas",
    "section": "CC1995"
  },
  {
    "code": "0370",
    "title": "19950824_CCAdi17.73_BBSR_According to one's Adhikara one Realises",
    "section": "CC1995"
  },
  {
    "code": "0371",
    "title": "19950825_CCAdi17.77_BBSR_A Vaisnava is not Puffed Up and Proud but Humble",
    "section": "CC1995"
  },
  {
    "code": "0372",
    "title": "19950901_CCAdi17.79-89_BBSR_Special Characteristic of Gournaga Mahaprabhu",
    "section": "CC1995"
  },
  {
    "code": "0373",
    "title": "19951026_CCAdi17.95-100_BBSR_Shiva Tattva",
    "section": "CC1995"
  },
  {
    "code": "0374",
    "title": "19951228_CCAdi17.99-102_Bhubaneswar_HearTheSweetLilasOfMahaprabhu",
    "section": "CC1995"
  },
  {
    "code": "0375",
    "title": "19951229_CCAdi17.103-114_Bhubaneswar_GauraKirtanIsPremaNamaKirtan",
    "section": "CC1995"
  },
  {
    "code": "0376",
    "title": "19850821_SB6.2.36-37_Zurich_SimplictyDeterminationUnalloyedness",
    "section": "CC1995"
  },
  {
    "code": "0377",
    "title": "19850829_SB1.9.44_France_TheBlueJackal",
    "section": "CC1995"
  },
  {
    "code": "0378",
    "title": "19890218_SB7.6.28-30_Bhubaneswar_DoubtIsLikeADemon",
    "section": "CC1995"
  },
  {
    "code": "0379",
    "title": "19890300_SB7.7.12_BBSR_An Acarya's business, never says anything theoretical",
    "section": "CC1995"
  },
  {
    "code": "0380",
    "title": "19890310_SB4.21.28-29_Mayapur_FollowThePathOfTheMahajanas",
    "section": "CC1995"
  },
  {
    "code": "0381",
    "title": "19890325_SB7.7.12-14_Bhubaneswar_GuruMustBePremiBhakta",
    "section": "CC1995"
  },
  {
    "code": "0382",
    "title": "19890327_SB7.7.16_Bhubaneswar_7DefectsOfWomen",
    "section": "CC1995"
  },
  {
    "code": "0383",
    "title": "19890401_SB7.7.19-20_Bhubaneswar_TheBlindMan",
    "section": "CC1995"
  },
  {
    "code": "0384",
    "title": "19890402_SB7.7.21_Bhubaneswar_YouAreNotThisBodyYouAreASpiritSoul",
    "section": "CC1995"
  },
  {
    "code": "0385",
    "title": "19890403_SB7.7.22_Bhubaneswar_YouMustApproachABonafideSpiritualMaster",
    "section": "CC1995"
  },
  {
    "code": "0386",
    "title": "19890404_SB7.7.23_Bhubaneswar_DifferenceBetweenMatterAndSpirit",
    "section": "CC1995"
  },
  {
    "code": "0387",
    "title": "19890405_SB7.7.24_Bhubaneswar_ScienceOfTheSoul",
    "section": "CC1995"
  },
  {
    "code": "0388",
    "title": "19890408_SB7.7.25_Bhubaneswar_YouShouldBeEagerToHaveSuchVision",
    "section": "CC1995"
  },
  {
    "code": "0389",
    "title": "19890409_SB7.7.26_Bhubaneswar_OneWhoCannotTolerateCannotBeConsiderADisciple",
    "section": "CC1995"
  },
  {
    "code": "0390",
    "title": "19890410_SB7.7.27_Bhubaneswar_TheEnchantmentOfMaya",
    "section": "CC1995"
  },
  {
    "code": "0391",
    "title": "19890411_SB7.7.28_Bhubaneswar_TheSpiritualMasterIsAPleader",
    "section": "CC1995"
  },
  {
    "code": "0392",
    "title": "19890412_SB7.7.29_Bhubaneswar_3StagesOfBhakti",
    "section": "CC1995"
  },
  {
    "code": "0393",
    "title": "19890416_SB7.7.32_Bhubaneswar_Pleasure&HappinessOfTheSpiritSoul",
    "section": "CC1995"
  },
  {
    "code": "0394",
    "title": "19890418_SB7.7.34_Bhubaneswar_External&InternalSymptomsOfAPureDevotee",
    "section": "CC1995"
  },
  {
    "code": "0395",
    "title": "19890422_SB7.7.36_Bhubaneswar_PreachersSuppressTheirBhava",
    "section": "CC1995"
  },
  {
    "code": "0396",
    "title": "19890423_SB7.7.37_Bhubaneswar_ProperUse&AbuseOfIndependence",
    "section": "CC1995"
  },
  {
    "code": "0397",
    "title": "19890425_SB7.7.38_Bhubaneswar_YouCanConquerTheUnconquerableByHearingOnly",
    "section": "CC1995"
  },
  {
    "code": "0398",
    "title": "19890426_SB7.7.39_Bhubaneswar_UttamaSisya",
    "section": "CC1995"
  },
  {
    "code": "0399",
    "title": "19890429_SB7.7.40_Bhubaneswar_YouMustTryYourBestToPleaseGuru",
    "section": "CC1995"
  },
  {
    "code": "0400",
    "title": "19890501_SB7.7.41_Bhubaneswar_ResultOfRealEducation",
    "section": "CC1995"
  },
  {
    "code": "0401",
    "title": "19890502_SB7.7.42_Bhubaneswar_KrishnaIsTheSourceOfAllHappiness",
    "section": "CC1995"
  },
  {
    "code": "0402",
    "title": "19890503_SB7.7.43_Bhubaneswar_YuktaVairagya",
    "section": "CC1995"
  },
  {
    "code": "0403",
    "title": "19890506_SB7.7.44-45_Bhubaneswar_OceanOfEternalHappiness",
    "section": "CC1995"
  },
  {
    "code": "0404",
    "title": "19890507_SB7.7.46_Bhubaneswar_OurOnlyRelationshipIsWithKrishna",
    "section": "CC1995"
  },
  {
    "code": "0405",
    "title": "19890508_SB7.7.47_Bhubaneswar_WeMustAspireForSpiritualStrength",
    "section": "CC1995"
  },
  {
    "code": "0406",
    "title": "19890509_SB7.7.48_Bhubaneswar_Dharmas",
    "section": "CC1995"
  },
  {
    "code": "0407",
    "title": "19890510_SB7.7.49_Bhubaneswar_TheSupersoulHariIsVeryDearToTheSoul",
    "section": "CC1995"
  },
  {
    "code": "0408",
    "title": "19890513_SB7.7.50_Bhubaneswar_ThePrayerOfAPureDevotee",
    "section": "CC1995"
  },
  {
    "code": "0409",
    "title": "19890514_SB7.7.51-52_Bhubaneswar_ExampleIsBetterThanPrecept",
    "section": "CC1995"
  },
  {
    "code": "0410",
    "title": "19890515_SB7.7.53_Bhubaneswar_YouMustDevelopEagernessSeriousness&Sincerity",
    "section": "CC1995"
  },
  {
    "code": "0411",
    "title": "19890516_SB7.7.54_Bhubaneswar_TheDifferenceBetweenABrahmana&AVaishnava",
    "section": "CC1995"
  },
  {
    "code": "0412",
    "title": "19890517_SB7.7.55_Bhubaneswar_APureDevoteeIsBetterThanKrishna",
    "section": "CC1995"
  },
  {
    "code": "0413",
    "title": "19890520_SB7.8.1_Bhubaneswar_NrisimhaChaturdashi",
    "section": "CC1995"
  },
  {
    "code": "0414",
    "title": "19890521_SB7.8.2_Bhubaneswar_TheOnlyObjectOfHumanLifeIsKrishnaConsciousness",
    "section": "CC1995"
  },
  {
    "code": "0415",
    "title": "19890522_SB7.8.3-4_Bhubaneswar_6TypesOfPersonsFallDown",
    "section": "CC1995"
  },
  {
    "code": "0416",
    "title": "19890523_SB7.8.5_Bhubaneswar_ADevoteeCaresAboutTheInstructionsOfKrishna",
    "section": "CC1995"
  },
  {
    "code": "0417",
    "title": "19890524_SB7.8.6_Bhubaneswar_KrishnaWantsToBeOrderedByHisDevotees",
    "section": "CC1995"
  },
  {
    "code": "0418",
    "title": "19890527_SB7.8.7_Bhubaneswar_PleasingPlaceOfKrishna",
    "section": "CC1995"
  },
  {
    "code": "0419",
    "title": "19890528_SB7.8.8_Bhubaneswar_KrishnaIsMyProtector&Maintainer",
    "section": "CC1995"
  },
  {
    "code": "0420",
    "title": "19890529_SB7.8.9_Bhubaneswar_Don'tMakeFriendshipWithYourWickedMind",
    "section": "CC1995"
  },
  {
    "code": "0421",
    "title": "19890530_SB7.8.10_Bhubaneswar_SymptomsOfASadhu",
    "section": "CC1995"
  },
  {
    "code": "0422",
    "title": "19890531_SB7.8.11_Bhubaneswar_TheBlindManAndTheSun",
    "section": "CC1995"
  },
  {
    "code": "0423",
    "title": "19890603_SB7.8.12_Bhubaneswar_MyBelovedDeityWhoHasOccupiedMyHeart",
    "section": "CC1995"
  },
  {
    "code": "0424",
    "title": "19890604_SB7.8.13_Bhubaneswar_DevoteesNeverThinkAnybodyAsTheirEnnemies",
    "section": "CC1995"
  },
  {
    "code": "0425",
    "title": "19890605_SB7.8.14-15_Bhubaneswar_KrishnaIsTheOnlyMasterAndAllOthersAreHisServants",
    "section": "CC1995"
  },
  {
    "code": "0426",
    "title": "19890606_SB7.8.16_Bhubaneswar_VaishnavaIsNeverAloneKrishnaIsAlwaysThere",
    "section": "CC1995"
  },
  {
    "code": "0427",
    "title": "19890607_SB7.8.17_Bhubaneswar_KrishnaMeditatesOnHisPureDevotees",
    "section": "CC1995"
  },
  {
    "code": "0428",
    "title": "19890610_SB7.8.18_Bhubaneswar_TheOmnipotenceOfTheLord",
    "section": "CC1995"
  },
  {
    "code": "0429",
    "title": "19890611_SB7.8.19-23_Bhubaneswar_HowMayaSetsYouFree",
    "section": "CC1995"
  },
  {
    "code": "0430",
    "title": "19890612_SB7.8.24_Bhubaneswar_TheSpiritualWorldIsAlwaysEffulgent",
    "section": "CC1995"
  },
  {
    "code": "0431",
    "title": "19890613_SB7.8.25-26_Bhubaneswar_APureDevoteeIsFreeFromAllDoubtsAndIsFearless",
    "section": "CC1995"
  },
  {
    "code": "0432",
    "title": "19890614_SB7.8.27_Bhubaneswar_HowIsItThatASinfulManIsEnjoyingWhileAPiousManIsSuffering",
    "section": "CC1995"
  },
  {
    "code": "0433",
    "title": "19890711_SB7.8.48_Bhubaneswar_EmpoweredIncarnations&KalirCela",
    "section": "CC1995"
  },
  {
    "code": "0434",
    "title": "19890716_SB7.8.52_Bhubaneswar_OnlyTheSupremeLordIsOurWellWisherAndFriend",
    "section": "CC1995"
  },
  {
    "code": "0435",
    "title": "19890717_SB7.8.53_Bhubaneswar_TheFlowerOfLove",
    "section": "CC1995"
  },
  {
    "code": "0436",
    "title": "19890718_SB7.8.54-56_Bhubaneswar_TheLordHasVeryWonderfulIntentions",
    "section": "CC1995"
  },
  {
    "code": "0437",
    "title": "19890719_SB7.9.1_Bhubaneswar_SambandhaTattva",
    "section": "CC1995"
  },
  {
    "code": "0438",
    "title": "19890811_SB7.9.39_Bhubaneswar_JustTakePartInThisHarinamaSankirtana",
    "section": "CC1995"
  },
  {
    "code": "0439",
    "title": "19890816_SB7.9.23_Bhubaneswar_WhatIsRealEternal",
    "section": "CC1995"
  },
  {
    "code": "0440",
    "title": "19890819_SB7.9.24_Bhubaneswar_ASoulGetsPleasureByServingThePureDevotees&TheSupreme",
    "section": "CC1995"
  },
  {
    "code": "0441",
    "title": "19890821_SB7.9.26_Bhubaneswar_TheLordOnlySeesTheSpiritOfDevotion",
    "section": "CC1995"
  },
  {
    "code": "0442",
    "title": "19890822_SB7.9.27_Bhubaneswar_AcceptTheStatementsGivenByTheMahajanas",
    "section": "CC1995"
  },
  {
    "code": "0443",
    "title": "19890823_SB7.9.28_Bhubaneswar_GuruPrasad&KrishnaPrasad",
    "section": "CC1995"
  },
  {
    "code": "0444",
    "title": "19890824_SB7.9.29_Bhubaneswar_TheLordIsEagerToServeHisDearDevotees",
    "section": "CC1995"
  },
  {
    "code": "0445",
    "title": "19890829_SB7.9.31_Bhubaneswar_AchintyaBhedaAbhedaPhilosophy",
    "section": "CC1995"
  },
  {
    "code": "0446",
    "title": "19890830_SB7.9.32_Bhubaneswar_4TypesOfAnarthas",
    "section": "CC1995"
  },
  {
    "code": "0447",
    "title": "19890904_SB7.9.34_Bhubaneswar_YouCannotKnowTheSupremeTruthByYourOwnEndeavour",
    "section": "CC1995"
  },
  {
    "code": "0448",
    "title": "19890905_SB7.9.35_Bhubaneswar_TheOnlyAusterity",
    "section": "CC1995"
  },
  {
    "code": "0449",
    "title": "19890906_SB7.9.36_Bhubaneswar_TheOriginalFormOfTheLord",
    "section": "CC1995"
  },
  {
    "code": "0450",
    "title": "19890909_SB7.9.37_Bhubaneswar_ThoseWhoHaveReceivedTheMercyOfTheSupremeLordCanUnderstandTheTruthRelatedToHim",
    "section": "CC1995"
  },
  {
    "code": "0451",
    "title": "19890911_SB7.9.39_Bhubaneswar_TakeShelterOfThisHolyNameAndGetEverything",
    "section": "CC1995"
  },
  {
    "code": "0452",
    "title": "19890913_SB7.9.40_Bhubaneswar_OneShouldUtiliseHisSensesInTheServiceOfTheSupremeLord",
    "section": "CC1995"
  },
  {
    "code": "0453",
    "title": "19890916_SB7.9.41_Bhubaneswar_TheAttitudeOfAVaishnava&RealWelfareActivity",
    "section": "CC1995"
  },
  {
    "code": "0454",
    "title": "19890918_SB7.9.43_Bhubaneswar_ADevotee'sVisionIsDifferentFromThatOfANonDevotee",
    "section": "CC1995"
  },
  {
    "code": "0455",
    "title": "19890919_SB7.9.44_Bhubaneswar_TrueVaishnavaAttitude&TwoMeaningsOfTyaga",
    "section": "CC1995"
  },
  {
    "code": "0456",
    "title": "19890920_SB7.9.45_Bhubaneswar_GreatestMisery&Unhappiness",
    "section": "CC1995"
  },
  {
    "code": "0457",
    "title": "19890923_SB7.9.46_Bhubaneswar_WhoIsAVaishnava",
    "section": "CC1995"
  },
  {
    "code": "0458",
    "title": "19890925_SB7.9.48_Bhubaneswar_TheTenOriginalTattvas",
    "section": "CC1995"
  },
  {
    "code": "0459",
    "title": "19890926_SB7.9.49_Bhubaneswar_TheSupremeLordCanOnlyBeObtainedThroughDevotionalService",
    "section": "CC1995"
  },
  {
    "code": "0460",
    "title": "19890927_SB7.9.50_Bhubaneswar_OnlyThroughBhaktiEverythingCanBeAttained",
    "section": "CC1995"
  },
  {
    "code": "0461",
    "title": "19890930_SB7.9.51_BBSR_Mayavadis can't understand the purport of Vyasadev,mp3",
    "section": "CC1995"
  },
  {
    "code": "0462",
    "title": "19891003_SB7.9.53_Bhubaneswar_UtiliseYourLifespanInTheLord\u2019sLovingService",
    "section": "CC1995"
  },
  {
    "code": "0463",
    "title": "19891007_SB7.9.54_Bhubaneswar_KrishnaIsTheOnlyRelationship",
    "section": "CC1995"
  },
  {
    "code": "0464",
    "title": "19891009_SB7.10.1_Bhubaneswar_ThePureDevoteesUtiliseEverythingForTheSupremeLord'sService",
    "section": "CC1995"
  },
  {
    "code": "0465",
    "title": "19891010_SB7.10.2_Bhubaneswar_WhoIsQualifiedToApproachTheSupremeLord\uf025",
    "section": "CC1995"
  },
  {
    "code": "0466",
    "title": "19891014_SB7.10.3_Bhubaneswar_WhyAPureDevoteeComesHereToThisMaterialWorld",
    "section": "CC1995"
  },
  {
    "code": "0467",
    "title": "19891016_SB7.10.5_Bhubaneswar_RealMaster&RealServant",
    "section": "CC1995"
  },
  {
    "code": "0468",
    "title": "19891100_SB7.10.22_Bhubaneswar_TheStoryOfJaya&Vijaya",
    "section": "CC1995"
  },
  {
    "code": "0469",
    "title": "19891100_SB7.10.27-29_Bhubaneswar_PureDevoteesAreFreeFromTheBondageOfKarma",
    "section": "CC1995"
  },
  {
    "code": "0470",
    "title": "19891100_SB7.10.30-33_Bhubaneswar_PureLove",
    "section": "CC1995"
  },
  {
    "code": "0471",
    "title": "19891101_SB7.10.18_Bhubaneswar_KrishnaMakesHisDevoteesGreaterThanHim",
    "section": "CC1995"
  },
  {
    "code": "0472",
    "title": "19891104_SB7.10.19_Bhubaneswar_KrishnaIsControlByHisDevotees",
    "section": "CC1995"
  },
  {
    "code": "0473",
    "title": "19891106_SB_7_10_22_BBSR_Life_in_this_Material_World_is_Very_Measurable",
    "section": "CC1995"
  },
  {
    "code": "0474",
    "title": "19891118_SB7.10.23_Bhubaneswar_Ruler'sDuty",
    "section": "CC1995"
  },
  {
    "code": "0475",
    "title": "19891119_SB7.10.34-35_Bhubaneswar_OneMustArdentlyAspireForTheServiceAtTheLotusFeetOfTheLord",
    "section": "CC1995"
  },
  {
    "code": "0476",
    "title": "19891120_SB7.10.36-38_Bhubaneswar_FivePrincipalRelationships",
    "section": "CC1995"
  },
  {
    "code": "0477",
    "title": "19891121_SB7.10.39_Bhubaneswar_UnalloyedAlloyedDevoteesNeverAskAnythingFromTheLord",
    "section": "CC1995"
  },
  {
    "code": "0478",
    "title": "19891122_SB7.10.40_Bhubaneswar_HowToControlThisWickedMind\uf025",
    "section": "CC1995"
  },
  {
    "code": "0479",
    "title": "19891125_SB7.10.41-42_Bhubaneswar_ThePuranas",
    "section": "CC1995"
  },
  {
    "code": "0480",
    "title": "19891127_SB7.10.43-44_Bhubaneswar_OnlyThroughBhaktiCanOneUnderstandSrimadBhagavatam",
    "section": "CC1995"
  },
  {
    "code": "0481",
    "title": "19891128_SB7.10.45_Bhubaneswar_BhagavataDharmaTheSupremeDharma",
    "section": "CC1995"
  },
  {
    "code": "0482",
    "title": "19891129_SB7.10.46-47_Bhubaneswar_OneShouldEternallyBeADisciple",
    "section": "CC1995"
  },
  {
    "code": "0483",
    "title": "19891202_SB7.10.48_Bhubaneswar_BhaktaPranaIsKrishnaKrishnaPranaIsVaishnava",
    "section": "CC1995"
  },
  {
    "code": "0484",
    "title": "19891203_SB_7_10_49_BBSR_Without_Bhakti_One_Can't_Understand_Krsna",
    "section": "CC1995"
  },
  {
    "code": "0485",
    "title": "19891204_SB_7_10_50_BBSR_A_Complete_Surrender_can_Understand_Krishna",
    "section": "CC1995"
  },
  {
    "code": "0486",
    "title": "19891205_SB_7_10_51_BBSR_Be_very_Careful_about_Committing_Vaishnava",
    "section": "CC1995"
  },
  {
    "code": "0487",
    "title": "19891206_SB_7_10_52_59_BBSR_How_Did_Krsna_Saved_Lord_Shiva_and_Expand",
    "section": "CC1995"
  },
  {
    "code": "0488",
    "title": "19891217_SB7.11.5-8_Dharma coming out of Speculation is not real Dharma_BBSR",
    "section": "CC1995"
  },
  {
    "code": "0489",
    "title": "19900107_ SB4.8.5_ Sydney_Cleaning dirt accumulating in the Heart_Eng",
    "section": "SB1990"
  },
  {
    "code": "0490",
    "title": "19900307_SB7.13.12-14_Can't understand a Sadhu with material calculation_ BBSR",
    "section": "SB1990"
  },
  {
    "code": "0491",
    "title": "19900310_SB7.13.15-17_ BBSR_How we can serious in the Path of Devotional Service",
    "section": "SB1990"
  },
  {
    "code": "0492",
    "title": "19900314_SB7.3.18_A pure inteligence could understand Krsna's desire_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0493",
    "title": "19900315_SB7.13.19_You can't measure a Real Sadhu in your own material vision_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0494",
    "title": "19900320_SB7.13.22_A pure devotee is the same platform of Krsna_ BBSR",
    "section": "SB1990"
  },
  {
    "code": "0495",
    "title": "19900326_SB7.13.24_One must fulfill his desire by surrendering to Krsna_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0496",
    "title": "19900327_SB7.13.25_Proper Use of Human Life_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0497",
    "title": "19900327_SB7.13.25BBSR GKD44",
    "section": "SB1990"
  },
  {
    "code": "0498",
    "title": "19900328_SB7.13.26_Regulated Sex Life_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0499",
    "title": "19900403_SB7.13.30_The destiny to get Krsna_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0500",
    "title": "19900407_SB7.13.31_By dint of your own mundane knowledge you can't understant Tattva_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0501",
    "title": "19900409_SB7.13.32_The real business of life is overcome from Fear_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0502",
    "title": "19900530_SB7.14.35_Veda Pramana and Levels of Consciousness_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0503",
    "title": "19900609_SB7.14.40_Two opposits are always there in the Relative World_ BBSR",
    "section": "SB1990"
  },
  {
    "code": "0504",
    "title": "19900610_SB7.14.41_A quilifide Bramhana_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0505",
    "title": "19900616_SB7.15.4_A Vaisnava is a real Bramhana_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0506",
    "title": "19900618_SB7.15.7-9_Only Vaisnavas could do Universal Brotherhood_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0507",
    "title": "19900619_SB7.15.10_The Nature of Women_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0508",
    "title": "19900620_SB7.15.11_Dharma tattva vit grhastha_ BBSR",
    "section": "SB1990"
  },
  {
    "code": "0509",
    "title": "19900621_SB7.15.12_The priciple of Dharma Tattva_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0510",
    "title": "19900723_SB7.15.27_Bhubaneswar_GuruIsNotAnOrdinaryPerson",
    "section": "SB1990"
  },
  {
    "code": "0511",
    "title": "19900724_SB7.15.28_Bhubaneswar_BeSimpleAsAChild",
    "section": "SB1990"
  },
  {
    "code": "0512",
    "title": "19900725_SB7.15.29_Bhubaneswar_KrishnaPremaIsTheRealWealth",
    "section": "SB1990"
  },
  {
    "code": "0513",
    "title": "19900728_SB7.15.30_Bhubaneswar_GiveUpFamilyEntanglement",
    "section": "SB1990"
  },
  {
    "code": "0514",
    "title": "19900730_SB7.15.32-33_Bhubaneswar_ABhaktaIsAPerfectYogi",
    "section": "SB1990"
  },
  {
    "code": "0515",
    "title": "19900731_SB7.15.34_Bhubaneswar_ADevoteeOfTheLordIsFearless",
    "section": "SB1990"
  },
  {
    "code": "0516",
    "title": "19900801_SB7.15.35_Bhubaneswar_OnlyTwoTypesOfJivas",
    "section": "SB1990"
  },
  {
    "code": "0517",
    "title": "19900804_SB7.15.36_Bhubaneswar_StrictnessOfVarnashramaDharma",
    "section": "SB1990"
  },
  {
    "code": "0518",
    "title": "19900807_SB7.15.38-39_Bhubaneswar_InstructionsForBrahmacaris&Grhasthas",
    "section": "SB1990"
  },
  {
    "code": "0519",
    "title": "19900808_SB7.15.40_Bhubaneswar_NeedOfTheSoul",
    "section": "SB1990"
  },
  {
    "code": "0520",
    "title": "19900813_SB7.15.42_Bhubaneswar_TheCharioteer&TheTarget",
    "section": "SB1990"
  },
  {
    "code": "0521",
    "title": "19900818_SB7.15.43-44_Bhubaneswar_RealMahatma",
    "section": "SB1990"
  },
  {
    "code": "0522",
    "title": "19900820_SB7.15.46_Bhubaneswar_MercifulStrengthOfLordBalaramaNityananda",
    "section": "SB1990"
  },
  {
    "code": "0523",
    "title": "19900825_SB7.15.47_Bhubaneswar_OneWhoIsIntelligentOnlyDoesHariBhajan",
    "section": "SB1990"
  },
  {
    "code": "0524",
    "title": "19900917_SB7.15.70_Bhubaneswar_OneWhoHasVedicEducationIsNaturallyHumble",
    "section": "SB1990"
  },
  {
    "code": "0525",
    "title": "19900918_SB7.9.43_Bhubaneswar_APureDevoteeLamentsForTheSufferingOfTheIgnorant",
    "section": "SB1990"
  },
  {
    "code": "0526",
    "title": "19900918_SB7.15.71_Bhubaneswar_GolokaPremaDhana",
    "section": "SB1990"
  },
  {
    "code": "0527",
    "title": "19900919_SB7.9.44_Bhubaneswar_RealRenunciation",
    "section": "SB1990"
  },
  {
    "code": "0528",
    "title": "19900925_SB7.15.75_Bhubaneswar_AVaishnavaIsSuperiorThanABrahmana",
    "section": "SB1990"
  },
  {
    "code": "0529",
    "title": "19901027_SB8.7.22_Brisbane_SignificanceOfSrimadBhagavatam",
    "section": "SB1990"
  },
  {
    "code": "0530",
    "title": "19901028_SB8.7.23_Brisbane_RarelyObtainedHumanFormOfLife",
    "section": "SB1990"
  },
  {
    "code": "0531",
    "title": "19901029_SB8.7.24_Brisbane_OnePointedDevotion",
    "section": "SB1990"
  },
  {
    "code": "0532",
    "title": "19901030_SB8.7.25-26_Cooroy_SignificanceRegardingVedicPhilosophies",
    "section": "SB1990"
  },
  {
    "code": "0533",
    "title": "19901031_SB8.7.27-29_Cooroy_SitaRamaTattva",
    "section": "SB1990"
  },
  {
    "code": "0534",
    "title": "19901101_SB8.7.30-31_Only Tattvacarya impact Tattvagyana_Brisbane",
    "section": "SB1990"
  },
  {
    "code": "0535",
    "title": "19901102_SB3.33.14_Austerity  is for Krishna's pleasure not for own _New Govardhan",
    "section": "SB1990"
  },
  {
    "code": "0536",
    "title": "19901103_SB3.33.15_Guru has Mercy and Cheating_New Govardhan",
    "section": "SB1990"
  },
  {
    "code": "0537",
    "title": "19901103_SB3.33.16-17_Seven Defects of Woman_New Govardhan",
    "section": "SB1990"
  },
  {
    "code": "0538",
    "title": "19901105_SB3.33.18-19_A Real Grhastha is better than a Sanyasi_New Govardhan",
    "section": "SB1990"
  },
  {
    "code": "0539",
    "title": "19901105_SB3.33.18-19{P-2}_A real Grhastha is better Than Sannyasi & Biographical Interview_New Govardhan",
    "section": "SB1990"
  },
  {
    "code": "0540",
    "title": "19901108_SB4.8.6_Krsna Vison, Srutakhita Patha_Sydeny",
    "section": "SB1990"
  },
  {
    "code": "0541",
    "title": "19901109_SB4.25.15_Clean the dirt accumulate in the Heart_Sydney",
    "section": "SB1990"
  },
  {
    "code": "0542",
    "title": "19901110_SB4.25.16_Curing from Heart disease_Sydney",
    "section": "SB1990"
  },
  {
    "code": "0543",
    "title": "19901112_SB12.9.13_Accept the Truth what the Mahajana's says_Melbourne",
    "section": "SB1990"
  },
  {
    "code": "0544",
    "title": "19901113_SB12.9.22-25_To understant Krsna in Tattva is the success of Life_Melbourne",
    "section": "SB1990"
  },
  {
    "code": "0545",
    "title": "19901114_SB12.10.2_Fearlessly take shelter of Krsna's lotus feet_Melbourne",
    "section": "SB1990"
  },
  {
    "code": "0546",
    "title": "19901115_SB12.10.6_Krsna in Vrndavan, Mathura and Dwaraka_Melbourne",
    "section": "SB1990"
  },
  {
    "code": "0547",
    "title": "19901117_SB5.6.16_Only hearing from bonafide authority one could elevate higher conciousness_Adelide",
    "section": "SB1990"
  },
  {
    "code": "0548",
    "title": "19901119_SB5.6.18_Sri Krsna is Bound up in the Heart of His Pure Devotee_Adelaide",
    "section": "SB1990"
  },
  {
    "code": "0549",
    "title": "19901122_SB3.6.7_Upgrade to Fully Blossoming State of Consciousness by associatation with a living Sadhu_Perth",
    "section": "SB1990"
  },
  {
    "code": "0550",
    "title": "19901123_SB3.6.8_Serve the Lotus Feet of a Gaura Priya Jana to Understand Acintya Bheda Abheda Tattva_Perth",
    "section": "SB1990"
  },
  {
    "code": "0551",
    "title": "19901209_SB8.1.32_Whole body should be utilize for service to Krsna_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0552",
    "title": "19901211_SB8.2.2-4_Just Accept Bonafide Authority without any argument_ BBSR",
    "section": "SB1990"
  },
  {
    "code": "0553",
    "title": "19901222_SB8.2.31_Free from fear, follow Mahajanas_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0554",
    "title": "19901224_SB8.2.33_As sure as Death_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0555",
    "title": "19901225_SB8.3.1_One shuld not give up Haribhajan in any situation_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0556",
    "title": "19901229_SB8.3.3_This is not Mad man's Delirium_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0557",
    "title": "19901231_ SB8.3.5_Other than Bhagavata Dharma is fearful_BBSR",
    "section": "SB1990"
  },
  {
    "code": "0852",
    "title": "19910910_SB8.8.16-17_The opulence of a Krsna devotee is unfathomable_BBSR",
    "section": "SB1991"
  },
  {
    "code": "0683",
    "title": "19920104_SB8_10_1_6_The_very_difficult_part_to_give_that_Up_BBSR",
    "section": "SB1992"
  },
  {
    "code": "0684",
    "title": "19920105_SB8_10_7_12_Sabda_Bramha_Descends_from_Bonafide_Vaisnava",
    "section": "SB1992"
  },
  {
    "code": "0685",
    "title": "19920106_SB8.10.13-25_The Guru Sent by Maya_BBSR",
    "section": "SB1992"
  },
  {
    "code": "0686",
    "title": "19920107_SB8_10_26_38_Four_Types_of_Evidence_and_Interpretations",
    "section": "SB1992"
  },
  {
    "code": "0687",
    "title": "19920108_SB_08_10_39_40_The_fighting_spirit_would_be_stop_only_by",
    "section": "SB1992"
  },
  {
    "code": "0688",
    "title": "19920111_SB8.11.1-5_Who Occupies what Planetary System_BBSR",
    "section": "SB1992"
  },
  {
    "code": "0689",
    "title": "19920113_SB8_11_8_A_Real_Pandit_Never_Rejoice_and_Lament_BBSR",
    "section": "SB1992"
  },
  {
    "code": "0690",
    "title": "19920115_SB8_11_9_12_Meditating_Lotus_Feet_of_the_Lord,_destroys",
    "section": "SB1992"
  },
  {
    "code": "0691",
    "title": "19920118_SB8_11_28_33_A_Surrender_Soul_Never_Afraid_in_any_Situation",
    "section": "SB1992"
  },
  {
    "code": "0692",
    "title": "19920120_SB8_11_34_40_Supreme_Lord_descends_as_Word_Sabda_Bramha",
    "section": "SB1992"
  },
  {
    "code": "0693",
    "title": "19920121_SB8_11_41_48_The_Order_of_Krishna_comes_via_the_lips_of",
    "section": "SB1992"
  },
  {
    "code": "0694",
    "title": "19920122_SB8.12.1-4_The Glories of Lord Shiva_BBSR",
    "section": "SB1992"
  },
  {
    "code": "0695",
    "title": "19920125_SB8_12_5_Become_Natural_Surrender_not_posing,_pretending",
    "section": "SB1992"
  },
  {
    "code": "0696",
    "title": "19920126_SB8_12_6_Purna_Bramha,_achieving_that_which_one_will_never",
    "section": "SB1992"
  },
  {
    "code": "0697",
    "title": "19920128_SB8.12.8_The Philosphy of Cause and Effect_BBSR",
    "section": "SB1992"
  },
  {
    "code": "0698",
    "title": "19920129_SB8_12_9_10_Krsna_can't_keep_himself_hidden_in_the_eye",
    "section": "SB1992"
  },
  {
    "code": "0699",
    "title": "19920201_SB_8_12_11_BBSR_Rasa_tattva,_Our_Goal_to_achieve_Supreme",
    "section": "SB1992"
  },
  {
    "code": "0700",
    "title": "19920202_SB8_12_12_BBSR_The_Lord_incarnates_by_the_prayer_of_his",
    "section": "SB1992"
  },
  {
    "code": "0701",
    "title": "19920203_SB 3.21.13_BBSR_The All Beauty of Sri Krsna",
    "section": "SB1992"
  },
  {
    "code": "0702",
    "title": "19920204_SB8_12_15_BBSR_Nobody_should_not_Hear_Topics_Related_to",
    "section": "SB1992"
  },
  {
    "code": "0703",
    "title": "19920209_SB8.12.16_BBSR_Trick of the Wicked Mind",
    "section": "SB1992"
  },
  {
    "code": "0704",
    "title": "19920211_SB8_12_17_21_BBSR_The_Thief_Should_be_Bound_Up,_then_Maya",
    "section": "SB1992"
  },
  {
    "code": "0705",
    "title": "19920215_SB8_12_23_24_BBSR_Not_Attracted_to_Krsna_but_to_ugly_witch",
    "section": "SB1992"
  },
  {
    "code": "0706",
    "title": "19920229_SB3.9.11_Mayapur_Devoted to My Devotee",
    "section": "SB1992"
  },
  {
    "code": "0707",
    "title": "19920308_SB8_12_25_31_BBSR_How_Jiva_Maya_and_Guna_Maya_Covers_up",
    "section": "SB1992"
  },
  {
    "code": "0708",
    "title": "19920309_SB8.12.32-33_BBSR_Glories of Lord Siva",
    "section": "SB1992"
  },
  {
    "code": "0709",
    "title": "19920310_SB8.12.34_BBSR_Beautiful Woman is a Great Danger",
    "section": "SB1992"
  },
  {
    "code": "0710",
    "title": "19920311_SB8_12_35_BBSR_One_should_be_Trained_to_Protect_Semen_by",
    "section": "SB1992"
  },
  {
    "code": "0711",
    "title": "19920315_SB8.12.38_BBSR_Krsna Makes Siva Greater",
    "section": "SB1992"
  },
  {
    "code": "0712",
    "title": "19920316_SB8_12_39_BBSR_Lord_Visnu_gave_His_Names_to_Demigods",
    "section": "SB1992"
  },
  {
    "code": "0713",
    "title": "19920321_SB8_12_40_BBSR_Jiva_Can't_conquer_Maya_by_his_own_Strenght",
    "section": "SB1992"
  },
  {
    "code": "0714",
    "title": "19920322_SB8_12_41_BBSR_Sri_Guru_and_Sri_Siva_are_very_dear_to_the",
    "section": "SB1992"
  },
  {
    "code": "0715",
    "title": "19920323_SB8_12_42_44_BBSR_In_All_Vedic_Literature_only_Krsna_Relationship",
    "section": "SB1992"
  },
  {
    "code": "0716",
    "title": "19920325_SB8_13_1_11_BBSR_Four_Samapradaya_and_Caithantya's_Philosophy",
    "section": "SB1992"
  },
  {
    "code": "0717",
    "title": "19920328_SB8.13.12-13_BBSR The Eight Mystic Siddhis",
    "section": "SB1992"
  },
  {
    "code": "0718",
    "title": "19920329_SB8_13_14_BBSR_Two_minute_Relationship,_the_consiquences",
    "section": "SB1992"
  },
  {
    "code": "0719",
    "title": "19920330_SB8_13_15_22_BBSR_The_History_of_Manvantaras_and_Eighten",
    "section": "SB1992"
  },
  {
    "code": "0720",
    "title": "19920331_SB8_13_23_27_BBSR_A_fortunate_soul_truely_surrender_to",
    "section": "SB1992"
  },
  {
    "code": "0721",
    "title": "19920401_SB8.13.28-36_BBSR_Sri Guru Tattva Sisya Tattva",
    "section": "SB1992"
  },
  {
    "code": "0722",
    "title": "19920404_SB8_14_1_3_BBSR_How_to_get_Spiritual_Strength_from_Guru",
    "section": "SB1992"
  },
  {
    "code": "0723",
    "title": "19920405_SB8_14_4_BBSR_No_Hari_Kirtan_means_that_is_the_place_of",
    "section": "SB1992"
  },
  {
    "code": "0724",
    "title": "19920406_SB8.14.5_BBSR_The Real Eternal Dharma Tattva",
    "section": "SB1992"
  },
  {
    "code": "0725",
    "title": "19920407_SB8_14_6_BBSR_Our_Teachings_is_transforming_Lust_into_Love",
    "section": "SB1992"
  },
  {
    "code": "0726",
    "title": "19920408_SB8_14_7_8_BBSR_The_Glories_and_essence_of_Bhagavad_Gita",
    "section": "SB1992"
  },
  {
    "code": "0727",
    "title": "19920412_SB8_14_9_10_BBSR_The_Only_Process_of_Understand_Krsna's",
    "section": "SB1992"
  },
  {
    "code": "0728",
    "title": "19920413_SB8_14_11_BBSR_The_Most_Fortunates_are_gets_Goura_Viraha",
    "section": "SB1992"
  },
  {
    "code": "0729",
    "title": "19920418_SB8.15.1-11_BBSR_Maya's Bondage of Suffering",
    "section": "SB1992"
  },
  {
    "code": "0730",
    "title": "19920419_SB 8.15.12-15_SF_BBSR_The Last Snear of Maya",
    "section": "SB1992"
  },
  {
    "code": "0731",
    "title": "19920420_SB8.15.16-17_BBSR_Woman is the Weapon of Maya",
    "section": "SB1992"
  },
  {
    "code": "0732",
    "title": "19920421_SB8_15_18_28_BBSR_The_Most_Powerful_Mercy_Potency_of_Guru",
    "section": "SB1992"
  },
  {
    "code": "0733",
    "title": "19920422_SB8_15_29_31_BBSR_The_Tattva_of_Bali_Maharaj's_disobeying",
    "section": "SB1992"
  },
  {
    "code": "0734",
    "title": "19920425_SB8_15_32_BBSR_One_Must_accept_Guru's_Order_Immediately",
    "section": "SB1992"
  },
  {
    "code": "0735",
    "title": "19920427_SB8_15_33_34_BBSR_The_Real_Atonement,_story_of_Subuddhi",
    "section": "SB1992"
  },
  {
    "code": "0736",
    "title": "19920428_SB8_15_35_36_BBSR_The_Glories_of_A_True_Bramhana_and_Bramhinical",
    "section": "SB1992"
  },
  {
    "code": "0737",
    "title": "19920429_SB8_16_1_4_BBSR_The_Real_Inquiries_and_Purposes_in_the",
    "section": "SB1992"
  },
  {
    "code": "0738",
    "title": "19920501_SB8.16.5_BBSR_Getting Out From Deep Dark Well",
    "section": "SB1992"
  },
  {
    "code": "0739",
    "title": "19920503_SB8.16.6_BBSR_The Duty of a Grhastha serve to Guest",
    "section": "SB1992"
  },
  {
    "code": "0740",
    "title": "19920504_SB8.16.7_BBSR_The Dharma of a Grhastha",
    "section": "SB1992"
  },
  {
    "code": "0741",
    "title": "19920505_SB8.16.8-9_BBSR_A Vaishnava is a Perfect Bramhana",
    "section": "SB1992"
  },
  {
    "code": "0742",
    "title": "19920506_SB8_16_10_11_BBSR_To_Attain_Libaration_one_must_Give_up",
    "section": "SB1992"
  },
  {
    "code": "0743",
    "title": "19920509_SB8_16_14_BBSR_Although_Krsna_is_Impartial_but_Partial",
    "section": "SB1992"
  },
  {
    "code": "0744",
    "title": "19920510_SB8_16_15_BBSR_Sadhus_are_Supreme_Shelter_for_the_Drowning",
    "section": "SB1992"
  },
  {
    "code": "0745",
    "title": "19920511_SB8_16_17_18_BBSR_Attachment_is_the_Cause_of_Bondage_and",
    "section": "SB1992"
  },
  {
    "code": "0746",
    "title": "19920512_SB8_16_19_BBSR_The_Illusory_Relationship_causes_Misunderstanding",
    "section": "SB1992"
  },
  {
    "code": "0747",
    "title": "19920513_SB8_16_20_BBSR_Krsna_is_Jagat_Guru_and_who_advocates_this",
    "section": "SB1992"
  },
  {
    "code": "0748",
    "title": "19920516_SB8.16.21_BBSR_Jump the Hurdles of Maya",
    "section": "SB1992"
  },
  {
    "code": "0749",
    "title": "19920520_SB2_4_17_Brooklyn_You_are_on_the_Margin_Choose_Krsna_or",
    "section": "SB1992"
  },
  {
    "code": "0750",
    "title": "19920521_SB2_4_18_Brooklyn_Only_by_Association_with_such_Sadhu_on",
    "section": "SB1992"
  },
  {
    "code": "0751",
    "title": "19920522_SB2_4_19_Brooklyn_Pure_Bhakti_is_No_Desire_for_Mukhi_and",
    "section": "SB1992"
  },
  {
    "code": "0752",
    "title": "19920523_SB2_9_3_Tawaco_Enroll_Yourself_in_Krsna's_Family",
    "section": "SB1992"
  },
  {
    "code": "0753",
    "title": "19920524_SB2.9.4_Towaco_Association Means Hearing",
    "section": "SB1992"
  },
  {
    "code": "0754",
    "title": "19920526_SB2_5_12_Potomac_In_the_whole_Vedic_literature_Only_Krsna",
    "section": "SB1992"
  },
  {
    "code": "0755",
    "title": "19920528_Gita_Nagari_SB9_4_48_Krsna_Knows_How_to_Protects_His_Devotees",
    "section": "SB1992"
  },
  {
    "code": "0756",
    "title": "19920530_SB7_15_29_Philadelphia_Proper_use_of_Independence_means",
    "section": "SB1992"
  },
  {
    "code": "0757",
    "title": "19920601_SB2_5_3_BRO,USA_One_Must_Always_Pray_to_Krsna_for_Help",
    "section": "SB1992"
  },
  {
    "code": "0758",
    "title": "19920602_SB1.2.17_New Vrndavan_Curing the Heart Diseases",
    "section": "SB1992"
  },
  {
    "code": "0759",
    "title": "19920603_SB1_18_31_HML,_USA_We_can't_Understand_the_Plan_of_Krsna",
    "section": "SB1992"
  },
  {
    "code": "0760",
    "title": "19920604_SB9_3_21_TOR,_USA_Elevating_to_Higher_consciousness_is",
    "section": "SB1992"
  },
  {
    "code": "0761",
    "title": "19920605_SB9_3_22_TOR,USA_Ornament_and_Potency_of_a_Chaste_Woman",
    "section": "SB1992"
  },
  {
    "code": "0762",
    "title": "19920606_SB9_3_23_TOR,USA_A_Vaishanava_quotes_Authority_and_defeats",
    "section": "SB1992"
  },
  {
    "code": "0763",
    "title": "19920607_SB9_3_31_TOR,USA_A_surrender_devotee_never_affected_by",
    "section": "SB1992"
  },
  {
    "code": "0764",
    "title": "19920609_SB7_11_29_ISQ,NA_The_Test_of_Serving_Guru_without_Duplicity",
    "section": "SB1992"
  },
  {
    "code": "0765",
    "title": "19920611_SB3.16.12_Vancouver_The Greed of the Lord",
    "section": "SB1992"
  },
  {
    "code": "0766",
    "title": "19920614_SB2_6_36_Denver_Surrender_to_the_Supreme_Lord_achieves",
    "section": "SB1992"
  },
  {
    "code": "0767",
    "title": "19920615_SB2_6_37_Denver_Only_A_bonafide_Authority_infroms_about",
    "section": "SB1992"
  },
  {
    "code": "0768",
    "title": "19920616_SB6.2.18_Berkeley_The Glories of the Holy Name",
    "section": "SB1992"
  },
  {
    "code": "0769",
    "title": "19920617_SB6.2.19_Berkeley_The Mercy of The Holy Name",
    "section": "SB1992"
  },
  {
    "code": "0770",
    "title": "19920618_SB 4.22.13_Sanfrancesco_Not lifting up the Anchor",
    "section": "SB1992"
  },
  {
    "code": "0771",
    "title": "19920619_SB1.7.48_BDG,USA_Who is a Real Brahmana",
    "section": "SB1992"
  },
  {
    "code": "0772",
    "title": "19920620_SB1_19_4_Los_Angeles_A_Fool_can't_understand_the_Notice",
    "section": "SB1992"
  },
  {
    "code": "0773",
    "title": "19920621_SB_1_19_5_Los_Angeles_Krsna_is_Purna_Brahma,_No_Deficit",
    "section": "SB1992"
  },
  {
    "code": "0774",
    "title": "19920622_SB1_19_6_Los_Angeles_Guru_Makes_Krsna_Appears_in_Heart",
    "section": "SB1992"
  },
  {
    "code": "0775",
    "title": "19920623_SB3_21_33_San_Diego,USA_Develop_a_Hungry_Ear_to_Hear",
    "section": "SB1992"
  },
  {
    "code": "0776",
    "title": "19920704_SB8_16_22_BBSR_One_can't_Detect_Guru_as_a_Patient_demand",
    "section": "SB1992"
  },
  {
    "code": "0777",
    "title": "19920706_SB8_16_24_BBSR_The_Philosophy_of_Sri_Brahma_Gaudiya_Sampradiya",
    "section": "SB1992"
  },
  {
    "code": "0778",
    "title": "19920707_SB8_16_25_BBSR_A_Deity_Becomes_Worshipable_by_Pprayer_of",
    "section": "SB1992"
  },
  {
    "code": "0779",
    "title": "19920708_SB8.16.26-30_BBSR_Vedic Proof is Real Proof",
    "section": "SB1992"
  },
  {
    "code": "0780",
    "title": "19920711_SB8_16_31_32_BBSR_How_Lord_Vishnu_gave_his_names_to_Demigods",
    "section": "SB1992"
  },
  {
    "code": "0781",
    "title": "19920712_SB8_16_33_39_BBSR_Defination_of_Sastriya_Sraddha_and_Loukika",
    "section": "SB1992"
  },
  {
    "code": "0782",
    "title": "19920713_SB8.16.40-50_BBSR_Real Faith and Doubt",
    "section": "SB1992"
  },
  {
    "code": "0783",
    "title": "19920714_SB8_16_51_55_BBSR_Surrender_means_Binding_Krsna_with_the",
    "section": "SB1992"
  },
  {
    "code": "0784",
    "title": "19920715_SB8.16.56-57_BBSR_Dharma of Body, Mind and Soul",
    "section": "SB1992"
  },
  {
    "code": "0785",
    "title": "19920720_SB1.7.45_BV Manor_The Function of a Chaste Lady",
    "section": "SB1992"
  },
  {
    "code": "0786",
    "title": "19920721_SB3_25_8_BV_Manor_The_Mercy_of_a_Sadhu_Guru_is_the_Seed",
    "section": "SB1992"
  },
  {
    "code": "0787",
    "title": "19920723_SB1_7_53_54_BV_Manor_Surrender_to_Krsna_with_Pure_Love",
    "section": "SB1992"
  },
  {
    "code": "0788",
    "title": "19920723_SB4_4_34_Soho_Stree,_London_Paramarthika_Bramhan_is_a_Perfect",
    "section": "SB1992"
  },
  {
    "code": "0789",
    "title": "19920725_SB1_2_12_BV_Manor_Attraction_towards_Krsna_autometically",
    "section": "SB1992"
  },
  {
    "code": "0790",
    "title": "19920726_SB1_7_42_Paris_A_Devotee_never_Afraid_in_any_Situation",
    "section": "SB1992"
  },
  {
    "code": "0791",
    "title": "19920727_SB3,32,30_France_One_must_have_faith_in_sadhu_sangaFrench",
    "section": "SB1992"
  },
  {
    "code": "0792",
    "title": "19920729_SB8.19.13_BBSR_Enmity is Only Due To Ignorance",
    "section": "SB1992"
  },
  {
    "code": "0793",
    "title": "19920803_SB_4_27_3_Antonio_The_Cause_of_Degradation_is_a_House_Holder",
    "section": "SB1992"
  },
  {
    "code": "0794",
    "title": "19920812_SB1_18_32_Berlin_A_Real_Bramhana_and_Bramhinical_Culture",
    "section": "SB1992"
  },
  {
    "code": "0795",
    "title": "19920814_SB4_28_61_Heidelberg_Maya_is_very_much_Export_Producing",
    "section": "SB1992"
  },
  {
    "code": "0796",
    "title": "19920816_SB8_6_8_PAS_For_Speculators_Real_Reward_is_Heavy_lashes",
    "section": "SB1992"
  },
  {
    "code": "0797",
    "title": "19920820_SB5.23.4_Juhu Temple_The Mean To Attain Immortality",
    "section": "SB1992"
  },
  {
    "code": "0798",
    "title": "19920824_SB8_16_62_BBSR_Pay_Attention_to_Three_things_before_Begin",
    "section": "SB1992"
  },
  {
    "code": "0799",
    "title": "19920825_SB8_17_1_BBSR_Guru_Tattva,_Offences_to_Sri_Guru_is_End",
    "section": "SB1992"
  },
  {
    "code": "0800",
    "title": "19920826_SB8.17.1-2_BBSR_Anukulyena Krsna Anusilanam",
    "section": "SB1992"
  },
  {
    "code": "0801",
    "title": "19920829_SB8_17_4_BBSR_Immediately_Take_Shelter_of_the_Holy_Name",
    "section": "SB1992"
  },
  {
    "code": "0802",
    "title": "19920831_SB8.17.8_BBSR_Crying and Crying Beg the Mercy",
    "section": "SB1992"
  },
  {
    "code": "0803",
    "title": "19920901_SB8.17.9_BBSR_The Reward of Mahamaya",
    "section": "SB1992"
  },
  {
    "code": "0804",
    "title": "19920902_SB8_17_10_12_BBSR_Krsna_is_the_Only_Asset_for_Akincanas",
    "section": "SB1992"
  },
  {
    "code": "0805",
    "title": "19920905_SB8_17_16_BBSR_The_Fortunates_Could_catch_up_the_Hangling",
    "section": "SB1992"
  },
  {
    "code": "0806",
    "title": "19920907_SB8_17_24_BBSR_The_Only_Prescribe_Method_get_rid_Offences",
    "section": "SB1992"
  },
  {
    "code": "0807",
    "title": "19920909_SB8.17.25-27_BBSR_All Devouring Time Factor",
    "section": "SB1992"
  },
  {
    "code": "0808",
    "title": "19920912_SB8_17_28_&18_1_BBSR_An_intelligence's_only_Effort_is_Krsna",
    "section": "SB1992"
  },
  {
    "code": "0809",
    "title": "19920914_SB8_18_6_12_BBSR_Understanding_Janma_Karma_Ca_Me_Divayam",
    "section": "SB1992"
  },
  {
    "code": "0810",
    "title": "19920915_SB8.18.13_BBSR_A Real Bramahana is Magnanimous",
    "section": "SB1992"
  },
  {
    "code": "0811",
    "title": "19920916_SB8.18.14-20_BBSR_Krsna is the Only Proprietor",
    "section": "SB1992"
  },
  {
    "code": "0812",
    "title": "19920919_SB8_18_21_28_BBSR_What_are_the_Chief_Symptoms_of_Mahajanas",
    "section": "SB1992"
  },
  {
    "code": "0813",
    "title": "19920921_SB8.19.3-4_BBSR_Transcending Varnasram",
    "section": "SB1992"
  },
  {
    "code": "0814",
    "title": "19920922_SB8.19.5-10_BBSR_Radharani's Soliloquy",
    "section": "SB1992"
  },
  {
    "code": "0815",
    "title": "19920925_SB1_2_20_Brisbane_Understanding_Krsna_in_Tattva_Achieves",
    "section": "SB1992"
  },
  {
    "code": "0816",
    "title": "9920927_SB4_22_57_New_Govardhan_Falling_down_by_Abusing_your_Position",
    "section": "SB1992"
  },
  {
    "code": "0817",
    "title": "19920928_SB4_22_58_New_Govardhan_Jive_Daya_Name_Ruchi_is_Vaisnava",
    "section": "SB1992"
  },
  {
    "code": "0818",
    "title": "19920929_SB4_22_59_New_Govardhan_How_can_one_Understand_the_Lord",
    "section": "SB1992"
  },
  {
    "code": "0819",
    "title": "19920930_SB5_16_3_CES_One_Must_Develop_his_Proper_Vision_to_See",
    "section": "SB1992"
  },
  {
    "code": "0820",
    "title": "19921002_SB5.16.4_CES_Trying to Build Castles in the Air",
    "section": "SB1992"
  },
  {
    "code": "0821",
    "title": "19921003_SB5_16_5_Cessnock_Symptoms_of_Puranas_and_Upa_Puranas",
    "section": "SB1992"
  },
  {
    "code": "0822",
    "title": "19921006_SB3_26_59_Perth_An_Export_Navigator_need_to_Cross_over",
    "section": "SB1992"
  },
  {
    "code": "0823",
    "title": "19921007_SB3_26_61_Perth_Uncontrolled_mind_is_like_an_Unchaste_Lady",
    "section": "SB1992"
  },
  {
    "code": "0824",
    "title": "19921024_SB8_19_11_12_BBSR_Keeping_Krsna_in_the_Platform_of_Perfect",
    "section": "SB1992"
  },
  {
    "code": "0825",
    "title": "19921027_SB8.19.13_BBSR_Ignorant of the Cause of Enimity",
    "section": "SB1992"
  },
  {
    "code": "0826",
    "title": "19921028_SB8_19_14_BBSR_Charity_Only_to_A_Real_Bramhana_who_has",
    "section": "SB1992"
  },
  {
    "code": "0827",
    "title": "19921114_SB8_19_18_BBSR_The_Form_Dear_Devotees_think_to_see_The",
    "section": "SB1992"
  },
  {
    "code": "0828",
    "title": "19921117_SB8_19_20_21_BBSR_Capture_by_Illusory_Energy_a_Conditioned",
    "section": "SB1992"
  },
  {
    "code": "0829",
    "title": "19921118_SB8.19.22-24_BBSR_Removing the Illusory Cover",
    "section": "SB1992"
  },
  {
    "code": "0830",
    "title": "19921121_SB8_19_25_32_BBSR_Binding_Krsna_with_the_Rope_of_Love",
    "section": "SB1992"
  },
  {
    "code": "0831",
    "title": "19921122_SB8_19_33_BBSR_A_Bramhana_Must_go_for_Purificatory_Vedic",
    "section": "SB1992"
  },
  {
    "code": "0832",
    "title": "19921123_SB8_19_34_BBSR_Dear_Devotees_Risk_Everything_for_Krsna",
    "section": "SB1992"
  },
  {
    "code": "0833",
    "title": "19921125_SB8.19.35_BBSR_Proper Utilization of Money(Laxmi)",
    "section": "SB1992"
  },
  {
    "code": "0834",
    "title": "19921128_SB8_19_38_39_BBSR_Don't_Allow_Duplicety_and_Crookedness",
    "section": "SB1992"
  },
  {
    "code": "0835",
    "title": "19921130_SB8_19_41_BBSR_For_A_Peace_and_Bliss_Connected_to_Krsna",
    "section": "SB1992"
  },
  {
    "code": "0836",
    "title": "19921201_SB8_19_42_BBSR_Without_Bhakti_all_Other_Good_Activities",
    "section": "SB1992"
  },
  {
    "code": "0837",
    "title": "19921202_SB8_19_43_BBSR_Merciful_Lord_Arranges_for_Condition_Souls",
    "section": "SB1992"
  },
  {
    "code": "0838",
    "title": "19921205_SB8_20_2_BBSR_Without_Love_can't_be_Complete_Dedication",
    "section": "SB1992"
  },
  {
    "code": "0839",
    "title": "19921207_SB8_20_4_BBSR_A_Confidential_Disciple_Must_not_Deluded",
    "section": "SB1992"
  },
  {
    "code": "0840",
    "title": "19921207_SB8_20_4_BBSR_Only_by_Mercy_of_a_Sadhu_one_could_Develop",
    "section": "SB1992"
  },
  {
    "code": "0841",
    "title": "19921209_SB8_20_7_BBSR_The_Whole_Human_Society_is_Running_After",
    "section": "SB1992"
  },
  {
    "code": "0842",
    "title": "19921212_SB8_20_8_BBSR_To_Hear_Glories_of_a_Vaisnava_Higher_than",
    "section": "SB1992"
  },
  {
    "code": "0843",
    "title": "19921214_SB8_20_9_BBSR_Unless_You_See_Everything_Related_to_Krsna",
    "section": "SB1992"
  },
  {
    "code": "0844",
    "title": "19921216_SB8.20.11_BBSR_The Sign of Full Surrender",
    "section": "SB1992"
  },
  {
    "code": "0845",
    "title": "19921219_SB8.20.12_BBSR_The Symptoms of Complete Surrender",
    "section": "SB1992"
  },
  {
    "code": "0846",
    "title": "19921221_SB8_20_14_BBSR_True_Love_is_not_Available_in_this_Material",
    "section": "SB1992"
  },
  {
    "code": "0847",
    "title": "19921223_SB8_20_16_18_BBSR_Serving_Without_Duplicity_one_Could_get",
    "section": "SB1992"
  },
  {
    "code": "0848",
    "title": "19921226_SB8_20_20_BBSR_We_have_to_Pray_the_Lord_for_Develop_Pure",
    "section": "SB1992"
  },
  {
    "code": "0849",
    "title": "19921228_SB8_20_23_BBSR_Material_Enjoyment_give_Flash_of_Light_Happiness",
    "section": "SB1992"
  },
  {
    "code": "0850",
    "title": "19921229_SB8_20_24_33_BBSR_Prayer_to_Lord_Gopinath_Getting_out_From",
    "section": "SB1992"
  },
  {
    "code": "0851",
    "title": "19921230_SB_8_20_34_BBSR_Gradual_Development_of_Going_to_Golaka",
    "section": "SB1992"
  },
  {
    "code": "0853",
    "title": "19930102_SB8.21.1-4_BBSR_A Guru Bereft of 3 Tattvas, His Feet Washing Water Can't be Acceptable",
    "section": "SB1993"
  },
  {
    "code": "0854",
    "title": "19930105_SB8.21.24-26_BBSR_You Can't Cheat the Supreme Cheater",
    "section": "SB1993"
  },
  {
    "code": "0855",
    "title": "19930106_SB8.21.27-28_BBSR_Don't loose Faith in the Path of Devotional Grand Road",
    "section": "SB1993"
  },
  {
    "code": "0856",
    "title": "19930109_SB8.21.29-31_BBSR_Who Understand The Mercy of The Supreme Lord",
    "section": "SB1993"
  },
  {
    "code": "0857",
    "title": "19930111_SB8.21.33-34_BBSR_Without Nityananda's Mercy, We Can't Root Out Our Deep Rooted Delusion",
    "section": "SB1993"
  },
  {
    "code": "0858",
    "title": "19930112_SB8.22.1-2_BBSR_Without Pure Love No Question of Surrender",
    "section": "SB1993"
  },
  {
    "code": "0859",
    "title": "19930113_SB8.22.3_BBSR_The Only Mean to Completely Overcome the Fearful Situation",
    "section": "SB1993"
  },
  {
    "code": "0860",
    "title": "19930116_SB8.22.4_BBSR_Unless one get Punishment from a Sadhu Guru, Can't get Mercy",
    "section": "SB1993"
  },
  {
    "code": "0861",
    "title": "19930118_SB8.22.6-7_BBSR_Only An Intelligent Could Understand Lord's Punishment",
    "section": "SB1993"
  },
  {
    "code": "0862",
    "title": "19930120_SB8.22.9_BBSR_Sun Can't Take the Life Spam those Who Engaged in 24 Hours Krsna Seva",
    "section": "SB1993"
  },
  {
    "code": "0863",
    "title": "19930126_SB8.22.10-11_BBSR_How the Supreme Lord is Only Well Wishing Friend",
    "section": "SB1993"
  },
  {
    "code": "0864",
    "title": "19930130_SB8.22.17_BBSR_Bali Understood that Visnu is not their Enemy",
    "section": "SB1993"
  },
  {
    "code": "0865",
    "title": "19930201_SB8.22.20_BBSR_Can't Give Up False Proprietorship what is Deep Rooted",
    "section": "SB1993"
  },
  {
    "code": "0866",
    "title": "19930202_SB8.22.21_BBSR_ For Bali Maharaj Bramha Offer Prayer to the Lord",
    "section": "SB1993"
  },
  {
    "code": "0867",
    "title": "19930203_SB8.22.22_BBSR_A Duplicitous person can't Bind the Lord with Rope of Love",
    "section": "SB1993"
  },
  {
    "code": "0868",
    "title": "19930219_SB3.21.21_Mayapur_Put Strong Faith on Holy Name and Sadhu, Guru, Sastra Vakya",
    "section": "SB1993"
  },
  {
    "code": "0869",
    "title": "19930227_SB8.22.24_BBSR_The True Meaning of Lord's Real Mercy",
    "section": "SB1993"
  },
  {
    "code": "0870",
    "title": "19930228_SB8.22.25_BBSR_The Lord would Fulfils Material Desire Such a Way, One never ask Again",
    "section": "SB1993"
  },
  {
    "code": "0871",
    "title": "19930301_SB8.22.26_BBSR_Getting Special Favor by Supreme Personality of Godhead",
    "section": "SB1993"
  },
  {
    "code": "0872",
    "title": "19930302_SB8.22.27_BBSR_Crossing Over Obstacles and Impediments on the Path of Bhajan",
    "section": "SB1993"
  },
  {
    "code": "0873",
    "title": "19930303_SB8.22.28_BBSR_How to Pass the Test Where Every Step is Danger",
    "section": "SB1993"
  },
  {
    "code": "0874",
    "title": "19930306_SB8.22.29-30_BBSR_To Pass the Test Cooperate and Tolerate with Strong Determination",
    "section": "SB1993"
  },
  {
    "code": "0875",
    "title": "19930310_SB8.22.32_BBSR_Drive Out Pratistha and Her Paramour Kapatya From the Heart",
    "section": "SB1993"
  },
  {
    "code": "0876",
    "title": "19930313_SB8.22.34_BBSR_Duplicity invites all Inauspiciousness",
    "section": "SB1993"
  },
  {
    "code": "0877",
    "title": "19930315_SB8.23.3-6_BBSR_Krsna Has Promise Protection to His Surrender Devotees",
    "section": "SB1993"
  },
  {
    "code": "0878",
    "title": "19930316_SB8.23.7-9_BBSR_ Class by both JPS and Srila Gurudeva",
    "section": "SB1993"
  },
  {
    "code": "0879",
    "title": "19930317_SB8.23.9-10_BBSR_Material Suffering in Maya's Whirlpool",
    "section": "SB1993"
  },
  {
    "code": "0880",
    "title": "19930320_SB8.23.11-14_BBSR_If Krsna is Satisficed the Whole World is Satisficed",
    "section": "SB1993"
  },
  {
    "code": "0881",
    "title": "19930323_SB8.23.17-29_BBSR_Four Types of Blind Can't See the Lord",
    "section": "SB1993"
  },
  {
    "code": "0882",
    "title": "19930324_SB8.23.30-31_BBSR_Following Karmakandis and so Called Veda Vadis",
    "section": "SB1993"
  },
  {
    "code": "0883",
    "title": "19930329_SB8.24.4-5_BBSR_A True Cast Bramhana is a Natural Vaisnava",
    "section": "SB1993"
  },
  {
    "code": "0884",
    "title": "19930330_SB8.24.6_BBSR_Who's Ear Krsna Katha Hear",
    "section": "SB1993"
  },
  {
    "code": "0885",
    "title": "19930331_SB8.24.7-9_BBSR_Krsna's Name in Vada and It's Divisions",
    "section": "SB1993"
  },
  {
    "code": "0886",
    "title": "19930403_SB8.24.11-14_BBSR_Krsna Came as Mahaprabhu to Pay back the Devotion Debt",
    "section": "SB1993"
  },
  {
    "code": "0887",
    "title": "19930405_SB8.24.15_BBSR_Guru Makes Disciple Dance",
    "section": "SB1993"
  },
  {
    "code": "0888",
    "title": "19930406_SB8.24.16-30_BBSR_Only one Desire Develop, Reaming always in Association of Sadhu and Hearing Krsna Katha",
    "section": "SB1993"
  },
  {
    "code": "0889",
    "title": "19930407_SB8.24.31-37_BBSR_ Accept Bonafide Authority Otherwise You can't Progress",
    "section": "SB1993"
  },
  {
    "code": "0890",
    "title": "19930410_SB8.24.38_BBSR_Krsna Becomes Very Much Pleases Who Serve Guru1",
    "section": "SB1993"
  },
  {
    "code": "0891",
    "title": "19930412_SB8.24.47_BBSR_When Good Fortune Aries",
    "section": "SB1993"
  },
  {
    "code": "0892",
    "title": "19930413_SB8.24.48_BBSR_Human Form of Life is Not Running After Sense Gratification",
    "section": "SB1993"
  },
  {
    "code": "0893",
    "title": "19930414_SB8.24.49 & ACD_BBSR_Independence is a Merciful Gift  from the Lord for You",
    "section": "SB1993"
  },
  {
    "code": "0894",
    "title": "19930419_SB8.24.51_BBSR_ A True Disciple Gets Mercy of Guru",
    "section": "SB1993"
  },
  {
    "code": "0895",
    "title": "19930420_SB8.24.52_BBSR_Very Simple and Easy Method How to Always with Krsna",
    "section": "SB1993"
  },
  {
    "code": "0896",
    "title": "19930421_SB8.24.53 & ACD_BBSR_Follow Mahajana Paramapara",
    "section": "SB1993"
  },
  {
    "code": "0897",
    "title": "19930424_SB8.24.54-55 & ACD_BBSR_The 2nd Fish Incarnation Who Showers Mercy upon King Satyabrata",
    "section": "SB1993"
  },
  {
    "code": "0898",
    "title": "19930426_SB9.1.1-8_BBSR_Speculators Don't come to the Path of Hearing Process, Srouta Patha",
    "section": "SB1993"
  },
  {
    "code": "0899",
    "title": "19930427_SB9.1.9-17 _BBSR_Do your Duty by Accepting a Bonafide Spiritual Master",
    "section": "SB1993"
  },
  {
    "code": "0900",
    "title": "19930428_SB9.1.18_BBSR_Unless one gets Punishment from Sadhu Guru he can't Develop Pure Bhakti",
    "section": "SB1993"
  },
  {
    "code": "0901",
    "title": "19930501_SB9.1.19-38_BBSR_Trying to Test the Sugarcane Fruit",
    "section": "SB1993"
  },
  {
    "code": "0902",
    "title": "19930503_SB9.1.41-43_BBSR_   House holder live like a Guest in his House",
    "section": "SB1993"
  },
  {
    "code": "0903",
    "title": "19930504_SB9.2.1 & ACD_BBSR_The Glories of Hearing Srimad Bhagavatam",
    "section": "SB1993"
  },
  {
    "code": "0904",
    "title": "19930508_SB9.2.4 & ACD_BBSR_In Whose Year Srimad Bhagavatam Enter",
    "section": "SB1993"
  },
  {
    "code": "0905",
    "title": "19930513_SB3.26.50_Vancouver_See Krsna Everywhere",
    "section": "SB1993"
  },
  {
    "code": "0906",
    "title": "19930514_SB3.26.51_Vancouver_Explanations of Expansions of Purusa Avataras",
    "section": "SB1993"
  },
  {
    "code": "0907",
    "title": "19930515_SB3.26.52_Vancouver_One Who Knows Krsna, He Knows Everything",
    "section": "SB1993"
  },
  {
    "code": "0908",
    "title": "19930517_SB3.26.55_EVE,US_No Influence of Time and Planet",
    "section": "SB1993"
  },
  {
    "code": "0909",
    "title": "19930518_SB4.25.6_Seattle_Guru Deliver the Suffering Jivas from Deep Dark Well",
    "section": "SB1993"
  },
  {
    "code": "0910",
    "title": "19930519_SB4.25.7_Seattle_Bhakti Always Combined with Jnana and Viragya",
    "section": "SB1993"
  },
  {
    "code": "0911",
    "title": "19930521_SB5.19.28_Boston_Descrptions of Bharata Varsha, the Land of Jambu Dwipa",
    "section": "SB1993"
  },
  {
    "code": "0912",
    "title": "19930522_SB5.19.29-30_Boston_Those who Callous are Hopeless Case",
    "section": "SB1993"
  },
  {
    "code": "0913",
    "title": "19930524_SB3.2.6_Brooklyn_The Degree of Gopis Love are Complete",
    "section": "SB1993"
  },
  {
    "code": "0914",
    "title": "19930525_SB3.2.7_Brooklyn_Spending Dark Night in a Motel",
    "section": "SB1993"
  },
  {
    "code": "0915",
    "title": "19930529_SB4.25.8_New Vrndavan_A Premibhakta bounds Krsna in the rope of Love",
    "section": "SB1993"
  },
  {
    "code": "0916",
    "title": "19930530_SB1.3.43_New Vrndavan_Glories of the Bhagavatam",
    "section": "SB1993"
  },
  {
    "code": "0917",
    "title": "19930531_SB1.3.44_New Vrndavan_Glorification of Bhagavatam Part-2",
    "section": "SB1993"
  },
  {
    "code": "0918",
    "title": "19930602_SB3.2.3_Potomac_There is no question of Old age in Spiritual Platform",
    "section": "SB1993"
  },
  {
    "code": "0919",
    "title": "19930603_SB2.10.7_Washington_The Glories of Srimad Bhagavatam (P-3)",
    "section": "SB1993"
  },
  {
    "code": "0920",
    "title": "19930604_SB3.2.5_Potomac_Serving Krsna in Favourably",
    "section": "SB1993"
  },
  {
    "code": "0921",
    "title": "19930605_SB3.2.6_Potomac_A Fortunate Jiva gets the Seed of Bhakti Lata",
    "section": "SB1993"
  },
  {
    "code": "0922",
    "title": "19930608_SB1.18.35_Alachua_ Natural Qualities the Bramhanas Work with it",
    "section": "SB1993"
  },
  {
    "code": "0923",
    "title": "19930609_SB1.18.36_Alachua_Who is constantly attach to Krsna, is a Great Devotee",
    "section": "SB1993"
  },
  {
    "code": "0924",
    "title": "19930610_SB1.18.37_AlachuaFL_The Condition of so called Bramhana in Kaliyuga",
    "section": "SB1993"
  },
  {
    "code": "0925",
    "title": "19930619_SB9.2.10-13_BBSR_We are Most Unfortunate and Wretched",
    "section": "SB1993"
  },
  {
    "code": "0926",
    "title": "19930623_SB9.2.14_BBSR_ Only Krsna could destroy Karma Phala if one completely Surrender",
    "section": "SB1993"
  },
  {
    "code": "0927",
    "title": "19930626_SB9.2.15-17_BBSR_The Purpose of Varnashram Dharma is Hari toshana",
    "section": "SB1993"
  },
  {
    "code": "0928",
    "title": "19930627_SF_SB9.2.18-21_A society without Bramhana is Brainless society",
    "section": "SB1993"
  },
  {
    "code": "0929",
    "title": "19930628_SB9.2.22-24_BBSR_Vishnu Bhakta Vaisnava is a Real Paramarthika Bramhan",
    "section": "SB1993"
  },
  {
    "code": "0930",
    "title": "19930629_SB9.2.25-28_BBSR_Bhakti sadhan can't do alone but Association with Devotees",
    "section": "SB1993"
  },
  {
    "code": "0931",
    "title": "19930630_SB9.2.29-32_ Akaitava Bhakti and Sakaitava Bhakti",
    "section": "SB1993"
  },
  {
    "code": "0932",
    "title": "19930703_SB9.2.33-36_ BBSR_Krsna is Known as Bhakta Bhaktiman",
    "section": "SB1993"
  },
  {
    "code": "0933",
    "title": "19930706_SB9.3.11_BBSR_The Source of Unlimited Misery",
    "section": "SB1993"
  },
  {
    "code": "0934",
    "title": "19930707_SB9.3.12_BBSR_A Fearful topic for Liberated Souls even to Bramha and Siva",
    "section": "SB1993"
  },
  {
    "code": "0935",
    "title": "19930711_SB1.13.59 & ACD_Bhaktividanta Manor_Wonderful Affect of Vainava Seva",
    "section": "SB1993"
  },
  {
    "code": "0936",
    "title": "19930712_SB1.13.59_Bhaktivendanta Manor_Wonderful Mercy of Vaisnava Seva",
    "section": "SB1993"
  },
  {
    "code": "0937",
    "title": "19930713_SB4.31.14_Birmingham_Krsna is the Maintainer and supply all you need",
    "section": "SB1993"
  },
  {
    "code": "0938",
    "title": "19930714_SB1.14.1_Birmingham_The Atma Dharma or Paro Dharma is Based on Love",
    "section": "SB1993"
  },
  {
    "code": "0939",
    "title": "19930715_SB4.12.25_Soho Street, London_Prema Bhakti Nirupadhi, Free from Designation",
    "section": "SB1993"
  },
  {
    "code": "0940",
    "title": "19930717 _SB1.5.9_New Mayapur( French Translation)_Understanding the Mood of Mahaprabhu",
    "section": "SB1993"
  },
  {
    "code": "0941",
    "title": "19930718_SB1.5.10_New Mayapur_Different Mentalities, Attitude and Consciousness(French Translation)",
    "section": "SB1993"
  },
  {
    "code": "0942",
    "title": "19930719_SB1.5.11_New Mayapur_The Glories of Srimad Bhagavatam and Holy Name( French Translation).m3",
    "section": "SB1993"
  },
  {
    "code": "0943",
    "title": "19930720_SB1.5.12_Develop Test For Bhagavata Katha Krsna Katha(French Translation)",
    "section": "SB1993"
  },
  {
    "code": "0944",
    "title": "19930809_SB9.3.21_BBSR_A Wife Must conquer the Heart of her Husband",
    "section": "SB1993"
  },
  {
    "code": "0945",
    "title": "19930810_SB9.3.22_BBSR_Characteristic of a Chaste Lady",
    "section": "SB1993"
  },
  {
    "code": "0946",
    "title": "19930811_SB9.3.23_BBSR_Time Calculation of Lord Bramha and Story of Nilamadhava'mp3",
    "section": "SB1993"
  },
  {
    "code": "0947",
    "title": "19930814_SB9.3.33-36_BBSR_The Mercy Potency of Lord Balabhadra",
    "section": "SB1993"
  },
  {
    "code": "0948",
    "title": "19930815_SB9.4.1_BBSR_Two Types of Bramhachari Disciple,mp3",
    "section": "SB1993"
  },
  {
    "code": "0949",
    "title": "19930816_SB9.4.2-3_BBSR_If you Simple, can Blindly Accept Guru's Instruction",
    "section": "SB1993"
  },
  {
    "code": "0950",
    "title": "19930818_SB9.4.17-20_BBSR_Sri Guru is a Dear Girl Companion of SRR",
    "section": "SB1993"
  },
  {
    "code": "0951",
    "title": "19930821_SB9.4.21_BBSR_ A Real Ruler knows the Peace Formula",
    "section": "SB1993"
  },
  {
    "code": "0952",
    "title": "19930822_SB9.4.22_BBSR_Natural Bramhana and Cast Bramhana",
    "section": "SB1993"
  },
  {
    "code": "0953",
    "title": "19930823_SB9.4.23-24_BBSR_Developing such eye to see Krsna's Sweet Pastimes",
    "section": "SB1993"
  },
  {
    "code": "0954",
    "title": "19930825_SB9.4.25_BBSR_All Yoga Siddhis roll at the feet of a Devotee",
    "section": "SB1993"
  },
  {
    "code": "0955",
    "title": "19930828_SB9.4.26_BBSR_Stages of Bhakti and Sukruti",
    "section": "SB1993"
  },
  {
    "code": "0956",
    "title": "19930829_SB9.4.27_BBSR_Nirjjan Vasa in Tattva Vichar",
    "section": "SB1993"
  },
  {
    "code": "0957",
    "title": "19930830_SB9.4.28_BBSR_Faith is the Foundation of Bhakti Mansion",
    "section": "SB1993"
  },
  {
    "code": "0958",
    "title": "19930831_SB9.4.29_BBSR_Following Vaisnava Vrata and Order of Guru",
    "section": "SB1993"
  },
  {
    "code": "0959",
    "title": "19930901_SB9.4.30-40_BBSR_Pure Intelligence comes from Krsna",
    "section": "SB1993"
  },
  {
    "code": "0960",
    "title": "19930904_SB9.4.44_BBSR_Explanations of Interpretation language in Vedic Literature",
    "section": "SB1993"
  },
  {
    "code": "0961",
    "title": "19930905_SB9.4.45_BBSR_In all Vedic Literatures find Bhakti is Topmost",
    "section": "SB1993"
  },
  {
    "code": "0962",
    "title": "19930906_SB9.4.47-49_BBSR_Complete Surrender then Protection is There",
    "section": "SB1993"
  },
  {
    "code": "0963",
    "title": "19930908_SB9.4.49_BBSR_The Ultimate thing is one should Surrender unto Supreme Lord",
    "section": "SB1993"
  },
  {
    "code": "0964",
    "title": "19930911_SB9.4.55-56_BBSR_Krsna Makes his Devotee Greater than Him",
    "section": "SB1993"
  },
  {
    "code": "0965",
    "title": "19930912_SB9.4.57_BBSR_Krsna is Subordinate to His Devotees",
    "section": "SB1993"
  },
  {
    "code": "0966",
    "title": "19930913_SB9.4.64_BBSR_Jumping into Fire of Seva Yanjan",
    "section": "SB1993"
  },
  {
    "code": "0967",
    "title": "19930913_SB9.4.64_BBSR_Krsna's Special Mercy taking away the attachment",
    "section": "SB1993"
  },
  {
    "code": "0968",
    "title": "19930915_SB9.4.66_BBSR_ Natural Dharma of Prema is Hladini Sakti",
    "section": "SB1993"
  },
  {
    "code": "0969",
    "title": "19930921_SB9.4.70_BBSR_Without Devotion Bramhinical Culture has no Value",
    "section": "SB1993"
  },
  {
    "code": "0970",
    "title": "19931007_SB4.29.71_New Govardhan_Living Entities Deep Sleep",
    "section": "SB1993"
  },
  {
    "code": "0971",
    "title": "19931009_SB6.9.35_New Govardhan_Krsna in the form of Mahaprabhu teaches us How to Surrender",
    "section": "SB1993"
  },
  {
    "code": "0972",
    "title": "19931012_SB7.1.34_Adelaide_A Neophyte devotee must Hear from a Guru",
    "section": "SB1993"
  },
  {
    "code": "0973",
    "title": "19931013_SB7.1.35_Adelaide_Jiva Never Falls From Vaikuntha",
    "section": "SB1993"
  },
  {
    "code": "0974",
    "title": "19931014_SB7.1.36-37_Adelaide_Conjugal Mellow only in Mahaprabhu's Teaching",
    "section": "SB1993"
  },
  {
    "code": "0975",
    "title": "19931015_SB7.1.38-43_Adelaide_The Perverted condition of Love is Lust",
    "section": "SB1993"
  },
  {
    "code": "0976",
    "title": "19931020_SB7.4.5_Bali_Who is Intelligence Catches Krsna, but Fools Can't",
    "section": "SB1993"
  },
  {
    "code": "0977",
    "title": "19931021_SB2.4.46_Bali_Krishna's Will is all Powerful",
    "section": "SB1993"
  },
  {
    "code": "0978",
    "title": "19931022_SB2.4.7_Bali_Three Types of Energies of Lord Visnu",
    "section": "SB1993"
  },
  {
    "code": "0979",
    "title": "19931024_SB9.5.1-5_BBSR_Don't Try But Cry for Krsna",
    "section": "SB1993"
  },
  {
    "code": "0980",
    "title": "19931030_SB9.4.71_BBSR_The Glories of Vaisnavas and Their Association",
    "section": "SB1993"
  },
  {
    "code": "0981",
    "title": "19931031_SB9.5.1-5-BBSR_Nullifying Offences at the Feet of a Vaisnava",
    "section": "SB1993"
  },
  {
    "code": "0982",
    "title": "19931101_SB9.5.6_BBSR_ Lotus Feet of Lord Hari, Such a Place No Fear",
    "section": "SB1993"
  },
  {
    "code": "0983",
    "title": "19931103_SB9.5.8-20_BBSR_Wonderful Mercy of a Sadhu",
    "section": "SB1993"
  },
  {
    "code": "0984",
    "title": "19931106_SB9.5.21_BBSR_The Inhabitants in Different Planetary System",
    "section": "SB1993"
  },
  {
    "code": "0985",
    "title": "19931108_SB9.5.25_BBSR_Real Utilization of Pratishta",
    "section": "SB1993"
  },
  {
    "code": "0986",
    "title": "19931109_SB9.5.26_BBSR_Only Desire is Service to Lord",
    "section": "SB1993"
  },
  {
    "code": "0987",
    "title": "19931110_SB9.5.27_BBSR_In Devotional Service No More Satisfaction",
    "section": "SB1993"
  },
  {
    "code": "0988",
    "title": "19931113_SB9.5.28_BBSR_The Wonderful Damodar Lila",
    "section": "SB1993"
  },
  {
    "code": "0989",
    "title": "19931120_SB9.6.1_BBSR_Description of Khetrajata Son According to Bhagavatam",
    "section": "SB1993"
  },
  {
    "code": "0990",
    "title": "19931212_SB9.6.3-7_BBSR_Mahaprabu's Teachings Faith on Mahaprasadam,mp3",
    "section": "SB1993"
  },
  {
    "code": "0991",
    "title": "19931213_SB9.6.8_BBSR_Sastric Evidence of Eight different forms of Deity to Worship",
    "section": "SB1993"
  },
  {
    "code": "0992",
    "title": "19931218_SB9.6.9-26_BBSR_Divisions of Four Asramas",
    "section": "SB1993"
  },
  {
    "code": "0993",
    "title": "19931220_SB9.6.28-40_BBSR_Attraction Towards Woman Destroys All Good Qualities",
    "section": "SB1993"
  },
  {
    "code": "0994",
    "title": "19931225_SB9.6.41-46_BBSR_You Should Survive as a Human being for the Attainment of Sreya",
    "section": "SB1993"
  },
  {
    "code": "0995",
    "title": "19931227_SB9.6.46-47_BBSR_Krsna's Opulence than King Mandhata and Soubhari Muni",
    "section": "SB1993"
  },
  {
    "code": "0996",
    "title": "19931228_SB9.6.48_BBSR_Stop Increase the Fire of Material Desires",
    "section": "SB1993"
  },
  {
    "code": "0997",
    "title": "19931229_SB9.6.49_BBSR_ Vaisnava Aparadha, Offences to Devotees",
    "section": "SB1993"
  },
  {
    "code": "0998",
    "title": "19940108_SB9_7_8_20_BBSR_Chanting_the_Holy_Name_is_the_Yajna_for",
    "section": "SB1994"
  },
  {
    "code": "0999",
    "title": "19940110_SB9.8.1-11_BBSR_Reactions of  Vaisnava Aparadha",
    "section": "SB1994"
  },
  {
    "code": "1000",
    "title": "19940113_SB6.16.33_ISKCON Juhu_What Independence do You Have",
    "section": "SB1994"
  },
  {
    "code": "1001",
    "title": "19940115_SB3_26_18_Mauritius_By_the_Mercy_of_a_Sadhu_A_Living_entity",
    "section": "SB1994"
  },
  {
    "code": "1002",
    "title": "19940117_SB3_23_Mauritius_The_Glory_of_Remnant_of_a_Vaisnava_and",
    "section": "SB1994"
  },
  {
    "code": "1003",
    "title": "19940119_SB4.7.3_Durban_A Vaisnava Never Disrespect Demigods",
    "section": "SB1994"
  },
  {
    "code": "1004",
    "title": "19940123_SB1_19_9_10_Nairobi_The_Glories_of_Srimad_Bhagavatam_and",
    "section": "SB1994"
  },
  {
    "code": "1005",
    "title": "19940128_SB1_14_13_Mombassa_Five_Sense_Objects_Hitting_like_Waves",
    "section": "SB1994"
  },
  {
    "code": "1006",
    "title": "19940130_SB6_16_48_50_ISKCON_Juhu_Spontaneous_manifestation_of_Holy",
    "section": "SB1994"
  },
  {
    "code": "1007",
    "title": "19940201_SB9.8.12-13_BBSR_Sadhu's Anger is Mercy",
    "section": "SB1994"
  },
  {
    "code": "1008",
    "title": "19940202_SB9_8_14_18_BBSR_Yogis_Aspired_only_Yoga_Siddhi_Thereby",
    "section": "SB1994"
  },
  {
    "code": "1009",
    "title": "19940205_SB9_8_18_21_BBSR_The_Supreme_Lord_could_Understood_only",
    "section": "SB1994"
  },
  {
    "code": "1010",
    "title": "19940207_SB9_8_23_BBSR_The_Outcome_of_Devotion_is_Only_Happiness",
    "section": "SB1994"
  },
  {
    "code": "1011",
    "title": "19940208_SB9_8_24_BBSR_The_Supreme_Lord_Address_as_Prasanta_Completely",
    "section": "SB1994"
  },
  {
    "code": "1012",
    "title": "19940212_SB9_8_25_30_BBSR_Get_Krsna_Through_Chanting_Without_Offences",
    "section": "SB1994"
  },
  {
    "code": "1013",
    "title": "19940213_SB9.9.1-1_BBSR_Why Does Guru Suffer",
    "section": "SB1994"
  },
  {
    "code": "1014",
    "title": "19940214_SB9.9.6_BBSR_How You Would be able to Kick out Maya",
    "section": "SB1994"
  },
  {
    "code": "1015",
    "title": "19940216_SB9.9.7_BBSR_The Glories of Siva Tattva",
    "section": "SB1994"
  },
  {
    "code": "1016",
    "title": "19940219_SB9_9_8_BBSR_Lord_Siva's_Madness_and_Sevananda_Sukha",
    "section": "SB1994"
  },
  {
    "code": "1017",
    "title": "19940220_SB9_9_9_12_BBSR_Without_Seeing_the_Beauty_of_Krsna_No_use",
    "section": "SB1994"
  },
  {
    "code": "1018",
    "title": "19940221_SB9_9_13_BBSR_By_the_Mercy_of_a_Vaisnava_Bhajan_Chakhyu",
    "section": "SB1994"
  },
  {
    "code": "1019",
    "title": "19940222_SB9_9_15_17_BBSR_Raganuga_Bhakti,_First_Rise_Above_Bodily",
    "section": "SB1994"
  },
  {
    "code": "1020",
    "title": "19940223_SB9_9_18_28_BBSR_Human_Life_is_Extremely_Important_to_Executing",
    "section": "SB1994"
  },
  {
    "code": "1021",
    "title": "19940309_SB5.12.7_Mayapur_The Platform of Crying For Krsna",
    "section": "SB1994"
  },
  {
    "code": "1022",
    "title": "19940316_SB9_9_29_BBSR_SP_Created_A_Revolution_of_Bramhinical_Cultur",
    "section": "SB1994"
  },
  {
    "code": "1023",
    "title": "19940319_SB9_9_30_BBSR_Natural_Bramahan_and_So_called_Name_Bramhana",
    "section": "SB1994"
  },
  {
    "code": "1024",
    "title": "19940321_SB9.9.31_BBSR_Vrajabashis are The Real Preachers",
    "section": "SB1994"
  },
  {
    "code": "1025",
    "title": "19940322_SB9.9.32_BBSR_Without Husband a Wife is a Dead body",
    "section": "SB1994"
  },
  {
    "code": "1026",
    "title": "19940323_SB9.9.33_BBSR_Destiny Could Change Only Through KC",
    "section": "SB1994"
  },
  {
    "code": "1027",
    "title": "19940329_ S.B. 9.9.34-42_BBSR_Krishna, The Supreme Thief",
    "section": "SB1994"
  },
  {
    "code": "1028",
    "title": "19940330_S_B9_9_43_BBSR_Krishna_Madhurya,_The_Beauty_of_Krsna",
    "section": "SB1994"
  },
  {
    "code": "1029",
    "title": "19940403_SB9.10.28_BBSR_Be Aware of Vaishnava Aparadha",
    "section": "SB1994"
  },
  {
    "code": "1030",
    "title": "19940404_SB.9.10.29_BBSR_Abled Guidance of Sadhu is Required",
    "section": "SB1994"
  },
  {
    "code": "1031",
    "title": "19940404_SB9.9.46_BBSR_Husking the Husk",
    "section": "SB1994"
  },
  {
    "code": "1032",
    "title": "19940404_SB9_9_46_BBSR_Great_Fool_Follow_the_Path_of_Karma,_Gyana",
    "section": "SB1994"
  },
  {
    "code": "1033",
    "title": "19940405_SB9.9.47_BBSR_Real Success of Life",
    "section": "SB1994"
  },
  {
    "code": "1034",
    "title": "19940406_S.B9.9.48_BBSR_Teachings of Prema-Vivarta",
    "section": "SB1994"
  },
  {
    "code": "1035",
    "title": "19940409_S_B09_09_49_Sadhu_is_the_embodiment_of_Krishna_Prema,Dt",
    "section": "SB1994"
  },
  {
    "code": "1036",
    "title": "19940409_SB09_09_49_BBSR_Sadhu_is_the_Embodiment_of_Krishna_Prema",
    "section": "SB1994"
  },
  {
    "code": "1037",
    "title": "19940409_SB9_9_49_BBSR_Guru_Makes_Krsna_Appear_in_the_Heart_of_His",
    "section": "SB1994"
  },
  {
    "code": "1038",
    "title": "19940410_SB9_10_1_3_BBSR_Guru_Imparted_Tattvagyan_to_Submissivie",
    "section": "SB1994"
  },
  {
    "code": "1039",
    "title": "19940411_SB9.10.3_BBSR_Approaching a Tattva Darshi Guru",
    "section": "SB1994"
  },
  {
    "code": "1040",
    "title": "19940412_SB9_10_4_8_BBSR_My_Business_is_to_Give_Krsna,_Are_you_Prepared",
    "section": "SB1994"
  },
  {
    "code": "1041",
    "title": "19940413_SB9_10_9_11_BBSR_Transformation_of_Pranaya,_Divine_Love",
    "section": "SB1994"
  },
  {
    "code": "1042",
    "title": "19940416_S_B_1_2_7_Gadeigiri_Who_Could_Really_Understand_Bhakti",
    "section": "SB1994"
  },
  {
    "code": "1043",
    "title": "19940419_SB9_10_13_14_BBSR_Calamities_are_needed_to_remember_Krishna",
    "section": "SB1994"
  },
  {
    "code": "1044",
    "title": "19940423_SB9_10_16_BBSR_By_Mercy_of_the_Lord_Only_One_Could_Understand",
    "section": "SB1994"
  },
  {
    "code": "1045",
    "title": "19940424_SB9.10.17-20_BBSr_Sat Sanga Mahima",
    "section": "SB1994"
  },
  {
    "code": "1046",
    "title": "19940427_SB.9.10.21-22_BBSR_Krishna is the Supreme Enjoyer",
    "section": "SB1994"
  },
  {
    "code": "1047",
    "title": "19940502_SB9.10.24-27_BBSR_A Blind in Lust Can't See",
    "section": "SB1994"
  },
  {
    "code": "1048",
    "title": "19940504_SB9_10_29_BBSR_Most_Wonderful_Childhood_Pastimes_of_Lord",
    "section": "SB1994"
  },
  {
    "code": "1049",
    "title": "19940507_SB9_10_30_50_BBSR_Entire_Varnasrama_System_is_Enable_People",
    "section": "SB1994"
  },
  {
    "code": "1050",
    "title": "19940509_SB9.10.52-53_BBSR_Sadhus Glorifies Kaliyuga",
    "section": "SB1994"
  },
  {
    "code": "1051",
    "title": "19940510_SB9_10_54_55_BBSR_Wife_will_put_in_such_situation,_You",
    "section": "SB1994"
  },
  {
    "code": "1052",
    "title": "19940511_SB9_11_1_BBSR_Aroma_of_Sound_Vibration_Smell_through_Ear",
    "section": "SB1994"
  },
  {
    "code": "1053",
    "title": "19940514_SB9_11_2_5_BBSR_The_Powerful_Effects_of_Dust_of_Pure_Devotees",
    "section": "SB1994"
  },
  {
    "code": "1054",
    "title": "19940516_SB9_11_7_12_BBSR_The_Intricacies_of_Union_&_Separation",
    "section": "SB1994"
  },
  {
    "code": "1055",
    "title": "19940517_SB9.11.17_BBSR_The Causes of Fear",
    "section": "SB1994"
  },
  {
    "code": "1056",
    "title": "19940518_SB9.11.18-19_BBSR_Symptoms of Gopi Prema",
    "section": "SB1994"
  },
  {
    "code": "1057",
    "title": "19940521_SB9_11_20_BBSR_Relishing_the_Most_Wonderful_Damodara_Lila",
    "section": "SB1994"
  },
  {
    "code": "1058",
    "title": "19940523_SB9_11_23_BBSR_Sravana_and_Kirtan,_Curing_From_the_Diseases",
    "section": "SB1994"
  },
  {
    "code": "1059",
    "title": "19940525_SB9_11_24_BBSR_Mahaprabhu's_Instruction_on_Sarangagati_",
    "section": "SB1994"
  },
  {
    "code": "1060",
    "title": "19940603_SB3_28_2_Berkeley_Following_Divine_Varnashrama_Dharma",
    "section": "SB1994"
  },
  {
    "code": "1061",
    "title": "19940604_SB3_28_3_San_Francisco_Understanding_Real_and_Eternal_Dharma",
    "section": "SB1994"
  },
  {
    "code": "1062",
    "title": "19940607_SB3_6_11_Los_Angeles_Krsna_Crushes_the_Pride_of_Demigods",
    "section": "SB1994"
  },
  {
    "code": "1063",
    "title": "19940608_SB3.6.12_Los Angeles_Krsna Katha Creates Warmth.",
    "section": "SB1994"
  },
  {
    "code": "1064",
    "title": "19940611_SB4_7_28_SanDiego_Make_Dry_the_Dreadful_Material_Ocean",
    "section": "SB1994"
  },
  {
    "code": "1065",
    "title": "19940613_SB4_7_30_San_Diego_We_are_in_a_Precarious_Condition_Under",
    "section": "SB1994"
  },
  {
    "code": "1066",
    "title": "19940614_SB1.17.21_Tuscon_ Codes of Religious Principles",
    "section": "SB1994"
  },
  {
    "code": "1067",
    "title": "19940617_SB_2_7_48_New_Talavan_Mana_Siksha,_Teachings_to_Mind",
    "section": "SB1994"
  },
  {
    "code": "1068",
    "title": "19940619_SB10_3_31_Atlanta_Bhakta_Bhakti_&_Bhagavan_not_Belongs",
    "section": "SB1994"
  },
  {
    "code": "1069",
    "title": "19940620_SB10_0_31_Atlanta_Bhakta_Bkhati_&_Bhagavan_not_Belongs",
    "section": "SB1994"
  },
  {
    "code": "1070",
    "title": "19940623_SB3_13_27_New_York_Lord_Appears_Accepting_a_Father_and",
    "section": "SB1994"
  },
  {
    "code": "1071",
    "title": "19940628_SB3.6.39_Los Angeles_Krsna Never Leaves Vrndavan",
    "section": "SB1994"
  },
  {
    "code": "1072",
    "title": "19940702_SB9_11_26_BBSR_The_Tattva_Behind_Lord_Rama_Banished_Sita",
    "section": "SB1994"
  },
  {
    "code": "1073",
    "title": "19940703_SB9_11_27_36_&_94_07_04_SB9_12_1_7_BBSR_Bhakti_Yogi_is",
    "section": "SB1994"
  },
  {
    "code": "1074",
    "title": "19940705_SB9_12_7_16_BBSR_Srimad_Bhagavatam_is_Manifestation_of",
    "section": "SB1994"
  },
  {
    "code": "1075",
    "title": "19940706_SB9_13_1_BBSR_How_to_Fee_from_Anarthas_Which_is_Surrounded",
    "section": "SB1994"
  },
  {
    "code": "1076",
    "title": "19940712_SB9.13.4_BBSR_A Real Bramahana is not Greedy",
    "section": "SB1994"
  },
  {
    "code": "1077",
    "title": "19940713_SB9.13.6_BBSR_Understanding Real Bramhana",
    "section": "SB1994"
  },
  {
    "code": "1078",
    "title": "19940716_SB9_13_7_8_BBSR_Chastity_Could_Maintain_by_Keeping_Krsna",
    "section": "SB1994"
  },
  {
    "code": "1079",
    "title": "19940719_SB9_13_9_BBSR_A_Devotee_in_Material_Body_is_a_Liberated",
    "section": "SB1994"
  },
  {
    "code": "1080",
    "title": "19940720_SB9.13.10_BBSR_Krsna is the Proprietor, Jiva is Not",
    "section": "SB1994"
  },
  {
    "code": "1081",
    "title": "19940726_SB9.14.1-3_BBSR_Approaching a Tattvacharya",
    "section": "SB1994"
  },
  {
    "code": "1082",
    "title": "19940727_SB9.13.13_BBSR_ Question of Tolerance",
    "section": "SB1994"
  },
  {
    "code": "1083",
    "title": "19940730_SB7_13_37_Radha_Desh_Develop_Attachment_and_Detachment",
    "section": "SB1994"
  },
  {
    "code": "1084",
    "title": "19940817_SB2_1_4_Toulouse_Don't_Know_Tattva_Means_Fall_Down",
    "section": "SB1994"
  },
  {
    "code": "1085",
    "title": "19940819_SB5.14.4_Madrid_Material Desire is Very Deep Rooted",
    "section": "SB1994"
  },
  {
    "code": "1086",
    "title": "19940821_SB10_2_4_5_Barcelona_The_Tattva_Behind_Kamsa_Killing_Six",
    "section": "SB1994"
  },
  {
    "code": "1087",
    "title": "19940822_SB4_11_7_Barcelona_A_Blind_by_Lust_Can't_See_Anything",
    "section": "SB1994"
  },
  {
    "code": "1088",
    "title": "19940827_SB9_14_4_6_BBSR_Sadhus_are_Boat_for_Persons_Drowning_in",
    "section": "SB1994"
  },
  {
    "code": "1089",
    "title": "19940828_SB9_14_7_9_BBSR_Nature_and_Characteristics_of_Demigods",
    "section": "SB1994"
  },
  {
    "code": "1090",
    "title": "19940831_SB9_14_10_20_BBSR_Who_Can_Tolerate_the_Urges_of_Sexual",
    "section": "SB1994"
  },
  {
    "code": "1091",
    "title": "19940903_SB9_14_21_22_BBSR_Marrage_Means_give_Pleasure_to_Krsna_",
    "section": "SB1994"
  },
  {
    "code": "1092",
    "title": "19940905_SB 9.14.24-37_BBSR_Beware of Woman' s Charms",
    "section": "SB1994"
  },
  {
    "code": "1093",
    "title": "19940913_SB9_14_38_BBSR_Women_needs_to_Train_how_to_become_Chaste",
    "section": "SB1994"
  },
  {
    "code": "1094",
    "title": "19940914_SB9_14_39_BBSR_In_the_name_of_Service_Maya_Garbs_You",
    "section": "SB1994"
  },
  {
    "code": "1095",
    "title": "19940920_SB9_14_40_BBSR_Only_Attachment_is_Krsna_Nothing_Else",
    "section": "SB1994"
  },
  {
    "code": "1096",
    "title": "19940921_SB9.14.43_BBSR_Wonderful glories of Krsna Bhakti",
    "section": "SB1994"
  },
  {
    "code": "1097",
    "title": "19940925_SB3_12_1_2_Melbourn_Why_Bramha_Created_Five_Kinds_of_Nescient",
    "section": "SB1994"
  },
  {
    "code": "1098",
    "title": "19940926_SB3.12.3_Melbourn_The Sweet Will  of the Lord",
    "section": "SB1994"
  },
  {
    "code": "1099",
    "title": "19940927_SB8_22_23_Melbourn_As_long_as_duplicity_is_there_Prema",
    "section": "SB1994"
  },
  {
    "code": "1100",
    "title": "19940930_SB7.9.42_AdelaideKrsna is Devotee of His Devotee",
    "section": "SB1994"
  },
  {
    "code": "1101",
    "title": "19940931_SB7.9.43_Adelaide_ Krsna is the Doer",
    "section": "SB1994"
  },
  {
    "code": "1102",
    "title": "19941001_SB7.9.43_Adelaide_A First Class Fool's Plan",
    "section": "SB1994"
  },
  {
    "code": "1103",
    "title": "19941002_SB7.9.44_ Adelaide _The Business of a Vaisnava",
    "section": "SB1994"
  },
  {
    "code": "1104",
    "title": "19941003_SB7_9_45_Adelaide_Giving_up_the_Sensational_Happiness_of",
    "section": "SB1994"
  },
  {
    "code": "1105",
    "title": "19941004_SB7_9_46_Adelaide_According_to_Prahalad_Maharaj_Who_is",
    "section": "SB1994"
  },
  {
    "code": "1106",
    "title": "19941006_SB4_16_1_Perth_First_Principle_is_to_Accept_Bonafide_Authority",
    "section": "SB1994"
  },
  {
    "code": "1107",
    "title": "19941007_SB4_16_2_Perth_Explanation_of_Avatars_Incarnation_Tattva",
    "section": "SB1994"
  },
  {
    "code": "1108",
    "title": "19941009_SB5_14_18_New_Goverdhan_Comfortable_Family_Position_is",
    "section": "SB1994"
  },
  {
    "code": "1109",
    "title": "19941010_SB5.14.19_New Goverdhan_Happiness of Family Life",
    "section": "SB1994"
  },
  {
    "code": "1110",
    "title": "19941014_SB1.12.18_Bali_Glories of Serving Devotees",
    "section": "SB1994"
  },
  {
    "code": "1111",
    "title": "19941015_SB1.2.19_Bali_Seeing Everything Relation with Krsna",
    "section": "SB1994"
  },
  {
    "code": "1112",
    "title": "19941017_SB1.2.20_Bali_Understanding Pure Knowledge",
    "section": "SB1994"
  },
  {
    "code": "1113",
    "title": "19941020_SB0_0_0_Bali_Narada_Muni's_meeting_with_Bhakti_Devi",
    "section": "SB1994"
  },
  {
    "code": "1114",
    "title": "19941020_SB1_2_0_Bali_Don't_Become_servant_of_Your_Senses",
    "section": "SB1994"
  },
  {
    "code": "1115",
    "title": "19941021_SB1.2.0_Bali_The Story of Gokarna and Dhundukari",
    "section": "SB1994"
  },
  {
    "code": "1116",
    "title": "19941022_SB4_22_45_Jakarta_Preaching_Krsna_Consciousness_is_Highest",
    "section": "SB1994"
  },
  {
    "code": "1117",
    "title": "19941024_SB4.27.24_Singapore_Cry for Protection of Krsna",
    "section": "SB1994"
  },
  {
    "code": "1118",
    "title": "19941029_SB9.19.44-45_BBSR_Lust Love and the Gopis",
    "section": "SB1994"
  },
  {
    "code": "1119",
    "title": "19941031_SB_9_14_47_BBSR_Rulers_Must_Introduce_Varnashrama_Dharma",
    "section": "SB1994"
  },
  {
    "code": "1120",
    "title": "19941101_SB9.14.48_BBSR_Glories of The Holy Name (P-1)",
    "section": "SB1994"
  },
  {
    "code": "1121",
    "title": "19941102_SB9.14.49_BBSR_Glories of The Holy Name (P-2)",
    "section": "SB1994"
  },
  {
    "code": "1122",
    "title": "19941104_SB9.15.1-12_BBSR_Varnashrama Dharma Explained",
    "section": "SB1994"
  },
  {
    "code": "1123",
    "title": "19941107_SB9_15_11_15_BBSR_Symptoms_and_Influence_in_KaliYuga",
    "section": "SB1994"
  },
  {
    "code": "1124",
    "title": "19941108_SB9.15.16-19_BBSR_How to Treat a Pasandi",
    "section": "SB1994"
  },
  {
    "code": "1125",
    "title": "19941109_SB9.15.24_BBSR_If Think of Krsna then No More Envy",
    "section": "SB1994"
  },
  {
    "code": "1126",
    "title": "19941210_SB9.15.25_BBSR_Killing Animal is Forbidden",
    "section": "SB1994"
  },
  {
    "code": "1127",
    "title": "19941224_SB9_15_26_BBSR_If_Krsna_Becomes_Please_All_will_be_Pleased",
    "section": "SB1994"
  },
  {
    "code": "1128",
    "title": "19941226_SB 9.15.27-40_BBSR_The Real Beauty of a Bhakta",
    "section": "SB1994"
  },
  {
    "code": "1129",
    "title": "19941227_S.B.9.15.41_BBSR_Sadhu is Better Than A Tirtha",
    "section": "SB1994"
  },
  {
    "code": "1130",
    "title": "19940417_SB9_10_12_ED_BBSR_Sign_of_Gratefulness,_Lord_Rama's_Monkey",
    "section": "SB1994"
  },
  {
    "code": "1131",
    "title": "19950000_SB9.10.9-11_Bhubaneswar_LevelsOfPrema",
    "section": "SB1994"
  },
  {
    "code": "1132",
    "title": "19950104_SB3.33.2_Mauritius_SriGuruIsTheRealFatherAndMother",
    "section": "SB1994"
  },
  {
    "code": "1133",
    "title": "19950105_SB3.33.3_Mauritius_DependOnTheWillOfKrishna",
    "section": "SB1994"
  },
  {
    "code": "1134",
    "title": "19950109_SB4.12.20_Durban_LessonsFromDhruvaCharitra",
    "section": "SB1994"
  },
  {
    "code": "1135",
    "title": "19950113_SB8.22.3_UnknownLocation_Fearlessness",
    "section": "SB1994"
  },
  {
    "code": "1136",
    "title": "19950120_SB2.6.37_Nairobi_TwpTypesOfMayaAndTheirActivities",
    "section": "SB1994"
  },
  {
    "code": "1137",
    "title": "19950123_SB1.4.10_Nigeria_6MainQuestionsByMaharajaPariksitToSukadevaGoswami",
    "section": "SB1994"
  },
  {
    "code": "1138",
    "title": "19950124_SB1.4.11_Nigeria_OneWhoHasGotKrishnaWillNeverFeelIncompleteness",
    "section": "SB1994"
  },
  {
    "code": "1139",
    "title": "19950126_SB4.7.14_Ghana_Shiva-tattvaIsASpecialTattva&AngerOfAVaishnavaIsMercy",
    "section": "SB1994"
  },
  {
    "code": "1140",
    "title": "19950127_SB4.7.15_Ghana_TheMercifulGiftOfTheLord",
    "section": "SB1994"
  },
  {
    "code": "1141",
    "title": "19950206_SB9.16.1-6_Bhubaneswar_Don'tDeliberateOnGuru'sInstructions",
    "section": "SB1994"
  },
  {
    "code": "1142",
    "title": "19950207_SB9.16.7_Bhubaneswar_Yajna-KarmaShouldBeDoneUnderTheExpertGuidanceOfABonafideSpiritualMaster",
    "section": "SB1994"
  },
  {
    "code": "1143",
    "title": "19950211_SB9.16.10-19_Bhubaneswar_HighestInterestInLife",
    "section": "SB1994"
  },
  {
    "code": "1144",
    "title": "19950212_SB9.16.20-23_Bhubaneswar_OnlyBhaktiPrayascittaIsNecessary",
    "section": "SB1994"
  },
  {
    "code": "1145",
    "title": "19950215_SB9.16.24_Bhubaneswar_TheWonderfulMessageOfSrimadBhagavatam",
    "section": "SB1994"
  },
  {
    "code": "1146",
    "title": "19950221_SB4.8.34_Mayapur_SrilaPrabhupada'sIdealSociety",
    "section": "SB1994"
  },
  {
    "code": "1147",
    "title": "19950306_SB9.16.25-28_Bhubaneswar_UnlessOneIsElevatedToSattvaStageHeCannotUnderstandVedicKnowledge",
    "section": "SB1994"
  },
  {
    "code": "1148",
    "title": "19950307_SB9.16.29-31_Bhubaneswar_PracticeTheTeachingsOfMahaprabhu&FollowTheMahajanas",
    "section": "SB1994"
  },
  {
    "code": "1149",
    "title": "19950308_SB9.16.32-33_Bhubaneswar_WhatIsGauraSankirtana\uf025WithOriyaTranslation",
    "section": "SB1994"
  },
  {
    "code": "1150",
    "title": "19950311_SB5.14.16_GadeiGiri_QualityOfADevotee",
    "section": "SB1994"
  },
  {
    "code": "1151",
    "title": "19950312_SB5.14.17_GadeiGiri_MahaprabhuIsYourWell-Wisher",
    "section": "SB1994"
  },
  {
    "code": "1152",
    "title": "19950313_SB5.14.18_GadeiGiri_HouseholdLifeIsLikeADeepDarkWell",
    "section": "SB1994"
  },
  {
    "code": "1153",
    "title": "19950314_SB9.16.31-35_Bhubaneswar_TheTruthfulKingHariscandra",
    "section": "SB1994"
  },
  {
    "code": "1154",
    "title": "19950319_SB9.17.1-17_Bhubaneswar_ExplanationOfThePuranas",
    "section": "SB1994"
  },
  {
    "code": "1155",
    "title": "19950320_SB9.18.1-2_Bhubaneswar_HowOneGetSvarupaSiddhi",
    "section": "SB1994"
  },
  {
    "code": "1156",
    "title": "19950321_SB9.18.3-5_Bhubaneswar_BrahmachariLifeIsHappyLife",
    "section": "SB1994"
  },
  {
    "code": "1157",
    "title": "19950322_SB9.18.6-16_Bhubaneswar_TheNatureOfWomen",
    "section": "SB1994"
  },
  {
    "code": "1158",
    "title": "19950325_SB9.18.17-21_Bhubaneswar_OneWhoIsVerySeriousToAchieveKrishnaPremaShouldNotAssociateWithAWoman",
    "section": "SB1994"
  },
  {
    "code": "1159",
    "title": "19950326_SB9.18.22_Bhubaneswar_HumanBirthIsMeantForDevelopingCompleteKrishnaConsciousness",
    "section": "SB1994"
  },
  {
    "code": "1160",
    "title": "19950328_SB9.18.23_Bhubaneswar_VedicMarriage",
    "section": "SB1994"
  },
  {
    "code": "1161",
    "title": "19950329_SB9.18.24-25_Bhubaneswar_APureVaishnavaIsAFirstClassBrahmana",
    "section": "SB1994"
  },
  {
    "code": "1162",
    "title": "19950401_SB9.18.26_BBSR_Cutting Off Very Strong Material Affection",
    "section": "SB1994"
  },
  {
    "code": "1163",
    "title": "19950403_SB9.18.30-32_BBSR_One Must Voluntarily Seize from Material Desires",
    "section": "SB1994"
  },
  {
    "code": "1164",
    "title": "19950408_SB9.18.38-39_BBSR_Result of Strong Attachment for Sexual Desire",
    "section": "SB1994"
  },
  {
    "code": "1165",
    "title": "19950412_SB9.18.40_BBSR_A Bramhachari Must Spotless and Pure",
    "section": "SB1994"
  },
  {
    "code": "1166",
    "title": "19950414_SB9.18.40_Gadeigiri_Developing Strong and Unflinching Faith",
    "section": "SB1994"
  },
  {
    "code": "1167",
    "title": "19950415_SB9.18.40_Gadeigiri_Beginning of a Real Human Life",
    "section": "SB1994"
  },
  {
    "code": "1168",
    "title": "19950416_SB9.18.40_Gadeigiri_Krsna's Flute Disturb Gopis",
    "section": "SB1994"
  },
  {
    "code": "1169",
    "title": "19950417_SB9.18.41-43_BBSR Question of Developing Consciousness",
    "section": "SB1994"
  },
  {
    "code": "1170",
    "title": "19950418_SB9.18.44_BBSR_Understanding 3Types of Adhikar and Disciples",
    "section": "SB1994"
  },
  {
    "code": "1171",
    "title": "19950419_SB9.18.45-49_BBSR_Sowing seed in a Barren Land",
    "section": "SB1994"
  },
  {
    "code": "1172",
    "title": "19950422_SB9.18.50-51_BBSR_One Must Free from all Designations",
    "section": "SB1994"
  },
  {
    "code": "1173",
    "title": "19950423_SB9.19.1-2_BBSR_The Duty of a Vanaprastha",
    "section": "SB1994"
  },
  {
    "code": "1174",
    "title": "19950424_SB9.19.3_BBSR_No Woman should Remain Single",
    "section": "SB1994"
  },
  {
    "code": "1175",
    "title": "19950425_SB9.19.4_BBSR_Ordinary Persons can't Understand Krsna's Mercy",
    "section": "SB1994"
  },
  {
    "code": "1176",
    "title": "19950426_SB9.19.5-6_BBSR_A Lusty Materialist like a Goat",
    "section": "SB1994"
  },
  {
    "code": "1177",
    "title": "19950429_SB9.19.7-8_BBSR_No Independence For Women",
    "section": "SB1994"
  },
  {
    "code": "1178",
    "title": "19950430_SB9.19.9-10_BBSR_Getting employment in Guru's Factory",
    "section": "SB1994"
  },
  {
    "code": "1179",
    "title": "19950501_SB9.19.11_BBSR_You Are a Great Criminal",
    "section": "SB1994"
  },
  {
    "code": "1180",
    "title": "19950506 SB9.19.12_BBSR_Household's Existence in Dark Well",
    "section": "SB1994"
  },
  {
    "code": "1181",
    "title": "19950507_SB9.19.13_BBSR_A Lusty Person Can't Satisfy his Mind",
    "section": "SB1994"
  },
  {
    "code": "1182",
    "title": "19950508_SB9.19.14_BBSR_Voluntarily Ceasing from Sexual Desires",
    "section": "SB1994"
  },
  {
    "code": "1183",
    "title": "19950509_SB9.19.15_BBSR_ Good Fortunate Means Sadhu Sanga",
    "section": "SB1994"
  },
  {
    "code": "1184",
    "title": "19950510_SB9.19.16_BBSR_Giving Up Strong Desire for Sex Enjoyment",
    "section": "SB1994"
  },
  {
    "code": "1185",
    "title": "19950515_SB9.19.17_BBSR_ Maya is Very Close to You",
    "section": "SB1994"
  },
  {
    "code": "1186",
    "title": "19950519_SB3.15.9-12_Los Angeles_ Becoming Totally Free from Material Desires",
    "section": "SB1994"
  },
  {
    "code": "1187",
    "title": "19950519_SB3.15.30_Los Angeles_Overcoming from Fear and Anxiety",
    "section": "SB1994"
  },
  {
    "code": "1188",
    "title": "19950520_SB3.15.13_Los Angeles_Freeing from Anxieties of this Material World",
    "section": "SB1994"
  },
  {
    "code": "1189",
    "title": "19950523_SB4.16.19_San Diego_Spiritual Knowledge Makes one Humble",
    "section": "SB1994"
  },
  {
    "code": "1190",
    "title": "19950524_SB9.16.20_San Diego_A Question of Strong and Unflinching Faith",
    "section": "SB1994"
  },
  {
    "code": "1191",
    "title": "19950526_SB2.6.2-3_Tucson_Sadhu is Moving Tirtha",
    "section": "SB1994"
  },
  {
    "code": "1192",
    "title": "19950528_SB2.6.29_New Vrndavan_Fortunately Seeing Krsna Once in Life Time",
    "section": "SB1994"
  },
  {
    "code": "1193",
    "title": "19950531_SB7.6.1_Amherst_No Fear of Death and No Fear of Yamaraj",
    "section": "SB1994"
  },
  {
    "code": "1194",
    "title": "19950601_SB7.6.2_Amherst_Four Divine Element in Rasa Tattva",
    "section": "SB1994"
  },
  {
    "code": "1195",
    "title": "19950602_SB7.6.3_Amherst_Only Remedy not Agitated by Material Cuppid",
    "section": "SB1994"
  },
  {
    "code": "1196",
    "title": "19950603_SB7.6.4_Amherst_Loosing the True Benefit of Human Life",
    "section": "SB1994"
  },
  {
    "code": "1197",
    "title": "19950605_SB1.17.33_Towaco_Purposes of Different kind of Yanjan",
    "section": "SB1994"
  },
  {
    "code": "1198",
    "title": "19950606_SB1.17.34_Towaco_Only Fortunate Develops Pure Devotion",
    "section": "SB1994"
  },
  {
    "code": "1199",
    "title": "19950607_SB1.17.35_Towaco_Glories of Bhagavatam and Duty of a Ideal King",
    "section": "SB1994"
  },
  {
    "code": "1200",
    "title": "19950608_SB1.17.36_Towaco_Maharaj Parikhit Saved Citizens from Clutches of Kali",
    "section": "SB1994"
  },
  {
    "code": "1201",
    "title": "19950609_SB1.17.37_Towaco_ Krsna Gives all Protection to a Surrendered Soul",
    "section": "SB1994"
  },
  {
    "code": "1202",
    "title": "19950615_SB10.6.4_Trinidad_Krsna Accept only Good Things",
    "section": "SB1994"
  },
  {
    "code": "1203",
    "title": "19950616_SB10.6.5-6_Trinidad_Krsna's Killing is also Benediction",
    "section": "SB1994"
  },
  {
    "code": "1204",
    "title": "19950618_SB7.6.1_Suriname_Temporary Relationship Causes Fear",
    "section": "SB1994"
  },
  {
    "code": "1205",
    "title": "19950621_SB7.6.2_Guyana_Developing Strong Attachment to a Motel",
    "section": "SB1994"
  },
  {
    "code": "1206",
    "title": "19950623_SB3.16.33_Miami_The Purposes of Marriage",
    "section": "SB1994"
  },
  {
    "code": "1207",
    "title": "19950701_SB9.19.16_BBSR_One Must Extremely Careful Dealing with Woman",
    "section": "SB1994"
  },
  {
    "code": "1208",
    "title": "19950703_SB9.19.18_BBSR_Giving up All Material Desires and Meditating Supreme Lord",
    "section": "SB1994"
  },
  {
    "code": "1209",
    "title": "19950704_SB9.19.19_BBSR_Mind Occupied by Material Desires",
    "section": "SB1994"
  },
  {
    "code": "1210",
    "title": "19950705_SB9.19.20_BBSR_The Real Mission of Human Life",
    "section": "SB1994"
  },
  {
    "code": "1211",
    "title": "19950709_SF_SB9.19.21-24_BBSR_Liberation from the Bondage of Conditioned Life",
    "section": "SB1994"
  },
  {
    "code": "1212",
    "title": "19950710_SB9.19.25_BBSR_The Stages of Personal Perfection or Svarup Siddhi",
    "section": "SB1994"
  },
  {
    "code": "1213",
    "title": "19950711_SB9.19.26_BBSR_Strong Desire for Enjoyment Means to Eat Stool",
    "section": "SB1994"
  },
  {
    "code": "1214",
    "title": "19950714_SB4.25.14_Soho Street UK_This Body, Mind and Speech is Guru's Property",
    "section": "SB1994"
  },
  {
    "code": "1215",
    "title": "19950720_SB6.1.19_Den Haag_In all Conditions Free from Fear",
    "section": "SB1994"
  },
  {
    "code": "1216",
    "title": "19950724_SB2.8.1_Paris_Meeting with a Sadhu Good Fortune Arieses",
    "section": "SB1994"
  },
  {
    "code": "1217",
    "title": "19950725_SB 1.9.43_Maisons-Alfort, France_Sri Baladeva Tattva",
    "section": "SB1994"
  },
  {
    "code": "1218",
    "title": "19950726_SB1.16.9_DOL de France_A chance to Achieve the Highest Boon of Life",
    "section": "SB1994"
  },
  {
    "code": "1219",
    "title": "19950728_SB7.6.9_Toulouse_An Attached Householder's Ropes of Affection",
    "section": "SB1994"
  },
  {
    "code": "1220",
    "title": "19950731_SB3.5.46_Portugal_Drink Bhagavata Katha Nectar not Liqueer",
    "section": "SB1994"
  },
  {
    "code": "1221",
    "title": "19950801_SB1.3.32_Madrid_Temporary Attachment to a Motel",
    "section": "SB1994"
  },
  {
    "code": "1222",
    "title": "19950802_SB1.3.33_Brihuega_Self Realisation and Material Illusion",
    "section": "SB1994"
  },
  {
    "code": "1223",
    "title": "19950803_SB4.15.1-2_Barcelona(Spain)_Avatara Tattva",
    "section": "SB1994"
  },
  {
    "code": "1224",
    "title": "19950804_SB4.15.3_Barcelona_Separating Laxmi From Narayan",
    "section": "SB1994"
  },
  {
    "code": "1225",
    "title": "19950805_SB6.14.40_Villa Vrndavan_One Must Develop Attachment to Krsna Only",
    "section": "SB1994"
  },
  {
    "code": "1226",
    "title": "19950806_SB6.14.54_Villa Vrndavana_Forgetfulness Jiva's Lamentations",
    "section": "SB1994"
  },
  {
    "code": "1227",
    "title": "19950807_SB6.17.31_Villa Vrndavan_Why Radharani's Parrot was Bramhanandi",
    "section": "SB1994"
  },
  {
    "code": "1228",
    "title": "19950809_SB6.14.56_Villa Vrndavan_Unflinching Faith on Krsna",
    "section": "SB1994"
  },
  {
    "code": "1229",
    "title": "19950820_SF_SB9.19.26_BBSR_Ture Meaning of Mukti or Libaration",
    "section": "SB1994"
  },
  {
    "code": "1230",
    "title": "19950821_SB9.19.27-28_BBSR_ Material Relationship Created by Maya",
    "section": "SB1994"
  },
  {
    "code": "1231",
    "title": "19950822_SB9.19.29_BBSR_Drown Yourself Inundation of Blissfulness",
    "section": "SB1994"
  },
  {
    "code": "1232",
    "title": "19950826_SB9.20.1_BBSR_Developing Test for Hari Katha",
    "section": "SB1994"
  },
  {
    "code": "1233",
    "title": "19950829_SB9.20.2-15_BBSR_Real Husband and Wife Relationship",
    "section": "SB1994"
  },
  {
    "code": "1234",
    "title": "19950830_SB9.20.16_BBSR_Marriage Means to Establish loving Relationship with Krsna",
    "section": "SB1994"
  },
  {
    "code": "1235",
    "title": "19950904_SB9.20.0_BBSR_How Hladini Sakti Became Sati Sita",
    "section": "SB1994"
  },
  {
    "code": "1236",
    "title": "19950905_SB9.20.21_BBSR_Like A Blind Man Put Complete Faith on Krsna",
    "section": "SB1994"
  },
  {
    "code": "1237",
    "title": "19950911_SB6.4.18_New Govardhan_ Make Endeavour How to Develop Krsna Bhakti",
    "section": "SB1994"
  },
  {
    "code": "1238",
    "title": "19950912_SB6.4.24_New Govardhan_Medicine for All Material Ill",
    "section": "SB1994"
  },
  {
    "code": "1239",
    "title": "19950913_SB6.4.25_New Govardhan_Krsna's Beauty and Radha's Love",
    "section": "SB1994"
  },
  {
    "code": "1240",
    "title": "19950914_SB6.4.26_New Govardhan_Purifying One's Contaminated Heart",
    "section": "SB1994"
  },
  {
    "code": "1241",
    "title": "19950916_SB3.25.10_Melbourne_The Cause of Coming Contact with Maya",
    "section": "SB1994"
  },
  {
    "code": "1242",
    "title": "19950917_SB3.25.11_Melbourne_Cutting Off the Material Existence by the Ax of Detachment",
    "section": "SB1994"
  },
  {
    "code": "1243",
    "title": "19950918_SB3.25.12_Melbourne_We have to Confesses Before the Lord",
    "section": "SB1994"
  },
  {
    "code": "1244",
    "title": "19950919_SB9.21.1_New Nanda Gram, Austrelia_Atithi Seva, the Root Activates of Grhasthas",
    "section": "SB1994"
  },
  {
    "code": "1245",
    "title": "19950920_SB9.21.7_New Nanda Gram_Thinking All Welfare of All Living Entity",
    "section": "SB1994"
  },
  {
    "code": "1246",
    "title": "19950921_SB9.21.8_New Nanda Gram_A Conditioned Soul Can't Utter Pure Name",
    "section": "SB1994"
  },
  {
    "code": "1247",
    "title": "19950922_SB8.6.10_Adelaide_Sadhu Dispels Darkness Prevailing in the Heart",
    "section": "SB1994"
  },
  {
    "code": "1248",
    "title": "19950923_SB8.6.12_Adelaide_Fortunate Jiva Comes for Sadhu Sanga",
    "section": "SB1994"
  },
  {
    "code": "1249",
    "title": "19950925_SB8.6.12_Adelaide_Bhakti Tattva Explanation, P-1",
    "section": "SB1994"
  },
  {
    "code": "1250",
    "title": "19950926_SB8.6.12_Adelaide_Bhakti Tattva Explanation, P-3",
    "section": "SB1994"
  },
  {
    "code": "1251",
    "title": "19950927_SB8.6.13_Adelaide_The Glory of Srimai Radharani's Love",
    "section": "SB1994"
  },
  {
    "code": "1252",
    "title": "19950928_SB8.6.14_Adelaide_Srimati Radharani's Love for Krsna is Unlimited",
    "section": "SB1994"
  },
  {
    "code": "1253",
    "title": "19950929_SB4.25.1_Perth_Spiritual Education for the Citizens",
    "section": "SB1994"
  },
  {
    "code": "1254",
    "title": "19950930_SB4.25.2_Perth_Tapasya in Kaliyuga",
    "section": "SB1994"
  },
  {
    "code": "1255",
    "title": "19951005_SB4.9.11_Bali_Only Boon in Rarely Achieved Human Birth",
    "section": "SB1994"
  },
  {
    "code": "1256",
    "title": "19951028_SB9.20.37_BBSR_Ten Vedic Samskaras From Conception to Diksa",
    "section": "SB1994"
  },
  {
    "code": "1257",
    "title": "19951030_SB9.20.38-39_BBSR_A chance to get a Human birth",
    "section": "SB1994"
  },
  {
    "code": "1258",
    "title": "19951031_SB9.21.1-6_BBSR_Nature Of a Mahabhagavata",
    "section": "SB1994"
  },
  {
    "code": "1259",
    "title": "19951101_SB9.21.7_BBSR_Most Important To Know the Adhikara",
    "section": "SB1994"
  },
  {
    "code": "1260",
    "title": "19951126_SB9.21.8-10_BBSR_Soothing Effect in the Affiliate Heart",
    "section": "SB1994"
  },
  {
    "code": "1261",
    "title": "19951127_SB9.21.12_BBSR_Prayer for Unalloyed Devotion",
    "section": "SB1994"
  },
  {
    "code": "1262",
    "title": "19951128_SB9.21.13-16_BBSR_Krsna is Mad for Radha Prema",
    "section": "SB1994"
  },
  {
    "code": "1263",
    "title": "19951129_SB9.21.17_BBSR_Definition of Maya",
    "section": "SB1994"
  },
  {
    "code": "1264",
    "title": "19951230_SB9.21.18_Bhubaneswar_SvarupaSaktiTattva",
    "section": "SB1994"
  },
  {
    "code": "1265",
    "title": "19960104_SB4.1.1_Mauritius_CompleteKrishnaConsciousness",
    "section": "SB1996"
  },
  {
    "code": "1266",
    "title": "19960105_SB4.8.62-64_Mauritius_TheDifferentAdhikaras",
    "section": "SB1996"
  },
  {
    "code": "1267",
    "title": "19960106_SB4.8.65_Mauritius_GeneralNatureOfWomen",
    "section": "SB1996"
  },
  {
    "code": "1268",
    "title": "19960108_SB5.1.37_Durban_KrishnaGivesAChance",
    "section": "SB1996"
  },
  {
    "code": "1269",
    "title": "19960108_SB5.1.37_Durban_UglyWitchMaya",
    "section": "SB1996"
  },
  {
    "code": "1270",
    "title": "19960110_SB4.13.41-44_Johannesburg_AnimalLife&SupremeDharma",
    "section": "SB1996"
  },
  {
    "code": "1271",
    "title": "19960116_SB3.23.55_Nigeria_TheVisionOfLustIsDownwardAndTheVisionOfLoveIsUpward",
    "section": "SB1996"
  },
  {
    "code": "1272",
    "title": "19960118_SB4.24.1_Nigeria_LiquorOfHariKatha&GaudiyaVaishnavaSiddhanta",
    "section": "SB1996"
  },
  {
    "code": "1273",
    "title": "19960121_SB5.1.15_Ghana_84LakhOfBodilyForms",
    "section": "SB1996"
  },
  {
    "code": "1274",
    "title": "19960123_SB3.4.1_Kenya_OnlyByKrishna'sMercyOneCanUnderstandHim",
    "section": "SB1996"
  },
  {
    "code": "1275",
    "title": "19960124_SB3.4.2_Kenya_ALilaIsLikeACycle",
    "section": "SB1996"
  },
  {
    "code": "1276",
    "title": "19960128_SB9.21.19-21_Bhubaneswar_BrahmanaByBehavior",
    "section": "SB1996"
  },
  {
    "code": "1277",
    "title": "19960129_SB9.21.22-25_Bhubaneswar_PracticeWhatYouPreach",
    "section": "SB1996"
  },
  {
    "code": "1278",
    "title": "19960131_SB9.21.26-36_Bhubaneswar_MahaprabhuIsTheAuthorityFromWhomVedaComes",
    "section": "SB1996"
  },
  {
    "code": "1279",
    "title": "19850000_I&MineAndNamabhasaStage",
    "section": "SB1985"
  },
  {
    "code": "1280",
    "title": "19850824_AttainingTheGoalPrema",
    "section": "SB1985"
  },
  {
    "code": "1281",
    "title": "19860717_Darshan_France_RopeOfPrema",
    "section": "Darshan1986"
  },
  {
    "code": "1282",
    "title": "19860718_Darshan_France_ AbsoluteConsideration",
    "section": "Darshan1986"
  },
  {
    "code": "1283",
    "title": "19860718_Darshan_France_Personalism&Impersonalism",
    "section": "Darshan1986"
  },
  {
    "code": "1284",
    "title": "19860719_Darshan_France_ByServingKrsnayouHelpOthers",
    "section": "Darshan1986"
  },
  {
    "code": "1285",
    "title": "19860720_Darshan_France_GuruTattva",
    "section": "Darshan1986"
  },
  {
    "code": "1286",
    "title": "19860724_Darshan_France_Questions&Answers",
    "section": "Darshan1986"
  },
  {
    "code": "1287",
    "title": "19860730_Darshan_SatSisya",
    "section": "Darshan1986"
  },
  {
    "code": "1288",
    "title": "19861127_Darshan_ Bhubaneswar_PastimesOfSrilaPrabhupada",
    "section": "Darshan1986"
  },
  {
    "code": "1289",
    "title": "19890000_Darshan_BBSR_Devotee is more Merciful than the Lord",
    "section": "Darshan1989"
  },
  {
    "code": "1290",
    "title": "19890323_Darsana_BBSR_Spiritual Life is not a Politics",
    "section": "Darshan1989"
  },
  {
    "code": "1291",
    "title": "19890326_Conversations_Bhubaneswar_BhaktiMeansService",
    "section": "Darshan1989"
  },
  {
    "code": "1292",
    "title": "19890400_Bhubaneswar_Contradictions",
    "section": "Darshan1989"
  },
  {
    "code": "1293",
    "title": "19890400_Darshan_Bhubaneswar_ItDependsUponYourSeriousness",
    "section": "Darshan1989"
  },
  {
    "code": "1294",
    "title": "19890400_Darshan_Bhubaneswar_MyGuruMaharajaIsSendingYouToMe",
    "section": "Darshan1989"
  },
  {
    "code": "1295",
    "title": "19890400_Darshan_Bhubaneswar_RarePersonalities",
    "section": "Darshan1989"
  },
  {
    "code": "1296",
    "title": "19890400_Darshan_Bhubaneswar_TheMediator",
    "section": "Darshan1989"
  },
  {
    "code": "1297",
    "title": "19890418_Darshan_Bhubaneswar_DiscussionAfterClass",
    "section": "Darshan1989"
  },
  {
    "code": "1298",
    "title": "19890428_Darshan_BBSR_Guru Tattva Discussion",
    "section": "Darshan1989"
  },
  {
    "code": "1299",
    "title": "19890428_Darshana_BBSR_Srila_Gurudeva_Speaks_about_his_Meeting_with",
    "section": "Darshan1989"
  },
  {
    "code": "1300",
    "title": "19890429_Darshana_BBSR_The Duty of a Disciple",
    "section": "Darshan1989"
  },
  {
    "code": "1301",
    "title": "19890430_Darshan_Bhubaneswar_JivaTattva",
    "section": "Darshan1989"
  },
  {
    "code": "1302",
    "title": "19890431_Darshana_BBSR_How do we Maintain our Enthusiasim",
    "section": "Darshan1989"
  },
  {
    "code": "1303",
    "title": "19890500_Darshan_Bhubaneswar_GuruTeachesAccordingToDisciple",
    "section": "Darshan1989"
  },
  {
    "code": "1304",
    "title": "19890500_Darshan_Bhubaneswar_Husband&WifeAdvice",
    "section": "Darshan1989"
  },
  {
    "code": "1305",
    "title": "19890500_Darshan_Bhubaneswar_JesusChristWasAPureDevotee",
    "section": "Darshan1989"
  },
  {
    "code": "1306",
    "title": "19890500_Darshan_Bhubaneswar_SiksaGurus",
    "section": "Darshan1989"
  },
  {
    "code": "1307",
    "title": "19890500_Darshan_Bhubaneswar_TheSpiritualMasterIsLikeFire",
    "section": "Darshan1989"
  },
  {
    "code": "1308",
    "title": "19890501_Darshana_BBSR_Material_Desires_is_the_Source_of_Doubts",
    "section": "Darshan1989"
  },
  {
    "code": "1309",
    "title": "19890503_Darshan_Bhubaneswar_PurposeOfSannyasa",
    "section": "Darshan1989"
  },
  {
    "code": "1310",
    "title": "19890504_Darshan_Bhubaneswar_TheDifferenceBetweenKamaAndPrema",
    "section": "Darshan1989"
  },
  {
    "code": "1311",
    "title": "19890504_Darshan_Bhubaneswar_TheDutyOfAGrihastha",
    "section": "Darshan1989"
  },
  {
    "code": "1312",
    "title": "19890505-06_Darshan_Bhubaneswar_MostImportantIsGoingBackHomeBackToGodhead",
    "section": "Darshan1989"
  },
  {
    "code": "1313",
    "title": "19890508_Darshana_BBSR_A_Devotee_Spit_at_Material_Sense_Enjoyment",
    "section": "Darshan1989"
  },
  {
    "code": "1314",
    "title": "19890509_Darshana_BBSR_Faith is Most Important Thing",
    "section": "Darshan1989"
  },
  {
    "code": "1315",
    "title": "19890511_Darshana_BBSR_How to Develop Tolerance",
    "section": "Darshan1989"
  },
  {
    "code": "1316",
    "title": "19890512_Darshana_BBSR_Controlling The Wicked Mind",
    "section": "Darshan1989"
  },
  {
    "code": "1317",
    "title": "19890513_Darshana_BBSR_Questions About Gayatri Mantra",
    "section": "Darshan1989"
  },
  {
    "code": "1318",
    "title": "19890515_Darshan_Bhubaneswar_BhogaTyagaTyagaTyaga",
    "section": "Darshan1989"
  },
  {
    "code": "1319",
    "title": "19890516_Darshana_BBSR_Dikhya_Parampara_and_Sikhya_Parampara",
    "section": "Darshan1989"
  },
  {
    "code": "1320",
    "title": "19890519_Darsan_BBSR_ Short Talk After Initiation",
    "section": "Darshan1989"
  },
  {
    "code": "1321",
    "title": "19890520_Darshan_BBSR_SM's Instructions to Disciples",
    "section": "Darshan1989"
  },
  {
    "code": "1322",
    "title": "19890521_Darshan_BBSR_Krsna_Accepts_the_Service_by_the_Sanction",
    "section": "Darshan1989"
  },
  {
    "code": "1323",
    "title": "19890522_Darshana_BBSR_First_Point_is_to_Obey_Order_of_Spiritual",
    "section": "Darshan1989"
  },
  {
    "code": "1324",
    "title": "19890523_Darshan_BBSR_My Only Request to One and All",
    "section": "Darshan1989"
  },
  {
    "code": "1325",
    "title": "19890523_Darshan_BBSR_My Only Request to One and All",
    "section": "Darshan1989"
  },
  {
    "code": "1326",
    "title": "19890528_Darshan_Bhubaneswar_TheSpiritualName",
    "section": "Darshan1989"
  },
  {
    "code": "1327",
    "title": "19890601_Darshan_BBSR_I_Want_to_Help_Them,_Those_Who_Needs_Help",
    "section": "Darshan1989"
  },
  {
    "code": "1328",
    "title": "19890601_PD_BBSR_Cry from your core or your Heart",
    "section": "Darshan1989"
  },
  {
    "code": "1329",
    "title": "19890608_Darshan_Bhubaneswar_BonafideDiscipleShouldPrayToTheLordToGetABonafideGuru",
    "section": "Darshan1989"
  },
  {
    "code": "1330",
    "title": "19890609_Darshana _BBSR_We Have to Practice Tolerance",
    "section": "Darshan1989"
  },
  {
    "code": "1331",
    "title": "19890700_BBSR_Why does Krsna becomes a disciple of Radharani",
    "section": "Darshan1989"
  },
  {
    "code": "1332",
    "title": "19890714_Darshan_Bhubaneswar_TheOnlyWayToPurifyImpuritiesIsByHearing",
    "section": "Darshan1989"
  },
  {
    "code": "1333",
    "title": "19890715_Darshan_BBSR_You_Will_Develop_Test_by_Association_Only",
    "section": "Darshan1989"
  },
  {
    "code": "1334",
    "title": "19890717_Departure_Blessings_BBSR_Spiritual_Strength_Comes_from",
    "section": "Darshan1989"
  },
  {
    "code": "1335",
    "title": "19890824_Darshan_Bhubaneswar_Krishna'sBirthInTattva",
    "section": "Darshan1989"
  },
  {
    "code": "1336",
    "title": "19890900_Darshan_Bhubaneswar_PrincipalSymptomOfAPureDevotee&Women'sDuty",
    "section": "Darshan1989"
  },
  {
    "code": "1337",
    "title": "19890926_Darshan_Bhubaneswar_TheSecretOfBhajan",
    "section": "Darshan1989"
  },
  {
    "code": "1338",
    "title": "19891030_Darshan_Bhubaneswar_RadhaPriyaSakhi\u2019sBusiness",
    "section": "Darshan1989"
  },
  {
    "code": "1339",
    "title": "19891031_Darshan_Bhubaneswar_DutyOfDisciple&DutyOfSpiritualMaster",
    "section": "Darshan1989"
  },
  {
    "code": "1340",
    "title": "19891101_Darshan_Bhubaneswar_ThePrince&TheOldWitch",
    "section": "Darshan1989"
  },
  {
    "code": "1341",
    "title": "19891106_Conversations_Bhubaneswar_PrivateDarshan",
    "section": "Darshan1989"
  },
  {
    "code": "1342",
    "title": "19891114_Darshan_Bhubaneswar_OnlyByAssociationOfBhaktasOneCanDevelopBhakti",
    "section": "Darshan1989"
  },
  {
    "code": "1343",
    "title": "19891115_Darshan_Bhubaneswar_TheSpiritualMasterIsMoreMercifulThanKrishna",
    "section": "Darshan1989"
  },
  {
    "code": "1344",
    "title": "19891117_Darshan_Bhubaneswar_YouCannotGetPremaWithoutGuru",
    "section": "Darshan1989"
  },
  {
    "code": "1345",
    "title": "19891118_Darshan_Bhubaneswar_HaveYouTakenSannyasa\uf025",
    "section": "Darshan1989"
  },
  {
    "code": "1346",
    "title": "19891120_Darshan_Bhubaneswar_DangersProblems&DifficultiesWillHelpYouToBecomeFixed",
    "section": "Darshan1989"
  },
  {
    "code": "1347",
    "title": "19891121_Darshan_Bhubaneswar_GuruWhoGivesPremaWillTakeYouToGolokaVrindavan",
    "section": "Darshan1989"
  },
  {
    "code": "1348",
    "title": "19891122_Darshan_Bhubaneswar_NityaSiddhasKrpaSiddhas&SadhanaSiddhas",
    "section": "Darshan1989"
  },
  {
    "code": "1349",
    "title": "19891123_Darshan_Bhubaneswar_JustServeKrishnaWithoutAnyMotives",
    "section": "Darshan1989"
  },
  {
    "code": "1350",
    "title": "19891124_Darshan_Bhubaneswar_SignificanceOfBhubaneswar&JagannathPastime",
    "section": "Darshan1989"
  },
  {
    "code": "1351",
    "title": "19891126_Darshan_Bhubaneswar_Tolerate&Cooperate",
    "section": "Darshan1989"
  },
  {
    "code": "1352",
    "title": "19891127_Darshan_Bhubaneswar_NaturalDharma&OriginalConsciousness",
    "section": "Darshan1989"
  },
  {
    "code": "1353",
    "title": "19891128_Darshan_Bhubaneswar_Radha-tattva&MoodOfGauranga",
    "section": "Darshan1989"
  },
  {
    "code": "1354",
    "title": "19891129_Darshan_Bhubaneswar_RealVairagya",
    "section": "Darshan1989"
  },
  {
    "code": "1355",
    "title": "19891130_Darshan_Bhubaneswar_YouCannotServeKrishnaWithoutTheAssociationOfDevotees",
    "section": "Darshan1989"
  },
  {
    "code": "1356",
    "title": "19891202_Darshana_BBSR_Name_Incarnation,_Most_Powerful_Effect_in",
    "section": "Darshan1989"
  },
  {
    "code": "1357",
    "title": "19891205_Darshan_Your service should be sanction by Guru_BBSR",
    "section": "Darshan1989"
  },
  {
    "code": "1358",
    "title": "19891206_Darshan_Nirakara and Sakara_BBSR",
    "section": "Darshan1989"
  },
  {
    "code": "1359",
    "title": "19891207_Darshan_Outwardly attach but Inwardly detach_BBSR",
    "section": "Darshan1989"
  },
  {
    "code": "1360",
    "title": "19891210_EDR_Destination of Bhukti kami and Mukti kami_BBSR",
    "section": "Darshan1989"
  },
  {
    "code": "1361",
    "title": "19891214_Darsan_Conciousness is very important thing_BBSR",
    "section": "Darshan1989"
  },
  {
    "code": "1362",
    "title": "19891215_Ev Darsan_Most Unfortunate can't accept_BBSR",
    "section": "Darshan1989"
  },
  {
    "code": "1363",
    "title": "- 19890000 _Evening Dasrsan Mayapur Prompting of Wicked Mind.mp3",
    "section": "Darshan1990"
  },
  {
    "code": "1364",
    "title": "- 19900304 _Darshan Cooroy RoomConversation",
    "section": "Darshan1990"
  },
  {
    "code": "1365",
    "title": "- 19901029 _Darshan Story Telling with Gurukula Children New Govardhan.mp3",
    "section": "Darshan1990"
  },
  {
    "code": "1366",
    "title": "- 19901103 _Evening Darshan Be prepare for Vaisnava krpa and Sadhu krpa Sydney.mp3",
    "section": "Darshan1990"
  },
  {
    "code": "1367",
    "title": "- 19901107 _Evening Darshan An intelegent person never loses any opportunity Melbourn.mp3",
    "section": "Darshan1990"
  },
  {
    "code": "1368",
    "title": "- 19901111 _Darshan The Stage of Sadhana Bhakti Adelaide.mp3",
    "section": "Darshan1990"
  },
  {
    "code": "1369",
    "title": "- 19901119 _SB8.2.5 Simplicity is Most Important Quality+ Darshan BBSR.mp3",
    "section": "Darshan1990"
  },
  {
    "code": "1370",
    "title": "- 19901212 _SB8.3.11 Darshan Allways feel dissatisfaction in Spiritual matter BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1371",
    "title": "- 19910107 _Evening Darsan Hungry to Get Prema and Jiva Tattva BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1372",
    "title": "- 19910108 _Darshan Pure devotee never complain but Pray BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1373",
    "title": "- 19910109 _Darshan Try to Understant everything in Tattva BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1374",
    "title": "- 19910109 _Darshan Kaka Tala Nyaya- Talfruit Crow Logic BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1375",
    "title": "- 19910110 _Evening Darshan BBSR",
    "section": "Darshan1991"
  },
  {
    "code": "1376",
    "title": "- 19910111 _Darshan Mayavadi, Suka Parrot BBSR",
    "section": "Darshan1991"
  },
  {
    "code": "1377",
    "title": "- 19910112 _Evenig Darshan Prompting of Wicked Mind BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1378",
    "title": "- 19910112 _Evenging Darshan-2 Qualify yourself, don't be an escapist BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1379",
    "title": "- 19910114 _Evening Darshan Important Discussions BBSR",
    "section": "Darshan1991"
  },
  {
    "code": "1380",
    "title": "- 19910114 _Evening Darshan-3 Steps of chanting Holy Name BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1381",
    "title": "- 19910114 _Evening Darshan Sadhus 24 hour gives pleasue to Krsna BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1382",
    "title": "- 19910115 _Darshan Krsna attracts with two forms in this Material World BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1383",
    "title": "- 19910121 _Darshan BBSR Remain In Krishna Samsara",
    "section": "Darshan1991"
  },
  {
    "code": "1384",
    "title": "- 19910201 _Darshan BBSR Pure Love Of The Gopis",
    "section": "Darshan1991"
  },
  {
    "code": "1385",
    "title": "- 19910202 _Darshan Mayapur The Expertise Of Maya",
    "section": "Darshan1991"
  },
  {
    "code": "1386",
    "title": "- 19910203 _Darshan BBSR Chant Offenseless Pure Name",
    "section": "Darshan1991"
  },
  {
    "code": "1387",
    "title": "- 19910205 _Darshan BBSR Tattva Acharya Knows Tattva",
    "section": "Darshan1991"
  },
  {
    "code": "1388",
    "title": "- 19910206 _Darshan BBSR From Sraddha To Prema",
    "section": "Darshan1991"
  },
  {
    "code": "1389",
    "title": "- 19910207 _Darshan BBSR Reflection Of The Real World",
    "section": "Darshan1991"
  },
  {
    "code": "1390",
    "title": "- 19910208 _Darshan BBSR Vision To See The Lord",
    "section": "Darshan1991"
  },
  {
    "code": "1391",
    "title": "- 19910209 _Darshan BBSR Supreme Will Of Krishna",
    "section": "Darshan1991"
  },
  {
    "code": "1392",
    "title": "- 19910210 _Darshan BBSR How To Successfully Pass The Test",
    "section": "Darshan1991"
  },
  {
    "code": "1393",
    "title": "- 19910211 _Darshan BBSR Krishna's Arrangement Is Always Good",
    "section": "Darshan1991"
  },
  {
    "code": "1394",
    "title": "- 19910211 _Darshan BBSR Confidential Matter",
    "section": "Darshan1991"
  },
  {
    "code": "1395",
    "title": "- 19910212 _Darshan BBSR Elaboration Of The Different Rasas",
    "section": "Darshan1991"
  },
  {
    "code": "1396",
    "title": "- 19910214 _Darshan BBSR Madana Gopala & Sanatana Goswami",
    "section": "Darshan1991"
  },
  {
    "code": "1397",
    "title": "- 19910214 _Darshan BBSR Yoga Means Training Of The Mind",
    "section": "Darshan1991"
  },
  {
    "code": "1398",
    "title": "- 19910215 _Darshan BBSR Mahaprabhu Teaches How A Vaishnava Should Be",
    "section": "Darshan1991"
  },
  {
    "code": "1399",
    "title": "- 19910216 _Darshan BBSR Where There Is Sadhu There Is Vrajabhumi",
    "section": "Darshan1991"
  },
  {
    "code": "1400",
    "title": "- 19910218 _Darshan BBSR Monkeys Are Very Expert InI mitation",
    "section": "Darshan1991"
  },
  {
    "code": "1401",
    "title": "- 19910219 _Darshan BBSR It Is A Question Of Prema",
    "section": "Darshan1991"
  },
  {
    "code": "1402",
    "title": "- 19910220 _Darshan BBSR In Confidential Matters One Is Always Silent",
    "section": "Darshan1991"
  },
  {
    "code": "1403",
    "title": "- 19910221 _Darshan BBSR First Accept The Bonafide Authority",
    "section": "Darshan1991"
  },
  {
    "code": "1404",
    "title": "- 19910222 _Darshan BBSR Everybody Has Heart Disease",
    "section": "Darshan1991"
  },
  {
    "code": "1405",
    "title": "- 19910223 _Darshan BBSR Srila Gurudeva Chanting",
    "section": "Darshan1991"
  },
  {
    "code": "1406",
    "title": "- 19910223 _Darshan BBSR The Only Benediction",
    "section": "Darshan1991"
  },
  {
    "code": "1407",
    "title": "- 19910224 _Darshan BBSR Pleasing To The Ears And Heart",
    "section": "Darshan1991"
  },
  {
    "code": "1408",
    "title": "- 19910225 _Darshan BBSR Daily Activity",
    "section": "Darshan1991"
  },
  {
    "code": "1409",
    "title": "- 19910226 _Darshan BBSR DhamaTattva",
    "section": "Darshan1991"
  },
  {
    "code": "1410",
    "title": "- 19910228 _Darshan Srila Gurudeva speaks on his Gadeigiri past life Gadeigiri,mp3.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1411",
    "title": "- 19910317 _Darshan Srila Gurudeva Speaks his early days Gadeigiri.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1412",
    "title": "- 19910317 _Darshan AC Guru makes switch up towards Maya BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1413",
    "title": "- 19910320 _Ramnavami Lecture BBSR",
    "section": "Darshan1991"
  },
  {
    "code": "1414",
    "title": "- 19910324 _Darshan Class Why no change after hearing Harikatha a long time New Mayapur.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1415",
    "title": "- 19910802 _Darshan with Gurukul Boys Monkey story BVM, London.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1416",
    "title": "- 19910820 _Darshan About Sravan Kumar, Bharat Maharaj etc London.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1417",
    "title": "- 19910820 _Darshan House Programe London",
    "section": "Darshan1991"
  },
  {
    "code": "1418",
    "title": "- 19910821 _Darshan How to come out from Four Types of Debt London.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1419",
    "title": "- 19910821 _Darshan How Krsna Protects his devotees BVM London.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1420",
    "title": "- 19910827 _ED Sri Guru Tattva discussion BBSR",
    "section": "Darshan1991"
  },
  {
    "code": "1421",
    "title": "- 19910101 _ED The teachings of Madhavendra Puri BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1422",
    "title": "- 19910103 _ED An Untrue disciple makes guru suffer(Very Imp} Mayapur,mp3.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1423",
    "title": "- 19910110 _ED BBSR Darsan with Niketan Babaji(Part-2)",
    "section": "Darshan1991"
  },
  {
    "code": "1424",
    "title": "- 19910115 _ED BBSR Niketana Das Babaji( Part-3)",
    "section": "Darshan1991"
  },
  {
    "code": "1425",
    "title": "- 19910116 _ED Krsna fulfills one's desire in such a way,  he never asks Again BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1426",
    "title": "- 19910120 _ED-2 Harikatha with Niketan Das Babaji BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1427",
    "title": "- 19910120 _ED Ypu can't understand a surrender Soul BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1428",
    "title": "- 19910122 _A real Sadhu sees Krsna everywhere ED BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1429",
    "title": "- 19910123 _ED Unless Krsna Sanction nothing can takes place BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1430",
    "title": "- 19910124 _ED-1 Faithless person Punishes BBSR",
    "section": "Darshan1991"
  },
  {
    "code": "1431",
    "title": "- 19910125 _ED-2 Why a disciple drag his Guru to Hell BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1432",
    "title": "- 19910125 _ED-1 Real Hunger and FALSE Hunger BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1433",
    "title": "- 19910126 _ED-2 Surrounded with many Anarthas BBSR",
    "section": "Darshan1991"
  },
  {
    "code": "1434",
    "title": "- 19910126 _ED Unless you cry Krsna will not listen to you BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1435",
    "title": "- 19910127 _ED The significance of Worship of Radharani BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1436",
    "title": "- 19910128 _ED Compromising with crocodile BBSR",
    "section": "Darshan1991"
  },
  {
    "code": "1437",
    "title": "- 19910129 _ED-2 Association means effective is there BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1438",
    "title": "- 19910129 _ACD SG telling about eating outside other than Prsadam BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1439",
    "title": "- 19910131 _ED By offenceless chanting you could see Krsna autometically BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1440",
    "title": "- 19910131 _ED TRUE identity of Soul is Vaisnava BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1441",
    "title": "- 19910131 _ED SG explains Radharani's separation Mayapur",
    "section": "Darshan1991"
  },
  {
    "code": "1442",
    "title": "- 19910301 _ED Sadhus are ornaments of the Earths Mayapur.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1443",
    "title": "- 19910302 _ED The Guru, a question of acceptance and obedience Mayapur.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1444",
    "title": "- 19910303 _ED The Mercy of Guru is so Powerful,  conversation with Subhoga Maharaj Mayapur.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1445",
    "title": "- 19910304 _ED Nityananda's Mercy is very Powerful Here BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1446",
    "title": "- 19910310 _ED Real Sadhu is the menifestation of Paramatma & SG Japa BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1447",
    "title": "- 19910311 _ED The outcome of Krsna Madhurya BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1448",
    "title": "- 19910311 _ED Tusti, Pusti and Khurna vrti(A talk with Subhag Swami) Mayapur.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1449",
    "title": "- 19910312 _ED-2 The Vision will develop only by mercy of a Sadhu BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1450",
    "title": "- 19910312 _ED Srila Gurudeva speaks his early days in Nayapali BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1451",
    "title": "- 19910313 _ED Give up duplicity and Develop Simplicity BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1452",
    "title": "- 19910313 _ED Deity Worship is atmabat seva not mechanically BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1453",
    "title": "- 19910314 _ED-2 A real saintly person tolerate BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1454",
    "title": "- 19910315 _ED Disciple never drag his Guru to Hell BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1455",
    "title": "- 19910316 _ED-1 Dry the Dreadful Occean BBSR",
    "section": "Darshan1991"
  },
  {
    "code": "1456",
    "title": "- 19910318 _ED-2 Mahaprabhu's principles on Sweet Dealing BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1457",
    "title": "- 19910318 _SB8.4.11-12 & ED No question of Dissapointment if mistake during seva( Mahaprasad glories.end part) BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1458",
    "title": "- 19910318 _ED P-3 Contd from P-2....Become Serious and SP left all his Mercy(SG speaks here) BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1459",
    "title": "- 19910319 _ED The Glories of preparing Mahaprasadam BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1460",
    "title": "- 19910320 _CCAdi7.128 & ED Pranav Omkar explained BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1461",
    "title": "- 19910321 _ED The Mercy of SM is the Mercy of Krsna( Aruni story) BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1462",
    "title": "- 19910321 _ED Where is a Sadhu, there is holy place BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1463",
    "title": "- 19910321 _ACD The barren dull brain must fratail BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1464",
    "title": "- 19910322 _ACD Shiksha Guru, Diksha Guru and Association BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1465",
    "title": "- 19910323 _ACD The Holy Name is Sugar Coated Quinnine BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1466",
    "title": "- 19910325 _ACD Jiva Goswami's Conclusion between Ganga and Jamuna BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1467",
    "title": "- 19910326 _ED Don't lament for Past,now live Active BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1468",
    "title": "- 19910326 _ACD Take care of Yourself, then Socity will take care of itself BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1469",
    "title": "- 19910327 _ACD & ED See good in others and see bad in Yourself BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1470",
    "title": "- 19910328 _ED-2 Srila Gurudeva explaining and chanting Garbhadhana Samskara Mantras BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1471",
    "title": "- 19910328 _ACD & ED Our only concern is Lord Hari, not other things in this World BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1472",
    "title": "- 19910329 _ED A question of unflinching faith BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1473",
    "title": "- 19910330 _EP Shyamananda Prabhu's Appearance Day Katha BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1474",
    "title": "- 19910330 _ACD+ ED The Relation with Spiritual Master is Eternal BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1475",
    "title": "- 19910331 _ED If Guru does not sanction, the service is never accept by Krsna BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1476",
    "title": "- 19910402 _ED Act of Surrender and Grhasthas deity worship BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1477",
    "title": "- 19910403 _ED Pure devotees knows how to quit their body BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1478",
    "title": "- 19910404 _ACD & ED You can't satisfy to all, only Guru Gouranga BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1479",
    "title": "- 19910405 _ACD The unfortunates one do not come to the fold of Maharpabhu BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1480",
    "title": "- 19910418 _SB8.5.35 & ED The Source of everything is Krsna BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1481",
    "title": "- 19910427 _SB8.6.21-22 & ED Duplicity is an incurable disease BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1482",
    "title": "- 19910528 _MD Caught up in the Hunter's net,Spiritual Progress BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1483",
    "title": "- 19910629 _IL Ten Offences and Result of Devotees sinful activities BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1484",
    "title": "- 19910717 _EP Why Krsna granted such Independence to Us Paris.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1485",
    "title": "- 19910726 _SF Fools run after sense gratification Paris.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1486",
    "title": "- 19910728 _ED What Guru say's is only sanction by Krsna France.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1487",
    "title": "- 19910729 _ED-2 Lotus feet of Krsna is the source of all Treasure New Mayapur.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1488",
    "title": "- 19910729 _EP Faithless persons fall down( French Translation) New Mayapur.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1489",
    "title": "- 19910730 _CCAdi8.32 EP Krsna is Bhakta Bhaktiman New Mayapur.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1490",
    "title": "- 19910801 _ED Deserve before Desire, the story of Crow and Carela Paris.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1491",
    "title": "- 19910811 _SF Conditioned soul's forgetting situation Paris",
    "section": "Darshan1991"
  },
  {
    "code": "1492",
    "title": "- 19910811 _EP Atmavat Seva, serve with life and soul Belgium,mp3.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1493",
    "title": "- 19910815 _AA  what should you inquire When you meet  someone London.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1494",
    "title": "- 19910817 _EP Mahaprabhu came to teach us How to get Krsna London.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1495",
    "title": "- 19910822 _EP Glories of Lord Nityananda London",
    "section": "Darshan1991"
  },
  {
    "code": "1496",
    "title": "- 19910823 _EP CCAdi1.45-46 Guru Tattva, Spiritual master is nondifferent from Krsna BVMLondon.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1497",
    "title": "- 19910929 _EP The goal of life is to understand Krsna in Tattva South London.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1498",
    "title": "- 19910929 _ED Room conv. BVM",
    "section": "Darshan1991"
  },
  {
    "code": "1499",
    "title": "- 19910930 _EP You Have to Listen to the Mahajanas London - Copy.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1500",
    "title": "- 19911002 _SF Proper Vison to See God, is a Real Human Tuscon - Copy (2).mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1501",
    "title": "- 19911006 _EP Prema Darpana, the Mirror of Love Los Angeles - Copy (2).mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1502",
    "title": "- 19911012 _SF ED What is the business of Krsna to come here Los Angeles.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1503",
    "title": "- 19911013 _EP If there is tinge of duplicity,Krsna will never helps you San Deago - Copy (2).mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1504",
    "title": "- 19911014 _ED If you have no Love, you can't keep Krsna in your mind San Deago.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1505",
    "title": "- 19911015 _EP Sadhusanga is the only Boon to achive perfection Denver - Copy (2).mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1506",
    "title": "- 19911017 _EP The Confidential Teachings of Bhagavat Gita Dallas - Copy (2).mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1507",
    "title": "- 19911019 _SF Opportunity in the Human Life for cleaning the filthiest Heart Houston - Copy.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1508",
    "title": "- 19911020 _EP Mind is the cause of Libaration and also for Bondage Seatel.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1509",
    "title": "- 19911023 _EP Who is not a Blind Chicago.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1510",
    "title": "- 19911025 _EHP Criminal Mentality, committing such Crime Chicago.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1511",
    "title": "- 19911026 _SF If one can't understant Krsna in Tattva, he will fall down Detroit mp3.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1512",
    "title": "- 19911027 _EP Simplicity leads to strong faith and duplicity leads to faithlessness Lansing,USA.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1513",
    "title": "- 19911028 _EP Beginning is little pleasure but outcome is full of Misery Lansing.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1514",
    "title": "- 19911029 _FA Mind is a bad Master but good Servant Lansing.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1515",
    "title": "- 19911030 _EP Hearing about Krsna in Tattva, Mind will be Blissfull Miami.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1516",
    "title": "- 19911031 _EP Transcending the modes of Nature Alachua,FL,mp3.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1517",
    "title": "- 19911105 _EHP Jiva's Painful situation in the Mother's Womb Alachua,FL.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1518",
    "title": "- 19911106 _EP The Tattva of Bhokta and Bhakta Freeport,NY.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1519",
    "title": "- 19911109 _ACD You can't move when mercy is withdrawn by a bonafide Guru BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1520",
    "title": "- 19911126 _Darshan BBSR Krishna Will Fulfil Your Material Desires In Such A Way That You Will Never Ask Again",
    "section": "Darshan1991"
  },
  {
    "code": "1521",
    "title": "- 19920212 _Darshan BBSR Without Radha's Mercy You Cannot Have Krishna Darshan",
    "section": "Darshan1991"
  },
  {
    "code": "1522",
    "title": "- 19920319 _ED BBSR Private Darshan P-2",
    "section": "Darshan1991"
  },
  {
    "code": "1523",
    "title": "- 19920404 _Private Darshan BBSR Nulifying offeces and Process of Hearing.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1524",
    "title": "- 19920406 _SB2 9 3 Privat Darshan Towaco First become Perfect and make others perfect.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1525",
    "title": "- 19920523 _Darshan San Diego Acaryas are Not Made They are Manifested.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1526",
    "title": "- 19920623 _Darshan France Accepting Guru not a Farce.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1527",
    "title": "- 19920726 _Darshan Class Antonio Surrendering to a Tattvadarshi Guru.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1528",
    "title": "- 19920803 _Darshan and Phone Call Germany Become Hungry for Food for soul.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1529",
    "title": "- 19920812 _Darshan BBSR Private Discussion and Letter Reading etc.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1530",
    "title": "- 19920817 _Darshan New Govardhan Conv between Gurudeva and Lagudi.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1531",
    "title": "- 19920928 _Darshan Class BALI A Sadhu Vaidya's Medicine Balinees Translation.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1532",
    "title": "- 19921012 _Darshan BBSR Revenue Minister K C Lenka meet with Srila Gurudeva.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1533",
    "title": "- 19921119 _Darshan BBSR Associate with Saintly person to Develop Simplicity.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1534",
    "title": "- 19921120 _Darshan BBSR The Tattva Behind Ekalavaya's Discipleship.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1535",
    "title": "- 19921219 _Arrival from Bali Variegated of Three Modes of Material.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1536",
    "title": "- 19920102 _ED Service should be Rendered under a Bonafide Spiritual Master.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1537",
    "title": "- 19920110 _ED What Blessing is for Us BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1538",
    "title": "- 19920117 _ED Only Krsna Bhakta is Happy and Peacefull BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1539",
    "title": "- 19920123 _ED Following Guru's Instruction Strictly BBSR",
    "section": "Darshan1991"
  },
  {
    "code": "1540",
    "title": "- 19920124 _ED Why Lord Rama ran after a illusory Deer BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1541",
    "title": "- 19920127 _ED PII The Highest Blessing of a Sadhu BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1542",
    "title": "- 19920131 _ED BBSR Eating Dillika Laddu",
    "section": "Darshan1991"
  },
  {
    "code": "1543",
    "title": "- 19920201 _ED P1 BBSR Copmpletely depend like a Child.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1544",
    "title": "- 19920209 _ED PII BBSR Speaks about Biswavasu Sabar.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1545",
    "title": "- 19920209 _ED BBSR Callous person can not get help.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1546",
    "title": "- 19920213 _ED Mayapur Our Aim is to get Rice not Husk.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1547",
    "title": "- 19920218 _ED Mayapur When You Understand Tattva, then there is no Difficulty.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1548",
    "title": "- 19920220 _ED Mayapur What is a Mayavada",
    "section": "Darshan1991"
  },
  {
    "code": "1549",
    "title": "- 19920221 _ED Mayapur Krsna never accept any service which is not Approve by Guru.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1550",
    "title": "- 19920222 _ED Mayapur One Must Cry for Sri Krsna.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1551",
    "title": "- 19920223 _ED Mayapur Are you prepare to take Krsna, the crow and bitter millon Story.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1552",
    "title": "- 19920224 _ED with HH Subhog Swami Mayapur Cry Before Krsna, who is Always ready to Help.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1553",
    "title": "- 19920225 _ED with Subhog Swami Mayapur Karpanya, always praying and Crying for Protection.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1554",
    "title": "- 19920226 _ED of Subhog Swami Mayapur How to Serve Krsna Favourably.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1555",
    "title": "- 19920227 _ED of Subhog Swami Mayapur Getting Prema Is not an Easy Affair.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1556",
    "title": "- 19920228 _301 ED Mayapur If Faith is Strong, then You Must Make Development.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1557",
    "title": "- 19920229 _Excerpts From Bhag ClassDarshan Mayapur Don't Bother Your.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1558",
    "title": "- 19920229 _Darshna BBSR Grhasta Questions, Glories of Bhakta and Bhagavatam.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1559",
    "title": "- 19920300 _ED Mayapur Do not see Guru as a mortal being.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1560",
    "title": "- 19920303 _ED Mayapur How to Develop Loving Dealings with the Guru.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1561",
    "title": "- 19920304 _ED Mayapur One Should Understand Everything in Tattva.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1562",
    "title": "- 19920305 _AA BBSR Arrival Speech From Mayapur",
    "section": "Darshan1991"
  },
  {
    "code": "1563",
    "title": "- 19920307 _ED BBSR Gopi's Pure Love Is Kevala Bhakti.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1564",
    "title": "- 19920309 _ED BBSR Only Fortunate Jivas Associates with Sadhus.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1565",
    "title": "- 19920310 _ED BBSR Chanting and Committing Offences like an Elephant bath.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1566",
    "title": "- 19920311 _13 ED BBSR Free Will has been given to You to Surrender Krsna.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1567",
    "title": "- 19920312 _ED BBSR Guru Has Two Facet, one is Manifestation of Nityananda.MP3",
    "section": "Darshan1991"
  },
  {
    "code": "1568",
    "title": "- 19920319 _ED BBSR Hanuman Tattva Rasas in Vaikuntha etc.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1569",
    "title": "- 19920320 _ED BBSR A Simple hearted person has no Doubt.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1570",
    "title": "- 19920321 _Special Class BBSR A Fortunate soul does not forget Krsna, does bhajan.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1571",
    "title": "- 19920321 _Special Class BBSR Speculators can't understand Krsna.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1572",
    "title": "- 19920322 _ED BBSR About Bhuvaneswar Temple and preaching.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1573",
    "title": "- 19920323 _ED BBSR Bhuvaneswar is the Gateway to Jagannath Puri.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1574",
    "title": "- 19920324 _ED Private Darsan BBSR Maya makes difficult in the path of service.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1575",
    "title": "- 19920325 _ED BBSR Put Unflinching Faith on a Bonafide Sadhu.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1576",
    "title": "- 19920328 _ED BBSR Steps of Sadhana Bhakti",
    "section": "Darshan1991"
  },
  {
    "code": "1577",
    "title": "- 19920329 _ED BBSR A Bonafide Guru has two things, Mercy and Cheating.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1578",
    "title": "- 19920331 _ED BBSR Private Darshnan and Kunja Seva Adhikar.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1579",
    "title": "- 19920403 _ED BBSR Talk with Disciples P-1",
    "section": "Darshan1991"
  },
  {
    "code": "1580",
    "title": "- 19920404 _ED BBSR If one accept the stool of a Hog, what would be his condition.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1581",
    "title": "- 19920406 _ED BBSR Sadhana Bhakti leads to Bhava Bhakti.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1582",
    "title": "- 19920407 _10 ED BBSR Simply working for Krsna under the guidence.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1583",
    "title": "- 19920408 _ED & 13 ED BBSR On Various Topics.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1584",
    "title": "- 19920412 _ED BBSR One is rewarded according to his degree of Surrender.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1585",
    "title": "- 19920415 _17 ED BBSR When Guru will ask, must do without any deliibaration.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1586",
    "title": "- 19920416 _ED BBSR A TRUE Disciple",
    "section": "Darshan1991"
  },
  {
    "code": "1587",
    "title": "- 19920418 _23 ED BBSR Accept Guru's order without any Grumbling.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1588",
    "title": "- 19920421 _ED BBSR The Disappointing condition of Bhakti Creeper.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1589",
    "title": "- 19920424 _ED BBSR Pretenders and Kali Chelas",
    "section": "Darshan1991"
  },
  {
    "code": "1590",
    "title": "- 19920425 _ED BBSR Sense gratification means eating Stool.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1591",
    "title": "- 19920426 _30 ED BBSR The Importance of A Sadhu prays to the Lord.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1592",
    "title": "- 19920428 _ED BBSR Suffering Because of Previous Sinful Activites.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1593",
    "title": "- 19920502 _ED BBSR Woman Independence means Disturbances",
    "section": "Darshan1991"
  },
  {
    "code": "1594",
    "title": "- 19920506 _ED BBSR Sadhu Pays his respect in his Mind.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1595",
    "title": "- 19920507 _ED BBSR Independence is used to Surrender.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1596",
    "title": "- 19920508 _ED BBSR Endeavor to Make Dry the Occean Of Maya.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1597",
    "title": "- 19920509 _ED BBSR They Voluntarily accepts the Disturbances.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1598",
    "title": "- 19920510 _ED BBSR Prabhupada's instructions to Gurudeva to become Guru.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1599",
    "title": "- 19920513 _Evening Class Brooklyn Simplicity and Faith is need to become Fully Krishna Conscious.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1600",
    "title": "- 19920520 _ED Brooklyn No Perception with a Defective Vison and Senses.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1601",
    "title": "- 19920521 _SF Towaco The Ultimate Sanction Authority is Daiva.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1602",
    "title": "- 19920524 _ED Potomac The Real Meaning of Surrender.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1603",
    "title": "- 19920525 _EP Gita Nagari Farm Child like Simplicity is Vaisnavisim.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1604",
    "title": "- 19920526 _EP Gita Nagari Farm Sriman Mahaprabhu's Mood at Ratha Yatra.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1605",
    "title": "- 19920527 _EP Gita Nagari Farm The Holy Name Gives Everything.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1606",
    "title": "- 19920528 _ED Philadelphia The Price is Strong Faith to Food for the soul.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1607",
    "title": "- 19920529 _ED Queensland Those who Capture by Maya, their Senses are defective.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1608",
    "title": "- 19920530 _Evening Class New Vrndavana, USA You Must Follow The Mahajanas.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1609",
    "title": "- 19920601 _Evening Class New Vrndavan Stupid Mind takes pleasure in the topics not related to krishna.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1610",
    "title": "- 19920602 _Evening Class TOR,USA By speaking Krsna Katha a Pure Devotee delivers conditioned soul.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1611",
    "title": "- 19920604 _EHP TOR,USA Serving Krsna with No tinge of Personal Desires.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1612",
    "title": "- 19920605 _EHP TOR USA Only a Jivanmukta commits mistakes and fall into maya.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1613",
    "title": "- 19920606 _SF Toronto A Thirsty Person running for water in a Desert.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1614",
    "title": "- 19920607 _EHP Vancouver All Relationships Are Based on Sri Krsna.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1615",
    "title": "- 19920609 _EP Vancouver Complete Dependence on Krsna",
    "section": "Darshan1991"
  },
  {
    "code": "1616",
    "title": "- 19920610 _EHP Vancouver A bewildered soul thinks himself as an Enjoyer.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1617",
    "title": "- 19920611 _EHP Vancouver Krsna Prema is fifth Purusartha, Supreme.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1618",
    "title": "- 19920612 _ED Denvor A Surrender Soul does not know the Dharma Tattva.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1619",
    "title": "- 19920613 _EHP SNJ,USA You have to Survive for Supreme Gain.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1620",
    "title": "- 19920615 _ED Berkeley An owl like person does not get the light of Mercy.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1621",
    "title": "- 19920616 _Evening Class Sanfrancisco The Eye opening Process.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1622",
    "title": "- 19920617 _EHP Northen California Pride is a Great Hinderance.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1623",
    "title": "- 19920618 _Evening Class Los Angeles Cleaning the Filthy Heart Accumulated like the himalayan mountain.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1624",
    "title": "- 19920619 _EHP LA, USA Following Proper Vedic Evidences.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1625",
    "title": "- 19920620 _ED SDG,USA Krsna Prema is the chief result of Chanting the holy name.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1626",
    "title": "- 19920622 _EHP San Diego Admit your defeat and Surrender completely.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1627",
    "title": "- 19920623 _EHP HST, USA A Blind Must be serious to get his Vision Back.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1628",
    "title": "- 19920625 _EP Free Port Who is a Real Disciple.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1629",
    "title": "- 19920626 _AP Queensland Ones Loving Relationship with Krsna.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1630",
    "title": "- 19920627 _AA BBSR Arrival from USA No Question of Disappointment and pessimism in mahaprabhus line.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1631",
    "title": "- 19920630 _BBSR The Mystery behind Gundicha Marjan Lila.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1632",
    "title": "- 19920701 _SP BBSR Meaning of Rathayatra",
    "section": "Darshan1991"
  },
  {
    "code": "1633",
    "title": "- 19920703 _AA England Arrival In UK",
    "section": "Darshan1991"
  },
  {
    "code": "1634",
    "title": "- 19920718 _ED BV Manor Do not Break Vedic Rgulations, follow them Strictly.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1635",
    "title": "- 19920719 _EP BV Manor The Mood to get Causeless Mercy.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1636",
    "title": "- 19920720 _EP YMCA Liverpool The Activities of Illusory Energy is.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1637",
    "title": "- 19920721 _Evening Class BV Manor Offer Your Prayer with an Open Heart.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1638",
    "title": "- 19920723 _Evening Class BV Manor Don't think A Jiva as Krsna.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1639",
    "title": "- 19920724 _London Krsna Knows Your Heart",
    "section": "Darshan1991"
  },
  {
    "code": "1640",
    "title": "- 19920725 _Drshan Class Antonio Mahaprabhu's Pastimes in Puri Spanish.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1641",
    "title": "- 19920802 _EP Antonio Sinful activities means Enjoyment for the Body and senses.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1642",
    "title": "- 19920808 _Heidelberg Lord Balaram's App Day",
    "section": "Darshan1991"
  },
  {
    "code": "1643",
    "title": "- 19920813 _EP Heidelberg Coming Our from a Life of Sleeping Pills.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1644",
    "title": "- 19920814 _EP PAS Understanding Krsna through Taking Shelter of His pure devotees.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1645",
    "title": "- 19920815 _AA London At Any Cost for Pleasure of Krsna.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1646",
    "title": "- 19920817 _Evening Class BVM Surrender is the Life and Soul of a Ture devotee.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1647",
    "title": "- 19920817 _APD HEAirport Conv at Airport",
    "section": "Darshan1991"
  },
  {
    "code": "1648",
    "title": "- 19920818 _AA from Europe Tour BBSR Take up Vow to Give up Material life and accept spiritual life.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1649",
    "title": "- 19920820 _BBSR Reading Srila Gurudeva's Biography in Front of Gurudeva by the writer-Odiya.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1650",
    "title": "- 19920828 _ED BBSR Cry Inside at the Holy Name.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1651",
    "title": "- 19920828 _ED BBSR First Principle is Accept Bonafide Authority.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1652",
    "title": "- 19920829 _IL BBSR Ten Offences to the Holy Name.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1653",
    "title": "- 19920830 _Vyasapuja Lecture BBSR Service to Sri Guru.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1654",
    "title": "- 19920830 _Special Class BBSR Glorification of Srila Haridas Thakura.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1655",
    "title": "- 19920910 _ED BBSR This Temple is the Last and Younger Son of Srila Prabhupada.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1656",
    "title": "- 19920911 _AA BrisbaneAUS Invaluable Assets Freely Distributed",
    "section": "Darshan1991"
  },
  {
    "code": "1657",
    "title": "- 19920925 _EP New Govardhan One Can't become a Devotee unless he Qualifies as a bramhana.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1658",
    "title": "- 19920926 _Welcome Address Brisbane Without Devotion Everything is Inauspicious.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1659",
    "title": "- 19920926 _Sunday Feast Programe New Govardhan Juice Food for the real hunger.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1660",
    "title": "- 19920927 _EP New Govardhan Karpanya : Pitiously Crying",
    "section": "Darshan1991"
  },
  {
    "code": "1661",
    "title": "- 19920928 _EP CES Pure Loving Service towards Krsna.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1662",
    "title": "- 19920929 _ED CES Mahaprabhu Taught Us How to Cry for Krsna.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1663",
    "title": "- 19921001 _EP Cessnock Mahaprabhu's Principle of Loving Dealings.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1664",
    "title": "- 19921003 _AA Adelaide Purpose of getting Human body to Cultivate devotion.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1665",
    "title": "- 19921008 _EP BBSR Disapp of Nama Acarya Srila Hari Das Thakura.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1666",
    "title": "- 19921010 _AA BALI By Pure Love You'll Get Krsna-Balinees Translation.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1667",
    "title": "- 19921019 _FL BBSR Srila Prabhupada's Dissapp. Day Address.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1668",
    "title": "- 19921029 _ED BBSR Our All Activities Must be for Pleasure of Guru and Gouranga.mp3   ...",
    "section": "Darshan1991"
  },
  {
    "code": "1669",
    "title": "- 19921117 _ED BBSR No Forbidden Articles must be offered to Krsna.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1670",
    "title": "- 19921123 _ED BBSR Gurvanugatya Seva",
    "section": "Darshan1991"
  },
  {
    "code": "1671",
    "title": "- 19921125 _ED BBSR Fortunate ones Get the Association of Sadhus.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1672",
    "title": "- 19921202 _ED BBSR A Simple Hearted Devotee Can do the Best Service to guru.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1673",
    "title": "- 19921205 _ED BBSR Because Mistakes are with You, therefore You see.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1674",
    "title": "- 19921207 _ED BBSR Sun is Giving Light Freely, but An Owl Can't See.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1675",
    "title": "- 19921215 _ACD BBSR By Hearing the Pastimes of Gopis from Right Source, your heart disease will be cured.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1676",
    "title": "- 19921217 _ED BBSR Manifestation of Material World is From Tatastha shakti.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1677",
    "title": "- 19921218 _ED BBSR We Follow Universal Dharma by Caitanya Mahaprabhu.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1678",
    "title": "- 19921223 _ED BBSR Srila Gurudeva Speaks about His Early Days in BBSR.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1679",
    "title": "- 19921224 _ED BBSR Krsna is Bhakta Bhaktiman, Bhajan of Raghunath Dasa Goswami.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1680",
    "title": "- 19921225 _ED BBSR Mahaprabhu is Very Much Strict on Violation of Regulative principles.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1681",
    "title": "- 19921228 _ED BBSR Complete Surrender Mean Without Any Condition.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1682",
    "title": "- 19921229 _ED BBSR Prabhupada's Purport Needs to be Further Explained.mp3",
    "section": "Darshan1991"
  },
  {
    "code": "1683",
    "title": "- 19921230 _Darshan BBSR Private Darshan",
    "section": "Darshan1991"
  },
  {
    "code": "1684",
    "title": "- 19930205 _Darshan Mayapur Unless One Associates With A Pure Devotee He Cannot Develop Bhakti",
    "section": "Darshan1993"
  },
  {
    "code": "1685",
    "title": "- 19930217 _Darshan Visit Ekachakra Lord Nityananda App Place.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1686",
    "title": "- 19930222 _Darshans Bhaktividanta Manor Niskapata Seva",
    "section": "Darshan1993"
  },
  {
    "code": "1687",
    "title": "- 19930711 _Darshan BBSR SvarupaSiddhaBhakti",
    "section": "Darshan1993"
  },
  {
    "code": "1688",
    "title": "- 19930712 _Darshan Hethrow Airport- Sign of Dissatisfaction in Spiritual Field is Advancement,mp3.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1689",
    "title": "- 19930716 _Car riding Darshan New Mayapur The Position of a Pure Devotee(Private}.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1690",
    "title": "- 19930720 _Darshan BBSR Don't ask Such Questions",
    "section": "Darshan1993"
  },
  {
    "code": "1691",
    "title": "- 19930819 _Darshan BBSR Evening Walk",
    "section": "Darshan1993"
  },
  {
    "code": "1692",
    "title": "- 19930829 _BBSR Private conv",
    "section": "Darshan1993"
  },
  {
    "code": "1693",
    "title": "- 19931021 _Darshan BBSR Loukika Sradha, Disrespect to any Jivas.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1694",
    "title": "- 19931030 _Darshan BBSR Letter writiings during Padayatra",
    "section": "Darshan1993"
  },
  {
    "code": "1695",
    "title": "- 19931100 _Darshan BBSR A Condition Soul Can't Judge What is Wrong with Him.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1696",
    "title": "- 19931102 _CCAdi13.27 Darshan BBSR Answering Letters",
    "section": "Darshan1993"
  },
  {
    "code": "1697",
    "title": "- 19931118 _Darshan BBSR You are not the Seer, Krsna and Guru are the Seers.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1698",
    "title": "- 19931120 _Darshan BBSR Kalichelas in Garb of Vaisnava.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1699",
    "title": "- 19931125 _Darshan BBSR One Who is Fortunate could see On going Gouranga's Lila.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1700",
    "title": "- 19931225 _Darshan BBSR Our Position is to Follow Kitten Logic not Monkey logic(Early Days in BBSR).mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1701",
    "title": "- 19930130 _SP BBSR Govardhan Puja Katha Kirtan",
    "section": "Darshan1993"
  },
  {
    "code": "1702",
    "title": "- 19931114 _ED BBSR Control Your Mind By Practicing under a Bonafide Guru.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1703",
    "title": "- 19930102 _SB8.21.6-23 P-2 & ED BBSR A Glorious Life of Self Surrender.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1704",
    "title": "- 19930104 _ED BBSR Duplicity is Krsna's Monopoly",
    "section": "Darshan1993"
  },
  {
    "code": "1705",
    "title": "- 19930106 _ED BBSR Why We Can't Cry For Krsna.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1706",
    "title": "- 19930108 _ED BBSR A Pure Devotees Intention and Desire.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1707",
    "title": "- 19930112 _ED BBSR You Can't Cry Unless Your Heart is Soft.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1708",
    "title": "- 19930115 _ED BBSR Kama, Krodha, Lobha etc. Could Utilize in Krsna's Service.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1709",
    "title": "- 19930118 _ED BBSR Jivan Mukta, No More Maya's Entanglement.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1710",
    "title": "- 19930121 _ED Mayapur Don't Misunderstand Me mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1711",
    "title": "- 19930209 _ED Mayapur By Mercy of Guru Ignorance is Dispelled.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1712",
    "title": "- 19930210 _ED Mayapur Hari Kirtan is Like Fire, Burn all the Sinful Acts.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1713",
    "title": "- 19930211 _ED Mayapur One Who Narayana Parayana, See Everything Related to the Lord.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1714",
    "title": "- 19930212 _ED Mayapur Bondage of Pure Love",
    "section": "Darshan1993"
  },
  {
    "code": "1715",
    "title": "- 19930213 _ED Mayapur A Real Devotee of Lord Never Falls down.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1716",
    "title": "- 19930215 _ED Mayapur Crying of the Soul not Body.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1717",
    "title": "- 19930216 _ED Mayapur Sole Purpose of Rarely Achieved Human Form of Life.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1718",
    "title": "- 19930217 _ED Mayapur Crossing Over the Activities of Maya.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1719",
    "title": "- 19930218 _ED Mayapur Completely Submitted to the Will of Krsna.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1720",
    "title": "- 19930220 _AA BBSR Disciple Protects His Guru",
    "section": "Darshan1993"
  },
  {
    "code": "1721",
    "title": "- 19930224 _ED BBSR The Path of Bhakti is Very Easy Who has Simplicity.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1722",
    "title": "- 19930226 _ED BBSR Cheaters and Cheatings Must be Exposed.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1723",
    "title": "- 19930320 _IL BBSR Initiation Lecture(Ram Navami)",
    "section": "Darshan1993"
  },
  {
    "code": "1724",
    "title": "- 19930401 _PhCall, SAF & 93-11-23 LT & 93-11-25 PD & 93-12-29 EP BBSR This not for Public Distrubution JSW25.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1725",
    "title": "- 19930424 _ED-1 Vancouver Mahaprabhu gives Pure Love through Chanting Holy Name.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1726",
    "title": "- 19930512 _ED Vancouver Krsna Katha Cleanse the dirt accumulated in the Heart.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1727",
    "title": "- 19930513 _EHP Vancouver Without Humility there can be No Hari Kirtan.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1728",
    "title": "- 19930514 _ED Vancouver Conditioned Soul Defective Senses can't See.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1729",
    "title": "- 19930515 _AP Vancouver Simplicity is Vaisnavisim",
    "section": "Darshan1993"
  },
  {
    "code": "1730",
    "title": "- 19930516 _EHP EVE, US How to Get Successful from the Test of Maya.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1731",
    "title": "- 19930517 _EP Seattle Prayer to The Lord,  may I not forget him again.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1732",
    "title": "- 19930518 _EP Seattle Surrender to the Lord",
    "section": "Darshan1993"
  },
  {
    "code": "1733",
    "title": "- 19930519 _EP ISQ, Washington Ignorance is the Seed of Suffering.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1734",
    "title": "- 19930520 _EHP Boston Chanting Pure Name Destroys the seed of Sinful Acts.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1735",
    "title": "- 19930521 _EP Hartford Mahaprabhu's Practical Teachings of Surrnder.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1736",
    "title": "- 19930522 _EP Boston Just Take Part in Hari Sankirtan and Feel the Effect.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1737",
    "title": "- 19930523 _EHP WSC, US You can't Bind up Krsna in an Ordinary Rope.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1738",
    "title": "- 19930525 _EP Brooklyn The Real Humanitarian Work",
    "section": "Darshan1993"
  },
  {
    "code": "1739",
    "title": "- 19930526 _EP Philadelphia The Holy Name is the Best Medicine for all Disease.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1740",
    "title": "- 19930527 _ED New Vrndavan Krsna Shows Mercy by crushing one`s Pride.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1741",
    "title": "- 19930528 _ETP New Vrndavan Krsna Prema is the Real Wealth.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1742",
    "title": "- 19930529 _Darsan New Vrndavan About Cow Selling and Nistha.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1743",
    "title": "- 19930530 _EP New Vrndavan Vaishnavas are Super most Holy Place.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1744",
    "title": "- 19930531 _EP Washington Only Relationship with Krsna, No other Relationship.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1745",
    "title": "- 19930602 _EHP Baltimore Unknown Titel(Bad Recording)",
    "section": "Darshan1993"
  },
  {
    "code": "1746",
    "title": "- 19930603 _EHP Washington Put strong faith in Caitanya Mahaprabhu and get Mercy.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1747",
    "title": "- 19930604 _ED Potomac What is Guru Krpa and Krsna Krpa.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1748",
    "title": "- 19930605 _IL Potomac Human Body is a very good Boat or Cross Over.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1749",
    "title": "- 19930605 _IL Potomac Ten Offences",
    "section": "Darshan1993"
  },
  {
    "code": "1750",
    "title": "- 19930605 _Covers while driving from Orlando to Alachua.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1751",
    "title": "- 19930607 _EHP Alachua Keep Krsna in your Platform of Love.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1752",
    "title": "- 19930608 _EP Alachua Goura Lila is More Merciful that Krsna Lila.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1753",
    "title": "- 19930610 _SP BBSR Gundica Marjana Pastime",
    "section": "Darshan1993"
  },
  {
    "code": "1754",
    "title": "- 19930621 _SP BBSR Meaning of Rathayatra",
    "section": "Darshan1993"
  },
  {
    "code": "1755",
    "title": "- 19930622 _ED BBSR Why there is Aspiration for Material Enjoyment but not for Krsna.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1756",
    "title": "- 19930704 _ED BBSR Strong Faith towards Krsna, Sandhu and Sastra.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1757",
    "title": "- 19930705 _AA Bhaktividanta Manor Sadhu Sanga, Imbibe the Mood of Sadhu.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1758",
    "title": "- 19930711 _ED Birmingham Reaction of Karma As you show, so shall you reap.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1759",
    "title": "- 19930713 _EHP London Loving Relationship Between Bhakta and Bhagavan.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1760",
    "title": "- 19930714 _EP & ACD New Mayapur one Who Knows Tattva, this would be his Last Life(French Translation).mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1761",
    "title": "- 19930717 _IL France Ten Offences(French Translation)",
    "section": "Darshan1993"
  },
  {
    "code": "1762",
    "title": "- 19930718 _ED Paris Mahaprabhu Appears to Distribute Krsna Prema Freely(French Translation).mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1763",
    "title": "- 19930720 _ED BBSR Faith Must be Strong and Unflinching.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1764",
    "title": "- 19930910 _EP New Govardhan Krsna Crushed Arjuna's Pride.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1765",
    "title": "- 19931006 _EP New Govardhan Internal and External Symptoms of Prema.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1766",
    "title": "- 19931007 _AA Adelaide Don't try to Enjoy the Sevya Vastu.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1767",
    "title": "- 19931011 _EP Adelaide Mahaprabhu's Mercy to Mayavadis",
    "section": "Darshan1993"
  },
  {
    "code": "1768",
    "title": "- 19931014 _EP Perth Krsna Accepts Service Sanction by a Pure Devotee.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1769",
    "title": "- 19931016 _AA Bali Material World, Every Step is Danger.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1770",
    "title": "- 19931019 _EP Bali Caitanya Mahaprabhu's Gift in this Special Kali Yuga.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1771",
    "title": "- 19931021 _AA BBSR Disciples who wants to Please me Don't do Such Things.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1772",
    "title": "- 19931023 _ED BBSR Completely Depend on The Supreme Will of Krsna.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1773",
    "title": "- 19931101 _ED BBSR Guru is Judged through his Disciples.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1774",
    "title": "- 19931105 _ED BBSR Krsna Wants Pure Love From You.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1775",
    "title": "- 19931108 _ED ACD The Glories and Mercy of Sri Radha Kunda.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1776",
    "title": "- 19931110 _Letter Answer Padayatra If you Love Krsna, you can Love All.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1777",
    "title": "- 19931200 _ED BBSR Namabhas Stage and Pleasing Guru.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1778",
    "title": "- 19931213 _ED & Answering Letter BBSR Surrender without Duplicity.mp3",
    "section": "Darshan1993"
  },
  {
    "code": "1779",
    "title": "- 19931230 _Darshan BBSR & 94-11-12 LT PDY",
    "section": "Darshan1993"
  },
  {
    "code": "1780",
    "title": "- 19940112 _Darshan Mumbai & 96-01-04 Darshan at Mauritius.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1781",
    "title": "- 19940112 _Darshan Mauritius Don't go Outside of Iskcon Society.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1782",
    "title": "- 19940114 _SB3 31 43 Johannesburg The Most Fortunate Jiva's Guru Darshan.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1783",
    "title": "- 19940121 _Darshan Class Juhu Temple Atma Nikhepa Surrender to Krsna.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1784",
    "title": "- 19940130 _Darshan BBSR SP Centennial Interview",
    "section": "Darshan1994"
  },
  {
    "code": "1785",
    "title": "- 19940206 _Short Darshan BBSR Creeper of Love",
    "section": "Darshan1994"
  },
  {
    "code": "1786",
    "title": "- 19940508 _Darshan Eugune QA About Sat Guru and Sat Sisya.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1787",
    "title": "- 19940602 _Private Darshan BBSR",
    "section": "Darshan1994"
  },
  {
    "code": "1788",
    "title": "- 19940810 _Airport Darshan Barcelona Reform Yourself Society will reform itself.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1789",
    "title": "- 19940822 _Airport Darshan London For a Sadhu, only one Attachment to Krishna.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1790",
    "title": "- 19940823 _Darshan London Tattva Topics",
    "section": "Darshan1994"
  },
  {
    "code": "1791",
    "title": "- 19940823 _AA & Darshan BBSR The Mood of a Devotee.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1792",
    "title": "- 19940824 _Evening Darshan Melbourne Praying to Nityananda without Duplicity.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1793",
    "title": "- 19940927 _Airport Darshan London Acting Like a Snake.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1794",
    "title": "- 17819940823 _PhoneCalls BBSR Our Asset",
    "section": "Darshan1994"
  },
  {
    "code": "1795",
    "title": "- 19940130 _VariousLectures Ghana The Supreme Perfection Of Human Birth",
    "section": "Darshan1994"
  },
  {
    "code": "1796",
    "title": "- 19940120 _AA Durban Caitanya Mahaprabhu's Teachings of Love and Surrender.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1797",
    "title": "- 19940118 _EP Public Class Durban Understanding This Rarely Achieved.Human form of life.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1798",
    "title": "- 19940119 _EP Johannesburg Start Your Bhajan Under Guidance of a Nam Tattvit Guru.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1799",
    "title": "- 19940120 _PD SAF Very short Personal Darshnan",
    "section": "Darshan1994"
  },
  {
    "code": "1800",
    "title": "- 19940120 _EP Johannesburg Why Stupid Mind is not Thinking about Krsna.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1801",
    "title": "- 19940121 _ED Nairobi Follow the Instrutctions of Your Guru.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1802",
    "title": "- 19940122 _EP Hindu Council of Kenya Dina Doyal Bhavan- Message of Lord Krishna to get Peace and Bliss.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1803",
    "title": "- 19940122 _EP Nairobi Last Snare of Illusion",
    "section": "Darshan1994"
  },
  {
    "code": "1804",
    "title": "- 19940123 _EP Kisumu You Have given Opportunity only in the Human.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1805",
    "title": "- 19940124 _EP Mombasa A Fortunate is one who has seen Krsna Once in His Human life.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1806",
    "title": "- 19940125 _ED BBSR Private Darsan Jayanta Krd",
    "section": "Darshan1994"
  },
  {
    "code": "1807",
    "title": "- 19940202 _ED BBSR You are not Catching Up Guru's Mercy.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1808",
    "title": "- 19940204 _ACD & 19940221 DR BBSR  No More Kali After 1996 Prophecy.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1809",
    "title": "- 19940214 _ED BBSR There is No Fault in  Mahaprabhu's Process but with you.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1810",
    "title": "- 19940218 _ED & 94-02-21 ED BBSR What Guru Gives.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1811",
    "title": "- 19940219 _ED Mayapur This Platform is Very Very Dangerous.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1812",
    "title": "- 19940228 _ED Mayapur One can't Develop Taste in Bhajan, Because of Fickleness .mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1813",
    "title": "- 19940302 _DR Mayapur Visiting Mamgachi, Nabadwip and Katha Kirtan.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1814",
    "title": "- 19940314 _Arrival from Mayapur BBSR All of You Must Help Me.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1815",
    "title": "- 19940315 _ED & 19940324 ED BBSR You Must Confirm with Sadhu and Shastra.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1816",
    "title": "- 19940317 _ED BBSR That Which is not Krsna Kirtan, that is Maya Kirtan.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1817",
    "title": "- 19940319 _ED BBSR Relationship Between Guru and Paramatma.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1818",
    "title": "- 19940322 _ED BBSR Suffering of Guru and Krsna's Warning.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1819",
    "title": "- 19940323 _ED BBSR Acting Whimsically will check your advancement.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1820",
    "title": "- 19940326 _ED BBSR Only Pure Love For Krsna.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1821",
    "title": "- 19940328 _ED BBSR Explanation of Five Types of Rasas, Mellows.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1822",
    "title": "- 19940330 _ED BBSR Caitanya's Abode in Spiritual World.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1823",
    "title": "- 19940331 _ED BBSR Mahaprabhu's Teachings of Humbleness",
    "section": "Darshan1994"
  },
  {
    "code": "1824",
    "title": "- 19940404 _ED BBSR Mind and Senses are Like Poisonous Snake.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1825",
    "title": "- 19940407 _ED BBSR Who is not a Sad Guru, is a Vessel of Stone.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1826",
    "title": "- 19940411 _ED BBSR Only Prayer For Association of Devotees.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1827",
    "title": "- 19940413 _ED BBSR Guru Knows What Level of Consciousness You have.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1828",
    "title": "- 19940418 _ED BBSR If You Don't Understand Tattva, then All Speculation.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1829",
    "title": "- 19940419 _PC BBSR Phone Call Between SG and GokulDas.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1830",
    "title": "- 19940419 _IL BBSR Nama Aparadha Before Initiation",
    "section": "Darshan1994"
  },
  {
    "code": "1831",
    "title": "- 19940420 _ED BBSR Only Means to Develop Bhakti.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1832",
    "title": "- 19940422 _ED BBSR Don't Take Food in the Hotel.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1833",
    "title": "- 19940424 _ED BBSR Hypocrite Cat Vaisnava",
    "section": "Darshan1994"
  },
  {
    "code": "1834",
    "title": "- 19940501 _ED BBSR Don't Imitate Follow the Instruction.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1835",
    "title": "- 19940502 _ED BBSR Train Your Stupid Mind",
    "section": "Darshan1994"
  },
  {
    "code": "1836",
    "title": "- 19940504 _ED BBSR Give Training To the Mind.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1837",
    "title": "- 19940505 _ED BBSR Krsna Conscious is the Only Solution.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1838",
    "title": "- 19940505 _ED BBSR Guru is Swarup Sakti Pusta Parikara.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1839",
    "title": "- 19940506 _ED BBSR Unflinching Faith on Words of Sadhu, Guru, Sastra.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1840",
    "title": "- 19940508 _ED BBSR Material Intelligence is Impure Intelligence.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1841",
    "title": "- 19940509 _ED BBSR Anything is Material No Complete, Only Deficity.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1842",
    "title": "- 19940510 _ED BBSR Gopi's Intense Separation from Krsna.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1843",
    "title": "- 19940511 _ED & 19940514 ED BBSR Srila Gurudeva Speaks about Early Days in Bhubaneswar.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1844",
    "title": "- 19940512 _ED BBSR I Got this Boon, Go Out and Preach.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1845",
    "title": "- 19940513 _ED BBSR Only A Liberate Could Hear Paramatma's Prompting.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1846",
    "title": "- 19940514 _ED BBSR Characteristics of Madanakhya Mahabhava",
    "section": "Darshan1994"
  },
  {
    "code": "1847",
    "title": "- 19940516 _ED BBSR The Form of Lord Jagannath Story.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1848",
    "title": "- 19940517 _ED BBSR Yogamaya's Arrangemnt & Krsna's Fever.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1849",
    "title": "- 19940518 _ED BBSR Blind Uncle is Better than No Uncle.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1850",
    "title": "- 19940519 _ED BBSR Real Sadhu is like a Lotus in the Water.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1851",
    "title": "- 19940520 _ED BBSR Give up Your Very Critical Attitude, Be Simple.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1852",
    "title": "- 19940521 _ED BBSR A Vaisnava Has Power of Tolerance.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1853",
    "title": "- 19940523 _ED BBSR Srila Gurudeva Speaks Different Types and Process.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1854",
    "title": "- 19940525 _Arrival at USA San Francisco Why Sri Guru's Feet is Compared to a Lotus.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1855",
    "title": "- 19940531 _EHP San Francisco Guru Tattva and Anartha Nivrti.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1856",
    "title": "- 19940531 _EP Port Royal No Reactions of Karma Under Guidance of Sadhu.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1857",
    "title": "- 19940601 _EHP Eugune Keeping Krsna in the platform of Love.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1858",
    "title": "- 19940602 _EP San Francisco Why Mahaprabhu Stayed in Jagannatha Puri.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1859",
    "title": "- 19940603 _Arrival Address Los Angeles Kusal Prasana, Auspicious Inquiry.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1860",
    "title": "- 19940606 _ED Los Angeles Prasangarupa Seva",
    "section": "Darshan1994"
  },
  {
    "code": "1861",
    "title": "- 19940607 _EP Los Angeles Mahaprabhu's  Magnanimous lila.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1862",
    "title": "- 19940607 _EP Los Angeles Mahaprabhu's Teachings are Practical.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1863",
    "title": "- 19940608 _EP Encinitas(US) Uddhava Got Divine Lesson in Vraj.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1864",
    "title": "- 19940610 _EP Tucson Strong and unflinching faith on Krnsa's Protection.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1865",
    "title": "- 19940614 _AA New Talavana(US) Ceasing Giving Taking Business.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1866",
    "title": "- 19940615 _EP New Talavan Humility is Needed to Understand Mahaprabhu's.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1867",
    "title": "- 19940616 _EP New Talavan Guru's Order Must be Accepted As It Is.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1868",
    "title": "- 19940617 _ED BBSR Just Carry out the Order As it Is.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1869",
    "title": "- 19940109 _AA Mauritius Become Simple Like a Child and Allow Mercy to shower upon you.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1870",
    "title": "- 19940114 _ED Brooklyn Private Talk",
    "section": "Darshan1994"
  },
  {
    "code": "1871",
    "title": "- 19940622 _EP Brooklyn The Result of Relying upon Defective Senses.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1872",
    "title": "- 19940622 _EP Hartford Krsna Became a Sanyasi in Vraj.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1873",
    "title": "- 19940622 _EP Towaco NJ Three Logs of Wood Snana Yatra Lecture.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1874",
    "title": "- 19940623 _EP Queens,US Glories of Hearing Srimad Bhagavatam.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1875",
    "title": "- 19940624 _EP Long Island Glories of Bhagavatam Gokarna and Dhudhukari.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1876",
    "title": "- 19940625 _IL Brooklyn Ten Offences to Holy Name.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1877",
    "title": "- 19940625 _EP Los Angeles Krsna's Yatra from Dwaraka to Vrndavan.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1878",
    "title": "- 19940627 _& 707 Letter Reply",
    "section": "Darshan1994"
  },
  {
    "code": "1879",
    "title": "- 19940704 _SP BBSR Gundica Marjana Pastimes Of Mahaprabhu.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1880",
    "title": "- 19940709 _ACD & Letter Answer Stupid mind drag you into Hell .mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1881",
    "title": "- 19940715 _ACD & Letter Reply BBSR Only One Aspiration to Serve Krsna.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1882",
    "title": "- 19940719 _ACD & Letter Reply BBSR Krsna's Will is Supreme Will.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1883",
    "title": "- 19940720 _ACD BBSR Qualification of a Guru & Travel Itinerary .mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1884",
    "title": "- 19940721 _AA Radha Desh Hearing Krsna Katha the Soul's Food.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1885",
    "title": "- 19940729 _EP Radha Desh Krsna Incarnates as His Holy Name in Kali Yuga.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1886",
    "title": "- 19940730 _EP Radha Desh Curing Heart Disease By Hearing From A Premi Bhakta.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1887",
    "title": "- 19940731 _EP Antonio Italy One Life Must Go Back to Godhead in This Very Birth.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1888",
    "title": "- 19940801 _EP Birmingham Getting Robbed From Family & Friends.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1889",
    "title": "- 19940807 _EP Madrid Reciprocation Between Bhakta and Bhagavan.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1890",
    "title": "- 19940819 _AA & EP Barcelona Mahaprabhu's Mercy to Sarvabhauma and Amogha.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1891",
    "title": "- 19940820 _EP Barcelona The Glories of Baladeva Tattva.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1892",
    "title": "- 19940821 _SF Melbourn Developing Love towards Krsna",
    "section": "Darshan1994"
  },
  {
    "code": "1893",
    "title": "- 19940925 _AA Adelaide Bhajan Kushal, This is only Inquiry.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1894",
    "title": "- 19940929 _DR Adelaide Mahaprabhu Teaches Crying for Krsna.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1895",
    "title": "- 19940930 _SF Adelaide Soul Needs Atmosphere of Lord Hari.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1896",
    "title": "- 19941002 _EP Adelaide Mahaprabhu's Dealings are very Pleasing.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1897",
    "title": "- 19941003 _AA Perth The Glories of Mahaprabhu's Teachings of Simplicity.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1898",
    "title": "- 19941005 _EP Perth Most Magnanimous Pastimes of Caitanya Mahaprabhu.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1899",
    "title": "- 19941007 _AA New Goverdhan Understanding the Purport of this KC Society.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1900",
    "title": "- 19941008 _SF New Goverdhan Whom To Say An Intelligent.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1901",
    "title": "- 19941011 _EP Bali Don't Rely on your Stupid Mind.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1902",
    "title": "- 19941013 _EP Bali Krsna Returning Vrndavan",
    "section": "Darshan1994"
  },
  {
    "code": "1903",
    "title": "- 19941014 _EP Bali Gour Nitai's Merciful Incarnation",
    "section": "Darshan1994"
  },
  {
    "code": "1904",
    "title": "- 19941015 _BBSR SG Speakes Own Nectarean Pastimes",
    "section": "Darshan1994"
  },
  {
    "code": "1905",
    "title": "- 19941103 _AA BBSR Putting Full Faith on Nama Bramha and Vaisnava.mp3",
    "section": "Darshan1994"
  },
  {
    "code": "1906",
    "title": "- 19941221 _Darshan BBSR One Never Falls Down From Spiritual World",
    "section": "Darshan1994"
  },
  {
    "code": "1907",
    "title": "- 19950000 _Darshan Mauritius Unless One Develops Krishna Prema He Cannot Completely Surrender",
    "section": "Darshan1995"
  },
  {
    "code": "1908",
    "title": "- 19950105 _Darshan Durban Be Determined Then You Will Get Strength",
    "section": "Darshan1995"
  },
  {
    "code": "1909",
    "title": "- 19950108 _Darshan Durban Be Greedy For Sadhu Sanga",
    "section": "Darshan1995"
  },
  {
    "code": "1910",
    "title": "- 19950109 _Darshan UnknownLocation Evening Darshan",
    "section": "Darshan1995"
  },
  {
    "code": "1911",
    "title": "- 19950113 _Darshan BBSR Srila Gurudeva Answering Letters",
    "section": "Darshan1995"
  },
  {
    "code": "1912",
    "title": "- 19950200 _Darshan BBSR Evening Darshan",
    "section": "Darshan1995"
  },
  {
    "code": "1913",
    "title": "- 19950213 _Darshan Mayapur Gauri Das Pandit",
    "section": "Darshan1995"
  },
  {
    "code": "1914",
    "title": "- 19950220 _Darshan Mayapur Vani And Proper Pipes",
    "section": "Darshan1995"
  },
  {
    "code": "1915",
    "title": "- 19950300 _Darshan Mayapur Sadhu's Heart",
    "section": "Darshan1995"
  },
  {
    "code": "1916",
    "title": "- 19950302 _Darshan BBSR Develop Proper Adhikara",
    "section": "Darshan1995"
  },
  {
    "code": "1917",
    "title": "- 19950320 _Darshan BBSR How To Avoid The Cheating Of Guru",
    "section": "Darshan1995"
  },
  {
    "code": "1918",
    "title": "- 19950324 _Private Darshan Los AngelesSrila Gurudeva Speaks Past BBSR Story.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1919",
    "title": "- 19950518 _Private Darshan New Vrndavan Caitya Guru Assumes a Body to Teach.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1920",
    "title": "- 19950528 _Private Darshan Amherst Business for Krsna",
    "section": "Darshan1995"
  },
  {
    "code": "1921",
    "title": "- 19950603 _Darshan Heathrow Airport Separation from Guru is so much Painful.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1922",
    "title": "- 19950815 _Darshan SG Japa, Conv on Cooking etc Adelaide.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1923",
    "title": "- 19950924 _Darshan Adelaide We are Giving Training on KC.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1924",
    "title": "- 19950928 _ED BBSR About Puri Dham",
    "section": "Darshan1995"
  },
  {
    "code": "1925",
    "title": "- 19950407 _HP Gadeigiri In the Mother's Womb Jiva Offers Prayer(P-2).mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1926",
    "title": "- 19950413 _HP Gadeigiri In the Mother's Womb Jiva Offers Prayer.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1927",
    "title": "- 19950413 _ED BBSR Mentality of a Materialist Person.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1928",
    "title": "- 19950418 _ED BBSR Arrdha Kukuti Nyaya-Half Chicken Logic.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1929",
    "title": "- 19950422 _EP Gadeigiri Conditioned Soul Dragged by Stupid Mind.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1930",
    "title": "- 19950513 _EP Singapore Guru Sevi, Guru Bhogi and Guru Tyagi.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1931",
    "title": "- 19950517 _EP Los Angeles Fulfilling Material Desire-No End.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1932",
    "title": "- 19950518 _EP Los Angeles An intelligent and Wise Develop Love for Krsna.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1933",
    "title": "- 19950519 _EP Los Angeles Beautiful Kirtan and Hari Katha(Half).mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1934",
    "title": "- 19950519 _EP Los Angeles The Way Krsna Destroys Sinful Reactions.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1935",
    "title": "- 19950520 _EP Los Angeles Why Stupid Mind think Suta Mita and Ramani.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1936",
    "title": "- 19950521 _EP San Diego Be Simple as Child and Get Mercy from Mahaprabhu.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1937",
    "title": "- 19950522 _EP Encinitas The Most Invaluable Supreme Treasure.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1938",
    "title": "- 19950523 _EP San Diego Krsna Makes you Greater than Him.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1939",
    "title": "- 19950524 _ED San Diego Guru is Embodiment of Krsna's Mercy.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1940",
    "title": "- 19950525 _EP Tucson Become a Devotee of Krsna's Devotee.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1941",
    "title": "- 19950526 _EP New Vrndavan Who Renders Service Without Duplicity gets Mercy.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1942",
    "title": "- 19950528 _ED New Vrndavan Who Can Understand Such Tattva.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1943",
    "title": "- 19950529 _EP New Vrndavan The Story of Nava Vrndavan Sangama.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1944",
    "title": "- 19950529 _ACD Amherst My Preaching to the Preachers.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1945",
    "title": "- 19950531 _EP Amherst A Wise Must Give up FALSE Attachment.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1946",
    "title": "- 19950531 _EP Amherst Real Education Makes one Humble.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1947",
    "title": "- 19950601 _EP Amherst Guru Means Unconditional Surrender",
    "section": "Darshan1995"
  },
  {
    "code": "1948",
    "title": "- 19950602 _EP Amherst The Only Goal of Life.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1949",
    "title": "- 19950603 _ACD Towaco Testing Nectar in the Holy Name.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1950",
    "title": "- 19950605 _EP Towaco The Glories of Mahamantra in Kali Yuga.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1951",
    "title": "- 19950605 _ED Towaco Unfailing Medicine of Mahaprabhu",
    "section": "Darshan1995"
  },
  {
    "code": "1952",
    "title": "- 19950606 _EP Towaco Maya's Prison House",
    "section": "Darshan1995"
  },
  {
    "code": "1953",
    "title": "- 19950606 _EP Towaco Krsna's Teaching How to get Krsna.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1954",
    "title": "- 19950607 _EP Towaco Glorification of Baladeva Vidyabhushanpada",
    "section": "Darshan1995"
  },
  {
    "code": "1955",
    "title": "- 19950608 _EHP Towac Conditioned Soul Hears the Prompting of Maya.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1956",
    "title": "- 19950609 _SF Potomac Don't Develop Pride but Trnadapi Bhava.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1957",
    "title": "- 19950611 _EHP Potomac Glories of Raghunath Dasa Goswami.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1958",
    "title": "- 19950612 _EHP Potomac Glories of Lord Jagannath's Snana Yatra.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1959",
    "title": "- 19950613 _MHP Potomac Lord Jagannath's Divine Appearance and Form.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1960",
    "title": "- 19950613 _EP Trinidad Taking Shelter of Holy Name No more Duty.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1961",
    "title": "- 19950615 _EP Trinidad The Process of Getting Proper Vision.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1962",
    "title": "- 19950616 _EP Guyana No Development of Crookedness",
    "section": "Darshan1995"
  },
  {
    "code": "1963",
    "title": "- 19950619 _EP Guyana Giving up Pride and Crookedness.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1964",
    "title": "- 19950620 _EP Miami Teachings to the Stubborn Mind.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1965",
    "title": "- 19950623 _EP LA Hotel Friendship Based on Giving and Taking Business.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1966",
    "title": "- 19950625 _AA Bhaktvedanta Manor Cat Vaisnavas and Crane Devotees in Kali Yuga.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1967",
    "title": "- 19950712 _EP BVM Loosing Real Invaluable Assets",
    "section": "Darshan1995"
  },
  {
    "code": "1968",
    "title": "- 19950713 _EP Romford UK A Real Sadhu is Very Rare.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1969",
    "title": "- 19950714 _EP Bhaktividanata Manor Krsna is in Bondage.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1970",
    "title": "- 19950715 _EP Birmingham Amogha Ausadhi Unfailing Medicine",
    "section": "Darshan1995"
  },
  {
    "code": "1971",
    "title": "- 19950716 _EP Coventry UK Krsna Becomes a Beggar for Radha Prema.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1972",
    "title": "- 19950717 _EP Wales UK Krsna Never thinks ill of Anybody.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1973",
    "title": "- 19950718 _EP Rotterdam Krsna Exposes Pseudo Sadhus",
    "section": "Darshan1995"
  },
  {
    "code": "1974",
    "title": "- 19950720 _AP Rotterdam Glories of Hearing Srimad Bhagavatam.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1975",
    "title": "- 19950721 _EP Nieuwegein Cleaning Dirt Accumulate in the Heart.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1976",
    "title": "- 19950721 _AA Paris Firm Faith on to the Unfailing Medicine.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1977",
    "title": "- 19950722 _EP Paris Develop Only Greed for Sadhu Sanga.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1978",
    "title": "- 19950724 _EP DOL de France Mahaprabhu's Practical Teachings of Humbleness.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1979",
    "title": "- 19950725 _IL Toulouse Ten Offences to the Holy Name.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1980",
    "title": "- 19950728 _EHP France Crossing the Material World(Hindi)",
    "section": "Darshan1995"
  },
  {
    "code": "1981",
    "title": "- 19950729 _EP Portugal Utter the Name of Krsna and Cry.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1982",
    "title": "- 19950730 _EP Brihuega (Spain) Strong Flow of Desire for Material Enjoyment.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1983",
    "title": "- 19950801 _EP Barcelona Woman Association is like Worms in Stool.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1984",
    "title": "- 19950803 _AA Villa Vrndavan Highest thing for People of KaliYuga.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1985",
    "title": "- 19950804 _EP Villa Vrndavan Real Gift to Prabhupada on his Centennial.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1986",
    "title": "- 19950805 _SF Villa Vrdavan Human Birth is Meant for Seeing Krsna Everywhere.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1987",
    "title": "- 19950806 _EP Villa Vrndavan Without Love How Can you Do Hari Bhajan.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1988",
    "title": "- 19950807 _EP Villa Vrndavan Dissap Day of Srila Rupa Goswami P-2.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1989",
    "title": "- 19950808 _EP Villa Vrndavan Transferring Attachment to Krsna's Lotus Feet.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1990",
    "title": "- 19950809 _EP Budapest History of Ratha Yatra",
    "section": "Darshan1995"
  },
  {
    "code": "1991",
    "title": "- 19950811 _SF Budapest Take the Opportunity what is Available to You.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1992",
    "title": "- 19950813 _AA BBSR Proper Pot for Receiving Krsna Prema Rasa.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1993",
    "title": "- 19950816 _IL BBSR Ten Offences to the Holy Name.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1994",
    "title": "- 19950818 _AA New Nanda Gram (Austrelia) The Merciful Lord Descends with his Holy Name in this Age.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1995",
    "title": "- 19950908 _AA Nava Govardhan Proper Pot for Receiving Krsna Prema.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1996",
    "title": "- 19950910 _EP New Govardhan Only Aspire How to Serve Krsna Favorably.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1997",
    "title": "- 19950911 _EP New Govardhan Cause of Not,Developing Taste from Chanting the Holy Name.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "1998",
    "title": "- 19950913 _EP Melbourne Maya's Offering to Us",
    "section": "Darshan1995"
  },
  {
    "code": "1999",
    "title": "- 19950916 _EP New Nanda Gram, Australia Driving out All Enemies.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "2000",
    "title": "- 19950919 _EP New Nanda Gram The Story of Kalidasa and Jhadu Thakur.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "2001",
    "title": "- 19950920 _AA Adelaide To Fulfil His Greed Krsna Came as a Devotee.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "2002",
    "title": "- 19950921 _EP Adelaide Without Love not Possible to Think of Krsna.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "2003",
    "title": "- 19950922 _EP Adelaide The Meaning of Krsna's Mercy and Guru's Mercy.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "2004",
    "title": "- 19950923 _SF Adelaide Maya Makes us Forgetful of Krsna.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "2005",
    "title": "- 19950924 _EP Adelaide Bhakti Tattva Explanation, P-2",
    "section": "Darshan1995"
  },
  {
    "code": "2006",
    "title": "- 19950925 _EP Adelaide Bhakti Tattva Explanation, P-4",
    "section": "Darshan1995"
  },
  {
    "code": "2007",
    "title": "- 19950926 _EP Sdelaide Uncomparable Vraja Priti",
    "section": "Darshan1995"
  },
  {
    "code": "2008",
    "title": "- 19950927 _EP Perth Goal is to Keep Krsna Platform of Love.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "2009",
    "title": "- 19950929 _EP Perth Krsna Mercifully Crushes Pride of a Devotee.mp3",
    "section": "Darshan1995"
  },
  {
    "code": "2010",
    "title": "- 19950930 _Darshan BBSR Tatastha Jivas",
    "section": "Darshan1995"
  },
  {
    "code": "2011",
    "title": "- 19960100 _Darshan UnknownLocation Talk With Gurudeva In Nalini's House",
    "section": "Darshan1996"
  },
  {
    "code": "2012",
    "title": "- 19960101 _Darshan Zimbabwe SadhuSangaIsTheOnlyWayToDevelopKrishnaBhakti",
    "section": "Darshan1996"
  },
  {
    "code": "2013",
    "title": "- 19960111 _Darshan Zimbabwe Srila Gurudeva Chanting",
    "section": "Darshan1996"
  },
  {
    "code": "2014",
    "title": "- 19960111 _Darshan BBSR Proper Container",
    "section": "Darshan1996"
  },
  {
    "code": "2015",
    "title": "- 19960203 _Festival France Balarama Appearance Day",
    "section": "Darshan1996"
  },
  {
    "code": "2016",
    "title": "- 19850808 _Festivals BBSR Gaura Purnima Day2",
    "section": "Festival1985"
  },
  {
    "code": "2017",
    "title": "- 19890323 _Festivals BBSR Initiation Lecture",
    "section": "Festival1985"
  },
  {
    "code": "2018",
    "title": "- 19890414 _Festivals BBSR Rama Navami",
    "section": "Festival1985"
  },
  {
    "code": "2019",
    "title": "- 19890414 _Festivals BBSR Initiation Lecture",
    "section": "Festival1985"
  },
  {
    "code": "2020",
    "title": "- 19890519 _Festivals BBSR Vamana Deva Appearance Day",
    "section": "Festival1985"
  },
  {
    "code": "2021",
    "title": "- 19890812 _Festivals BBSR Appearance Day Of Srila Prabhupada",
    "section": "Festival1985"
  },
  {
    "code": "2022",
    "title": "- 19890824 _Festivals BBSR Initiation Lecture",
    "section": "Festival1985"
  },
  {
    "code": "2023",
    "title": "- 19890824 _Festivals BBSR Vyasa Puja Speech",
    "section": "Festival1985"
  },
  {
    "code": "2024",
    "title": "- 19890902 _Festivals BBSR Radhashtami",
    "section": "Festival1985"
  },
  {
    "code": "2025",
    "title": "- 19890908 _Festivals BBSR Lord Vamanadeva Appearance",
    "section": "Festival1985"
  },
  {
    "code": "2026",
    "title": "- 19890912 _Festivals BBSR Initiation Lecture",
    "section": "Festival1985"
  },
  {
    "code": "2027",
    "title": "- 19891001 _Festivals BBSR Srila Raghunatha Bhatta Goswami Disappearance Day",
    "section": "Festival1985"
  },
  {
    "code": "2028",
    "title": "- 19891012 _Festivals BBSR SrilaRaghunathaDasaGoswamiDisappearanceDay",
    "section": "Festival1985"
  },
  {
    "code": "2029",
    "title": "- 19891012 _Festivals BBSR GiriRaja Govardhana",
    "section": "Festival1985"
  },
  {
    "code": "2030",
    "title": "- 19891030 _Festivals BBSR Srila Prabhupada Disappearance Day",
    "section": "Festival1985"
  },
  {
    "code": "2031",
    "title": "- 19891102 _Festivals BBSR Initiation Lecture",
    "section": "Festival1985"
  },
  {
    "code": "2032",
    "title": "- 19891126 _Srila Bhaktisiddhanta App. Day BBSR",
    "section": "Festival1985"
  },
  {
    "code": "2033",
    "title": "- 19891216 _[Initiation Lecture]The Ten Offences BBSR",
    "section": "Festival1985"
  },
  {
    "code": "2034",
    "title": "- 19900609 _Festival BBSR Appearance Day Of Lord Baladeva",
    "section": "Festival1990"
  },
  {
    "code": "2035",
    "title": "- 19900806 _Festival BBSR Janmastami & Bhajans",
    "section": "Festival1990"
  },
  {
    "code": "2036",
    "title": "- 19900814 _Festival BBSR Ten Offenses & Initiation Ceremony",
    "section": "Festival1990"
  },
  {
    "code": "2037",
    "title": "- 19900814 _Festival BBSR Appearance Day Of Srila Prabhupada",
    "section": "Festival1990"
  },
  {
    "code": "2038",
    "title": "- 19900815 _Intiation Lecture{Most Important} Singapore",
    "section": "Festival1990"
  },
  {
    "code": "2039",
    "title": "- 19901126 _Srila Prabhupada Deity Installation Glorifiations BBSR",
    "section": "Festival1990"
  },
  {
    "code": "2040",
    "title": "- 19910121 _Ramnavami Initiation Lecture BBSR",
    "section": "Festival1991"
  },
  {
    "code": "2041",
    "title": "- 19910324 _Initiation Lecture of Brajeswari DD France",
    "section": "Festival1991"
  },
  {
    "code": "2042",
    "title": "- 19910803 _Benevolent festival address BVM London",
    "section": "Festival1991"
  },
  {
    "code": "2043",
    "title": "- 19910817 _Srila Rupa Goswami Dissap Lecture London",
    "section": "Festival1991"
  },
  {
    "code": "2044",
    "title": "- 19910821 _SP Evening Porg App. of Lord Balaram London.mp3",
    "section": "Festival1991"
  },
  {
    "code": "2045",
    "title": "- 19910825 _Lord Balaram's App Day BVM London",
    "section": "Festival1991"
  },
  {
    "code": "2046",
    "title": "- 19910825 _Initiation Lecture BBSR",
    "section": "Festival1991"
  },
  {
    "code": "2047",
    "title": "- 19910902 _Vyasapuja Speech BBSR",
    "section": "Festival1991"
  },
  {
    "code": "2048",
    "title": "- 19910909 _Glorification of Srimati Radharani from BB Purana Gadeigiri.mp3",
    "section": "Festival1991"
  },
  {
    "code": "2049",
    "title": "- 19910916 _Lord Vamana's App Day Glorification BBSR",
    "section": "Festival1991"
  },
  {
    "code": "2050",
    "title": "- 19910921 _Jagannath's glorious app. in Iskcon BBSR",
    "section": "Festival1991"
  },
  {
    "code": "2051",
    "title": "-  _CCAdi9.21-25 BBSR Soul's Dharma Is Priti Dharma",
    "section": "Festival1992"
  },
  {
    "code": "2052",
    "title": "- 19920213 _Festival BBSR App Day of Sri Nityananda Prabhu.mp3",
    "section": "Festival1992"
  },
  {
    "code": "2053",
    "title": "- 19920217 _GP Festival BBSR Advent of Lord Gouranga-1.mp3",
    "section": "Festival1992"
  },
  {
    "code": "2054",
    "title": "- 19920317 _GP Festival BBSR The Cause of Advent of Gouranga Mahaprabhu.mp3",
    "section": "Festival1992"
  },
  {
    "code": "2055",
    "title": "- 19920317 _GP Festival BBSR The Cause of Advent of Gouranga Mahaprabhu.mp3",
    "section": "Festival1992"
  },
  {
    "code": "2056",
    "title": "- 19920318 _GP Festival BBSR Gouranga Mahaprabhu's Bhava and Kanti.mp3",
    "section": "Festival1992"
  },
  {
    "code": "2057",
    "title": "- 19920319 _Festivals BBSR ArrivalAdress&ShriAdvaitaAcharyaAppearanceDay",
    "section": "Festival1992"
  },
  {
    "code": "2058",
    "title": "- 19960127 _SP BBSR Rama Navami Katha Kirtan",
    "section": "Festival1992"
  },
  {
    "code": "2059",
    "title": "- 19920411 _Sepcial Class BBSR The Holy Appearance of Sri Shyamananda.mp3",
    "section": "Festival1992"
  },
  {
    "code": "2060",
    "title": "- 19920417 _Festival BBSR Glorification of Srila Prabhupada",
    "section": "Festival1992"
  },
  {
    "code": "2061",
    "title": "- 19920822 _Gadeigiri Radhastami Kirtan and Glorification",
    "section": "Festival1992"
  },
  {
    "code": "2062",
    "title": "- 19920904 _Festival Class BBSR Lord Vamana's App Day.mp3",
    "section": "Festival1992"
  },
  {
    "code": "2063",
    "title": "- 19920908 _Festival BBSR Lord Nityananda Prabhu's App-2",
    "section": "Festival1993"
  },
  {
    "code": "2064",
    "title": "- 19930205 _Festivals BBSR SriNityanandaBhajansAndBoyhoodPastimes",
    "section": "Festival1993"
  },
  {
    "code": "2065",
    "title": "- 19930205 _Festival Class BBSR Appearance of Gouranga Mahaprabhu.mp3",
    "section": "Festival1993"
  },
  {
    "code": "2066",
    "title": "- 19930308 _Festival Class BBSR Appearance of Gouranga Mahaprabhu- Day 2.mp3",
    "section": "Festival1993"
  },
  {
    "code": "2067",
    "title": "- 19930309 _Festival BBSR Rama Navami Katha",
    "section": "Festival1993"
  },
  {
    "code": "2068",
    "title": "- 19930401 _Festival Class Appearance of Lord Nrshimha BBSR.mp3",
    "section": "Festival1993"
  },
  {
    "code": "2069",
    "title": "- 19930505 _Festival Class BBSR Srila Prabhupada App Day Glorification.mp.mp3",
    "section": "Festival1993"
  },
  {
    "code": "2070",
    "title": "- 19930812 _Festival BBSR Srila Prabhupada Tirobhava Katha Kirtan.mp3",
    "section": "Festival1993"
  },
  {
    "code": "2071",
    "title": "- 19931117 _Festival BBSR Srimati Vishnupriya Thakarini's App Day.mp3",
    "section": "Festival1994"
  },
  {
    "code": "2072",
    "title": "- 19940215 _Festival BBSR Lord Nityananda Prabhu's App Day.mp3",
    "section": "Festival1994"
  },
  {
    "code": "2073",
    "title": "- 19940225 _Gour Purnima Festival BBSR Madanakhya Mahabhava",
    "section": "Festival1994"
  },
  {
    "code": "2074",
    "title": "- 19940326 _Sri Gaura Purnima Day 3 BBSR Goura Lila is More Merciful.mp3",
    "section": "Festival1994"
  },
  {
    "code": "2075",
    "title": "- 19940328 _Festival Class BBSR Sri Ramnavami Katha Kirtan.mp3",
    "section": "Festival1994"
  },
  {
    "code": "2076",
    "title": "- 19940420 _Festival BBSR Chandan Yatra 1994 Performances",
    "section": "Festival1994"
  },
  {
    "code": "2077",
    "title": "- 19940525 _Festival BBSR History and Tattva of Rathayatra.mp3",
    "section": "Festival1994"
  },
  {
    "code": "2078",
    "title": "- 19940711 _Special Class Madrid Srila Rupa Goswami Dissap Day.mp3",
    "section": "Festival1994"
  },
  {
    "code": "2079",
    "title": "- 19940818 _Festival Lecture BBSR Sri Krsna Janmastami",
    "section": "Festival1994"
  },
  {
    "code": "2080",
    "title": "- 19940829 _Festival Lecture Srila Prabhupada Dissap Glorification",
    "section": "Festival1994"
  },
  {
    "code": "2081",
    "title": "- 19940830 _SG Vyasapuja BBSR Vyasapuja Address",
    "section": "Festival1994"
  },
  {
    "code": "2082",
    "title": "- 19940907 _Festival Lecture Gadeigiri Radhastami Katha Kirtan",
    "section": "Festival1994"
  },
  {
    "code": "2083",
    "title": "- 19940912 _Festival Lecture BBSR Lord Vamana Deva's Appearance.mp3",
    "section": "Festival1994"
  },
  {
    "code": "2084",
    "title": "- 19940916 _Srila Bhaktivinoda Thakura App Day BBSR",
    "section": "Festival1994"
  },
  {
    "code": "2085",
    "title": "- 19940917 _Festival Lecture BBSR Srila Prabhupada Tirobhava Day.mp3",
    "section": "Festival1994"
  },
  {
    "code": "2086",
    "title": "- 19941105 _Festival Class BBSR Giri Govardhan Puja",
    "section": "Festival1994"
  },
  {
    "code": "2087",
    "title": "- 19941106 _Festivals BBSR InitiationLecture",
    "section": "Festival1995"
  },
  {
    "code": "2088",
    "title": "- 19950213 _Festivals BBSR Kirtan",
    "section": "Festival1995"
  },
  {
    "code": "2089",
    "title": "- 19950213 _Festivals BBSR SriNityananda Prabhu Appearance Day Kirtan",
    "section": "Festival1995"
  },
  {
    "code": "2090",
    "title": "- 19950214 _Festivals BBSR Sri Nityananda Prabhu Appearance Day Lecture",
    "section": "Festival1995"
  },
  {
    "code": "2091",
    "title": "- 19950214 _Festivals BBSR Gaura Purnima",
    "section": "Festival1995"
  },
  {
    "code": "2092",
    "title": "- 19950317 _Festivals BBSR Unless You Understand Radha Tattva You Cannot Understand Gaura Tattva",
    "section": "Festival1995"
  },
  {
    "code": "2093",
    "title": "- 19950318 _Special Class BBSR Glorious Rama Navami Katha.mp3",
    "section": "Festival1995"
  },
  {
    "code": "2094",
    "title": "- 19950410 _Festival Class BBSR Lord Nrshimha Dev App Katha.mp3",
    "section": "Festival1995"
  },
  {
    "code": "2095",
    "title": "- 19950514 _Secial Class Villa Vrndavan Dissap Day of Srila Rupa Goswami.mp3",
    "section": "Festival1995"
  },
  {
    "code": "2096",
    "title": "- 19950808 _Special Class Villa Vrndavan App of Lord Baladeva.mp3",
    "section": "Festival1995"
  },
  {
    "code": "2097",
    "title": "- 19950810 _Special Class Budapest Ratha Yatra Tattva",
    "section": "Festival1995"
  },
  {
    "code": "2098",
    "title": "- 19950813 _Festival Class BBSR Janmastami Tithi Utsava",
    "section": "Festival1995"
  },
  {
    "code": "2099",
    "title": "- 19950818 _Festival BBSR Srila Prabhupada Appearance Day",
    "section": "Festival1995"
  },
  {
    "code": "2100",
    "title": "- 19950819 _Radhastami Class GadeiGiri Radharani Glorification",
    "section": "Festival1995"
  },
  {
    "code": "2101",
    "title": "- 19950902 _Special Class BBSR Appearance of Lord Vamanadeva.mp3",
    "section": "Festival1995"
  },
  {
    "code": "2102",
    "title": "- 19950906 _Special Class BBSR Appearance of Thakur Bhaktivinode.mp3",
    "section": "Festival1995"
  },
  {
    "code": "2103",
    "title": "- 19950907 _BBSR Festival Govardhana Astakam Prayer.mp3",
    "section": "Festival1995"
  },
  {
    "code": "2104",
    "title": "- 19951025 _Festival BBSR Glorification of Srila Prabhupada Diaap Fest.mp3",
    "section": "Festival1995"
  },
  {
    "code": "2105",
    "title": "- 19951027 _Ramanavami both E and O",
    "section": "Festival1995"
  },
  {
    "code": "2106",
    "title": "-  _Festivals Ghana The Mercy Of Srila Prabhupada",
    "section": "Festival1996"
  },
  {
    "code": "2107",
    "title": "- 19960121 _Festivals Kenya Shri Advaita Acharya Appearance Day.mp3",
    "section": "Festival1996"
  },
  {
    "code": "2108",
    "title": "- 19960125 _Festivals Bombay Shri Advaita Acharya Appearance Day.mp3",
    "section": "Festival1996"
  },
  {
    "code": "2109",
    "title": "- 19960126 _Srila Gurudeva Disappearance BBSR Kirtan",
    "section": "Festival1996"
  },
  {
    "code": "2110",
    "title": "- 19960200 _Festivals BBSR Nityananda Trayodashi",
    "section": "Festival1996"
  },
  {
    "code": "2111",
    "title": "- 19960202 _Festivals BBSR Nityananda Trayodashi Bhajans.mp3",
    "section": "Festival1996"
  },
  {
    "code": "2112",
    "title": "- 19960202 _Srila Gurudeva Disappearance BBSR",
    "section": "Festival1996"
  },
  {
    "code": "2113",
    "title": "- 19960209 _Srila Gurudeva Disappearance BBSR Special Evening Arati For Srila Gurudeva",
    "section": "Festival1996"
  },
  {
    "code": "2114",
    "title": "- 19960209 _Srila Gurudeva Disappearance BBSR Homages.mp3",
    "section": "Festival1996"
  },
  {
    "code": "2115",
    "title": "- 19960212 _Srila Gurudeva Disappearance BBSR Homages",
    "section": "Festival1996"
  },
  {
    "code": "2116",
    "title": "- 19960213 _Srila Gurudeva Disappearance BBSR Remembering Srila Gurudeva.mp3",
    "section": "Festival1996"
  },
  {
    "code": "2117",
    "title": "- 19960307 _Initiation Lecture BBSR Kali Yuga Became a Vaisnava - Copy.mp3",
    "section": "Initiation1989"
  },
  {
    "code": "2118",
    "title": "- 19890322 _Initiation Lecture BBSR Kali Yuga Became a Vaisnava.mp3",
    "section": "Initiation1989"
  },
  {
    "code": "2119",
    "title": "- 19890322 _Initiation Lecture The Ten Offenses BBSR.mp3",
    "section": "Initiation1992"
  },
  {
    "code": "2120",
    "title": "- 19920125 _Initiation Lecture BBSR Festival.mp3",
    "section": "Initiation1992"
  },
  {
    "code": "2121",
    "title": "- 19920216 _Initiation Lecture BBSR Ten Offences Odia English.mp3",
    "section": "Initiation1992"
  },
  {
    "code": "2122",
    "title": "- 19920411 _IL Brooklyn Initiation Lecture",
    "section": "Initiation1992"
  },
  {
    "code": "2123",
    "title": "- 19920531 _IL San Diego Initiation Class",
    "section": "Initiation1992"
  },
  {
    "code": "2124",
    "title": "- 19920624 _Pree Initiation Class San Diego Hearing Bhagavatam from.mp3",
    "section": "Initiation1992"
  },
  {
    "code": "2125",
    "title": "- 19920624 _ED BBSR No Sinful Thoughts for Devotees after Initiation.mp3",
    "section": "Initiation1992"
  },
  {
    "code": "2126",
    "title": "- 19921127 _France Sri Chaitanya & 4 Sampradayas",
    "section": "Initiation1992"
  },
  {
    "code": "2127",
    "title": "- 19860717 _France Bodily Conception Of Life",
    "section": "Initiation1992"
  },
  {
    "code": "2128",
    "title": "- 19860719 _France Cross Over Samsara Sindhu",
    "section": "Initiation1992"
  },
  {
    "code": "2129",
    "title": "- 19860720 _France 3 Types Of Sukrti",
    "section": "Initiation1992"
  },
  {
    "code": "2130",
    "title": "- 19860721 _France Conquering Maya",
    "section": "Initiation1992"
  },
  {
    "code": "2131",
    "title": "- 19860722 _France Nama Is The Conclusion & Rare Human Birth",
    "section": "Initiation1992"
  },
  {
    "code": "2132",
    "title": "- 19860723 _France Vaishnava Kripa & Kali Meet Parikshit Maharaja",
    "section": "Initiation1992"
  },
  {
    "code": "2133",
    "title": "- 19860725 _The glories of Radha's Love BBSR",
    "section": "Initiation1990"
  },
  {
    "code": "2134",
    "title": "- 19900316 _The Holy name and Ten Offences BBSR.mp3",
    "section": "Initiation1990"
  },
  {
    "code": "2135",
    "title": "- 19900404 _SundayFeast Brisbane RealIdentity",
    "section": "Initiation1990"
  },
  {
    "code": "2136",
    "title": "- 19901028 _Evening Programe The Holy Name and Maharaprabhu's Sweet Pastime Murwillmbah.mp3",
    "section": "Initiation1990"
  },
  {
    "code": "2137",
    "title": "- 19901102 _Evening Class The secret how one can become Humble New Govardhana.mp3",
    "section": "Initiation1990"
  },
  {
    "code": "2138",
    "title": "- 19901105 _Evening Programe Bonafide Spiritual Master is the Mouthpiece of Krsna Sydeny.mp3",
    "section": "Initiation1990"
  },
  {
    "code": "2139",
    "title": "- 19901108 _Evening Programme Unless one become Dhira, one can't see Krishna Sydney.mp3",
    "section": "Initiation1990"
  },
  {
    "code": "2140",
    "title": "- 19901109 _Evening Program Assosiation means putting complete faith Sydney.mp3",
    "section": "Initiation1990"
  },
  {
    "code": "2141",
    "title": "- 19901110 _Sunday Feast An uncontrolled Mind is Enemy Melbourne.mp3",
    "section": "Initiation1990"
  },
  {
    "code": "2142",
    "title": "- 19901111 _Evening Programe Duplicity and Hypocrisy further explained Melbourne.mp3",
    "section": "Initiation1990"
  },
  {
    "code": "2143",
    "title": "- 19901113 _House Programe A good home where Vaisnavas visit Melbourne.mp3",
    "section": "Initiation1990"
  },
  {
    "code": "2144",
    "title": "- 19901114 _Evening Class If Sri Krsna is Pleased All the Demigods are Automatically Pleased Adelaid.mp3",
    "section": "Initiation1990"
  },
  {
    "code": "2145",
    "title": "- 19901116 _Sunday Class Sri Krsna is the Basis of all Relationships Adelaid.mp3",
    "section": "Initiation1990"
  },
  {
    "code": "2146",
    "title": "- 19901118 _Evening Class The Most dangerious moment is when we forget Krsna Adelaide.mp3",
    "section": "Initiation1990"
  },
  {
    "code": "2147",
    "title": "- 19901120 _Evening Class Devotee never runs after Illusion Perth.mp3",
    "section": "Initiation1990"
  },
  {
    "code": "2148",
    "title": "- 19901121 _Srila Gurudeva dictate a letter for a Mataji BBSR.mp3",
    "section": "Initiation1990"
  },
  {
    "code": "2149",
    "title": "- 19901226 _Press confrence just before Temple inauguration BBSR.mp3",
    "section": "Initiation1991"
  },
  {
    "code": "2150",
    "title": "- 19910125 _BBSR Public Address GBC",
    "section": "Initiation1991"
  },
  {
    "code": "2151",
    "title": "- 19910225 _Gadeigiri Kirtan Recordings BBSR",
    "section": "Initiation1991"
  },
  {
    "code": "2152",
    "title": "- 19910316 _Srila Gurudev Astakam translated in to Eng.voice BBSR.mp3",
    "section": "Initiation1991"
  },
  {
    "code": "2153",
    "title": "- 19910316 _Gadeigiri Kirtan, SG translate and speaks about Gopaljiu Gadeigir.mp3",
    "section": "Initiation1991"
  },
  {
    "code": "2154",
    "title": "- 19910317 _Srila Gurudeva Chanting Japa BBSR",
    "section": "Initiation1991"
  },
  {
    "code": "2155",
    "title": "- 19910319 _Arrival Class Real chanting helps you see the all beautiful Krsna(French Translation) France.mp3",
    "section": "Initiation1991"
  },
  {
    "code": "2156",
    "title": "- 19910729 _Arrival Class Only a dear devotee could make Lord Appear New Mayapur.mp3",
    "section": "Initiation1991"
  },
  {
    "code": "2157",
    "title": "- 19910802 _Arrival Lecture Soul's Crying France",
    "section": "Initiation1991"
  },
  {
    "code": "2158",
    "title": "- 19910803 _Departure talk A Sadhu teaches for Krsna Samsara France.mp3",
    "section": "Initiation1991"
  },
  {
    "code": "2159",
    "title": "- 19910803 _Evening Programe Take care yourself, the society will taken care of it self Paris.mp3",
    "section": "Initiation1991"
  },
  {
    "code": "2160",
    "title": "- 19910810 _Arrival in London Airport and can conv. to BVM London.mp3",
    "section": "Initiation1991"
  },
  {
    "code": "2161",
    "title": "- 19910928 _VariousTopics Bali One Should Take Shelter Of Nama TattvaVitGuru",
    "section": "Initiation1991"
  },
  {
    "code": "2162",
    "title": "- 19911227 _Initiation Lecture BBSR Lord Nityananda Prabhu's App-1.mp3",
    "section": "Initiation1993"
  },
  {
    "code": "2163",
    "title": "- 19930205 _AA BBSR Arrival From USA Preaching, in Airport Conv. and Temple class.mp3",
    "section": "Initiation1993"
  },
  {
    "code": "2164",
    "title": "- 19930618 _London Airport Darsan Sachinandan Pr About Gurudeva.mp3",
    "section": "Initiation1993"
  },
  {
    "code": "2165",
    "title": "- 19930716 _Puja Lecture BBSR Your Real Love To Me.mp3",
    "section": "Initiation1993"
  },
  {
    "code": "2166",
    "title": "- 19930917 _Evening Class New Govardhan Karpanya, Prayer with Crying of Soul.mp3",
    "section": "Initiation1993"
  },
  {
    "code": "2167",
    "title": "- 19931009 _Evening Class Adelaide Accept what is favorable and reject the unfavorable.mp3",
    "section": "Initiation1993"
  },
  {
    "code": "2168",
    "title": "- 19931011 _Letter Answer BBSR",
    "section": "Initiation1993"
  },
  {
    "code": "2169",
    "title": "- 19931203 _Phone Call Africa & Discussions BBSR",
    "section": "Initiation1993"
  },
  {
    "code": "2170",
    "title": "- 19931211 _Letter Answer BBSR SG Teacher Life and Devotees Deity Worship.mp3",
    "section": "Initiation1993"
  },
  {
    "code": "2171",
    "title": "- 19931228 _Iskcon BBSR Dham",
    "section": "Initiation1993"
  },
  {
    "code": "2172",
    "title": "-  _Sunday Feast Berkeley Sadhu's Heart Bleeds to See Suffering.mp3",
    "section": "Conversation1994"
  },
  {
    "code": "2173",
    "title": "- 19940604 _Sunday Feast San Diego Hear from a Seer of the Truth.mp3",
    "section": "Conversation1994"
  },
  {
    "code": "2174",
    "title": "- 19940612 _Sunday Feast Atlanata Lifting Anchors from the Boat.mp3",
    "section": "Conversation1994"
  },
  {
    "code": "2175",
    "title": "- 19940619 _ArrivalAddress BBSR Return From USA",
    "section": "Conversation1994"
  },
  {
    "code": "2176",
    "title": "- 19940701 _Conversation Phone Call from USA RBD to Srila Gurudeva BBSR.mp3",
    "section": "Conversation1994"
  },
  {
    "code": "2177",
    "title": "- 19900213 _Room Conversation Glories of Guru and duty of Disciple BBSR.mp3",
    "section": "Conversation1994"
  },
  {
    "code": "2178",
    "title": "- 19900618 _Srila Gurudeva in a Biographical Interview by Nimain Pandit New Govardhan.mp3",
    "section": "Conversation1994"
  },
  {
    "code": "2179",
    "title": "- 19901105 _Room Conversation BVMLondon",
    "section": "Conversation1991"
  },
  {
    "code": "2180",
    "title": "- 19910929 _Room Conv. Sraddha is first requisite London.mp3",
    "section": "Conversation1991"
  },
  {
    "code": "2181",
    "title": "- 19910930 _Conversation while Driving from CHI to STL USA.mp3",
    "section": "Conversation1991"
  },
  {
    "code": "2182",
    "title": "- 19911022 _Padayatra Arrival BBSR Sankirtan is Life",
    "section": "Conversation1991"
  },
  {
    "code": "2183",
    "title": "- 19941228 _VariousLectures Romford If You Want To Cry Cry For Krishna",
    "section": "Conversation1992"
  },
  {
    "code": "2184",
    "title": "- 19920722 _Various Lectures  Soho St Offer Service Without Duplicity",
    "section": "Conversation1992"
  },
  {
    "code": "2185",
    "title": "- 19920723 _Various Lectures Birmingham Compilation And Tape Overs",
    "section": "Conversation1992"
  },
  {
    "code": "2186",
    "title": "- 19930712 _Various Lectures BBSR Maya Is The Maid Servant Of Krishna",
    "section": "Conversation1995"
  },
  {
    "code": "2187",
    "title": "- 19950000 _Various Lectures Mauritius Who Is Your Real Friend",
    "section": "Conversation1995"
  },
  {
    "code": "2188",
    "title": "- 19950105 _SundayFeast Durban You Are Not Crying For Krishna",
    "section": "Conversation1995"
  },
  {
    "code": "2189",
    "title": "- 19950108 _VariousLectures Durban Become An Employee In The Factory Of Ointment OfLove",
    "section": "Conversation1995"
  },
  {
    "code": "2190",
    "title": "- 19950108 _Various Lectures Nairobi Jiva Jago You Have Come Here To Do Bhajan",
    "section": "Conversation1995"
  },
  {
    "code": "2191",
    "title": "- 19950119 _Various Lectures Ghana Unfailing Medicine",
    "section": "Conversation1995"
  },
  {
    "code": "2192",
    "title": "- 19950121 _Various Lectures Lagos Five Conclusions Of Caitanya Mahaprabhu",
    "section": "Conversation1995"
  },
  {
    "code": "2193",
    "title": "- 19950121 _Various Lectures Ghana Keep Krishna On The Platform Of Love",
    "section": "Conversation1995"
  },
  {
    "code": "2194",
    "title": "- 19950125 _VariousLectures Ghana Shiva Is A Dear Devotee Of Krishna",
    "section": "Conversation1995"
  },
  {
    "code": "2195",
    "title": "- 19950126 _Various Lectures Ghana Shivaji Has Two Types Of Krpa",
    "section": "Conversation1995"
  },
  {
    "code": "2196",
    "title": "- 19950127 _Various Lectures Ghana Get Out Of This Prison House And Go Back Home Back To Godhead",
    "section": "Conversation1995"
  },
  {
    "code": "2197",
    "title": "- 19950128 _Various Lectures NKR Krishna Carries What You Lack",
    "section": "Conversation1995"
  },
  {
    "code": "2198",
    "title": "- 19950201 _Various Lectures KIS Approach A Tattva-Vit Guru",
    "section": "Conversation1995"
  },
  {
    "code": "2199",
    "title": "- 19950202 _Various Lectures BBSR Arrival From Africa & Krishna Only Needs Your Love",
    "section": "Conversation1995"
  },
  {
    "code": "2200",
    "title": "- 19950205 _Various Lectures Mayapur Sri Gauri Das Pandit",
    "section": "Conversation1995"
  },
  {
    "code": "2201",
    "title": "- 19950304 _Various Lectures BBSR Arrival Address",
    "section": "Conversation1995"
  },
  {
    "code": "2202",
    "title": "- 19950305 _Various Lectures BBSR As Long As There Is Duality Topmost Relishment Of Mellow Cannot Be Complete",
    "section": "Conversation1995"
  },
  {
    "code": "2203",
    "title": "- 19950324 _Noon Class Gadeigiri Only Religion for All the Living Entity.mp3",
    "section": "Conversation1995"
  },
  {
    "code": "2204",
    "title": "- 19950405 _Initiation Lecture BBSR Ten Offences",
    "section": "Conversation1995"
  },
  {
    "code": "2205",
    "title": "- 19950410 _Arrival Address Los Angeles Mentality of Dhrtarastra.mp3",
    "section": "Conversation1995"
  },
  {
    "code": "2206",
    "title": "- 19950518 _Initiation Lecture Brooklyn Ten Offences",
    "section": "Conversation1995"
  },
  {
    "code": "2207",
    "title": "- 19950604 _House Programe Queens Supreme Thief Deserves Punishment.mp3",
    "section": "Conversation1995"
  },
  {
    "code": "2208",
    "title": "- 19950610 _Sunday Feast Holyname Process for Crossing Dreadful Age of Kali.mp3",
    "section": "Conversation1995"
  },
  {
    "code": "2209",
    "title": "- 19950618 _Arrival Addres BBSR Krsna's Will is Supreme Will.mp3",
    "section": "Conversation1995"
  },
  {
    "code": "2210",
    "title": "- 19950629 _Arrival Lecture Toulouse So Many Eyes there Looking Towards You.mp3",
    "section": "Conversation1995"
  },
  {
    "code": "2211",
    "title": "- 19950727 _Evening Lecture Toulouse Don't Brother about Your Maintenance and Protection.mp3",
    "section": "Conversation1995"
  },
  {
    "code": "2212",
    "title": "- 19950727 _Arrival Address Melbourne Chaitanya Mahaprabhu Came to Remind Us to Surrender.mp3",
    "section": "Conversation1995"
  },
  {
    "code": "2213",
    "title": "- 19950915 _Sunday Feast Melbourne Surrendering to Krsna Making One's Life Successful.mp3",
    "section": "Conversation1995"
  },
  {
    "code": "2214",
    "title": "- 19950917 _Arrival Address New Nanda Gram Free from Anarthas and Testing the Sweetness.mp3",
    "section": "Conversation1995"
  },
  {
    "code": "2215",
    "title": "- 19950918 _VariousLectures BBSR Become A Bonafide Member Of Iskcon",
    "section": "Conversation1995"
  },
  {
    "code": "2216",
    "title": "- 19951227 _Various Lectures Unknown Location 4 Types Of Irreligion",
    "section": "Conversation1995"
  },
  {
    "code": "2217",
    "title": "- 19960000 _RadioInterview Mauritius Krishna Consciousness",
    "section": "Conversation1995"
  },
  {
    "code": "2218",
    "title": "- 19960100 _VariousLectures Mauritius GauraLila Is More Magnanimous",
    "section": "Conversation1995"
  },
  {
    "code": "2219",
    "title": "- 19960103 _VariousLectures Mauritius Name Will Give You Krishna Prema",
    "section": "Conversation1995"
  },
  {
    "code": "2220",
    "title": "- 19960103 _VariousLectures Mauritius Strong Shackles",
    "section": "Conversation1995"
  },
  {
    "code": "2221",
    "title": "- 19960104 _VariousLectures Mauritius Purpose Of The Rarely Achieved Human Birth",
    "section": "Conversation1995"
  },
  {
    "code": "2222",
    "title": "- 19960105 _Various Lectures Durban Real Wealth",
    "section": "Conversation1995"
  },
  {
    "code": "2223",
    "title": "- 19960107 _Various Lectures Johannesburg Why We Cannot Get The Mercy Of Mahaprabhu",
    "section": "Conversation1995"
  },
  {
    "code": "2224",
    "title": "- 19960109 _Various Lectures Johannesburg Harinam The Powerful Weapon",
    "section": "Conversation1995"
  },
  {
    "code": "2225",
    "title": "- 19960110 _Various Lectures Zimbabwe Only Bhakta Knows Krishna",
    "section": "Conversation1995"
  },
  {
    "code": "2226",
    "title": "- 19960111 _Various Lectures Zimbabwe Who Is Your Friend",
    "section": "Conversation1995"
  },
  {
    "code": "2227",
    "title": "- 19960112 _Various Lectures Zimbabwe Just Follow The Path Shown By The Mahajanas",
    "section": "Conversation1995"
  },
  {
    "code": "2228",
    "title": "- 19960113 _Various Lectures Nigeria Invaluable Wealth",
    "section": "Conversation1995"
  },
  {
    "code": "2229",
    "title": "- 19960114 _Various Lectures Nigeria Bhakti Yoga Dhana",
    "section": "Conversation1995"
  },
  {
    "code": "2230",
    "title": "- 19960115 _Various Lectures Nigeria Without Krishna Conscioussness Life Has No Value",
    "section": "Conversation1995"
  },
  {
    "code": "2231",
    "title": "- 19960115 _Various Lectures Nigeria The Only Boon Is Sadhu Sanga",
    "section": "Conversation1995"
  },
  {
    "code": "2232",
    "title": "- 19960116 _Various Lectures Nigeria We Are Not This Body We Are Spirit Soul",
    "section": "Conversation1995"
  },
  {
    "code": "2233",
    "title": "- 19960117 _Various Lectures Nigeria Good Fortune Will Arise & Bad Fortune Will Go",
    "section": "Conversation1995"
  },
  {
    "code": "2234",
    "title": "- 19960118 _Various Lectures Nigeria Mahaprabhu Came To Teach Us",
    "section": "Conversation1995"
  },
  {
    "code": "2235",
    "title": "- 19960118 _Various Lectures Nigeria Food For The Soul & How To Avoid Guru Aparadha",
    "section": "Conversation1995"
  },
  {
    "code": "2236",
    "title": "- 19960119 _Various Lectures Ghana Rasa Prema",
    "section": "Conversation1995"
  },
  {
    "code": "2237",
    "title": "- 19960120 _Various Lectures Kenya Krishna Is A Theoretical Speaker And Mahaprabhu Is A Practical Teacher",
    "section": "Conversation1995"
  },
  {
    "code": "2238",
    "title": "- 19960122 _Various Lectures  BBSR  Servant's Duty Is To Give Pleasure To The Master",
    "section": "Conversation1995"
  },
  {
    "code": "2239",
    "title": "- 19960130 _Festivals BBSR Lord Nityananda's Pastimes",
    "section": "Conversation1995"
  },
  {
    "code": "2240",
    "title": "- 19960203 _Phone Calls BBSR Srila Gurudeva Disappearance Phone Call With Various Devotees",
    "section": "Conversation1995"
  }
]