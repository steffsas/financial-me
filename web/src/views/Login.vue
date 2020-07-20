<template>
	<v-container class="fill-height grey lighten-2" fluid>
		<v-card width="400px" class="mx-auto mt-5">
			<v-form @submit.prevent="login" ref="loginForm">
				<v-container fluid>
					<v-row>
						<v-col>
							<v-card-text class="text-center">
								<v-icon size="100" color="#595959">mdi-cash-usd-outline</v-icon>
							</v-card-text>
						</v-col>
					</v-row>
					<v-row align="center" justify="center">
						<v-col cols="12" align-self="center">
							<v-card-text class="text-center">
								<h1 class="display-1">Login</h1>
							</v-card-text>
						</v-col>
					</v-row>
					<v-row>
						<v-col>
							<v-card-text>
								<v-text-field
									:rules="usernameValidation"
									label="Username"
									prepend-icon="mdi-account-circle"
									required
								/>
								<v-text-field
									label="Password"
									prepend-icon="mdi-lock"
									:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
									:type="showPassword ? 'text' : 'password'"
									required
									@click:append="clickPasswordIcon"
								></v-text-field>
							</v-card-text>
							<v-divider></v-divider>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="info" type="submit" class="mt-5">Login</v-btn>
							</v-card-actions>
						</v-col>
					</v-row>
				</v-container>
			</v-form>
		</v-card>
	</v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';

@Component({})
export default class About extends Vue {
	public showPassword = false;

	clickPasswordIcon() {
		this.showPassword = !this.showPassword;
		console.log(`test 123`);
	}
}
</script>

<style scoped></style>
