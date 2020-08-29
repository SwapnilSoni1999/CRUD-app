<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <b-card v-for="student in students" :key="student._id">
          <b-card-body v-if="!isEditing">
            <b>First Name:</b>
            {{ student.first_name }}
            <br />
            <b>Middle Name:</b>
            {{ student.middle_name }}
            <br />
            <b>Last Name:</b>
            {{ student.last_name }}
            <br />
            <b>Gender:</b>
            {{ student.gender == 'M' ? 'Male': 'Female' }}
            <br />
            <b>Birth Date:</b>
            {{ Date(student.birth_date) }}
            <br />
            <b>Standard:</b>
            {{ student.standard }}
            <br />
            <b>Division:</b>
            {{ student.division }}
          </b-card-body>
          <div v-if="!isEditing">
            <b-button @click="edit(student._id)" type="button" variant="primary">Edit</b-button>
            <b-button @click="deleteStudent(student._id)" type="button" variant="danger">Delete</b-button>
          </div>
          <b-card-body v-if="isEditing">
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
          </b-card-body>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    students: [],
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
    isEditing: false,
    options: [
      { value: "M", text: "Male" },
      { value: "F", text: "Female" },
    ],
  }),
  methods: {
    async deleteStudent(id) {
      const res = await this.$axios({
        method: "DELETE",
        url: "http://localhost:5000/api/delete/" + id,
      });
      const index = this.students.findIndex((e) => e._id === id);
      this.students.splice(index, 1);
    },
    async edit(id) {
        const student = this.students.find((e) => e._id === id)
        this.form = student
        this.isEditing = true   
    },
    async onSubmit(evt) {
      evt.preventDefault();
      this.err = ''
      try {
        const res = await this.$axios({
          method: 'POST',
          url: 'http://localhost:5000/api/update',
          data: this.form
        })
        this.isEditing = false
      } catch(error) {
        this.err = "Error while submitting form!"
      }
    }
  },
  async created() {
    const res = await this.$axios({
      method: "GET",
      url: "http://localhost:5000/api/read",
    });
    this.students = res.data;
  },
};
</script>

<style>
</style>