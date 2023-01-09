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
var format_ISLAM_0 = new ol.format.GeoJSON();
var features_ISLAM_0 = format_ISLAM_0.readFeatures(json_ISLAM_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISLAM_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ISLAM_0.addFeatures(features_ISLAM_0);var lyr_ISLAM_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ISLAM_0, 
                style: style_ISLAM_0,
                title: '<img src="styles/legend/ISLAM_0.png" /> ISLAM'
            });

lyr_ISLAM_0.setVisible(true);
var layersList = [baseLayer,lyr_ISLAM_0];
lyr_ISLAM_0.set('fieldAliases', {'KAB_KOTA': 'KAB_KOTA', 'Pemeluk': 'Pemeluk', 'MASJID': 'MASJID', });
lyr_ISLAM_0.set('fieldImages', {'KAB_KOTA': 'TextEdit', 'Pemeluk': 'TextEdit', 'MASJID': 'TextEdit', });
lyr_ISLAM_0.set('fieldLabels', {'KAB_KOTA': 'inline label', 'Pemeluk': 'inline label', 'MASJID': 'inline label', });
lyr_ISLAM_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});