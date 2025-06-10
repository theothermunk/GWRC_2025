var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Districtboundaries_1 = new ol.format.GeoJSON();
var features_Districtboundaries_1 = format_Districtboundaries_1.readFeatures(json_Districtboundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districtboundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districtboundaries_1.addFeatures(features_Districtboundaries_1);
var lyr_Districtboundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Districtboundaries_1, 
                style: style_Districtboundaries_1,
                popuplayertitle: 'District boundaries',
                interactive: false,
                title: '<img src="styles/legend/Districtboundaries_1.png" /> District boundaries'
            });
var format_shareofgrowth20232033_2 = new ol.format.GeoJSON();
var features_shareofgrowth20232033_2 = format_shareofgrowth20232033_2.readFeatures(json_shareofgrowth20232033_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shareofgrowth20232033_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shareofgrowth20232033_2.addFeatures(features_shareofgrowth20232033_2);
var lyr_shareofgrowth20232033_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shareofgrowth20232033_2, 
                style: style_shareofgrowth20232033_2,
                popuplayertitle: '% share of growth 2023-2033',
                interactive: true,
    title: '% share of growth 2023-2033<br />\
    <img src="styles/legend/shareofgrowth20232033_2_0.png" /> -5 or less<br />\
    <img src="styles/legend/shareofgrowth20232033_2_1.png" /> -5 to 0<br />\
    <img src="styles/legend/shareofgrowth20232033_2_2.png" /> 0 to 2<br />\
    <img src="styles/legend/shareofgrowth20232033_2_3.png" /> 2 to 5<br />\
    <img src="styles/legend/shareofgrowth20232033_2_4.png" /> 5 to 10<br />\
    <img src="styles/legend/shareofgrowth20232033_2_5.png" /> 10 to 15<br />\
    <img src="styles/legend/shareofgrowth20232033_2_6.png" /> 15 to 20<br />\
    <img src="styles/legend/shareofgrowth20232033_2_7.png" /> 20 to 25<br />\
    <img src="styles/legend/shareofgrowth20232033_2_8.png" /> 25 or more<br />' });
var format_shareofgrowth20232053_3 = new ol.format.GeoJSON();
var features_shareofgrowth20232053_3 = format_shareofgrowth20232053_3.readFeatures(json_shareofgrowth20232053_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shareofgrowth20232053_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shareofgrowth20232053_3.addFeatures(features_shareofgrowth20232053_3);
var lyr_shareofgrowth20232053_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shareofgrowth20232053_3, 
                style: style_shareofgrowth20232053_3,
                popuplayertitle: '% share of growth 2023-2053',
                interactive: true,
    title: '% share of growth 2023-2053<br />\
    <img src="styles/legend/shareofgrowth20232053_3_0.png" /> -5 or less<br />\
    <img src="styles/legend/shareofgrowth20232053_3_1.png" /> -5 to 0<br />\
    <img src="styles/legend/shareofgrowth20232053_3_2.png" /> 0 to 2<br />\
    <img src="styles/legend/shareofgrowth20232053_3_3.png" /> 2 to 5<br />\
    <img src="styles/legend/shareofgrowth20232053_3_4.png" /> 5 to 10<br />\
    <img src="styles/legend/shareofgrowth20232053_3_5.png" /> 10 to 15<br />\
    <img src="styles/legend/shareofgrowth20232053_3_6.png" /> 15 to 20<br />\
    <img src="styles/legend/shareofgrowth20232053_3_7.png" /> 20 to 25<br />\
    <img src="styles/legend/shareofgrowth20232053_3_8.png" /> 25 or more<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Districtboundaries_1.setVisible(true);lyr_shareofgrowth20232033_2.setVisible(false);lyr_shareofgrowth20232053_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Districtboundaries_1,lyr_shareofgrowth20232033_2,lyr_shareofgrowth20232053_3];
lyr_Districtboundaries_1.set('fieldAliases', {'TA2023_V1_00': 'TA2023_V1_00', 'TA2023_V1_00_NAME': 'Territorial Authority', 'TA2023_V1_00_NAME_ASCII': 'TA2023_V1_00_NAME_ASCII', 'LAND_AREA_SQ_KM': 'LAND_AREA_SQ_KM', 'AREA_SQ_KM': 'AREA_SQ_KM', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_shareofgrowth20232033_2.set('fieldAliases', {'SA22023_V1_00': 'SA22023_V1_00', 'SA22023_V1_00_NAME': 'SA2', 'SA22023_V1_00_NAME_ASCII': 'SA22023_V1_00_NAME_ASCII', 'AREA_SQ_KM': 'AREA_SQ_KM', 'LAND_AREA_SQ_KM': 'LAND_AREA_SQ_KM', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'TALB2023_V1_00': 'TALB2023_V1_00', 'TALB2023_V1_00_NAME': 'Territorial Authority', 'TALB2023_V1_00_NAME_ASCII': 'TA', 'LAND_AREA_SQ_KM_2': 'LAND_AREA_SQ_KM_2', 'AREA_SQ_KM_2': 'AREA_SQ_KM_2', 'Shape_Length_2': 'Shape_Length_2', 'Shape_Area_2': 'Shape_Area_2', 'GrowthGroup': 'Growth grouping', 'ShortTerm_Area': 'ShortTerm_Area', 'ShortTerm_SA2_name': 'ShortTerm_SA2_name', 'ShortTerm_Population in 2023': '2023 Population', 'ShortTerm_Population in 2033': '2033 population', 'ShortTerm_Population change': 'Population change', 'ShortTerm_Population change range': 'ShortTerm_Population change range', 'ShortTerm_Population change % of TA': 'Share of TA growth (%)', 'ShortTerm_Households in 2023': '2023 households', 'ShortTerm_Households in 2033': '2033 households', 'ShortTerm_Household change': 'Change in households', 'ShortTerm_Household change range': 'ShortTerm_Household change range', 'ShortTerm_Household change % of TA': 'ShortTerm_Household change % of TA', 'ShortTerm_Dwellings in 2023': '2023 dwellings', 'ShortTerm_Dwellings in 2033': '2033 dwellings', 'ShortTerm_Dwelling change': 'Change in dwellings', 'ShortTerm_Dwellings change range': 'ShortTerm_Dwellings change range', 'ShortTerm_Dwelling change % of TA': 'ShortTerm_Dwelling change % of TA', });
lyr_shareofgrowth20232053_3.set('fieldAliases', {'SA22023_V1_00': 'SA22023_V1_00', 'SA22023_V1_00_NAME': 'SA2', 'SA22023_V1_00_NAME_ASCII': 'SA22023_V1_00_NAME_ASCII', 'AREA_SQ_KM': 'AREA_SQ_KM', 'LAND_AREA_SQ_KM': 'LAND_AREA_SQ_KM', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'TALB2023_V1_00': 'TALB2023_V1_00', 'TALB2023_V1_00_NAME': 'Territorial Authority', 'TALB2023_V1_00_NAME_ASCII': 'TALB2023_V1_00_NAME_ASCII', 'LAND_AREA_SQ_KM_2': 'LAND_AREA_SQ_KM_2', 'AREA_SQ_KM_2': 'AREA_SQ_KM_2', 'Shape_Length_2': 'Shape_Length_2', 'Shape_Area_2': 'Shape_Area_2', 'GrowthGroup': 'Growth grouping', 'LongTerm_Area': 'LongTerm_Area', 'LongTerm_SA2_name': 'LongTerm_SA2_name', 'LongTerm_Population in 2023': '2023 population', 'LongTerm_Population in 2053': '2053 population', 'LongTerm_Population change': 'Population change', 'LongTerm_Population change range': 'LongTerm_Population change range', 'LongTerm_Population change % of TA': 'Share of TA growth (%)', 'LongTerm_Households in 2023': '2023 households', 'LongTerm_Households in 2053': '2053 households', 'LongTerm_Household change': 'Households change', 'LongTerm_Household change range': 'LongTerm_Household change range', 'LongTerm_Household change % of TA': 'LongTerm_Household change % of TA', 'LongTerm_Dwellings in 2023': '2023 dwellings', 'LongTerm_Dwellings in 2053': '2053 dwellings', 'LongTerm_Dwelling change': 'Dwellings change', 'LongTerm_Dwellings change range': 'LongTerm_Dwellings change range', 'LongTerm_Dwelling change % of TA': 'LongTerm_Dwelling change % of TA', });
lyr_Districtboundaries_1.set('fieldImages', {'TA2023_V1_00': 'Hidden', 'TA2023_V1_00_NAME': 'TextEdit', 'TA2023_V1_00_NAME_ASCII': 'Hidden', 'LAND_AREA_SQ_KM': 'Hidden', 'AREA_SQ_KM': 'Hidden', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_shareofgrowth20232033_2.set('fieldImages', {'SA22023_V1_00': 'Hidden', 'SA22023_V1_00_NAME': 'TextEdit', 'SA22023_V1_00_NAME_ASCII': 'Hidden', 'AREA_SQ_KM': 'Hidden', 'LAND_AREA_SQ_KM': 'Hidden', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', 'TALB2023_V1_00': 'Hidden', 'TALB2023_V1_00_NAME': 'TextEdit', 'TALB2023_V1_00_NAME_ASCII': 'Hidden', 'LAND_AREA_SQ_KM_2': 'Hidden', 'AREA_SQ_KM_2': 'Hidden', 'Shape_Length_2': 'Hidden', 'Shape_Area_2': 'Hidden', 'GrowthGroup': 'TextEdit', 'ShortTerm_Area': 'Hidden', 'ShortTerm_SA2_name': 'Hidden', 'ShortTerm_Population in 2023': 'TextEdit', 'ShortTerm_Population in 2033': 'TextEdit', 'ShortTerm_Population change': 'TextEdit', 'ShortTerm_Population change range': 'Hidden', 'ShortTerm_Population change % of TA': 'TextEdit', 'ShortTerm_Households in 2023': 'TextEdit', 'ShortTerm_Households in 2033': 'TextEdit', 'ShortTerm_Household change': 'TextEdit', 'ShortTerm_Household change range': 'Hidden', 'ShortTerm_Household change % of TA': 'Hidden', 'ShortTerm_Dwellings in 2023': 'TextEdit', 'ShortTerm_Dwellings in 2033': 'TextEdit', 'ShortTerm_Dwelling change': 'TextEdit', 'ShortTerm_Dwellings change range': 'Hidden', 'ShortTerm_Dwelling change % of TA': 'Hidden', });
lyr_shareofgrowth20232053_3.set('fieldImages', {'SA22023_V1_00': 'Hidden', 'SA22023_V1_00_NAME': 'TextEdit', 'SA22023_V1_00_NAME_ASCII': 'Hidden', 'AREA_SQ_KM': 'Hidden', 'LAND_AREA_SQ_KM': 'Hidden', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', 'TALB2023_V1_00': 'Hidden', 'TALB2023_V1_00_NAME': 'TextEdit', 'TALB2023_V1_00_NAME_ASCII': 'Hidden', 'LAND_AREA_SQ_KM_2': 'Hidden', 'AREA_SQ_KM_2': 'Hidden', 'Shape_Length_2': 'Hidden', 'Shape_Area_2': 'Hidden', 'GrowthGroup': 'TextEdit', 'LongTerm_Area': 'Hidden', 'LongTerm_SA2_name': 'Hidden', 'LongTerm_Population in 2023': 'TextEdit', 'LongTerm_Population in 2053': 'TextEdit', 'LongTerm_Population change': 'TextEdit', 'LongTerm_Population change range': 'Hidden', 'LongTerm_Population change % of TA': 'TextEdit', 'LongTerm_Households in 2023': 'TextEdit', 'LongTerm_Households in 2053': 'TextEdit', 'LongTerm_Household change': 'TextEdit', 'LongTerm_Household change range': 'Hidden', 'LongTerm_Household change % of TA': 'Hidden', 'LongTerm_Dwellings in 2023': 'TextEdit', 'LongTerm_Dwellings in 2053': 'TextEdit', 'LongTerm_Dwelling change': 'TextEdit', 'LongTerm_Dwellings change range': 'Hidden', 'LongTerm_Dwelling change % of TA': 'Hidden', });
lyr_Districtboundaries_1.set('fieldLabels', {'TA2023_V1_00_NAME': 'no label', });
lyr_shareofgrowth20232033_2.set('fieldLabels', {'SA22023_V1_00_NAME': 'inline label - visible with data', 'TALB2023_V1_00_NAME': 'inline label - visible with data', 'GrowthGroup': 'inline label - visible with data', 'ShortTerm_Population in 2023': 'inline label - visible with data', 'ShortTerm_Population in 2033': 'inline label - visible with data', 'ShortTerm_Population change': 'inline label - visible with data', 'ShortTerm_Population change % of TA': 'inline label - visible with data', 'ShortTerm_Households in 2023': 'inline label - visible with data', 'ShortTerm_Households in 2033': 'inline label - visible with data', 'ShortTerm_Household change': 'inline label - visible with data', 'ShortTerm_Dwellings in 2023': 'inline label - visible with data', 'ShortTerm_Dwellings in 2033': 'inline label - visible with data', 'ShortTerm_Dwelling change': 'inline label - visible with data', });
lyr_shareofgrowth20232053_3.set('fieldLabels', {'SA22023_V1_00_NAME': 'inline label - visible with data', 'TALB2023_V1_00_NAME': 'inline label - visible with data', 'GrowthGroup': 'inline label - visible with data', 'LongTerm_Population in 2023': 'inline label - visible with data', 'LongTerm_Population in 2053': 'inline label - visible with data', 'LongTerm_Population change': 'inline label - visible with data', 'LongTerm_Population change % of TA': 'inline label - visible with data', 'LongTerm_Households in 2023': 'inline label - visible with data', 'LongTerm_Households in 2053': 'inline label - visible with data', 'LongTerm_Household change': 'inline label - visible with data', 'LongTerm_Dwellings in 2023': 'header label - visible with data', 'LongTerm_Dwellings in 2053': 'inline label - visible with data', 'LongTerm_Dwelling change': 'inline label - visible with data', });
lyr_shareofgrowth20232053_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});