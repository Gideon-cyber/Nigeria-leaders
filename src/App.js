import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Searchbox } from "./components/search-box/search-box.component";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      leaders: [
        { name: "ALHAJI ABUBAKAR TAFAWA BALEWA", id: 1, year: "1960 - 1966" },
        { name: "CHIEF BENJAMIN NNAMDI AZIKIWE", id: 2, year: "1963 - 1966" },
        {
          name: "MAJOR GENERAL JOHNSON AGUIYI IRONSI",
          id: 3,
          year: "1966",
        },
        { name: "GENERAL YAKUBU GOWON", id: 4, year: "1966 - 1975" },
        { name: "GENERAL MURTALA RAMAT MOHAMMED", id: 5, year: "1975 - 1976" },
        {
          name: "GENERAL OLUSEGUN AREMU OBASANJO",
          id: 6,
          year: "1976 - 1979",
        },
        { name: "SHEHU USMAN ALIYU SHAGARI", id: 7, year: "1979 - 1983" },
        { name: "MAJOR-GENERAL MUHAMMADU BUHARI", id: 8, year: "1983 - 1985" },
        {
          name: "GENERAL IBRAHIM BADAMASI BABANGIDA",
          id: 9,
          year: "1985 - 1993",
        },
        {
          name: "CHIEF ERNEST ADEKUNLE OLADEINDE SHONEKAN",
          id: 10,
          year: "1993",
        },
        { name: "	GENERAL SANI ABACHA", id: 11, year: "1993 - 1998" },
        {
          name: "GENERAL ABDULSALAMI ALHAJI ABUBAKAR",
          id: 12,
          year: "1998 - 1999",
        },
        {
          name: "GENERAL OLUSEGUN AREMU OKIKIOLA MATTHEW OBASANJO (RTD)",
          id: 13,
          year: "1999 - 2007",
        },
        { name: "UMARU MUSA YAR'ADUA", id: 14, year: "2007 - 2010" },
        { name: "DR. GOODLUCK EBELE JONATHAN", id: 15, year: "2010 - 2015" },
        { name: "MUHAMMADU BUHARI", id: 16, year: "2015 - 2022(Present)" },
      ],
      searchField: "",
    };
  }

  render() {
    const { leaders, searchField } = this.state;
    const filteredLeaders = leaders.filter((leader) =>
      leader.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Nigerian leaders</h1>

        {/* Search box */}
        <Searchbox
          placeholder="Search leaders"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />

        {/* Card-list */}
        <CardList leaders={filteredLeaders} />
      </div>
    );
  }
}

export default App;
