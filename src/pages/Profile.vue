<template>
  <div class="row">
    <div class="col-md-8">
      <card :title="repositoryTable.title">
        <div class="table-full-width table-responsive">
          <base-table :title="repositoryTable.title"
                      :sub-title="repositoryTable.subTitle"
                      :data="repositoryTable.data"
                      :columns="repositoryTable.columns">
          </base-table>
        </div>
      </card>
    </div>
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>
  </div>
</template>
<script>
  import {BaseTable} from "@/components";
  import UserCard from './Profile/UserCard'

  const tableColumns = ["Name", "Country", "City", "Salary"];
  const tableData = [
    {
      id: 1,
      name: "Dakota Rice",
      salary: "$36.738",
      country: "Niger",
      city: "Oud-Turnhout",
    },
    {
      id: 2,
      name: "Minerva Hooper",
      salary: "$23,789",
      country: "Curaçao",
      city: "Sinaai-Waas"
    },
    {
      id: 3,
      name: "Sage Rodriguez",
      salary: "$56,142",
      country: "Netherlands",
      city: "Baileux"
    },
    {
      id: 4,
      name: "Philip Chaney",
      salary: "$38,735",
      country: "Korea, South",
      city: "Overland Park"
    },
    {
      id: 5,
      name: "Doris Greene",
      salary: "$63,542",
      country: "Malawi",
      city: "Feldkirchen in Kärnten"
    },
    {
      id: 6,
      name: 'Mason Porter',
      salary: '$98,615',
      country: 'Chile',
      city: 'Gloucester'
    },
    {
      id: 7,
      name: 'Jon Porter',
      salary: '$78,615',
      country: 'Portugal',
      city: 'Gloucester'
    }
  ];
  //TODO: Removed hardcoded string down here
  export default {
    components: {
      UserCard,
      BaseTable
    },
    data() {
      return {
        user: {
          fullName: 'Osniel Quintana',
          title: 'Software Developer',
          description: `Develop a passion for learning. Once you do, you'll never cease to grow...`,
        },
        repositoryTable: {
          title: "My Other Repositories",
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }
</script>
<style>
</style>
