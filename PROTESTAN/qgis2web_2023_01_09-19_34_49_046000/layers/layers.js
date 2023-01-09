var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_PROTESTAN_0 = new ol.format.GeoJSON();
var features_PROTESTAN_0 = format_PROTESTAN_0.readFeatures(json_PROTESTAN_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROTESTAN_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PROTESTAN_0.addFeatures(features_PROTESTAN_0);var lyr_PROTESTAN_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROTESTAN_0, 
                style: style_PROTESTAN_0,
                title: '<img src="styles/legend/PROTESTAN_0.png" /> PROTESTAN'
            });

lyr_PROTESTAN_0.setVisible(true);
var layersList = [baseLayer,lyr_PROTESTAN_0];
lyr_PROTESTAN_0.set('fieldAliases', {'KAB_KOTA': 'KAB_KOTA', 'Pemeluk': 'Pemeluk', 'Gereja': 'Gereja', });
lyr_PROTESTAN_0.set('fieldImages', {'KAB_KOTA': 'TextEdit', 'Pemeluk': 'TextEdit', 'Gereja': 'TextEdit', });
lyr_PROTESTAN_0.set('fieldLabels', {'KAB_KOTA': 'inline label', 'Pemeluk': 'inline label', 'Gereja': 'inline label', });
lyr_PROTESTAN_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});