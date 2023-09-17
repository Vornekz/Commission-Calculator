import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export interface SalesTeam {
  _id: string;
  _rev: string;
  "First Name": string;
  "Last Name": string;
  Email: string;
  "Join Date": string;
  tableId: string;
  "Auto ID": number;
  "Created At": string;
  "Updated At": string;
  type: string;
  "Commission Rate": number;
  "Total Sales": number;
  "Total Commission": number;
}

export interface TeamInfo {
  firstName: string;
  lastName: string;
  totalSales: number;
  date: string;
  id: number;
}

export const useSalesData = defineStore("sales-data", () => {
  const team = ref<SalesTeam[]>([]);
  const teamInfo = ref<TeamInfo[]>([]);

  function updateTeam(salesTeam: any) {
    team.value = salesTeam;
    teamInfo.value = team.value.map((item) => {
      let newValue = reactive<TeamInfo>({
        firstName: item["First Name"],
        lastName: item["Last Name"],
        totalSales: item["Total Sales"],
        date: new Date(item["Join Date"]).toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        id: item["Auto ID"],
      });

      return newValue;
    });
  }

  return { teamInfo, team, updateTeam };
});
