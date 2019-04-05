
        for(let count = 1; count <= 100; count++){
          if (count % 10 == 0) {
           $("body").append(`<p style="color: red">${count}</p>`);
          } else {
              $("body").append(`<p>${count}</p>`);
          }
        };
