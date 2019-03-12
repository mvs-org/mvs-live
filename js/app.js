var app = angular.module('app', ['ngSanitize', 'angularUtils.directives.dirPagination']);

app.component('announcement', {
    template: '<li class="li-item fadeInUp animated"><a ng-href="{{$ctrl.link}}" target="_blank"><h3 class="fl-t">{{$ctrl.header}}</h3></a><div class="ant-despro clearfix"><div class="title-h5 fl" ng-bind-html="$ctrl.content"></div></div><div class="news-date">{{$ctrl.date | date : \'mediumDate\'}}<a class="detail-more fr" ng-href="{{$ctrl.link}}" target="_blank"> &gt;</a></div></li>',
    bindings: {
        header: '<',
        content: '<',
        link: '<',
        date: '<',
    },
    controller: function () {
        this.$onInit = function () {
        };
    },
});

app.component('news', {
    template: '<div class="col-sm-4 col-xs-6 col-xs-12 fadeInUp animated"><div class="items"><div class="Ex-news text-normal"><span class="date-news">{{$ctrl.date | date : \'mediumDate\'}}</span><span class="source-web">{{$ctrl.source}}</span></div><a target="_blank" rel="nofollow" ng-href="{{$ctrl.link}}"><h3 class="text-normal title-news">{{$ctrl.header}}</h3></a><div class="news-sdes" ng-bind-html="$ctrl.content"></div></div></div>',
    bindings: {
        header: '<',
        content: '<',
        link: '<',
        date: '<',
    }
});

app.controller('news', ['$scope', '$http', function ($scope, $http) {


    $scope.load = function(language){
    $http.get('https://explorer.mvs.org/api/content/announcements?lang='+language)
    .then((response) => {
        $scope.announcements = response.data;
    })
    .catch(error => {
        console.error(error)
    })
    
    $http.get('https://explorer.mvs.org/api/content/news?lang='+language)
        .then((response) => {
            $scope.news = response.data;
        })
        .catch(error => {
            console.error(error)
        })
    }

}]);
