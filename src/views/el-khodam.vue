<template>
    <div class="khodam-page py-5 px-15">
        <h1 class="mb-4">خدام كنيسه مارجرجس بقها</h1>
        <template>
            <v-card>
                <v-card-title>
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                    </v-text-field>
                </v-card-title>
                <v-data-table :headers="headers" :items="khodamData.khodam" :search="search">
                    <template v-slot:[`item.birthYear`]="{ item }">
                        {{currentYear - item.birthYear }}
                    </template>
                </v-data-table>
            </v-card>
        </template>
    </div>
</template>

<script>
import khodam from "../assets/data/khodam.json";
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
                { text: 'العمر', value: 'birthYear' },
                { text: 'المؤهل', value: 'qualification' },
                { text: 'الخدمه الحاليه', value: 'currentPosition' }
            ],
            khodamData: khodam
        }
    },
    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    }
}
</script>

<style lang="scss" scoped>
.khodam-page {
    background-color: #fff;
    min-height: calc(100vh - 80px);
}

h1 {
    color: #144653;
}
</style>