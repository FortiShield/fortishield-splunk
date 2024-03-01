/*
 * Fortishield app - Fortishield Alert Metrics Directive
 * Copyright (C) 2015-2019 Fortishield, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

define(['../module'], function (directives) {
  'use strict'
  directives.directive('wzAlertMetrics', function (BASE_URL) {
    return {
      restrict: 'E',
      scope: {
        totalAlerts: '=',
        levelTwelve: '=',
        authFailure: '=',
        authSuccess: '=',
      },
      controller() {},
      templateUrl:
        BASE_URL +
        '/static/app/SplunkAppForFortishield/js/directives/wz-alert-metrics/wz-alert-metrics.html',
    }
  })
})