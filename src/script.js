function calculateCost() {
    const distance = parseFloat(document.getElementById('distance').value);
    const fuelEfficiency = parseFloat(document.getElementById('fuelEfficiency').value);
    const fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
    const resultDiv = document.getElementById('result');
  
    if (
      isNaN(distance) || 
      isNaN(fuelEfficiency) || 
      isNaN(fuelPrice) || 
      distance <= 0 || 
      fuelEfficiency <= 0 || 
      fuelPrice <= 0
    ) {
      resultDiv.textContent = "Por favor, insira valores válidos!";
      resultDiv.classList.remove("d-none", "alert-success");
      resultDiv.classList.add("alert-danger");
      return;
    }
  
    const litersNeeded = distance / fuelEfficiency;
    const totalCost = litersNeeded * fuelPrice;
    const totalLiters = parseFloat(distance / fuelEfficiency);

    resultDiv.textContent = `O custo estimado da viagem é de € ${totalCost.toFixed(2)} Você precisará de ${totalLiters}L de combustível para completar essa viagem.`;
    resultDiv.classList.remove("d-none", "alert-danger");
    resultDiv.classList.add("alert-success");
  }
  