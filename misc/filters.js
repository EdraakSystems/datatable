
export const filters = [
    {
        title: "Type of Therapy",
        //Add Column Name here for filtering
        key: '',
        filters: ["Triplet", "ARPI-doublet", "Chemo-doublet"]
    },
    {
        title: "Add-on Treatment",
        key: "TREATMENT ARM 1 REGIMEN",
        filters: ["Darolutamide + Docetaxel", "Abiraterone acetate + Docetaxel", "Apalutamide", "Enzalutamide", "Abiraterone acetate", " Docetaxel", "TAK"]
    },
    {
        title: "Treatment Class",
        key: "qw4hd",
        filters: ["ARPI", "Chemotherapy"]
    },
    {
        title: "Trial Version",
        //Add Column Name here for filtering
        key: "",
        filters: ["Original", "Follow up"]
    },
]