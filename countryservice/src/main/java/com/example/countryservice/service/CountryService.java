package com.example.countryservice.service;

import com.example.countryservice.entity.Country;
import com.example.countryservice.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    // Find country by country code
    public Country getCountry(String code) {
        return countryRepository.findById(code).orElse(null);
    }

    // Add a new country
    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }

    // Update an existing country
    public Country updateCountry(Country country) {

        if (countryRepository.existsById(country.getCode())) {
            return countryRepository.save(country);
        }

        return null;
    }

    // Delete a country
    public void deleteCountry(String code) {
        countryRepository.deleteById(code);
    }

    // Search countries by partial name
    public List<Country> searchCountries(String keyword) {
        return countryRepository.findByNameContainingIgnoreCase(keyword);
    }

    // Get all countries (optional but useful)
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

}