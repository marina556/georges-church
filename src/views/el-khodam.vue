<template>
    <div>
        <h1 class="mb-4">خدام كنيسه مارجرجس بقها</h1>
        <template>
            <v-card>
                <v-card-title>

                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                    </v-text-field>
                </v-card-title>
                <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
            </v-card>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: '',
            headers: [
                {
                    text: 'الأسم',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'تاريخ الميلاد', value: 'birthdate' },
                { text: 'العمر', value: 'age' },
                { text: 'المؤهل', value: 'qualification' },
                { text: 'الخدمه الحاليه', value: 'currentPosition' }
            ],
            desserts: [
                {
                    name: 'مارينا مكرم منير',
                    birthdate: "15-2-1997",
                    age: 2022 - 1997,
                    qualification: "بكالوريوس حاسبات ومعلومات",
                    currentPosition: "اسره تالته ورابعه وخامسه",
                },
                {
                    name: 'ماركو مجدى عزمى',
                    birthdate: "13-10-1995",
                    age: 2022 - 1995,
                    qualification: "بكالوريوس نظم معلومات اداريه",
                    currentPosition: "اسره ثانوى",
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
</style>