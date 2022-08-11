export const enslaved_default_list = [
  "id",
  "documented_name",
  "age",
  "gender",
  "height",
  //"post_disembark_location__geo_location__name",
  //"voyage__voyage_itinerary__imp_principal_place_of_slave_purchase__geo_location__name",
  //"voyage__voyage_itinerary__imp_principal_port_slave_dis__geo_location__name",
  //"voyage__voyage_ship__ship_name",
  // "transactions__transaction__voyage__voyage_itinerary__imp_principal_place_of_slave_purchase__geo_location__name",
  // "transactions__transaction__voyage__voyage_itinerary__imp_principal_port_slave_dis__geo_location__name",
  // "transactions__transaction__voyage__voyage_ship__ship_name",
  // "skin_color",
  // "last_known_year_yyyy",
  // "transactions__transaction__place__geo_location__name",
  "transactions__transaction__enslavers__enslaver_alias__identity__principal_alias",
  //"transactions__transaction__enslavers__role__role",
  // "transactions__transaction__text_ref",
  "transactions__transaction__voyage__id",
];
export const enslaved_var_list = {
    id: {
      id: null,
    },
    personal_information: {
      documented_name: null,
      // name_first: null,
      // name_second: null,
      // name_third: null,
      modern_name: null,
      age: null,
      gender: null,
      height: null,
      skin_color: null,
      // last_known_year_yyyy: null,
      dataset: null,
      notes: null,
      // language_group: null,
    },
  
    post_disembark_location__geo_location__name: {
      post_disembark_location__geo_location__name: null,
    },
  
    captive_status__name: {
      captive_status__name: null,
    },
  
    voyage: {
      voyage__voyage_itinerary: {
        voyage__voyage_itinerary__imp_principal_place_of_slave_purchase__geo_location__name:
          null,
        voyage__voyage_itinerary__imp_principal_region_of_slave_purchase__geo_location__name:
          null,
        voyage__voyage_itinerary__imp_broad_region_of_slave_purchase__geo_location__name:
          null,
        voyage__voyage_itinerary__imp_principal_port_slave_dis__geo_location__name:
          null,
        voyage__voyage_itinerary__imp_principal_region_slave_dis__geo_location__name:
          null,
        voyage__voyage_itinerary__imp_broad_region_slave_dis__geo_location__name:
          null,
      },
      voyage__voyage_dates__imp_arrival_at_port_of_dis_yyyy: null,
      voyage__voyage_ship__ship_name: null,
    },
  
    transactions: {
      transactions__transaction__date_yyyy: null,
      // transactions__transaction__amount: null,
      transactions__transaction__place__geo_location__name: null,
      transactions__transaction__enslavers__enslaver_alias__identity__principal_alias:
        null,
      //transactions__transaction__enslavers__role__role: null,
      transactions__transaction__text_ref: null,
    },
  
    transactions__transaction__voyage: {
      transactions__transaction__voyage__id: null,
      transactions__transaction__voyage__voyage_itinerary__imp_principal_place_of_slave_purchase__geo_location__name:
        null,
      transactions__transaction__voyage__voyage_itinerary__imp_principal_region_of_slave_purchase__geo_location__name:
        null,
      transactions__transaction__voyage__voyage_itinerary__imp_broad_region_of_slave_purchase__geo_location__name:
        null,
      transactions__transaction__voyage__voyage_itinerary__imp_principal_region_slave_dis__geo_location__name:
        null,
      transactions__transaction__voyage__voyage_itinerary__imp_principal_port_slave_dis__geo_location__name:
        null,
      transactions__transaction__voyage__voyage_itinerary__imp_broad_region_slave_dis__geo_location__name:
        null,
      transactions__transaction__voyage__voyage_ship__ship_name: null,
    },
  };
  