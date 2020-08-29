<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <b-card>
          <b-form @submit="onSubmit">
            <b-form-group id="input-group-1" label="First name:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.first_name"
                type="text"
                required
                placeholder="First name"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Middle name:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.middle_name"
                type="text"
                required
                placeholder="Middle name"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Last name:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.last_name"
                type="text"
                required
                placeholder="Last name"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Division:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.division"
                type="text"
                required
                placeholder="Division"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Gender:">
              <b-form-select v-model="form.gender" required :options="options"></b-form-select>
            </b-form-group>

            <b-form-group label="Standard:">
              <b-form-input
                required
                v-model="form.standard"
                placeholder="Standard/Class"
                type="number"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Birth Date:">
              <b-form-datepicker id="example-datepicker" v-model="form.birth_date" class="mb-2"></b-form-datepicker>
            </b-form-group>

            <p v-if="err">{{err}}</p>

            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      first_name: "",
      middle_name: "",
      last_name: "",
      gender: "M",
      standard: null,
      divison: "",
      birth_date: null,
    },
    err: '',
    options: [
      { value: "M", text: "Male" },
      { value: "F", text: "Female" },
    ],
  }),
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      this.err = ''
      try {
        const res = await this.$axios({
          method: 'POST',
          url: 'http://localhost:5000/api/create',
          data: this.form
        })
        this.$router.push('/')
      } catch(error) {
        this.err = "Error while submitting form!"
      }
    },
  },
};
</script>

<style>
</style>
