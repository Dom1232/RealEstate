<template>
    <div>
      <h2>Client Directory</h2>
      <div>
        <router-link to="/client" class="button-link">Add New Client</router-link>
      </div>
  
      <div class="client-grid">
        <!-- Headings-->
        <div class="client-row" v-if="clients.length > 0">
          <div class="client-column"><strong>Name</strong></div>
          <div class="client-column"><strong>Telephone Number</strong></div>
          <div class="client-column"><strong>Address</strong></div>
          <div class="client-column"><strong>City</strong></div>
          <div class="client-column"><strong>Email</strong></div>
          <div class="client-column"><strong>Home Type</strong></div>
          <div class="client-column"><strong>Max Rent</strong></div>
          <div class="client-column"></div>
  
        </div>
  
        <!--List clients-->
        <div class="client-row" v-for="client in clients" :key="client[0]">
          <div class="client-column">{{ client[1] }} {{ client[2] }}</div>
          <div class="client-column">{{ client[3] }}</div>
          <div class="client-column">{{ client[4] }}</div>
          <div class="client-column">{{ client[5] }}</div>
          <div class="client-column">{{ client[6] }}</div>
          <div class="client-column">{{ client[7] }}</div>
          <div class="client-column">{{ client[8] }}</div>
          <!--Button for Editing-->
          <div class="client-column">
            <button @click="startEdit(client)" class="button-update">Edit</button>
          </div> 
        </div>
      </div>
    </div>
  </template>
    
    <script>
    export default {
      data() {
        return {
          clients: [],
        };
      },
      mounted() {
        this.fetchClients();
      },
      methods: {
        //Get clients
        async fetchClients() {
          try {
            const rawClients = await this.$apiService.getClients();
            this.clients = this.transformClients(rawClients);
          } catch (error) {
            console.error('Error fetching clients:', error);
          }
        },
        transformClients(rawClients) {
          if (Array.isArray(rawClients)) {
            return rawClients;
          } else if (rawClients && rawClients.clients) {
            return rawClients.clients;
          } else {
            console.error('Unexpected data structure:', rawClients);
            return [];
          }
        },

        //Edit User
        startEdit(client) {
          const clientNo = client[0];
          const clientFNAME = client[1];
          const clientLNAME = client[2];
          const clientTelephone = client[3];
          const clientStreet = client[4];
          const clientCity = client[5];
          const clientEmail = client[6];
          const clientHomeType = client[7];
          const clientMaxRent = client[8];
          this.$router.push({ name: 'clientEdit', query: { clientNo, clientFNAME, clientLNAME, clientTelephone, clientStreet, clientCity, clientEmail, clientHomeType, clientMaxRent} });
        },
      },
  };
    </script>
  
  <style scoped>
    .client-grid {
      width: 90%;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      border: 1px solid #ccc;
    }
  
    .client-row {
      display: flex;
      width: 100%;
    }
  
    .client-column {
      flex: 1;
      border-bottom: 1px solid #ccc;
      padding: 10px;
      border-right: 1px solid #ccc; 
      min-width: 50px;
    }
  
    .client-column:last-child {
      border-right: none;
      min-width: 50px;
    }
  
    .client-column:nth-last-child(3) {
      min-width: 300px;
  }
  
  .client-column:nth-last-child(-n+2) {
      max-width: 50px;
  }
  
  .button-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: #3498db;
    color: #ffffff;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    transition: background-color 0.3s ease;
    margin-bottom: 15px;
  }
  
  .button-link:hover {
    background-color: #297fb8;
  }
  
  .button-update{
    background-color: #3498db;
    color: #ffffff;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #166da7;
  }
  
  .button-update:hover {
    background-color: #297fb8;
  }
  
  .button-delete{
    background-color: #db3434;
    color: #ffffff;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #a71616;
  }
  
  .button-delete:hover {
    background-color: #b82929;
  }
  </style>