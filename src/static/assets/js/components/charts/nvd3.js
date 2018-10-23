(function ()
{
    // Data
    var lineChart = {
        options: {
            title   : {
                enable: true,
                text  : 'Title for Line Chart'
            },
            subtitle: {
                enable: true,
                text  : 'Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.',
                css   : {
                    'text-align': 'center',
                    'margin'    : '10px 13px 0px 7px'
                }
            },
            caption : {
                enable: true,
                html  : '<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style="text-decoration: underline;">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style="color: darkred;">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href="https://github.com/krispo/angular-nvd3" target="_blank">2</a>, 3]</sup>.',
                css   : {
                    'text-align': 'justify',
                    'margin'    : '10px 13px 0px 7px'
                }
            }
        },
        data   : sinAndCos()
    };

    var stackedAreaChart = {
        options: {
            chart: {
                type                   : 'stackedAreaChart',
                height                 : 450,
                margin                 : {
                    top   : 20,
                    right : 20,
                    bottom: 60,
                    left  : 40
                },
                x                      : function (d)
                {
                    return d[0];
                },
                y                      : function (d)
                {
                    return d[1];
                },
                useVoronoi             : false,
                clipEdge               : true,
                transitionDuration     : 500,
                useInteractiveGuideline: true,
                xAxis                  : {
                    showMaxMin: false,
                    tickFormat: function (d)
                    {
                        return d3.time.format('%x')(new Date(d));
                    }
                },
                yAxis                  : {
                    tickFormat: function (d)
                    {
                        return d3.format(',.2f')(d);
                    }
                }
            }
        },

        data: [
            {
                'key'   : 'Current',
                'values': [[1025409600000, 23.041422681023], [1028088000000, 19.854291255832], [1030766400000, 21.02286281168], [1033358400000, 22.093608385173], [1036040400000, 25.108079299458], [1038632400000, 26.982389242348], [1041310800000, 19.828984957662], [1043989200000, 19.914055036294], [1046408400000, 19.436150539916], [1049086800000, 21.558650338602], [1051675200000, 24.395594061773], [1054353600000, 24.747089309384], [1056945600000, 23.491755498807], [1059624000000, 23.376634878164], [1062302400000, 24.581223154533], [1064894400000, 24.922476843538], [1067576400000, 27.357712939042], [1070168400000, 26.503020572593], [1072846800000, 26.658901244878], [1075525200000, 27.065704156445], [1078030800000, 28.735320452588], [1080709200000, 31.572277846319], [1083297600000, 30.932161503638], [1085976000000, 31.627029785554], [1088568000000, 28.728743674232], [1091246400000, 26.858365172675], [1093924800000, 27.279922830032], [1096516800000, 34.408301211324], [1099195200000, 34.794362930439], [1101790800000, 35.609978198951], [1104469200000, 33.574394968037], [1107147600000, 31.979405070598], [1109566800000, 31.19009040297], [1112245200000, 31.083933968994], [1114833600000, 29.668971113185], [1117512000000, 31.490638014379], [1120104000000, 31.818617451128], [1122782400000, 32.960314008183], [1125460800000, 31.313383196209], [1128052800000, 33.125486081852], [1130734800000, 32.791805509149], [1133326800000, 33.506038030366], [1136005200000, 26.96501697216], [1138683600000, 27.38478809681], [1141102800000, 27.371377218209], [1143781200000, 26.309915460827], [1146369600000, 26.425199957518], [1149048000000, 26.823411519396], [1151640000000, 23.850443591587], [1154318400000, 23.158355444054], [1156996800000, 22.998689393695], [1159588800000, 27.9771285113], [1162270800000, 29.073672469719], [1164862800000, 28.587640408904], [1167541200000, 22.788453687637], [1170219600000, 22.429199073597], [1172638800000, 22.324103271052], [1175313600000, 17.558388444187], [1177905600000, 16.769518096208], [1180584000000, 16.214738201301], [1183176000000, 18.729632971229], [1185854400000, 18.814523318847], [1188532800000, 19.789986451358], [1191124800000, 17.070049054933], [1193803200000, 16.121349575716], [1196398800000, 15.141659430091], [1199077200000, 17.175388025297], [1201755600000, 17.286592443522], [1204261200000, 16.323141626568], [1206936000000, 19.231263773952], [1209528000000, 18.446256391095], [1212206400000, 17.822632399764], [1214798400000, 15.53936647598], [1217476800000, 15.255131790217], [1220155200000, 15.660963922592], [1222747200000, 13.254482273698], [1225425600000, 11.920796202299], [1228021200000, 12.122809090924], [1230699600000, 15.691026271393], [1233378000000, 14.720881635107], [1235797200000, 15.387939360044], [1238472000000, 13.765436672228], [1241064000000, 14.631445864799], [1243742400000, 14.292446536221], [1246334400000, 16.170071367017], [1249012800000, 15.948135554337], [1251691200000, 16.612872685134], [1254283200000, 18.778338719091], [1256961600000, 16.756026065421], [1259557200000, 19.385804443146], [1262235600000, 22.950590240168], [1264914000000, 23.61159018141], [1267333200000, 25.708586989581], [1270008000000, 26.883915999885], [1272600000000, 25.893486687065], [1275278400000, 24.678914263176], [1277870400000, 25.937275793024], [1280548800000, 29.461381693838], [1283227200000, 27.357322961861], [1285819200000, 29.057235285673], [1288497600000, 28.549434189386], [1291093200000, 28.506352379724], [1293771600000, 29.449241421598], [1296450000000, 25.796838168807], [1298869200000, 28.740145449188], [1301544000000, 22.091744141872], [1304136000000, 25.07966254541], [1306814400000, 23.674906973064], [1309406400000, 23.418002742929], [1312084800000, 23.24364413887], [1314763200000, 31.591854066817], [1317355200000, 31.497112374114], [1320033600000, 26.67238082043], [1322629200000, 27.297080015495], [1325307600000, 20.174315530051], [1327986000000, 19.631084213898], [1330491600000, 20.366462219461], [1333166400000, 19.284784434185], [1335758400000, 19.157810257624]]
            },

            {
                'key'   : 'Savings',
                'values': [[1025409600000, 7.9356392949025], [1028088000000, 7.4514668527298], [1030766400000, 7.9085410566608], [1033358400000, 5.8996782364764], [1036040400000, 6.0591869346923], [1038632400000, 5.9667815800451], [1041310800000, 8.65528925664], [1043989200000, 8.7690763386254], [1046408400000, 8.6386160387453], [1049086800000, 5.9895557449743], [1051675200000, 6.3840324338159], [1054353600000, 6.5196511461441], [1056945600000, 7.0738618553114], [1059624000000, 6.5745957367133], [1062302400000, 6.4658359184444], [1064894400000, 2.7622758754954], [1067576400000, 2.9794782986241], [1070168400000, 2.8735432712019], [1072846800000, 1.6344817513645], [1075525200000, 1.5869248754883], [1078030800000, 1.7172279157246], [1080709200000, 1.9649927409867], [1083297600000, 2.0261695079196], [1085976000000, 2.0541261923929], [1088568000000, 3.9466318927569], [1091246400000, 3.7826770946089], [1093924800000, 3.9543021004028], [1096516800000, 3.8309891064711], [1099195200000, 3.6340958946166], [1101790800000, 3.5289755762525], [1104469200000, 5.702378559857], [1107147600000, 5.6539569019223], [1109566800000, 5.5449506370392], [1112245200000, 4.7579993280677], [1114833600000, 4.4816139372906], [1117512000000, 4.5965558568606], [1120104000000, 4.3747066116976], [1122782400000, 4.4588822917087], [1125460800000, 4.4460351848286], [1128052800000, 3.7989113035136], [1130734800000, 3.7743883140088], [1133326800000, 3.7727852823828], [1136005200000, 7.2968111448895], [1138683600000, 7.2800122043237], [1141102800000, 7.1187787503354], [1143781200000, 8.351887016482], [1146369600000, 8.4156698763993], [1149048000000, 8.1673298604231], [1151640000000, 5.5132447126042], [1154318400000, 6.1152537710599], [1156996800000, 6.076765091942], [1159588800000, 4.6304473798646], [1162270800000, 4.6301068469402], [1164862800000, 4.3466656309389], [1167541200000, 6.830104897003], [1170219600000, 7.241633040029], [1172638800000, 7.1432372054153], [1175313600000, 10.608942063374], [1177905600000, 10.914964549494], [1180584000000, 10.933223880565], [1183176000000, 8.3457524851265], [1185854400000, 8.1078413081882], [1188532800000, 8.2697185922474], [1191124800000, 8.4742436475968], [1193803200000, 8.4994601179319], [1196398800000, 8.7387319683243], [1199077200000, 6.8829183612895], [1201755600000, 6.984133637885], [1204261200000, 7.0860136043287], [1206936000000, 4.3961787956053], [1209528000000, 3.8699674365231], [1212206400000, 3.6928925238305], [1214798400000, 6.7571718894253], [1217476800000, 6.4367313362344], [1220155200000, 6.4048441521454], [1222747200000, 5.4643833239669], [1225425600000, 5.3150786833374], [1228021200000, 5.3011272612576], [1230699600000, 4.1203601430809], [1233378000000, 4.0881783200525], [1235797200000, 4.1928665957189], [1238472000000, 7.0249415663205], [1241064000000, 7.006530880769], [1243742400000, 6.994835633224], [1246334400000, 6.1220222336254], [1249012800000, 6.1177436137653], [1251691200000, 6.1413396231981], [1254283200000, 4.8046006145874], [1256961600000, 4.6647600660544], [1259557200000, 4.544865006255], [1262235600000, 6.0488249316539], [1264914000000, 6.3188669540206], [1267333200000, 6.5873958262306], [1270008000000, 6.2281189839578], [1272600000000, 5.8948915746059], [1275278400000, 5.5967320482214], [1277870400000, 0.99784432084837], [1280548800000, 1.0950794175359], [1283227200000, 0.94479734407491], [1285819200000, 1.222093988688], [1288497600000, 1.335093106856], [1291093200000, 1.3302565104985], [1293771600000, 1.340824670897], [1296450000000, 0], [1298869200000, 0], [1301544000000, 0], [1304136000000, 0], [1306814400000, 0], [1309406400000, 0], [1312084800000, 0], [1314763200000, 0], [1317355200000, 4.4583692315], [1320033600000, 3.6493043348059], [1322629200000, 3.8610064091761], [1325307600000, 5.5144800685202], [1327986000000, 5.1750695220791], [1330491600000, 5.6710066952691], [1333166400000, 5.5611890039181], [1335758400000, 5.5979368839939]]
            },

            {
                'key'   : 'Credit Card',
                'values': [[1025409600000, 7.9149900245423], [1028088000000, 7.0899888751059], [1030766400000, 7.5996132380614], [1033358400000, 8.2741174301034], [1036040400000, 9.3564460833513], [1038632400000, 9.7066786059904], [1041310800000, 10.213363052343], [1043989200000, 10.285809585273], [1046408400000, 10.222053149228], [1049086800000, 8.6188592137975], [1051675200000, 9.3335447543566], [1054353600000, 8.9312402186628], [1056945600000, 8.1895089343658], [1059624000000, 8.260622135079], [1062302400000, 7.7700786851364], [1064894400000, 7.9907428771318], [1067576400000, 8.7769091865606], [1070168400000, 8.4855077060661], [1072846800000, 9.6277203033655], [1075525200000, 9.9685913452624], [1078030800000, 10.615085181759], [1080709200000, 9.2902488079646], [1083297600000, 8.8610439830061], [1085976000000, 9.1075344931229], [1088568000000, 9.9156737639203], [1091246400000, 9.7826003238782], [1093924800000, 10.55403610555], [1096516800000, 10.926900264097], [1099195200000, 10.903144818736], [1101790800000, 10.862890389067], [1104469200000, 10.64604998964], [1107147600000, 10.042790814087], [1109566800000, 9.7173391591038], [1112245200000, 9.6122415755443], [1114833600000, 9.4337921146562], [1117512000000, 9.814827171183], [1120104000000, 12.059260396788], [1122782400000, 12.139649903873], [1125460800000, 12.281290663822], [1128052800000, 8.8037085409056], [1130734800000, 8.6300618239176], [1133326800000, 9.1225708491432], [1136005200000, 12.988124170836], [1138683600000, 13.356778764353], [1141102800000, 13.611196863271], [1143781200000, 6.8959030061189], [1146369600000, 6.9939633271353], [1149048000000, 6.7241510257676], [1151640000000, 5.5611293669517], [1154318400000, 5.6086488714041], [1156996800000, 5.4962849907033], [1159588800000, 6.9193153169278], [1162270800000, 7.0016334389778], [1164862800000, 6.7865422443273], [1167541200000, 9.0006454225383], [1170219600000, 9.2233916171431], [1172638800000, 8.8929316009479], [1175313600000, 10.345937520404], [1177905600000, 10.075914677026], [1180584000000, 10.089006188111], [1183176000000, 10.598330295008], [1185854400000, 9.9689546533009], [1188532800000, 9.7740580198146], [1191124800000, 10.558483060626], [1193803200000, 9.9314651823603], [1196398800000, 9.3997715873769], [1199077200000, 8.4086493387262], [1201755600000, 8.9698309085926], [1204261200000, 8.2778357995396], [1206936000000, 8.8585045600123], [1209528000000, 8.7013756413322], [1212206400000, 7.7933605469443], [1214798400000, 7.0236183483064], [1217476800000, 6.9873088186829], [1220155200000, 6.8031713070097], [1222747200000, 6.6869531315723], [1225425600000, 6.138256993963], [1228021200000, 5.6434994016354], [1230699600000, 5.495220262512], [1233378000000, 4.6885326869846], [1235797200000, 4.4524349883438], [1238472000000, 5.6766520778185], [1241064000000, 5.7675774480752], [1243742400000, 5.7882863168337], [1246334400000, 7.2666010034924], [1249012800000, 7.5191821322261], [1251691200000, 7.849651451445], [1254283200000, 10.383992037985], [1256961600000, 9.0653691861818], [1259557200000, 9.6705248324159], [1262235600000, 10.856380561349], [1264914000000, 11.27452370892], [1267333200000, 11.754156529088], [1270008000000, 8.2870811422455], [1272600000000, 8.0210264360699], [1275278400000, 7.5375074474865], [1277870400000, 8.3419527338039], [1280548800000, 9.4197471818443], [1283227200000, 8.7321733185797], [1285819200000, 9.6627062648126], [1288497600000, 10.187962234548], [1291093200000, 9.8144201733476], [1293771600000, 10.275723361712], [1296450000000, 16.796066079353], [1298869200000, 17.543254984075], [1301544000000, 16.673660675083], [1304136000000, 17.963944353609], [1306814400000, 16.63774086721], [1309406400000, 15.84857094609], [1312084800000, 14.767303362181], [1314763200000, 24.778452182433], [1317355200000, 18.370353229999], [1320033600000, 15.253137429099], [1322629200000, 14.989600840649], [1325307600000, 16.052539160125], [1327986000000, 16.424390322793], [1330491600000, 17.884020741104], [1333166400000, 18.372698836036], [1335758400000, 18.315881576096]]
            }

        ]
    };

    var sparklineChart = {
        options: {
            chart: {
                type              : 'sparklinePlus',
                height            : 450,
                x                 : function (d, i)
                {
                    return i;
                },
                xTickFormat       : function (d)
                {
                    return d3.time.format('%x')(new Date(vm.sparklineChart.data[d].x));
                },
                transitionDuration: 250
            }
        },

        //$scope.data = sine();
        data: volatileChart(130.0, 0.02)
    };

    var historicalBarChart = {
        options: {
            chart: {
                type              : 'historicalBarChart',
                height            : 450,
                margin            : {
                    top   : 20,
                    right : 20,
                    bottom: 60,
                    left  : 50
                },
                x                 : function (d)
                {
                    return d[0];
                },
                y                 : function (d)
                {
                    return d[1] / 100000;
                },
                showValues        : true,
                valueFormat       : function (d)
                {
                    return d3.format(',.1f')(d);
                },
                transitionDuration: 500,
                xAxis             : {
                    axisLabel   : 'X Axis',
                    tickFormat  : function (d)
                    {
                        return d3.time.format('%x')(new Date(d));
                    },
                    rotateLabels: 50,
                    showMaxMin  : false
                },
                yAxis             : {
                    axisLabel        : 'Y Axis',
                    axisLabelDistance: 35,
                    tickFormat       : function (d)
                    {
                        return d3.format(',.1f')(d);
                    }
                }
            }
        },

        data: [
            {
                'key'   : 'Quantity',
                'bar'   : true,
                'values': [[1159588800000, 3899486.0], [1162270800000, 3899486.0], [1164862800000, 3899486.0], [1167541200000, 3564700.0], [1170219600000, 3564700.0], [1172638800000, 3564700.0], [1175313600000, 2648493.0], [1177905600000, 2648493.0], [1180584000000, 2648493.0], [1183176000000, 2522993.0], [1185854400000, 2522993.0], [1188532800000, 2522993.0], [1191124800000, 2906501.0], [1193803200000, 2906501.0], [1196398800000, 2906501.0], [1199077200000, 2206761.0], [1201755600000, 2206761.0], [1204261200000, 2206761.0], [1206936000000, 2287726.0], [1209528000000, 2287726.0], [1212206400000, 2287726.0], [1214798400000, 2732646.0], [1217476800000, 2732646.0], [1220155200000, 2732646.0], [1222747200000, 2599196.0], [1225425600000, 2599196.0], [1228021200000, 2599196.0], [1230699600000, 1924387.0], [1233378000000, 1924387.0], [1235797200000, 1924387.0], [1238472000000, 1756311.0], [1241064000000, 1756311.0], [1243742400000, 1756311.0], [1246334400000, 1743470.0], [1249012800000, 1743470.0], [1251691200000, 1743470.0], [1254283200000, 1519010.0], [1256961600000, 1519010.0], [1259557200000, 1519010.0], [1262235600000, 1591444.0], [1264914000000, 1591444.0], [1267333200000, 1591444.0], [1270008000000, 1543784.0], [1272600000000, 1543784.0], [1275278400000, 1543784.0], [1277870400000, 1309915.0], [1280548800000, 1309915.0], [1283227200000, 1309915.0], [1285819200000, 1331875.0], [1288497600000, 1331875.0], [1291093200000, 1331875.0], [1293771600000, 1331875.0], [1296450000000, 1154695.0], [1298869200000, 1154695.0], [1301544000000, 1194025.0], [1304136000000, 1194025.0], [1306814400000, 1194025.0], [1309406400000, 1194025.0], [1312084800000, 1194025.0], [1314763200000, 1244525.0], [1317355200000, 475000.0], [1320033600000, 475000.0], [1322629200000, 475000.0], [1325307600000, 690033.0], [1327986000000, 690033.0], [1330491600000, 690033.0], [1333166400000, 514733.0], [1335758400000, 514733.0]]
            }
        ]
    };

    var multiBarHorizontalChart = {
        options: {
            chart: {
                type              : 'multiBarHorizontalChart',
                height            : 450,
                x                 : function (d)
                {
                    return d.label;
                },
                y                 : function (d)
                {
                    return d.value;
                },
                showControls      : true,
                showValues        : true,
                transitionDuration: 500,
                xAxis             : {
                    showMaxMin: false
                },
                yAxis             : {
                    axisLabel : 'Values',
                    tickFormat: function (d)
                    {
                        return d3.format(',.2f')(d);
                    }
                }
            }
        },
        data   : [
            {
                'key'   : 'Series1',
                'color' : '#d62728',
                'values': [
                    {
                        'label': 'Group A',
                        'value': -1.8746444827653
                    },
                    {
                        'label': 'Group B',
                        'value': -8.0961543492239
                    },
                    {
                        'label': 'Group C',
                        'value': -0.57072943117674
                    },
                    {
                        'label': 'Group D',
                        'value': -2.4174010336624
                    },
                    {
                        'label': 'Group E',
                        'value': -0.72009071426284
                    },
                    {
                        'label': 'Group F',
                        'value': -0.77154485523777
                    },
                    {
                        'label': 'Group G',
                        'value': -0.90152097798131
                    },
                    {
                        'label': 'Group H',
                        'value': -0.91445417330854
                    },
                    {
                        'label': 'Group I',
                        'value': -0.055746319141851
                    }
                ]
            },
            {
                'key'   : 'Series2',
                'color' : '#1f77b4',
                'values': [
                    {
                        'label': 'Group A',
                        'value': 25.307646510375
                    },
                    {
                        'label': 'Group B',
                        'value': 16.756779544553
                    },
                    {
                        'label': 'Group C',
                        'value': 18.451534877007
                    },
                    {
                        'label': 'Group D',
                        'value': 8.6142352811805
                    },
                    {
                        'label': 'Group E',
                        'value': 7.8082472075876
                    },
                    {
                        'label': 'Group F',
                        'value': 5.259101026956
                    },
                    {
                        'label': 'Group G',
                        'value': 0.30947953487127
                    },
                    {
                        'label': 'Group H',
                        'value': 0
                    },
                    {
                        'label': 'Group I',
                        'value': 0
                    }
                ]
            }
        ]
    };

    var pieChart = {
        options: {
            chart: {
                type              : 'pieChart',
                height            : 500,
                x                 : function (d)
                {
                    return d.key;
                },
                y                 : function (d)
                {
                    return d.y;
                },
                showLabels        : true,
                transitionDuration: 500,
                labelThreshold    : 0.01,
                legend            : {
                    margin: {
                        top   : 5,
                        right : 35,
                        bottom: 5,
                        left  : 0
                    }
                }
            }
        },
        data   : [
            {
                key: 'One',
                y  : 5
            },
            {
                key: 'Two',
                y  : 2
            },
            {
                key: 'Three',
                y  : 9
            },
            {
                key: 'Four',
                y  : 7
            },
            {
                key: 'Five',
                y  : 4
            },
            {
                key: 'Six',
                y  : 3
            },
            {
                key: 'Seven',
                y  : 0.5
            }
        ]
    };

    var donutChart = {
        options: {
            chart: {
                type      : 'pieChart',
                height    : 450,
                donut     : true,
                x         : function (d)
                {
                    return d.key;
                },
                y         : function (d)
                {
                    return d.y;
                },
                showLabels: true,

                pie               : {
                    startAngle: function (d)
                    {
                        return d.startAngle / 2 - Math.PI / 2;
                    },
                    endAngle  : function (d)
                    {
                        return d.endAngle / 2 - Math.PI / 2;
                    }
                },
                transitionDuration: 500,
                legend            : {
                    margin: {
                        top   : 5,
                        right : 70,
                        bottom: 5,
                        left  : 0
                    }
                }
            }
        },

        data: [
            {
                key: 'One',
                y  : 5
            },
            {
                key: 'Two',
                y  : 2
            },
            {
                key: 'Three',
                y  : 9
            },
            {
                key: 'Four',
                y  : 7
            },
            {
                key: 'Five',
                y  : 4
            },
            {
                key: 'Six',
                y  : 3
            },
            {
                key: 'Seven',
                y  : 0.5
            }
        ]

    };

    var bulletChart = {
        options: {
            chart: {
                type              : 'bulletChart',
                transitionDuration: 500
            }
        },
        data   : {
            'title'   : 'Revenue',
            'subtitle': 'US$, in thousands',
            'ranges'  : [150, 225, 300],
            'measures': [220],
            'markers' : [250]
        }
    };

    var scatterChart = {
        options: {
            chart: {
                type              : 'scatterChart',
                height            : 450,
                color             : d3.scale.category10().range(),
                scatter           : {
                    onlyCircles: false
                },
                showDistX         : true,
                showDistY         : true,
                tooltipContent    : function (key)
                {
                    return '<h3>' + key + '</h3>';
                },
                transitionDuration: 350,
                xAxis             : {
                    axisLabel : 'X Axis',
                    tickFormat: function (d)
                    {
                        return d3.format('.02f')(d);
                    }
                },
                yAxis             : {
                    axisLabel        : 'Y Axis',
                    tickFormat       : function (d)
                    {
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: 30
                }
            }
        },
        data   : generateData(4, 5)
    };

    //////////

    /*Random Data Generator */
    function sinAndCos()
    {
        var sin = [], sin2 = [],
            cos = [];

        //Data is represented as an array of {x,y} pairs.
        for ( var i = 0; i < 100; i++ )
        {
            sin.push({
                x: i,
                y: Math.sin(i / 10)
            });
            sin2.push({
                x: i,
                y: (i % 10 === 5 ? null : Math.sin(i / 10) * 0.25 + 0.5)
            });
            cos.push({
                x: i,
                y: 0.5 * Math.cos(i / 10 + 2) + Math.random() / 10
            });
        }

        //Line chart data should be sent as an array of series objects.
        return [
            {
                values: sin,      //values - represents the array of {x,y} data points
                key   : 'Sine Wave', //key  - the name of the series.
                color : '#ff7f0e'  //color - optional: choose your own line color.
            },
            {
                values: cos,
                key   : 'Cosine Wave',
                color : '#2ca02c'
            },
            {
                values: sin2,
                key   : 'Another sine wave',
                color : '#7777ff',
                area  : true      //area - set to true if you want this line to turn into a filled area chart.
            }
        ];
    }

    function volatileChart(startPrice, volatility, numPoints)
    {
        var rval = [];
        var now = +new Date();
        numPoints = numPoints || 100;
        for ( var i = 1; i < numPoints; i++ )
        {
            rval.push({
                x: now + i * 1000 * 60 * 60 * 24,
                y: startPrice
            });
            var rnd = Math.random();
            var changePct = 2 * volatility * rnd;
            if ( changePct > volatility )
            {
                changePct -= (2 * volatility);
            }
            startPrice = startPrice + startPrice * changePct;
        }
        return rval;
    }

    /* Random Data Generator (took from nvd3.org) */
    function generateData(groups, points)
    {
        var data = [],
            shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
            random = d3.random.normal();

        for ( var i = 0; i < groups; i++ )
        {
            data.push({
                key   : 'Group ' + i,
                values: []
            });

            for ( var j = 0; j < points; j++ )
            {
                data[i].values.push(
                    {
                        x    : random(),
                        y    : random(),
                        size : Math.random(),
                        shape: shapes[j % 6]
                    });
            }
        }
        return data;
    }


    // Line Chart
    nv.addGraph(function ()
    {
        var chart = nv.models.lineChart()
            .options({
                type                   : 'lineChart',
                height                 : 450,
                margin                 : {
                    top   : 20,
                    right : 20,
                    bottom: 40,
                    left  : 55
                },
                x                      : function (d)
                {
                    return d.x;
                },
                y                      : function (d)
                {
                    return d.y;
                },
                useInteractiveGuideline: true
            });

        chart.xAxis     //Chart x-axis settings
            .axisLabel('Time (ms)');

        chart.yAxis     //Chart y-axis settings
            .axisLabel('Voltage (v)')
            .axisLabelDistance(30)
            .tickFormat(function (d)
            {
                return d3.format('.02f')(d);
            });

        var chartd3 = d3.select('#line-chart svg')
        var chartData;

        initChart();

        nv.utils.windowResize(chart.update);

        function initChart()
        {
            chartData = lineChart.data;
            chartd3.datum(chartData).call(chart);
        }

        return chart;
    });

    // Stacked Area Chart
    nv.addGraph(function ()
    {
        var chart = nv.models.stackedAreaChart()
            .options({
                type                   : 'stackedAreaChart',
                height                 : 450,
                margin                 : {
                    top   : 20,
                    right : 20,
                    bottom: 60,
                    left  : 40
                },
                x                      : function (d)
                {
                    return d[0];
                },
                y                      : function (d)
                {
                    return d[1];
                },
                useVoronoi             : false,
                clipEdge               : true,
                transitionDuration     : 500,
                useInteractiveGuideline: true
            });

        chart.xAxis     //Chart x-axis settings
            .showMaxMin(false)
            .tickFormat(function (d)
            {
                return d3.time.format('%x')(new Date(d));
            });

        chart.yAxis     //Chart y-axis settings
            .tickFormat(function (d)
            {
                return d3.format(',.2f')(d);
            });

        var chartd3 = d3.select('#stacked-area-chart svg')
        var chartData;

        initChart();

        nv.utils.windowResize(chart.update);

        function initChart()
        {
            chartData = stackedAreaChart.data;
            chartd3.datum(chartData).call(chart);
        }

        return chart;
    });


    // Sparkine Chart
    nv.addGraph(function ()
    {
        var chart = nv.models.sparklinePlus()
            .options({
                type              : 'sparklinePlus',
                height            : 450,
                x                 : function (d, i)
                {
                    return i;
                },
                transitionDuration: 250
            });

        chart.xTickFormat(function (d)
        {
            return d3.time.format('%x')(new Date(sparklineChart.data[d].x));
        });

        var chartd3 = d3.select('#sparkline-chart svg')

        initChart();

        nv.utils.windowResize(chart.update);

        function initChart()
        {
            chartData = sparklineChart.data;
            chartd3.datum(chartData).call(chart);
        }

        return chart;
    });

    // Historical Bar Chart
    nv.addGraph(function ()
    {
        var chart = nv.models.historicalBarChart()
            .options({
                type              : 'historicalBarChart',
                height            : 450,
                margin            : {
                    top   : 20,
                    right : 20,
                    bottom: 60,
                    left  : 50
                },
                x                 : function (d)
                {
                    return d[0];
                },
                y                 : function (d)
                {
                    return d[1] / 100000;
                },
                showValues        : true,
                transitionDuration: 500
            });

        chart.xAxis     //Chart x-axis settings
            .axisLabel('X Axis')
            .rotateLabels(50)
            .showMaxMin(false)
            .tickFormat(function (d)
            {
                return d3.time.format('%x')(new Date(d));
            });

        chart.yAxis     //Chart y-axis settings
            .axisLabel('Y Axis')
            .axisLabelDistance(35)
            .tickFormat(function (d)
            {
                return d3.format(',.1f')(d);
            });

        var chartd3 = d3.select('#historical-bar-chart svg')
        var chartData;

        initChart();

        nv.utils.windowResize(chart.update);

        function initChart()
        {
            chartData = historicalBarChart.data;
            chartd3.datum(chartData).call(chart);
        }

        return chart;
    });

    // Multi Bar Horizontal Chart
    nv.addGraph(function ()
    {
        var chart = nv.models.multiBarHorizontalChart()
            .options({
                type              : 'multiBarHorizontalChart',
                height            : 450,
                x                 : function (d)
                {
                    return d.label;
                },
                y                 : function (d)
                {
                    return d.value;
                },
                showControls      : true,
                showValues        : true,
                transitionDuration: 500
            });

        chart.xAxis     //Chart x-axis settings
            .showMaxMin(false);

        chart.yAxis     //Chart y-axis settings
            .axisLabel('Values')
            .tickFormat(function (d)
            {
                return d3.format(',.2f')(d);
            });

        var chartd3 = d3.select('#multi-bar-horizontal-chart svg')
        var chartData;

        initChart();

        nv.utils.windowResize(chart.update);

        function initChart()
        {
            chartData = multiBarHorizontalChart.data;
            chartd3.datum(chartData).call(chart);
        }

        return chart;
    });

    // Pie Chart
    nv.addGraph(function ()
    {
        var chart = nv.models.pieChart()
            .options({
                type              : 'pieChart',
                height            : 500,
                x                 : function (d)
                {
                    return d.key;
                },
                y                 : function (d)
                {
                    return d.y;
                },
                showLabels        : true,
                transitionDuration: 500,
                labelThreshold    : 0.01
            });

        chart.legend.margin({
                top   : 5,
                right : 35,
                bottom: 5,
                left  : 0
            }
        );

        var chartd3 = d3.select('#pie-chart svg')
        var chartData;

        initChart();

        nv.utils.windowResize(chart.update);

        function initChart()
        {
            chartData = pieChart.data;
            chartd3.datum(chartData).call(chart);
        }

        return chart;
    });

    // Donut Chart
    nv.addGraph(function ()
    {
        var chart = nv.models.pieChart()
            .options({
                type              : 'pieChart',
                height            : 450,
                donut             : true,
                x                 : function (d)
                {
                    return d.key;
                },
                y                 : function (d)
                {
                    return d.y;
                },
                showLabels        : true,
                transitionDuration: 500
            });

        chart.legend.margin({
                top   : 5,
                right : 70,
                bottom: 5,
                left  : 0
            }
        );

        chart.pie
            .startAngle(function (d)
            {
                return d.startAngle / 2 - Math.PI / 2;
            })
            .endAngle(function (d)
            {
                return d.endAngle / 2 - Math.PI / 2;
            });


        var chartd3 = d3.select('#donut-chart svg')
        var chartData;

        initChart();

        nv.utils.windowResize(chart.update);

        function initChart()
        {
            chartData = donutChart.data;
            chartd3.datum(chartData).call(chart);
        }

        return chart;
    });

    // Bullet Chart
    nv.addGraph(function ()
    {
        var chart = nv.models.bulletChart()
            .options({
                type              : 'bulletChart',
                transitionDuration: 500
            });


        var chartd3 = d3.select('#bullet-chart svg')
        var chartData;

        initChart();

        nv.utils.windowResize(chart.update);

        function initChart()
        {
            chartData = bulletChart.data;
            chartd3.datum(chartData).call(chart);
        }

        return chart;
    });

    // Scatter Chart
    nv.addGraph(function ()
    {
        var chart = nv.models.scatterChart()
            .options({
                type              : 'scatterChart',
                height            : 450,
                color             : d3.scale.category10().range(),
                showDistX         : true,
                showDistY         : true,
                tooltipContent    : function (key)
                {
                    return '<h3>' + key + '</h3>';
                },
                transitionDuration: 350
            });

        chart.xAxis     //Chart x-axis settings
            .axisLabel('X Axis')
            .tickFormat(function (d)
            {
                return d3.format('.02f')(d);
            });

        chart.yAxis     //Chart y-axis settings
            .axisLabel('Y Axis')
            .axisLabelDistance(30)
            .tickFormat(function (d)
            {
                return d3.format('.02f')(d);
            });

        var chartd3 = d3.select('#scatter-chart svg')
        var chartData;

        initChart();

        nv.utils.windowResize(chart.update);

        function initChart()
        {
            chartData = scatterChart.data;
            chartd3.datum(chartData).call(chart);
        }

        return chart;
    });

})();