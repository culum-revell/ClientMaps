var wms_layers = [];


        var lyr_EsriImagery_0 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_mainMainBlock_1 = new ol.format.GeoJSON();
var features_mainMainBlock_1 = format_mainMainBlock_1.readFeatures(json_mainMainBlock_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mainMainBlock_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mainMainBlock_1.addFeatures(features_mainMainBlock_1);
var lyr_mainMainBlock_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mainMainBlock_1, 
                style: style_mainMainBlock_1,
                popuplayertitle: 'main — Main Block',
                interactive: true,
                title: '<img src="styles/legend/mainMainBlock_1.png" /> main — Main Block'
            });

lyr_EsriImagery_0.setVisible(true);lyr_mainMainBlock_1.setVisible(true);
var layersList = [lyr_EsriImagery_0,lyr_mainMainBlock_1];
lyr_mainMainBlock_1.set('fieldAliases', {'id': 'id', 'block': 'block', 'row': 'row', 'tree': 'tree', 'variety': 'variety', 'max_tree_height': 'max_tree_height', 'lowest_above_ground_bio_height': 'lowest_above_ground_bio_height', 'Calculated Tree Height': 'Calculated Tree Height', });
lyr_mainMainBlock_1.set('fieldImages', {'id': '', 'block': '', 'row': '', 'tree': '', 'variety': '', 'max_tree_height': '', 'lowest_above_ground_bio_height': '', 'Calculated Tree Height': '', });
lyr_mainMainBlock_1.set('fieldLabels', {'id': 'inline label - always visible', 'block': 'inline label - always visible', 'row': 'inline label - always visible', 'tree': 'inline label - always visible', 'variety': 'inline label - always visible', 'max_tree_height': 'inline label - always visible', 'lowest_above_ground_bio_height': 'inline label - always visible', 'Calculated Tree Height': 'inline label - always visible', });
lyr_mainMainBlock_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});