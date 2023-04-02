export const validate = (data) => {
  const regexTitle = /^[a-zA-Z\d\s]+$/;
  let errors = {};

  if (!data.title) errors.title = "Debes ingresar un título";
  else if (data.title.length > 50) errors.title = "Título demasiado largo";
  else if (!regexTitle.test(data.title))
    errors.name = "Sólo puedes usar letras y números";

    
  if (data.actualTag.length > 12) errors.actualTag = "Tag demasiado largo"
  
  if (!data.tags.length) errors.tags = "Debes ingresar al menos un tag";
  if (data.tags.length) {
    for (let i = 0; i < data.tags.length; i++) {
      if (data.tags[i].length > 12) errors.tags = "Tag demasiado largo";
      if (!data.tags[i].length ) errors.tags = "Un tag está vacio"   
    }
  }

  if (!data.description) errors.description = "Debes ingresar una descripción";
  if (data.description.length > 500)
    errors.description = "Descripción demasiado larga";

  return errors;
};

// 