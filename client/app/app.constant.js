(function(angular, undefined) {
  angular.module("raincubeHerokuApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);