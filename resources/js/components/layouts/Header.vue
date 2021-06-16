<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	    <div class="collapse navbar-collapse" id="navbarNav">
		    <ul class="navbar-nav">
		        <li class="nav-item active">
		        	<router-link
                        class="nav-link"
                        :class="[{active: $route.name === 'productIndex'}]"
                        :to="{name: 'productIndex'}"
                    >
                        List Product
                    </router-link>
			    </li>
			    <li class="nav-item">
			    	<router-link
                        class="nav-link"
                        :class="[{active: $route.name === 'productCreate'}]"
                        :to="{name: 'productCreate'}"
                    >
                        Create
                    </router-link>
			    </li>
		    </ul>
	    </div>
		<ul class="navbar-nav float-right">
			<a class="nav-link" href=""  onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
				Logout
			</a>
		</ul>
	</nav>
</template>

<script>
	export default {}
</script>