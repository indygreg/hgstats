var cpu_usage_url = _.template("https://graphite.mozilla.org/render?from=-<%= hours %>hours&until=now&width=400&height=250&_salt=1408036085.026&target=hosts.hgweb*_dmz_scl3_mozilla_com.cpu.*.cpu.user.value&title=CPU%20Usage%20%28user%25%29&_uniq=0.3305984930202769");
var apache_requests = _.template("https://graphite.mozilla.org/render?from=-<%= hours %>hours&until=now&width=400&height=250&_salt=1408009636.045&target=hosts.hgweb*_dmz_scl3_mozilla_com.apache.apache80.apache_scoreboard.sending.count&title=In-flight%20Apache%20Requests&hideLegend=true&_uniq=0.6127992861238261");
var load_average = _.template("https://graphite.mozilla.org/render?from=-<%= hours %>hours&until=now&width=400&height=250&_salt=1363655220.184&target=hosts.hgweb*_dmz_scl3_mozilla_com.load.load.shortterm&title=Loadavg&hideLegend=true&_uniq=0.6604602754241492");
var network_traffic = _.template("https://graphite.mozilla.org/render?from=-<%= hours %>hours&until=now&width=400&height=250&_salt=1408010393.594&yMax=&yMin=&target=sumSeries%28hosts.hgweb*_dmz_scl3_mozilla_com.interface.if_octets.bond0.tx%29&title=Outbound%20Network%20Traffic&hideLegend=true&_uniq=0.8170505894781112");
var swap_usage = _.template("https://graphite.mozilla.org/render?from=-<%= hours %>hours&until=now&width=400&height=250&_salt=1408010128.676&yMax=&yMin=&target=hosts.hgweb*_dmz_scl3_mozilla_com.swap.swap.used.value&title=Swap%20Usage&hideLegend=true&_uniq=0.8308034549876273");

GraphView = Backbone.View.extend({
    initialize: function(options){
        this.options = options;
        this.render();
    },
    render: function(){
        var variables = {name: this.options.name, title: this.options.title, url: this.options.url};
        var template = _.template($("#graph_template").html(), variables);
        this.$el.append( template );
    }
});
var cpu_usage_view = new GraphView({ el: $("section"), name: 'cpu-usage', title: 'CPU Usage', url: cpu_usage_url({hours: 2}) });
var apache_requests_view = new GraphView({ el: $("section"), name: 'apache-requests', title: 'Apache Requests', url: cpu_usage_url({hours: 2}) });
var load_average_view = new GraphView({ el: $("section"), name: 'load-average', title: 'Load Average', url: cpu_usage_url({hours: 2}) });
var network_traffic_view = new GraphView({ el: $("section"), name: 'network-traffic', title: 'Network Traffic', url: cpu_usage_url({hours: 2}) });
var swap_usage_view = new GraphView({ el: $("section"), name: 'swap-usage', title: 'Swap Usage', url: cpu_usage_url({hours: 2}) });
