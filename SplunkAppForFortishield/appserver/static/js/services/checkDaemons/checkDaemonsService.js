define(['../module'], function (module) {
  'use strict'

  class checkDaemonsService {
    constructor($rootScope, $requestService, $timeout) {
      this.rootScope = $rootScope
      this.fortishieldIsReady = $requestService.fortishieldIsReady
      this.tries = 10
      this.timeout = $timeout
      this.busy = false
    }

    async makePing(msg = false) {
      try {
        if (this.busy) return
        this.busy = true
        window.localStorage.setItem('fortishieldIsReady', 'false')
        this.rootScope.notReadyMsg = msg
        this.rootScope.fortishieldCouldNotBeRecovered = false
        this.rootScope.fortishieldNotReadyYet = true
        let fortishieldReady = false
        while (this.tries--) {
          await this.timeout(1200)
          try {
            const result = await this.fortishieldIsReady()
            fortishieldReady = result.data.ready
          } catch (error) {
            fortishieldReady = false
          }
          if (fortishieldReady) {
            this.tries = 10
            this.rootScope.fortishieldNotReadyYet = false
            this.rootScope.fortishieldCouldNotBeRecovered = false
            this.rootScope.$applyAsync()
            window.localStorage.setItem('fortishieldIsReady', 'true')
            break
          }
        }

        if (!fortishieldReady) {
          throw new Error('Not recovered')
        }
      } catch (error) {
        this.tries = 10
        this.rootScope.fortishieldCouldNotBeRecovered = true
        this.rootScope.$applyAsync()
      }

      this.busy = false
    }
  }

  module.service('$checkDaemonsService', checkDaemonsService)
})
