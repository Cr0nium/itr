$(".form-btn1").click(function() {

    $("#AddUpdateDeleteForm").validate({

        rules: {
            fio: {
                required: true
            },
            devaice: {
                required: true
            },
            SN: {
                required: true
            },
            stats: {
                required: true
            },
            date: {
                required: true
            },
            period: {
                required: true,
                digits: true
            }
        },
        messages: {
            fio: {
                required: "Поле ФИО обязательное для заполнения"
            },
            devaice: {
                required: "Поле Устройство обязательное для заполнения"
            },
            SN: {
                required: "Поле Серийный номер обязательное для заполнения"
            },
            stats: {
                required: "Поле Об устройстве обязательное для заполнения"
            },
            date: {
                required: "Поле Дата обязательное для заполнения"
            },
            period: {
                required: "Поле На срок обязательное для заполнения",
                digits: "Введите число"
            }
        },
        
        focusCleanup: true,
        focusInvalid: false

        
    });

});

$(".form-btn2").click(function() {

    $("#AddUpdateDeleteForm").validate({

        rules: {
            fio: {
                required: true
            },
            devaice: {
                required: true,
            },
            id: {
                required: true
            },
            SN: {
                required: true,
            },
            stats: {
                required: true,
            },
            date: {
                required: true,
            },
            period: {
                required: true,
                
            }
        },
        messages: {
            fio: {
                required: "Поле ФИО обязательное для заполнения"
            },
            devaice: {
                required: "Поле Устройство обязательное для заполнения",
            },
            id: {
                required: "Поле Id обязательное для заполнения",
            },
            SN: {
                required: "Поле Серийный номер обязательное для заполнения",
            },
            stats: {
                required: "Поле Об устройстве обязательное для заполнения",
            },
            date: {
                required: "Поле Дата обязательное для заполнения",
            },
            period: {
                required: "Поле На срок обязательное для заполнения",
            }
        },
        
        focusCleanup: true,
        focusInvalid: false

        
    });

});

$(".form-btn3").click(function() {

    $("#AddUpdateDeleteForm").validate({

        rules: {
            id: {
                required: true,
            }
        },
        messages: {
            id: {
                required: "Поле Id обязательное для заполнения",
            }
        },
        
        focusCleanup: true,
        focusInvalid: false

        
    });

});
