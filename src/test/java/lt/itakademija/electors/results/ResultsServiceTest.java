package lt.itakademija.electors.results;

import lt.itakademija.electors.county.CountyEntity;
import lt.itakademija.electors.results.reports.ResultsGeneralReport;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.Assert.*;
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

        System.out.println(resultsService.getGeneralReport().getDistrictsCount());
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

    }

    @Test
    public void formOrGetCountyResults() throws Exception {

    }

    @Test
    public void getDistrictResults() throws Exception {

    }

    @Test
    public void formGeneralResults() throws Exception {

    }

}