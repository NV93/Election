package lt.itakademija.electors.results;

import lt.itakademija.electors.county.CountyEntity;
import lt.itakademija.electors.district.DistrictEntity;
import lt.itakademija.electors.district.DistrictRepository;
import lt.itakademija.electors.results.reports.ResultCountyReport;
import lt.itakademija.electors.results.reports.ResultDistrictReport;
import lt.itakademija.electors.results.reports.ResultsGeneralReport;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.LinkedList;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 * Created by nevyt on 3/15/2017.
 */
@RunWith(MockitoJUnitRunner.class)
public class ResultsServiceTest {
    @Mock
    private ResultsService resultsService;

    @Mock
    private ResultsGeneralReport resultsGeneralReport;

    @Mock
    private CountyEntity countyEntity;

    @Before
    public void setUp() throws Exception {

    }

    @After
    public void tearDown() throws Exception {

    }

    @Test
    public void getGeneralReport() throws Exception {
        ResultsGeneralReport newResults = Mockito.mock(ResultsGeneralReport.class);
        resultsService.getGeneralReport();
        when(resultsService.getGeneralReport()).thenReturn(newResults);
        Mockito.verify(resultsService).getGeneralReport();
        assertEquals(resultsService.getGeneralReport(), newResults);

    }

    @Test
    public void setGeneralReport() throws Exception {
        ResultsService newService = Mockito.mock(ResultsService.class);
        ResultsGeneralReport newResults = newService.formGeneralResults();
        resultsService.formGeneralResults();
        when(resultsService.formGeneralResults()).thenReturn(newResults);
        Mockito.verify(resultsService).formGeneralResults();
        assertEquals(resultsService.formGeneralResults(), newResults);
    }

    @Test
    public void saveCountyResults() throws Exception {
        CountyEntity county1 = Mockito.mock(CountyEntity.class);
        ResultCountyReport countyResults = Mockito.mock(ResultCountyReport.class);

    }

    @Test
    public void formOrGetCountyResults() throws Exception {

    }

    @Test
    public void getDistrictResults() throws Exception {
        DistrictEntity district = Mockito.mock(DistrictEntity.class);
        district.setId(1L);
        Mockito.verify(district).setId(1L);
        DistrictRepository districtRepository = Mockito.mock(DistrictRepository.class);
        districtRepository.findById(1L);
        Mockito.verify(districtRepository).findById(1L);
        List<ResultDistrictReport> districtResultList = new LinkedList<>();
        List spyList = Mockito.spy(districtResultList);
        districtResultList.add(new ResultDistrictReport(district));
        assertEquals(1, districtResultList.size());
    }

    @Test
    public void formGeneralResults() throws Exception {

    }

}