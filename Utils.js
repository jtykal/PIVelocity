Ext.define('Utils', {
    singleton: true,

    getFieldForAggregationType: function(aggregationType) {
        switch(aggregationType) {
            case 'planestimate':
                return 'PlanEstimate';
            default:
                return null;
        }
    }
});
