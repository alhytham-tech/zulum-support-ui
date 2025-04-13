<template>
  <div class="row tw-justify-center tw-mt-5 md:tw-mt-16">
    <div class="tw-mx-4 tw-w-full md:tw-w-4/6">
      <q-table
        :rows="donatorsList"
        :columns="columns"
        no-route-fullscreen-exit
        :visibleColumns="visibleColumns"
        row-key="id"
        binary-state-sort
        class="my-sticky-header-table no-border"
        title-class="text-blue-10"
        table-header-class="dark tw-text-lg"
        :filter="filter"
        v-model:pagination="pagination"
        :rows-per-page-options="[10, 25, 50, 0]"
        :filter-method="filterData"
        :loading="tableIsLoading"
      >
        <template v-slot:loading>
          <q-spinner-tail color="primary" size="3em" class="tw-mx-auto" />
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="name" :props="props">
              <div class="tw-flex tw-justify-start">
                <div class="tw--ml-3 sm:tw--ml-2 tw-text-center tw-font-thin tw-font-mono tw-w-10 tw-h-10 tw-overflow-hidden tw-object-cover tw-rounded-full hover:tw-shadow-md" :style="{'background-color': getAvatarBackgroundColor(props.row.name)}">
                  <p class="tw-text-base tw--mt-1 tw-pt-3 tw-text-white">{{ props.row.name[0].toUpperCase() }}{{ props.row.name[2].toUpperCase() }}</p>
                </div>
                <div class="tw-pt-3 tw-pl-2">
                  {{ props.row.name }}
                </div>
              </div>
            </q-td>
            <q-td key="state" :props="props">
              {{ props.row.state }}
            </q-td>
            <q-td key="amount" :props="props">
              ₦{{ new Intl.NumberFormat('en-US').format(props.row.amount) }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
      <div class="q-table__bottom row items-center justify-end q-py-sm">
        <div class="q-table__separator col"></div>
        <div class="q-table__control">
          <span class="q-table__bottom-item text-dark">Records per page:</span>
          <q-select
            dense
            borderless
            options-cover
            options-dense
            :options="[10, 25, 50]"
            class="q-table__select inline"
            v-model="pagination.rowsPerPage"
          />
        </div>
        <q-pagination
          :max-pages="3"
          padding="xs xs"
          direction-links
          boundary-numbers
          :max="maxPageNumber"
          v-model="pagination.page"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, reactive, watch, ref } from 'vue';
import donationService from '../../services/donations';

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Donor Name',
    align: 'left',
  },
  { name: 'state', label: 'State', align: 'center' },
  { name: 'amount', label: 'Amount Donated', align: 'center' },
];

export default defineComponent({
  name: "DonorsList",

  setup() {
    const userListPayload = ref({})
    const tableIsLoading = ref(false)
    const donatorsList = ref([])
    
    const pagination = reactive({
      sortBy: 'amount',
      descending: false,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 10
    })
    
    const colors = [
      '#1abc9c',
      '#2ecc71',
      '#3498db',
      '#3498db',
      '#9b59b6',
      '#34495e',
      '#16a085',
      '#27ae60',
      '#2980b9',
      '#8e44ad',
      '#2c3e50',
    ];

    const maxPageNumber = computed(() => {
      return Math.ceil(userListPayload.value.count / pagination.rowsPerPage)
    })

    watch(pagination.rowsPerPage, (val) => {
      return getDonatorsByPagination(val, pagination.page)
    })

    watch(pagination.page, (val) => {
      return getDonatorsByPagination(pagination.rowsPerPage, val)
    })

    const getDonatorsByPagination = (rowsPerPage, pageNumer) => {
      const limit = rowsPerPage
      const skip = (pageNumer - 1) * rowsPerPage
      tableIsLoading.value = true
      const urlString = `?skip=${skip}&limit=${limit}`
      donationService.getDonationsList(urlString)
      .then((res) => {
        donatorsList.value = res.data.result
        tableIsLoading.value = false
      })
      .catch((err) => {
        console.log(err);
      })
    }
    getDonatorsByPagination()

    function getAvatarBackgroundColor(username) {
      const index = username.length % colors.length;
      return colors[index];
    };
    
    return {
      columns,
      getAvatarBackgroundColor,
      tableIsLoading,
      donatorsList,
      pagination,
      maxPageNumber
    }
  },
})
</script>
