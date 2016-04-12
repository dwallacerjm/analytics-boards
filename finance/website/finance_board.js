$(function(){
var numiframe = $('iframe').length;

// Instance the tour
$('iframe').each(function() {
    $(this).on('load', function() {
        numiframe--;
        if (numiframe == 0) {
            $('body').removeClass("blocked");
            var tour = new Tour({
                steps: [{
                    element: "#navbar-div",
                    title: "Welcome to the RJMetics Finance Board!",
                    content: "This is the Navigation Bar. Use these buttons to quickly navigate to specific sections of the board.",
                    placement: 'bottom',
                    backdrop: true
                }, {
                    element: "#overview-container",
                    title: "The Main Overview",
                    content: "This section provides a snapshot of our Exit KPIs at the current moment.",
                    placement: 'top',
                    backdrop: true,
                    backdropPadding: 20
                }, {
                    element: "#qtd-container",
                    title: "Quarter-To-Date Snapshot",
                    content: "This section provides a snapshot of the current value of our top-level KPIs for the current quarter.",
                    placement: 'top',
                    backdrop: true,
                    backdropPadding: 20
                }, {
                    element: "#gross-new-business-row",
                    title: "Actual vs. Goal Reports",
                    content: "These reports are useful for observing financial metrics over time and comparing actual performance to goal.",
                    placement: 'top',
                    backdrop: true,
                    backdropPadding: 20
                }, {
                    element: "#gross-new-business-header",
                    title: "GitBook Links",
                    content: "Many headers are links that will take you directly to the appropriate section in the GitBook. Click these for more information about the metrics you are viewing. These headers are also linked to Guru, where you can get quick metric definitions without having to leave the page.",
                    placement: 'top',
                    backdrop: true,
                    backdropPadding: 10
                }, {
                    element: "#parameter-buttons",
                    title: "Interactive Parameters",
                    content: "Use these buttons to change the parameters of the corresponding report. Hit Go! when you're ready to see the new results.",
                    placement: 'top',
                    backdrop: true,
                    backdropPadding: 15
                }, {
                    element: "#gross-new-business-product-breakdown",
                    title: "Product Breakdown Reports",
                    content: "These reports are useful for quickly seeing metrics segmented by our two products, Pipeline and CloudBI.",
                    placement: 'top',
                    backdrop: true,
                    backdropPadding: 15
                }, {
                    element: "#new-business-product-goals",
                    title: "Goal Reports",
                    content: "These reports are useful for understanding how the goals for our two products (Pipeline and CloudBI) change over the course of 2016.",
                    placement: 'top',
                    backdrop: true,
                    backdropPadding: 15
                }],
                autoscroll: true,
                onEnd: function(tour) {
                    $("html, body").animate({
                        scrollTop: 0
                    }, "slow");
                }
            });

            // Initialize the tour
            tour.init();

            // Start the tour
            tour.start();

        }
    });
});


	$(function() {
	    $('a[href*=#]:not([href=#])').click(function() {
	        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	            var target = $(this.hash);
	            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	            if (target.length) {
	                $('html,body').animate({
	                    scrollTop: target.offset().top
	                }, 1000);
	                return false;
	            }
	        }
	    });
	});

    var qtd_overview_chart = {
        time_period_param: 'This Quarter'
    };

	var kpi_overview_chart = {
	    product_param: 'All',
	    time_interval_param: 'Quarter'
	};

	var new_mrr_chart = {
	    metric: 'New MRR',
	    product_param: 'All',
	    time_interval_param: 'Quarter'
	};

	var avg_new_client_mrr = {
	    product_param: 'CloudBI',
	    time_interval_param: 'Quarter'
	};

	var exit_mrr_chart = {
	    metric: 'Exit MRR',
	    product_param: 'All',
	    time_interval_param: 'Quarter'
	}

	var churn_mrr_chart = {
	    metric: 'Churned MRR',
	    product_param: 'All',
	    time_interval_param: 'Quarter'
	}

	var debook_mrr_chart = {
	    metric: 'Debooked MRR',
	    product_param: 'All',
	    time_interval_param: 'Quarter'
	}

	var net_expansion_chart = {
	    metric: 'Net Expansion MRR',
	    product_param: 'All',
	    time_interval_param: 'Quarter'
	}

	var new_biz_product = {
	    metric: 'New MRR',
	    time_interval_param: 'Quarter'
	}

	var new_biz_plan = {
	    metric: 'New MRR',
	    time_interval_param: 'Month'
	}

	var exit_product = {
	    metric: 'Exit MRR',
	    time_interval_param: 'Quarter'
	}

	var exit_plan = {
	    metric: 'Exit MRR',
	    time_interval_param: 'Month'
	}

	var churn_plan = {
	    metric: 'Churned MRR',
	    time_interval_param: 'Month'
	}

	var ner_plan = {
	    time_interval_param: 'Month'
	}

	var net_new_biz = {
	    product_param: 'All',
	    time_interval_param: 'Quarter'
	}

	var arpa = {
	    product_param: 'CloudBI',
	    time_interval_param: 'Quarter'
	}

	var arpa_goals = {
	    time_interval_param: 'Quarter'
	}

	var churn_product = {
	    metric: 'Churned MRR',
	    time_interval_param: 'Quarter'
	}

	var cac = {
	    time_interval_param: 'Quarter'
	}

	var customer_lifetime = {
	    time_interval_param: 'Quarter'
	}

	var ltv = {
	    time_interval_param: 'Quarter'
	}

	var ltv_cac_ratio = {
	    time_interval_param: 'Quarter'
	}

    //Start QTD overview buttons

    $("#qtd-overview-this-quarter-button").click(function() {
        $(this).addClass("active")
            .siblings().removeClass("active");
        qtd_overview_chart.time_period_param = "This Quarter";
    });

    $("#qtd-overview-last-quarter-button").click(function() {
        $(this).addClass("active")
            .siblings().removeClass("active");
        qtd_overview_chart.time_period_param = "Last Quarter";
    });

	//Start new business buttons

	$("#new-business-new-subscriptions-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    new_mrr_chart.metric = "New Subscriptions";
	});

	$("#new-business-new-mrr-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    new_mrr_chart.metric = "New MRR";
	});

	$("#new-business-all-products-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    new_mrr_chart.product_param = "All";
	});

	$("#new-business-cbi-product-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    new_mrr_chart.product_param = "CloudBI";
	});

	$("#new-business-pipeline-product-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    new_mrr_chart.product_param = "Pipeline";
	});

	$("#new-business-month-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    new_mrr_chart.time_interval_param = "Month";
	});

	$("#new-business-quarter-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    new_mrr_chart.time_interval_param = "Quarter";
	});

	//Start net new business buttons

	$("#net-new-business-all-products-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    net_new_biz.product_param = "All";
	});

	$("#net-new-business-cbi-product-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    net_new_biz.product_param = "CloudBI";
	});

	$("#net-new-business-pipeline-product-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    net_new_biz.product_param = "Pipeline";
	});

	$("#net-new-business-month-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    net_new_biz.time_interval_param = "Month";
	});

	$("#net-new-business-quarter-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    net_new_biz.time_interval_param = "Quarter";
	});

	//Start new biz product buttons

	$("#new-biz-product-new-mrr-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    new_biz_product.metric = "New MRR";
	});

	$("#new-biz-product-new-sub-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    new_biz_product.metric = "New Subscriptions";
	});

	$("#new-biz-product-month-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    new_biz_product.time_interval_param = "Month";
	});

	$("#new-biz-product-quarter-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    new_biz_product.time_interval_param = "Quarter";
	});

	//Start new biz plan buttons

	$("#new-biz-plan-new-mrr-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    new_biz_plan.metric = "New MRR";
	});

	$("#new-biz-plan-new-sub-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    new_biz_plan.metric = "New Subscriptions";
	});

	$("#new-biz-plan-month-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    new_biz_plan.time_interval_param = "Month";
	});

	$("#new-biz-plan-quarter-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    new_biz_plan.time_interval_param = "Quarter";
	});

	//Start avg new buttons

	$("#avg-new-cbi-product-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    avg_new_client_mrr.product_param = "CloudBI";
	});

	$("#avg-new-pipeline-product-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    avg_new_client_mrr.product_param = "Pipeline";
	});

	$("#avg-new-month-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    avg_new_client_mrr.time_interval_param = "Month";
	});

	$("#avg-new-quarter-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    avg_new_client_mrr.time_interval_param = "Quarter";
	});

	//Start exit buttons

	$("#exit-all-products-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    exit_mrr_chart.product_param = "All";
	});

	$("#exit-cbi-product-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    exit_mrr_chart.product_param = "CloudBI";
	});

	$("#exit-pipeline-product-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    exit_mrr_chart.product_param = "Pipeline";
	});

	$("#exit-month-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    exit_mrr_chart.time_interval_param = "Month";
	});

	$("#exit-quarter-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    exit_mrr_chart.time_interval_param = "Quarter";
	});

	$("#exit-product-month-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    exit_product.time_interval_param = "Month";
	});

	$("#exit-product-quarter-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    exit_product.time_interval_param = "Quarter";
	});

	$("#exit-plan-month-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    exit_plan.time_interval_param = "Month";
	});

	$("#exit-plan-quarter-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    exit_plan.time_interval_param = "Quarter";
	});

	//Start arpa buttons

	$("#arpa-cbi-product-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    arpa.product_param = "CloudBI";
	});

	$("#arpa-pipeline-product-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    arpa.product_param = "Pipeline";
	});

	$("#arpa-month-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    arpa.time_interval_param = "Month";
	});

	$("#arpa-quarter-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    arpa.time_interval_param = "Quarter";
	});

	//Start arpa goal buttons

	$("#arpa-goal-month-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    arpa_goals.time_interval_param = "Month";
	});

	$("#arpa-goal-quarter-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    arpa_goals.time_interval_param = "Quarter";
	});

	//Start churn buttons

	$("#churn-all-products-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    churn_mrr_chart.product_param = "All";
	});

	$("#churn-cbi-product-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    churn_mrr_chart.product_param = "CloudBI";
	});

	$("#churn-pipeline-product-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    churn_mrr_chart.product_param = "Pipeline";
	});

	$("#churn-month-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    churn_mrr_chart.time_interval_param = "Month";
	});

	$("#churn-quarter-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    churn_mrr_chart.time_interval_param = "Quarter";
	});

	$("#churn-subscriptions-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    churn_mrr_chart.metric = "Churned Subscriptions";
	});

	$("#churn-mrr-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    churn_mrr_chart.metric = "Churned MRR";
	});

	//Start debook buttons

	$("#debook-month-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    debook_mrr_chart.time_interval_param = "Month";
	});

	$("#debook-quarter-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    debook_mrr_chart.time_interval_param = "Quarter";
	});

	$("#debook-subscriptions-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    debook_mrr_chart.metric = "Debooked Subscriptions";
	});

	$("#debook-mrr-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    debook_mrr_chart.metric = "Debooked MRR";
	});

	//Start churn product buttons

	$("#churn-product-mrr-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    churn_product.metric = "Churned MRR";
	});

	$("#churn-product-sub-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    churn_product.metric = "Churned Subscriptions";
	});

	$("#churn-product-month-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    churn_product.time_interval_param = "Month";
	});

	$("#churn-product-quarter-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    churn_product.time_interval_param = "Quarter";
	});

	//Start churn plan buttons

	$("#churn-mrr-plan-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    churn_plan.metric = "Churned MRR";
	});

	$("#churn-sub-plan-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    churn_plan.metric = "Churned Subscriptions";
	});

	$("#churn-plan-month-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    churn_plan.time_interval_param = "Month";
	});

	$("#churn-plan-quarter-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    churn_plan.time_interval_param = "Quarter";
	});

	//Start ner buttons

	$("#ner-all-products-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    net_expansion_chart.product_param = "All";
	});

	$("#ner-cbi-product-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    net_expansion_chart.product_param = "CloudBI";
	});

	$("#ner-pipeline-product-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    net_expansion_chart.product_param = "Pipeline";
	});

	$("#ner-month-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    net_expansion_chart.time_interval_param = "Month";
	});

	$("#ner-quarter-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    net_expansion_chart.time_interval_param = "Quarter";
	});

	//Start ner plan buttons

	$("#ner-plan-month-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    ner_plan.time_interval_param = "Month";
	});

	$("#ner-plan-quarter-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    ner_plan.time_interval_param = "Quarter";
	});

	//Start cac button

	$("#cac-month-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    cac.time_interval_param = "Month";
	});

	$("#cac-quarter-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    cac.time_interval_param = "Quarter";
	});

	//Start customer lifetime button

	$("#customer-lifetime-month-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    customer_lifetime.time_interval_param = "Month";
	});

	$("#customer-lifetime-quarter-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    customer_lifetime.time_interval_param = "Quarter";
	});

	//Start ltv button

	$("#ltv-month-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    ltv.time_interval_param = "Month";
	});

	$("#ltv-quarter-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    ltv.time_interval_param = "Quarter";
	});

	//Start ltv cac ratio button

	$("#ltv-cac-month-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    ltv_cac_ratio.time_interval_param = "Month";
	});

	$("#ltv-cac-quarter-interval-btn").click(function() {
	    $(this).addClass("active")
	        .siblings().removeClass("active");
	    ltv_cac_ratio.time_interval_param = "Quarter";
	});

	//Start new biz submit button

	$("#new-biz-submit").click(function() {
	    $("#new-business-vs-goal").replaceWith('<div class="mode-chart" id="new-business-vs-goal"><iframe src="https://modeanalytics.com/rjmetrics/reports/ffcb70219d9a/embed?run=now&param_metric=' + new_mrr_chart.metric + '&param_time_interval=' + new_mrr_chart.time_interval_param + '&param_product=' + new_mrr_chart.product_param + '" width="100%" height="500" frameborder="0"></iframe></div>');
	});

	//Start net new biz submit button

	$("#net-new-biz-submit").click(function() {
	    $("#net-new-business-vs-goal").replaceWith('<div class="mode-chart" id="net-new-business-vs-goal"><iframe src="https://modeanalytics.com/rjmetrics/reports/8b8d8c61cd64/embed?run=now&param_product=' + net_new_biz.product_param + '&param_time_interval=' + net_new_biz.time_interval_param + '" width="100%" height="500" frameborder="0"></iframe></div>');
	});

	//Start new biz product submit button

	$("#new-biz-product-submit").click(function() {
	    $("#new-biz-product-stacked").replaceWith('<div class="mode-chart" id="new-biz-product-stacked"><iframe src="https://modeanalytics.com/rjmetrics/reports/0de2f632473d/embed?run=now&param_metric=' + new_biz_product.metric + '&param_time_interval=' + new_biz_product.time_interval_param + '" width="100%" height="500" frameborder="0"></iframe></div>');
	    $("#new-biz-product-percent").replaceWith('<div class="mode-chart" id="new-biz-product-percent"><iframe src="https://modeanalytics.com/rjmetrics/reports/ea8f29017c28/embed?run=now&param_metric=' + new_biz_product.metric + '&param_time_interval=' + new_biz_product.time_interval_param + '" width="100%" height="500" frameborder="0"></iframe></div>');
	});

	//Start new biz plan submit button

	$("#new-business-goal-submit").click(function() {
	    if (new_biz_plan.metric == 'New MRR' && new_biz_plan.time_interval_param == 'Quarter') {
	        $("#new-biz-plan-total").replaceWith('<div class="mode-chart" id="new-biz-plan-total"><iframe src="https://modeanalytics.com/rjmetrics/reports/a9f55c1109a2/runs/c1d0433959c1/embed" width="100%" height="500" frameborder="0"></iframe></div>')
	        $("#new-biz-plan-distribution").replaceWith('<div class="mode-chart" id="new-biz-plan-distribution"><iframe src="https://modeanalytics.com/rjmetrics/reports/1f4431ea1735/runs/78dc01e1613b/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    } else if (new_biz_plan.metric == 'New MRR' && new_biz_plan.time_interval_param == 'Month') {
	        $("#new-biz-plan-total").replaceWith('<div class="mode-chart" id="new-biz-plan-total"><iframe src="https://modeanalytics.com/rjmetrics/reports/a9f55c1109a2/runs/7691abd62357/embed" width="100%" height="500" frameborder="0"></iframe></div>')
	        $("#new-biz-plan-distribution").replaceWith('<div class="mode-chart" id="new-biz-plan-distribution"><iframe src="https://modeanalytics.com/rjmetrics/reports/1f4431ea1735/runs/33c3ca9ac44c/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    } else if (new_biz_plan.metric == 'New Subscriptions' && new_biz_plan.time_interval_param == 'Month') {
	        $("#new-biz-plan-total").replaceWith('<div class="mode-chart" id="new-biz-plan-total"><iframe src="https://modeanalytics.com/rjmetrics/reports/a9f55c1109a2/runs/4b253ff84943/embed" width="100%" height="500" frameborder="0"></iframe></div>')
	        $("#new-biz-plan-distribution").replaceWith('<div class="mode-chart" id="new-biz-plan-distribution"><iframe src="https://modeanalytics.com/rjmetrics/reports/1f4431ea1735/runs/5f56949fd889/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    } else {
	        $("#new-biz-plan-total").replaceWith('<div class="mode-chart" id="new-biz-plan-total"><iframe src="https://modeanalytics.com/rjmetrics/reports/a9f55c1109a2/runs/2b355b9d14b2/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	        $("#new-biz-plan-distribution").replaceWith('<div class="mode-chart" id="new-biz-plan-distribution"><iframe src="https://modeanalytics.com/rjmetrics/reports/1f4431ea1735/runs/bef2ba34ce16/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    }
	});

	//Start overview current submit button

	$("#overview-current-submit").click(function() {
	    $("#overview-current-chart").replaceWith('<div id="overview-current-chart"><iframe src="https://modeanalytics.com/rjmetrics/reports/cefe8a4ef4e3/embed?run=now" width="100%" height="230" frameborder="0"></iframe></div>');
	});

	//Start overview qtd submit button

	$("#overview-qtd-submit").click(function() {
	    $("#overview-qtd-chart").replaceWith('<div id="overview-qtd-chart"><iframe src="https://modeanalytics.com/rjmetrics/reports/6e1a3f2c5da4/embed?run=now&param_time_period=' + qtd_overview_chart.time_period_param + '" width="100%" height="550" frameborder="0"></iframe></div>');
	});

	//Start avg new mrr submit button

	$("#avg-new-submit").click(function() {
	    $("#avg-new-mrr").replaceWith('<div class="mode-chart" id="avg-new-mrr"><iframe src="https://modeanalytics.com/rjmetrics/reports/efcfd2ddd3a5/embed?run=now&param_product=' + avg_new_client_mrr.product_param + '&param_time_interval=' + avg_new_client_mrr.time_interval_param + '" width="100%" height="500" frameborder="0"></iframe></div>');
	});

	//Start exit submit button

	$("#exit-submit").click(function() {
	    $("#exit-chart").replaceWith('<div class="mode-chart" id="exit-chart"><iframe src="https://modeanalytics.com/rjmetrics/reports/b197800a87fa/embed?run=now&param_product=' + exit_mrr_chart.product_param + '&param_metric=' + exit_mrr_chart.metric + '&param_time_interval=' + exit_mrr_chart.time_interval_param + '" width="100%" height="500" frameborder="0"></iframe></div>');
	});

	//Start exit product submit button

	$("#exit-product-submit").click(function() {
	    $("#exit-product-stacked").replaceWith('<div class="mode-chart" id="exit-product-stacked"><iframe src="https://modeanalytics.com/rjmetrics/reports/8c95ebe89d6c/embed?run=now&param_metric=' + exit_product.metric + '&param_time_interval=' + exit_product.time_interval_param + '" width="100%" height="500" frameborder="0"></iframe></div>');
	    $("#exit-product-percent").replaceWith('<div class="mode-chart" id="exit-product-percent"><iframe src="https://modeanalytics.com/rjmetrics/reports/85eab2c385d4/embed?run=now&param_metric=' + exit_product.metric + '&param_time_interval=' + exit_product.time_interval_param + '" width="100%" height="500" frameborder="0"></iframe></div>');
	});

	//Start exit plan submit button

	$("#exit-goal-submit").click(function() {
	    if (exit_plan.metric == 'Exit MRR' && exit_plan.time_interval_param == 'Quarter') {
	        $("#exit-plan-total").replaceWith('<div class="mode-chart" id="exit-plan-total"><iframe src="https://modeanalytics.com/rjmetrics/reports/16ea068f35dd/runs/f97064a1e20d/embed" width="100%" height="500" frameborder="0"></iframe></div>')
	        $("#exit-plan-distribution").replaceWith('<div class="mode-chart" id="exit-plan-distribution"><iframe src="https://modeanalytics.com/rjmetrics/reports/f3cd2070570f/runs/3497b6091411/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    } else if (exit_plan.metric == 'Exit MRR' && exit_plan.time_interval_param == 'Month') {
	        $("#exit-plan-total").replaceWith('<div class="mode-chart" id="exit-plan-total"><iframe src="https://modeanalytics.com/rjmetrics/reports/16ea068f35dd/runs/220bc075ff03/embed" width="100%" height="500" frameborder="0"></iframe></div>')
	        $("#exit-plan-distribution").replaceWith('<div class="mode-chart" id="exit-plan-distribution"><iframe src="https://modeanalytics.com/rjmetrics/reports/f3cd2070570f/runs/46b0d50a8357/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    } else if (exit_plan.metric == 'Exit Subscriptions' && exit_plan.time_interval_param == 'Month') {
	        $("#exit-plan-total").replaceWith('<div class="mode-chart" id="exit-plan-total"><iframe src="https://modeanalytics.com/rjmetrics/reports/16ea068f35dd/runs/cec84e2a848a/embed" width="100%" height="500" frameborder="0"></iframe></div>')
	        $("#exit-plan-distribution").replaceWith('<div class="mode-chart" id="exit-plan-distribution"><iframe src="https://modeanalytics.com/rjmetrics/reports/f3cd2070570f/runs/83b39567626f/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    } else {
	        $("#exit-plan-total").replaceWith('<div class="mode-chart" id="exit-plan-total"><iframe src="https://modeanalytics.com/rjmetrics/reports/16ea068f35dd/runs/7771a21e9202/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	        $("#exit-plan-distribution").replaceWith('<div class="mode-chart" id="exit-plan-distribution"><iframe src="https://modeanalytics.com/rjmetrics/reports/f3cd2070570f/runs/c8b6667ca237/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    }
	});

	//Start arpa submit button

	$("#arpa-submit").click(function() {
	    $("#arpa-actual").replaceWith('<div class="mode-chart" id="arpa-actual"><iframe src="https://modeanalytics.com/rjmetrics/reports/fa8bae19ccd9/embed?run=now&param_product=' + arpa.product_param + '&param_time_interval=' + arpa.time_interval_param + '" width="100%" height="500" frameborder="0"></iframe></div>');
	});

	//Start arpa goal submit button

	$("#arpa-goal-submit").click(function() {
	    if (arpa_goals.time_interval_param == 'Quarter') {
	        $("#arpa-goals").replaceWith('<div class="mode-chart" id="arpa-goals"><iframe src="https://modeanalytics.com/rjmetrics/reports/40f374618c59/runs/a147f0c9a79e/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    } else {
	        $("#arpa-goals").replaceWith('<div class="mode-chart" id="arpa-goals"><iframe src="https://modeanalytics.com/rjmetrics/reports/40f374618c59/runs/b0198a5e3ede/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    }
	});

	//Start churn submit button

	$("#churn-submit").click(function() {
	    $("#churn-chart").replaceWith('<div class="mode-chart" id="churn-chart"><iframe src="https://modeanalytics.com/rjmetrics/reports/d6b73170c3ba/embed?run=now&param_metric=' + churn_mrr_chart.metric + '&param_product=' + churn_mrr_chart.product_param + '&param_time_interval=' + churn_mrr_chart.time_interval_param + '" width="100%" height="500" frameborder="0"></iframe></div>');
	});

	//Start debook submit button

	$("#debook-submit").click(function() {
	    $("#debook-chart").replaceWith('<div class="mode-chart" id="debook-chart"><iframe src="https://modeanalytics.com/rjmetrics/reports/c3bc5a55861f/embed?run=now&param_metric=' + debook_mrr_chart.metric + '&param_time_interval=' + debook_mrr_chart.time_interval_param + '" width="100%" height="500" frameborder="0"></iframe></div>');
	});

	//Start churn product submit button

	$("#churn-product-submit").click(function() {
	    $("#churn-product-stacked").replaceWith('<div class="mode-chart" id="churn-product-stacked"><iframe src="https://modeanalytics.com/rjmetrics/reports/8697b1911fed/embed?run=now&param_metric=' + churn_product.metric + '&param_time_interval=' + churn_product.time_interval_param + '" width="100%" height="500" frameborder="0"></iframe></div>');
	    $("#churn-product-percent").replaceWith('<div class="mode-chart" id="churn-product-percent"><iframe src="https://modeanalytics.com/rjmetrics/reports/36ea56915a92/embed?run=now&param_metric=' + churn_product.metric + '&param_time_interval=' + churn_product.time_interval_param + '" width="100%" height="500" frameborder="0"></iframe></div>');
	});

	//Start churn plan submit button

	$("#churn-goal-submit").click(function() {
	    if (churn_plan.metric == 'Churned MRR' && churn_plan.time_interval_param == 'Quarter') {
	        $("#churn-plan-total").replaceWith('<div class="mode-chart" id="churn-plan-total"><iframe src="https://modeanalytics.com/rjmetrics/reports/9e98f7a35b60/runs/faf95b35de03/embed" width="100%" height="500" frameborder="0"></iframe></div>')
	        $("#churn-plan-distribution").replaceWith('<div class="mode-chart" id="churn-plan-distribution"><iframe src="https://modeanalytics.com/rjmetrics/reports/71b05ff40a44/runs/702f756e5781/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    } else if (churn_plan.metric == 'Churned MRR' && churn_plan.time_interval_param == 'Month') {
	        $("#churn-plan-total").replaceWith('<div class="mode-chart" id="churn-plan-total"><iframe src="https://modeanalytics.com/rjmetrics/reports/9e98f7a35b60/runs/392a538fb60b/embed" width="100%" height="500" frameborder="0"></iframe></div>')
	        $("#churn-plan-distribution").replaceWith('<div class="mode-chart" id="churn-plan-distribution"><iframe src="https://modeanalytics.com/rjmetrics/reports/71b05ff40a44/runs/fea7f8efbb5e/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    } else if (churn_plan.metric == 'Churned Subscriptions' && churn_plan.time_interval_param == 'Month') {
	        $("#churn-plan-total").replaceWith('<div class="mode-chart" id="churn-plan-total"><iframe src="https://modeanalytics.com/rjmetrics/reports/9e98f7a35b60/runs/c945b432c37c/embed" width="100%" height="500" frameborder="0"></iframe></div>')
	        $("#churn-plan-distribution").replaceWith('<div class="mode-chart" id="churn-plan-distribution"><iframe src="https://modeanalytics.com/rjmetrics/reports/71b05ff40a44/runs/4fe9a32c2a58/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    } else {
	        $("#churn-plan-total").replaceWith('<div class="mode-chart" id="churn-plan-total"><iframe src="https://modeanalytics.com/rjmetrics/reports/9e98f7a35b60/runs/e36f838b2217/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	        $("#churn-plan-distribution").replaceWith('<div class="mode-chart" id="churn-plan-distribution"><iframe src="https://modeanalytics.com/rjmetrics/reports/71b05ff40a44/runs/50bbbd67b091/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    }
	});

	//Start ner submit button

	$("#ner-submit").click(function() {
	    $("#ner-chart").replaceWith('<div class="mode-chart" id="ner-chart"><iframe src="https://modeanalytics.com/rjmetrics/reports/f6b71bb5f48e/embed?run=now&param_product=' + net_expansion_chart.product_param + '&param_time_interval=' + net_expansion_chart.time_interval_param + '" width="100%" height="500" frameborder="0"></iframe></div>');
	});

	//Start ner plan submit button

	$("#ner-goal-submit").click(function() {
	    if (ner_plan.time_interval_param == 'Quarter') {
	        $("#ner-plan-total").replaceWith('<div class="mode-chart" id="ner-plan-total"><iframe src="https://modeanalytics.com/rjmetrics/reports/9227dd411a84/runs/838136b55884/embed" width="100%" height="500" frameborder="0"></iframe></div>')
	        $("#ner-plan-distribution").replaceWith('<div class="mode-chart" id="ner-plan-distribution"><iframe src="https://modeanalytics.com/rjmetrics/reports/6182588c8688/runs/3dcec733241b/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    } else {
	        $("#ner-plan-total").replaceWith('<div class="mode-chart" id="ner-plan-total"><iframe src="https://modeanalytics.com/rjmetrics/reports/9227dd411a84/runs/b91700619e68/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	        $("#ner-plan-distribution").replaceWith('<div class="mode-chart" id="ner-plan-distribution"><iframe src="https://modeanalytics.com/rjmetrics/reports/6182588c8688/runs/7deead69fe74/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    }
	});

	//Start cac submit button

	$("#cac-submit").click(function() {
	    if (cac.time_interval_param == 'Quarter') {
	        $("#cac-chart").replaceWith('<div class="mode-chart" id="cac-chart"><iframe src="https://modeanalytics.com/rjmetrics/reports/d33b4bb2d259/runs/8920a8c78205/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    } else {
	        $("#cac-chart").replaceWith('<div class="mode-chart" id="cac-chart"><iframe src="https://modeanalytics.com/rjmetrics/reports/d33b4bb2d259/runs/ad3151b4f000/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    }
	});

	//Start customer lifetime submit button

	$("#customer-lifetime-submit").click(function() {
	    if (customer_lifetime.time_interval_param == 'Quarter') {
	        $("#customer-lifetime-chart").replaceWith('<div class="mode-chart" id="customer-lifetime-chart"><iframe src="https://modeanalytics.com/rjmetrics/reports/39e3675b3762/runs/33ea93be4059/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    } else {
	        $("#customer-lifetime-chart").replaceWith('<div class="mode-chart" id="customer-lifetime-chart"><iframe src="https://modeanalytics.com/rjmetrics/reports/39e3675b3762/runs/7d55540523ef/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    }
	});

	//Start ltv submit button

	$("#ltv-submit").click(function() {
	    if (ltv.time_interval_param == 'Quarter') {
	        $("#ltv-chart").replaceWith('<div class="mode-chart" id="ltv-chart"><iframe src="https://modeanalytics.com/rjmetrics/reports/82d521289ce9/runs/3b1e1ff86d00/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    } else {
	        $("#ltv-chart").replaceWith('<div class="mode-chart" id="ltv-chart"><iframe src="https://modeanalytics.com/rjmetrics/reports/82d521289ce9/runs/cbba882fdaa9/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    }
	});

	//Start ltv cac ratio submit button

	$("#ltv-cac-submit").click(function() {
	    if (ltv_cac_ratio.time_interval_param == 'Quarter') {
	        $("#ltv-cac-chart").replaceWith('<div class="mode-chart" id="ltv-cac-chart"><iframe src="https://modeanalytics.com/rjmetrics/reports/d8884b594ab2/runs/6571a4ff8236/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    } else {
	        $("#ltv-cac-chart").replaceWith('<div class="mode-chart" id="ltv-cac-chart"><iframe src="https://modeanalytics.com/rjmetrics/reports/d8884b594ab2/runs/b0baafcaec90/embed" width="100%" height="500" frameborder="0"></iframe></div>');
	    }
	});
});