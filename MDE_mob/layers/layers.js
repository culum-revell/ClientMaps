var wms_layers = [];

var lyr_DTM_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DTM<br />\
    <img src="styles/legend/DTM_0_0.png" /> 131.158<br />\
    <img src="styles/legend/DTM_0_1.png" /> 138.961<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DTM_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16057187.525421, -4610624.378735, 16057579.536856, -4610136.212349]
        })
    });
var lyr_DSM_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DSM<br />\
    <img src="styles/legend/DSM_1_0.png" /> 129.52<br />\
    <img src="styles/legend/DSM_1_1.png" /> 147.072<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DSM_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16057187.525421, -4610624.378735, 16057579.536856, -4610136.212349]
        })
    });
var lyr_RGB_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RGB<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RGB_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16057187.525421, -4610624.378735, 16057579.536856, -4610136.212349]
        })
    });
var format_maingeojson_3 = new ol.format.GeoJSON();
var features_maingeojson_3 = format_maingeojson_3.readFeatures(json_maingeojson_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_maingeojson_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_maingeojson_3.addFeatures(features_maingeojson_3);
var lyr_maingeojson_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_maingeojson_3, 
                style: style_maingeojson_3,
                popuplayertitle: 'main.geojson',
                interactive: true,
                title: '<img src="styles/legend/maingeojson_3.png" /> main.geojson'
            });
var group_Obstacles = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Obstacles'});
var group_Treeblocks = new ol.layer.Group({
                                layers: [lyr_maingeojson_3,],
                                fold: "open",
                                title: 'Tree blocks'});
var group_ClippedBaseLayers = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Clipped Base Layers'});
var group_OriginalBaseLayers = new ol.layer.Group({
                                layers: [lyr_DTM_0,lyr_DSM_1,lyr_RGB_2,],
                                fold: "open",
                                title: 'Original Base Layers'});

lyr_DTM_0.setVisible(false);lyr_DSM_1.setVisible(false);lyr_RGB_2.setVisible(true);lyr_maingeojson_3.setVisible(true);
var layersList = [group_OriginalBaseLayers,group_Treeblocks];
lyr_maingeojson_3.set('fieldAliases', {'id': 'id', 'block': 'block', 'row': 'row', 'tree': 'tree', 'variety': 'variety', 'max_tree_height': 'max_tree_height', 'lowest_above_ground_bio_height': 'lowest_above_ground_bio_height', 'Calculated Tree Height': 'Calculated Tree Height', });
lyr_maingeojson_3.set('fieldImages', {'id': '', 'block': '', 'row': '', 'tree': '', 'variety': '', 'max_tree_height': '', 'lowest_above_ground_bio_height': '', 'Calculated Tree Height': '', });
lyr_maingeojson_3.set('fieldLabels', {'id': 'inline label - always visible', 'block': 'inline label - always visible', 'row': 'inline label - always visible', 'tree': 'inline label - always visible', 'variety': 'inline label - always visible', 'max_tree_height': 'inline label - visible with data', 'lowest_above_ground_bio_height': 'inline label - visible with data', 'Calculated Tree Height': 'inline label - always visible', });
lyr_maingeojson_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});